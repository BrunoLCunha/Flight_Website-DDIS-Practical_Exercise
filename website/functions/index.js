const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = require("express")();

admin.initializeApp();
const db = admin.firestore().collection("users");
const dbBlog = admin.firestore().collection("blog");

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
lastReqAddress;
var server = express();
var myService = {
  CheckUserName_Service: {
      CheckUserName_Port: {
          checkUserName: function(args) { 
              console.log('checkUserName: Entering function..');
              return {
                name: args
              };
              // db.query(aqlQuery`
              // LET startVertex = (FOR doc IN spec
              // FILTER doc.serial_no == '"123456abcde"'
              // LIMIT 2
              // RETURN doc
              // )[0]

              // FOR v IN 1 ANY startVertex belongs_to
              // RETURN v.ip`,
              // {
              // bindVar1: 'value',
              // bindVar2: 'value',
              // }
              // ).then(function(response) {
              //     console.log(`Retrieved documents.`, response._result);
              //     soapCallback(JSON.stringify(response._result));
              // })
              // .catch(function(error) {
              //     console.error('Error getting document', error);
              //     soapCallback('Error getting document' + error.message);
              // });
          }
      }
  }   
};
var xml = fs.readFileSync(__dirname + '/wsdl/check_username.wsdl', 'utf-8');
server = express();

soap.listen(server, '/', myService, xml);

exports.stockquote = functions.https.onRequest(server)