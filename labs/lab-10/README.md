# lab-10

#### freeCodeCamp
- Node Package Manager (npm)
[Introduction to the Managing Packages with npm](https://www.freecodecamp.org/learn/apis-and-microservices/managing-packages-with-npm/)
- [Introduction to the Basic Node and Express](https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/)

To serve an index.html in a folder called “public” at the root domain you would do so like this:

```
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
```

Note: __dirname returns the root directory is a best practice for node developers.

##### Serve Static Assets 

To serve static assets from the public folder in the you can use the express.static() method as the middleware. This method takes the endpoint and the absolute path to the directory containing the static assets as arguments and exposes the files in that folder at the given endpoint. By default, if the endpoint is not passed to the method, the folder is exposed at the root endpoint i.e. / for the application.

The __dirname variable is a string containing the absolute path to the root of your project which has to be concatenated with the folder containing the assets.

```
// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /assets route
app.use("/assets", express.static(__dirname + "/public"));
```

### Useful links:
- https://expressjs.com/en/guide/using-middleware.html
- 
