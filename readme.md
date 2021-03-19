# Welcome to this super simple express server.
This may look like a total beginner's project, but let me tell you, this specific repo solves a pretty particular problem related with the test of services that post data to a remote API.

## Why testing that kind of service may be a problem?
Well the easy answer for this is that sometimes, the people we are working with havent develop the API intended to receive our data and return an especific response in relation to the status of the request etcetera.
This may sound a little awkward, but it actually happens so here we are.

## How should I use this? (It's way to small to be used)
That's easy to answer, to initialize the server, just run `yarn start` or `yarn dev`. You should use this service alongside some kind generic domain like [ngrok](https://ngrok.com/), and forward your post request to "/api/test". By doing so, you should be able to simulate the remote API you're expecting to reach.

### Note: remember to run the `yarn` command (or npm install in case you haven't install yarn).