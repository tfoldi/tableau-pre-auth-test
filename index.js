const express = require("express");
const basicAuth = require('express-basic-auth')
const bodyParser = require("body-parser");

const app = express();

app.use( function(req) {console.log(JSON.stringify(req.headers))});
app.use(bodyParser.json());

//Use this for local testing
const port = 3000;

var tokenAuth = basicAuth({ authorizer: authorizer });

function authorizer(username, password) {
  const userMatches = basicAuth.safeCompare(username, 'tableau')
  const passwordMatches = basicAuth.safeCompare(password, 'tableau')

  return userMatches & passwordMatches
}

app.get("/", (req, res) => {
  res.redirect("/info");
});

app.get("/info", (req, res) => {
  console.log(req.auth);
  res.send({
    description: "",
    creation_time: "0",
    state_path: "Test",
    server_version: "0.4.1",
    versions: {
      v1: {
        features: {
          authentication: {
            required: true,
            methods: {
              "basic-auth": {}
            }
          }
        }
      }
    },
    name: "External Service"
  });
});

app.post("/evaluate", tokenAuth, (req, res) => {
  console.log(req.auth);
  res.send([]);
});

//Local Testing
app.listen(port, () => console.log(`Example app listening on port ${port}!`));