import { chunk } from 'support/arrays';

type GrowthInputType = 'seed' | 'soil' | 'fertilizer' | 'water' | 'light' | 'temperature' | 'humidity' | 'location';

type Range = {
  start: number;
  length: number;
};

type Mapping = {
  destinationRange: Range;
  sourceRange: Range;
};

type GardenMapDescriptor = {
  sourceType: GrowthInputType;
  destinationType: GrowthInputType;
  mapRangesToRanges: (ranges: Range[]) => Range[];
};

const intersectionOfRanges = (range1: Range, range2: Range): Range | null => {
  const range1start = range1.start;
  const range2start = range2.start;
  const start = Math.max(range1start, range2start);

  const range1end = range1.start + range1.length;
  const range2end = range2.start + range2.length;
  const end = Math.min(range1end, range2end);

  if (start > end) {
    return null;
  }

  const length = end - start;
  if (length === 0) {
    return null;
  }

  return {
    start,
    length: end - start,
  };
};

export const parseGardenMapDescriptor = (lines: string[]): GardenMapDescriptor => {
  const [mapTypeRow] = lines[0].split(/\s+/);
  const [sourceType, destinationType] = mapTypeRow.split('-to-') as GrowthInputType[];

  const mappings = lines
    .slice(1)
    .map<Mapping>((line) => {
      const chars = line.split(/\s+/);
      const numbers = chars.map((char) => parseInt(char, 10));
      return {
        destinationRange: {
          start: numbers[0],
          length: numbers[2],
        },
        sourceRange: {
          start: numbers[1],
          length: numbers[2],
        },
      };
    })
    .toSorted((mapping1, mapping2) => mapping1.sourceRange.start - mapping2.sourceRange.start);

  const mapValue = (value: number, mapping: Mapping): number => {
    const offset = value - mapping.sourceRange.start;
    return mapping.destinationRange.start + offset;
  };

  const mapRangeToRanges = (range: Range): Range[] => {
    const mappedIntersections = mappings
      .reduce<Mapping[]>((intersectionsSoFar, mapping) => {
        const intersection = intersectionOfRanges(mapping.sourceRange, range);
        if (!intersection) {
          return intersectionsSoFar;
        }
        const intersectionDescriptor: Mapping = {
          sourceRange: intersection,
          destinationRange: {
            start: mapValue(intersection.start, mapping),
            length: intersection.length,
          },
        };
        return [...intersectionsSoFar, intersectionDescriptor];
      }, [])
      .toSorted((range1, range2) => range1.sourceRange.start - range2.sourceRange.start);

    if (mappedIntersections.length === 0) {
      return [range];
    }

    const outputRanges: Range[] = [];
    let currentStart: number = range.start;
    let mappedIntersectionsIndex = 0;

    while (currentStart < range.start + range.length) {
      const mappedIntersection = mappedIntersections[mappedIntersectionsIndex];
      if (!mappedIntersection) {
        break;
      }

      const sourceIntersectionStart = mappedIntersection.sourceRange.start;

      if (currentStart === sourceIntersectionStart) {
        mappedIntersectionsIndex += 1;
        outputRanges.push(mappedIntersection.destinationRange);
        currentStart += mappedIntersection.destinationRange.length;
      } else {
        const gapRange: Range = {
          start: currentStart,
          length: mappedIntersection.sourceRange.start - currentStart,
        };
        outputRanges.push(gapRange);
        currentStart += gapRange.length;
      }
    }

    if (currentStart < range.length) {
      const rangeEnd = range.start + range.length;
      const finalRange: Range = {
        start: currentStart,
        length: rangeEnd - currentStart,
      };
      outputRanges.push(finalRange);
    }

    return outputRanges;
  };

  const mapRangesToRanges = (ranges: Range[]): Range[] => {
    return ranges.reduce<Range[]>((result, range) => {
      return [...result, ...mapRangeToRanges(range)];
    }, []);
  };

  return {
    sourceType,
    destinationType,
    mapRangesToRanges,
  };
};

const parseSeedRanges = (seedsLine: string): Range[] => {
  const [, seedsRow] = seedsLine.split(': ');
  const seedChars = seedsRow.split(/\s+/);
  const seedNumbers = seedChars.map((char) => parseInt(char, 10));
  const seedNumbersPairs = chunk({ arr: seedNumbers, chunkSize: 2, mutuallyExclusive: true });
  return seedNumbersPairs.map<Range>(([start, length]) => ({ start, length }));
};

const parseGardenMapDescriptors = (mapLines: string[]): GardenMapDescriptor[] => {
  const { descriptors } = mapLines.reduce<{ linesBuffer: string[]; descriptors: GardenMapDescriptor[] }>(
    ({ linesBuffer, descriptors }, line, lineIndex) => {
      if (line.trim() === '') {
        const descriptor = parseGardenMapDescriptor(linesBuffer);
        return {
          linesBuffer: [],
          descriptors: [...descriptors, descriptor],
        };
      }
      if (lineIndex === mapLines.length - 1) {
        const finalLinesBuffer = [...linesBuffer, line];
        const descriptor = parseGardenMapDescriptor(finalLinesBuffer);
        return {
          linesBuffer: [],
          descriptors: [...descriptors, descriptor],
        };
      }
      return {
        linesBuffer: [...linesBuffer, line],
        descriptors,
      };
    },
    {
      linesBuffer: [],
      descriptors: [],
    }
  );

  return descriptors;
};

type Index = {
  [key in GrowthInputType]?: GardenMapDescriptor;
};

const indexBySource = (descriptors: GardenMapDescriptor[]): Index =>
  descriptors.reduce<Index>(
    (indexSoFar, descriptor) => ({
      ...indexSoFar,
      [descriptor.sourceType]: descriptor,
    }),
    {}
  );

export const computeLowestLocationNumber = (lines: string[]): number => {
  const seedRanges = parseSeedRanges(lines[0]);
  const descriptors = parseGardenMapDescriptors(lines.slice(2));
  const descriptorsBySource = indexBySource(descriptors);

  let currentType: GrowthInputType = 'seed';
  let currentRanges: Range[] = seedRanges;

  while (currentType !== 'location') {
    const descriptor: GardenMapDescriptor | undefined = descriptorsBySource[currentType];
    if (!descriptor) {
      throw new Error(`Bad input: No descriptor found for type: ${currentType}`);
    }

    const newRanges = descriptor.mapRangesToRanges(currentRanges);

    currentRanges = newRanges;
    currentType = descriptor.destinationType;
  }

  const starts = currentRanges.map((range) => range.start);
  return Math.min(...starts);
};
