export enum CubeColor {
  BLUE = 'blue',
  RED = 'red',
  GREEN = 'green',
}

export type CubeCount = Record<CubeColor, number>;

const createEmptyCounts = (): CubeCount =>
  Object.values(CubeColor).reduce((counts, color) => ({ ...counts, [color]: 0 }), {} as CubeCount);

export type CubeGame = {
  id: number;
  sets: CubeCount[];
  minimums: CubeCount;
};

const parseSet = (setBlock: string): CubeCount => {
  const cubeSetBlocks = setBlock.split(', ');

  return cubeSetBlocks.reduce<CubeCount>((set, block) => {
    const [rawCount, color] = block.split(' ');
    return {
      ...set,
      [color]: parseInt(rawCount, 10),
    };
  }, createEmptyCounts());
};

const parseCubeSets = (setsRow: string): CubeCount[] => {
  const setBlocks = setsRow.split('; ');
  return setBlocks.map((setBlock) => parseSet(setBlock));
};

const computeMinimums = (sets: CubeCount[]): CubeCount =>
  sets.reduce((minimums, set) => {
    return Object.values(CubeColor).reduce(
      (newMinimums, color) => ({
        ...newMinimums,
        [color]: Math.max(newMinimums[color], set[color]),
      }),
      minimums
    );
  }, createEmptyCounts());

const parseCubeGame = (gameRow: string): CubeGame => {
  const [idSlug, setsRow] = gameRow.split(': ');
  const [, id] = idSlug.split(' ');
  const sets = parseCubeSets(setsRow);
  const minimums = computeMinimums(sets);
  return {
    id: parseInt(id, 10),
    sets: parseCubeSets(setsRow),
    minimums,
  };
};

const isGamePossible = (game: CubeGame, availableCubeCounts: CubeCount): boolean =>
  Object.values(CubeColor).every((color) => availableCubeCounts[color] >= game.minimums[color]);

export const sumOfIdsOfPossibleGames = (gameRows: string[], availableCubeCounts: CubeCount): number => {
  const games = gameRows.map(parseCubeGame);
  const possibleGames = games.filter((game) => isGamePossible(game, availableCubeCounts));
  return possibleGames.reduce((sum, game) => sum + game.id, 0);
};
