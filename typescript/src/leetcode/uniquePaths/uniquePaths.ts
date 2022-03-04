interface Cache {
  read: (x: number, y: number) => number | undefined;
  write: (x: number, y: number, pathsTo: number) => number;
}

const pathsTo = (sizeY: number, sizeX: number, y: number, x: number, cache: Cache): number => {
  const cached = cache.read(x, y);
  if (cached != null) {
    return cached;
  }

  if (x === 0 && y === 0) {
    return cache.write(x, y, 1);
  } else if (x === 0) {
    return cache.write(x, y, pathsTo(sizeY, sizeX, y - 1, x, cache));
  } else if (y === 0) {
    return cache.write(x, y, pathsTo(sizeY, sizeX, y, x - 1, cache));
  } else {
    return cache.write(x, y, pathsTo(sizeY, sizeX, y - 1, x, cache) + pathsTo(sizeY, sizeX, y, x - 1, cache));
  }
};

export const uniquePaths = (sizeY: number, sizeX: number): number => {
  const cacheStorage: Record<string, number> = {};

  const cacheKeyFor = (x: number, y: number) => [x, y].join(',');

  const cache: Cache = {
    read: (x, y) => cacheStorage[cacheKeyFor(x, y)],
    write: (x, y, pathsTo) => {
      cacheStorage[cacheKeyFor(x, y)] = pathsTo;
      return pathsTo;
    },
  };

  return pathsTo(sizeY, sizeX, sizeY - 1, sizeX - 1, cache);
};
