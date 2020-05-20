const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = require("express")();

admin.initializeApp();
const db = admin.firestore().collection("todos");

// TODO: create todoList
// TODO: remove todoList


app.get("/todos", function (request, response) {
  db.get()
    .then(function (docs) {
      let todos = [];
      docs.forEach(function (doc) {
        todos.push({
          id: doc.id,
          quest: doc.data().quest,
          wAns1: doc.data().wAns1,
          wAns2: doc.data().wAns2,
          wAns3: doc.data().wAns3,
          correctAns: doc.data().correctAns
        })
      })
      response.json(todos);
    });
})


app.get("/todos/:id", function(req,res) {
    db.doc(req.params.id).get()
        .then(function(doc) {
            res.json(doc.data());
        })
})

app.put('/todos/:id', function(req, res) {
    db.doc(req.params.id).update(req.body)
        .then(function () {
            res.json({ general: "Works" });
        });
})

app.delete('/todos/:id', function(req,res) {
    db.doc(req.params.id).delete()
        .then(function() {
            res.json({ general: "Deleted"});
        });
})

app.post("/todos", function (request, response) {
  db.add({ quest: request.body.quest,
    wAns1: request.body.wAns1,
    wAns2: request.body.wAns2,
    wAns3: request.body.wAns3,
    correctAns: request.body.correctAns
})
    .then(function () {
      response.json({ general: "Works" });
    })
})

exports.api = functions.https.onRequest(app)