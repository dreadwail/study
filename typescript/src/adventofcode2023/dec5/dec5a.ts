type GrowthInputType = 'seed' | 'soil' | 'fertilizer' | 'water' | 'light' | 'temperature' | 'humidity' | 'location';

type MappingFunction = (source: number) => number | null;

type GardenMapDescriptor = {
  sourceType: GrowthInputType;
  destinationType: GrowthInputType;
  mappingFunctions: MappingFunction[];
};

const parseGardenMapDescriptor = (lines: string[]): GardenMapDescriptor => {
  const [mapTypeRow] = lines[0].split(/\s+/);
  const [sourceType, destinationType] = mapTypeRow.split('-to-') as GrowthInputType[];

  return lines.slice(1).reduce<GardenMapDescriptor>(
    (descriptor, line) => {
      const chars = line.split(/\s+/);
      const numbers = chars.map((char) => parseInt(char, 10));
      const destinationRangeStart = numbers[0];
      const sourceRangeStart = numbers[1];
      const rangeLength = numbers[2];

      const mappingFunction: MappingFunction = (source) => {
        const isMapped = sourceRangeStart <= source && source <= sourceRangeStart + rangeLength;
        if (isMapped) {
          const offset = source - sourceRangeStart;
          return destinationRangeStart + offset;
        }
        return null;
      };

      return {
        ...descriptor,
        mappingFunctions: [...descriptor.mappingFunctions, mappingFunction],
      };
    },
    {
      sourceType,
      destinationType,
      mappingFunctions: [],
    }
  );
};

const createMapKey = (descriptor: GardenMapDescriptor): string =>
  `${descriptor.sourceType}:${descriptor.destinationType}`;

type SourceToDescriptor = Record<string, GardenMapDescriptor>;

const buildSourceToDescriptor = (descriptors: GardenMapDescriptor[]): SourceToDescriptor =>
  descriptors.reduce<SourceToDescriptor>((sourceToDescriptor, descriptor) => {
    const key = createMapKey(descriptor);
    return { ...sourceToDescriptor, [key]: descriptor };
  }, {});

const mapSeedTo = (seed: number, targetInputType: GrowthInputType, sourceToDescriptor: SourceToDescriptor): number => {
  let current: number = seed;
  let currentGrowthType: GrowthInputType = 'seed';

  const keys = Object.keys(sourceToDescriptor);

  while (currentGrowthType !== targetInputType) {
    const key = keys.find((key) => key.split(':')[0] === currentGrowthType);
    if (!key) {
      throw new Error(`Invalid input: No descriptor found for ${key}`);
    }
    const [, destinationType] = key.split(':') as GrowthInputType[];
    const descriptor = sourceToDescriptor[key];

    for (const mappingFunction of descriptor.mappingFunctions) {
      const mapped = mappingFunction(current);
      if (mapped !== null) {
        current = mapped;
        break;
      }
    }
    currentGrowthType = destinationType;
  }

  return current;
};

export const computeLowestLocationNumber = (lines: string[]): number => {
  const [, seedsRow] = lines[0].split(': ');
  const seeds: number[] = seedsRow.split(/\s+/).map((char) => parseInt(char, 10));

  const mapLines = lines.slice(2);

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

  const sourceToDescriptor = buildSourceToDescriptor(descriptors);

  const seedLocations = seeds.map((seed) => mapSeedTo(seed, 'location', sourceToDescriptor));
  return Math.min(...seedLocations);
};
