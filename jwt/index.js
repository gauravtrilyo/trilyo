var express = require("express");
var jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// let users = [{email:'foo1@themenate.net',password:'bar1',access:['test1']},{email:'foo2@thamenate.net',password:'bar2',access:['test2']}]
app.get("/", (req, res) => {
  return res.send("something happenging");
});

// 1. Create 2 users on the backend
//   1. foo1@themnate.net with password bar1
//   2. foo2@themnate.net with password bar2

// 2. foo1 will have access to test1 screen
// 3. foo2 will have access to test2 screen
// 4. Server will return the jwt token based on the user's access defined in point #2 and point #3
// 5. Test by logging in a incognito window with both foo1 and foo2

const users = [
  { email: "foo1@themnate.net", password: "bar1" },
  { email: "foo2@themnate.net", password: "bar2" },
];

app.post("/api/login", cors(), function (req, res) {
  console.log(req.body);
  const { email, password } = req.body;

  const userIndex = users.findIndex((user)=> user.email===email) ;
  console.log(userIndex, users[userIndex])
  if(userIndex!= -1){
      const user = users[userIndex];
      if(user.password !== password)  {
        return res.status(404).send({message: "user not found"});
      }
    const token = jwt.sign({ email: user.email }, "my_secret_key");
    return res.json({
      token,
    });
  }else{
      return res.status(404).send({message: "user not found"});
  }
});

app.get("/api/protected", ensureToken, function (req, res) {
  jwt.verify(req.token, "my_secret_key", function (err, data) {
    if (err) {
      req.sendStatus(403);
    } else {
      res.json({
        text: "this is protected",
        data: data,
      });
    }
  });
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader != "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get("/api", function (req, res) {
  res.json({
    text: "my api!",
  });
});

app.listen(8080, function () {
  console.log("App listening on port 8080");
});
