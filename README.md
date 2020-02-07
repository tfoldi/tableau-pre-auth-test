

## Test with `curl`

Everything is fine, we can see the Basic auth headers (tablea/tableau)

```curl --verbose http://tableau:tableau@localhost:3000/evaluate/ -d '{script:""}'
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
* Server auth using Basic with user 'tableau'
> POST /evaluate/ HTTP/1.1
> Host: localhost:3000
> Authorization: Basic dGFibGVhdTp0YWJsZWF1
> User-Agent: curl/7.54.0
> Accept: */*
> Content-Length: 11
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 11 out of 11 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 2
< ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
< Date: Fri, 07 Feb 2020 03:43:41 GMT
< Connection: keep-alive
<
* Connection #0 to host localhost left intact

```

# From Tableau prep 2020.1 Beta

These are the headers after setting nossl + basic auth:

```
{"host":"localhost:3000","authorization":"Basic dGFibGVhdTp0YWJsZWF1","user-agent":"curl/7.54.0","accept":"*/*","content-length":"11","content-type":"application/x-www-form-urlencoded"}

```