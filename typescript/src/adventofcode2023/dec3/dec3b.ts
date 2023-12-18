type Engine = string[][];

const parseEngine = (inputRows: string[]): Engine => {
  const engine: Engine = [];

  for (let y = 0; y < inputRows.length; y += 1) {
    const inputRow = inputRows[y];
    const engineRow: string[] = inputRow.split('');
    engine.push(engineRow);
  }

  return engine;
};

const charCodeZero = '0'.charCodeAt(0);

const isDigit = (char: string | undefined): boolean => {
  if (!char) {
    return false;
  }
  const value = char.charCodeAt(0) - charCodeZero;
  return 0 <= value && value <= 9;
};

const gear = '*';
const symbols = new Set<string>(['#', '=', '+', '-', '%', '$', '&', '@', '/', gear]);
const isSymbol = (char: string): boolean => symbols.has(char);

type Coordinate = [number, number];

const selectCoordinates = (engine: Engine, start: Coordinate, end: Coordinate): Coordinate[] => {
  const [startX, startY] = start;
  const [endX, endY] = end;

  const coordinates: Coordinate[] = [];

  for (let y = startY; y <= endY; y += 1) {
    for (let x = startX; x <= endX; x += 1) {
      const charHere: string | undefined = engine[y]?.[x];
      if (charHere) {
        coordinates.push([x, y]);
      }
    }
  }

  return coordinates;
};

const isPartNumber = (engine: Engine, start: Coordinate, end: Coordinate): boolean => {
  const [startX, startY] = start;
  const [endX, endY] = end;

  const coordinatesToCheck: Coordinate[] = [
    ...selectCoordinates(engine, [startX - 1, startY], [startX - 1, startY]), // left
    ...selectCoordinates(engine, [endX + 1, endY], [endX + 1, endY]), // right
    ...selectCoordinates(engine, [startX - 1, startY - 1], [endX + 1, endY - 1]), // top+diag
    ...selectCoordinates(engine, [startX - 1, startY + 1], [endX + 1, endY + 1]), // bottom+diag
  ];

  return coordinatesToCheck.some(([x, y]) => isSymbol(engine[y]?.[x]));
};

type LocationCacheKey = string;

const computeCoordinateCacheKey = (...coordinates: Coordinate[]): LocationCacheKey =>
  coordinates.map(([x, y]) => [x, y].join(',')).join(':');

const isNumberStart = (engine: Engine, coordinate: Coordinate): boolean => {
  const [x, y] = coordinate;
  return isDigit(engine[y]?.[x]) && !isDigit(engine[y]?.[x - 1]);
};

export const sumOfGearRatios = (engineRows: string[]): number => {
  const engine = parseEngine(engineRows);

  const partNumberStartToValue: Record<LocationCacheKey, number> = {};
  const coordinatesToPartNumberStart: Record<LocationCacheKey, LocationCacheKey> = {};

  for (let y = 0; y < engine.length; y += 1) {
    const row = engine[y];

    let x = 0;
    while (x < row.length) {
      if (!isNumberStart(engine, [x, y])) {
        x += 1;
        continue;
      }

      // we are at a number start

      const startX = x;
      let endX = x;
      const digitChars: string[] = [];
      while (isDigit(engine[y]?.[x])) {
        endX = x;
        digitChars.push(engine[y]?.[x]);
        x += 1;
      }

      if (digitChars.length > 0 && isPartNumber(engine, [startX, y], [endX, y])) {
        const value = parseInt(digitChars.join(''), 10);
        const partNumberStartCacheKey = computeCoordinateCacheKey([startX, y]);
        partNumberStartToValue[partNumberStartCacheKey] = value;

        const coordinatesToLink = selectCoordinates(engine, [startX, y], [endX, y]);
        coordinatesToLink.forEach(([x, y]) => {
          coordinatesToPartNumberStart[computeCoordinateCacheKey([x, y])] = partNumberStartCacheKey;
        });
      }
    }
  }

  const getSurroundingPartNumberStartCacheKeys = (x: number, y: number): Set<LocationCacheKey> => {
    const coordinatesToCheck: Coordinate[] = [
      ...selectCoordinates(engine, [x - 1, y], [x - 1, y]), // left
      ...selectCoordinates(engine, [x + 1, y], [x + 1, y]), // right
      ...selectCoordinates(engine, [x - 1, y - 1], [x + 1, y - 1]), // top+diag
      ...selectCoordinates(engine, [x - 1, y + 1], [x + 1, y + 1]), // bottom+diag
    ];
    return coordinatesToCheck.reduce<Set<LocationCacheKey>>((partNumberStartCacheKeys, [toCheckX, toCheckY]) => {
      const partNumberStartCacheKey = coordinatesToPartNumberStart[computeCoordinateCacheKey([toCheckX, toCheckY])];
      if (partNumberStartCacheKey) {
        partNumberStartCacheKeys.add(partNumberStartCacheKey);
      }
      return partNumberStartCacheKeys;
    }, new Set<LocationCacheKey>());
  };

  const gearRatios: Record<LocationCacheKey, number> = {};

  for (let y = 0; y < engine.length; y += 1) {
    const row = engine[y];
    for (let x = 0; x < row.length; x += 1) {
      const isGearSymbol = engine[y]?.[x] === gear;
      if (isGearSymbol) {
        const surroundingPartNumberStartCacheKeys = getSurroundingPartNumberStartCacheKeys(x, y);
        if (surroundingPartNumberStartCacheKeys.size === 2) {
          const surroundingPartNumbers = [...surroundingPartNumberStartCacheKeys].map(
            (cacheKey) => partNumberStartToValue[cacheKey]
          );
          const gearRatio = surroundingPartNumbers.reduce((total, partNumber) => total * partNumber);

          gearRatios[computeCoordinateCacheKey([x, y])] = gearRatio;
        }
      }
    }
  }

  return Object.values(gearRatios).reduce((total, partNumber) => total + partNumber, 0);
};
