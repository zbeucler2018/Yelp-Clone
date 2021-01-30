//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + "/dist/zbeuclerFinal"));
app.use(express.static(__dirname + "./dist/youtube"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "./dist/youtube/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
