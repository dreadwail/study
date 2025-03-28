import { analyzeLogs } from './analyzeLogs';

const sampleLog = `
  2014-01-09T06:16:53.916977+00:00 heroku[router]: at=info method=GET path=/api/users/1538823671/count_pending_messages host=mygame.heroku.com fwd="208.54.86.162" dyno=web.11 connect=7ms service=9ms status=200 bytes=33
  2014-01-09T06:18:53.014475+00:00 heroku[router]: at=info method=GET path=/api/users/78475839/count_pending_messages host=mygame.heroku.com fwd="208.54.86.162" dyno=web.10 connect=8ms service=10ms status=200 bytes=33
  2014-01-09T06:20:33.142889+00:00 heroku[router]: at=info method=GET path=/api/users/847383/count_pending_messages host=mygame.heroku.com fwd="208.54.86.162" dyno=web.10 connect=7ms service=10ms status=200 bytes=33
`;

describe('analyzeLogs', () => {
  it('returns the expected metrics from the sample log', () => {
    const pathTemplate = '/api/users/{user_id}/count_pending_messages';
    const result = analyzeLogs(sampleLog, 'GET', pathTemplate);

    expect(result).toEqual({
      requestIdentifier: 'GET /api/users/{user_id}/count_pending_messages',
      called: 3,
      responseTimeMean: 17.0,
      responseTimeMedian: 17.0,
    });
  });
});
