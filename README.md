# Steps to reproduce the auth bypass:

1. Mak sure to use a vulnerable version of next. In my case, it's 15.2.2
2. Install the Clerk SDK and set it up through an auth middleware
3. Stage the Payload using curl or an HTTP client
4. Send the request to the server
5. The server will respond with the protected page without throwing an error
