# Vanilla router

This is a simple example of a vanilla JS router without any external dependencies.

## How to

By default, most web servers fallback to 404 when trying to load custom routes. That's why I also added a `server.js` that load assets files, but redirects any route to index.html otherwise.

To start the server, run :

```
node server.js
```