# Analyze logs

Given a file containing HTTP access logs, write a function to perform some analysis on metrics for a given HTTP API call.  The metrics we're interested in for each request are:

- The request identifier, which is a combination of the HTTP method and path
- How many times it was called
- Response time mean
- Response time median

For certain requests we want to aggregate the paths regardless of whether a portion of it differs (example: user id in the path).  A path template will be supplied to the function for the request we're interested in:

```ts
const pathTemplate = '/api/users/{user_id}/count_pending_messages';
const result = analyzeLogs(logs, pathTemplate);
```

**Log format:**

```
{timestamp} {source}[{process}]: at={log_level} method={http_method} path={http_path} host={http_host} fwd={client_ip} dyno={responding_dyno} connect={connection_time}ms service={processing_time}ms status={http_status} bytes={bytes_sent}
```

**Example log:**

```
2014-01-09T06:16:53.916977+00:00 heroku[router]: at=info method=GET path=/api/users/1538823671/count_pending_messages host=mygame.heroku.com fwd="208.54.86.162" dyno=web.11 connect=7ms service=9ms status=200 bytes=33
2014-01-09T06:18:53.014475+00:00 heroku[router]: at=info method=GET path=/api/users/78475839/count_pending_messages host=mygame.heroku.com fwd="208.54.86.162" dyno=web.10 connect=8ms service=10ms status=200 bytes=33
2014-01-09T06:20:33.142889+00:00 heroku[router]: at=info method=GET path=/api/users/847383/count_pending_messages host=mygame.heroku.com fwd="208.54.86.162" dyno=web.10 connect=7ms service=10ms status=200 bytes=33
```

**Example output:**

```json
{
  "request_identifier": "GET /api/users/{user_id}/count_pending_messages",
  "called": 3,
  "response_time_mean": 17.0,
  "response_time_median": 17.0,
}
```