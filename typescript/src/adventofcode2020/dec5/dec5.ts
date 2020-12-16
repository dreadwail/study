type SearchOptions = {
  instructions: string[];
  lowerSymbol: string;
  upperSymbol: string;
  startingMin: number;
  startingMax: number;
};

const search = ({ instructions, lowerSymbol, upperSymbol, startingMax, startingMin }: SearchOptions): number => {
  const { min } = instructions.reduce(
    ({ min, max }, instruction) => {
      const spanLength = max - min;
      const halfSpanLength = spanLength / 2;
      const midPoint = min + halfSpanLength;
      if (instruction === lowerSymbol) {
        return { min, max: Math.floor(midPoint) };
      }
      if (instruction === upperSymbol) {
        return { min: Math.ceil(midPoint), max };
      }
      return { min, max };
    },
    { min: startingMin, max: startingMax }
  );

  return min;
};

const calculateSeatId = (rowNumber: number, columnNumber: number): number => rowNumber * 8 + columnNumber;

const computeSeatId = (row: string): number => {
  const instructions = row.split('');

  const rowInstructions = instructions.slice(0, 7);
  const columnInstructions = instructions.slice(-3);

  const rowNumber = search({
    instructions: rowInstructions,
    lowerSymbol: 'F',
    upperSymbol: 'B',
    startingMin: 0,
    startingMax: 127,
  });

  const columnNumber = search({
    instructions: columnInstructions,
    lowerSymbol: 'L',
    upperSymbol: 'R',
    startingMin: 0,
    startingMax: 7,
  });

  return calculateSeatId(rowNumber, columnNumber);
};

const computeSeatIds = (rows: string[]): number[] => rows.map(computeSeatId);

export const determineHighestSeatId = (rows: string[]): number => Math.max(...computeSeatIds(rows));

export const findOpenSeat = (rows: string[]): number => {
  const seatIds = computeSeatIds(rows);

  const sortedSeatIds = [...seatIds].sort((a, b) => a - b);
  const sortedSeatIdsSet = new Set(sortedSeatIds);
  const minSeatId = Math.min(...sortedSeatIds);
  const maxSeatId = Math.max(...sortedSeatIds);

  for (let seatId = minSeatId + 1; seatId <= maxSeatId - 1; seatId += 1) {
    if (!sortedSeatIdsSet.has(seatId)) {
      return seatId;
    }
  }

  return 0;
};
