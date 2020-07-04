const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = require("express")();

admin.initializeApp();
const db = admin.firestore().collection("users");
const dbBlog = admin.firestore().collection("blog");
//Calma aí
//Eu usei cloud no site tbm
// TODO: create todoList
// TODO: remove todoList


app.get("/users", function (req, res) {
  db.get()
    .then(function (docs) {
      let users = [];
      docs.forEach(function (doc) {
        users.push(doc.data())
      })
      res.json(users);
    });
})


app.get("/users/:id", function(req,res) {
    db.doc(req.params.id).get()
        .then(function(doc) {
            res.json(doc.data());
        })
})

app.put('/users/:id', function(req, res) {
    db.doc(req.params.id).update(req.body)
        .then(function () {
            res.json({ general: "It works" });
        });
})

app.delete('/users/:id', function(req,res) {
    db.doc(req.params.id).delete()
        .then(function() {
            res.json({ general: "Deleted"});
        });
})

app.post("/users", function (req, res) {
    db.doc(req.body.id.toString()).set(req.body)
      .then(function () {
        res.json({ general: "It works" });
      })
})

// ------------ DSIDESTINOS ------------

app.get("/blog", function (req, res) {
  dbBlog.get()
    .then(function (docs) {
      let posts = [];
      docs.forEach(function (doc) {
        posts.push(doc.data())
      })
      res.json(posts);
    });
})

app.post("/blog", function (req, res) {
  dbBlog.doc(req.body.postId.toString()).set(req.body)
    .then(function () {
      res.json({ general: "Publicado com sucesso!" });
    })
})

exports.api = functions.https.onRequest(app)

// ------------- Soap Server ----------------
var fs = require('fs'),
soap = require('soap'),
express = require('express'),
cors = require('cors'),
lastReqAddress;
var server = express();
var myService = {
  ws: {
    calc: {
        sumar : function(args) {
            var n = 1*args.a + 1*args.b;
            return { sumres : n };
        },

        multiplicar : function(args) {
            var n = parseInt(args.a) * parseInt(args.b);
            return { mulres : n };
        }
    }
}
};
var xml = fs.readFileSync(__dirname + '/wsdl/wscalc1.wsdl', 'utf-8');
server = express();
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
server.options('*', cors()); 
soap.listen(server, '/', myService, xml);

exports.stockquote = functions.https.onRequest(server)