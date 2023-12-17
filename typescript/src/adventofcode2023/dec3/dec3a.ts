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

const symbols = new Set<string>(['#', '=', '+', '-', '%', '$', '&', '@', '/', '*']);
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

  return coordinatesToCheck.some(([x, y]) => {
    return isSymbol(engine[y]?.[x]);
  });
};

type LocationId = string;

const computeCoordinateCacheKey = (start: Coordinate, end: Coordinate): LocationId => {
  const [startX, startY] = start;
  const [endX, endY] = end;
  return `${startX},${startY}:${endX},${endY}`;
};

const isNumberStart = (engine: Engine, coordinate: Coordinate): boolean => {
  const [x, y] = coordinate;
  return isDigit(engine[y]?.[x]) && !isDigit(engine[y]?.[x - 1]);
};

export const sumAllPartNumbers = (engineRows: string[]): number => {
  const engine = parseEngine(engineRows);

  const partNumbers: Record<LocationId, number> = {};

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
        partNumbers[computeCoordinateCacheKey([startX, y], [endX, y])] = value;
      }
    }
  }

  return Object.values(partNumbers).reduce((total, partNumber) => total + partNumber, 0);
};
