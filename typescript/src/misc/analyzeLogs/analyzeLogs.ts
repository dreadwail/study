type RequestMetrics = Readonly<{
  requestIdentifier: string;
  called: number;
  responseTimeMean: number;
  responseTimeMedian: number;
}>;

type LogLine = Readonly<{
  timestamp: number;
  source: string;
  process: string;
  logLevel: string;
  httpMethod: string;
  httpPath: string;
  httpHost: string;
  clientIp: string;
  respondingDyno: string;
  connectionTime: number;
  processingTime: number;
  httpStatus: number;
  bytesSent: number;
}>;

type HttpPathToLogLine = Record<string, LogLine[]>;

const templateToRegex = (raw: string): RegExp => {
  const normalized = raw.replaceAll('{', '(?<').replaceAll('}', '>.*)').replaceAll('[', '\\[').replaceAll(']', '\\]');

  return new RegExp(normalized);
};

const computeMean = (...data: number[]): number => data.reduce((memo, current) => memo + current) / data.length;
const computeMedian = (...data: number[]): number => {
  const sorted = [...data].sort();
  const midpointIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[midpointIndex - 1] + sorted[midpointIndex]) / 2;
  }
  return sorted[midpointIndex];
};

const logLineTemplate =
  '{timestamp} {source}[{process}]: at={logLevel} method={httpMethod} path={httpPath} host={httpHost} fwd={clientIp} dyno={respondingDyno} connect={connectionTime}ms service={processingTime}ms status={httpStatus} bytes={bytesSent}';
const logLineTemplateRegex = templateToRegex(logLineTemplate);

export const analyzeLogs = (log: string, httpMethod: string, pathTemplate: string): RequestMetrics => {
  const trimmed = log.trim();
  const lines = trimmed.split('\n');

  const httpPathToLogLines = lines.reduce<HttpPathToLogLine>((memo, line) => {
    const matchResult = line.match(logLineTemplateRegex);
    const regexGroupsRaw = { ...(matchResult?.groups ?? {}) };

    const pathTemplateRegex = templateToRegex(pathTemplate);
    const httpPath = regexGroupsRaw.httpPath ?? '';
    const httpPathRegexResult = httpPath.match(pathTemplateRegex);
    const httpPathGroups = httpPathRegexResult?.groups ?? {};

    Object.keys(httpPathGroups).forEach((tokenName) => {
      const tokenValue = httpPathGroups[tokenName];
      const sanitizedHttpPath = httpPath.replace(tokenValue, `{${tokenName}}`);
      regexGroupsRaw.httpPath = sanitizedHttpPath;
    });

    const mapped = {
      timestamp: parseInt(regexGroupsRaw.timestamp ?? ''),
      source: regexGroupsRaw.source ?? '',
      process: regexGroupsRaw.process ?? '',
      logLevel: regexGroupsRaw.logLevel ?? '',
      httpMethod: regexGroupsRaw.httpMethod ?? '',
      httpPath,
      httpHost: regexGroupsRaw.httpHost ?? '',
      clientIp: regexGroupsRaw.clientIp ?? '',
      respondingDyno: regexGroupsRaw.respondingDyno ?? '',
      connectionTime: parseInt(regexGroupsRaw.connectionTime ?? ''),
      processingTime: parseInt(regexGroupsRaw.processingTime ?? ''),
      httpStatus: parseInt(regexGroupsRaw.httpStatus ?? ''),
      bytesSent: parseInt(regexGroupsRaw.bytesSent ?? ''),
    };

    const previousLogLines = memo[regexGroupsRaw.httpPath] ?? [];

    return {
      ...memo,
      [regexGroupsRaw.httpPath]: [...previousLogLines, mapped],
    };
  }, {});

  const mappedLinesForRequest = httpPathToLogLines[pathTemplate].filter((line) => line.httpMethod === httpMethod);
  const responseTimes = mappedLinesForRequest.map((line) => line.connectionTime + line.processingTime);
  const responseTimeMedian = computeMedian(...responseTimes);
  const responseTimeMean = computeMean(...responseTimes);

  return {
    requestIdentifier: `${httpMethod} ${pathTemplate}`,
    called: mappedLinesForRequest.length,
    responseTimeMean,
    responseTimeMedian,
  };
};
