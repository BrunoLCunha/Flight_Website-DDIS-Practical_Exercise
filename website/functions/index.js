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
service = {
    StockQuoteService: {
        StockQuotePort: {
            GetLastTradePrice: function (args, cb, soapHeader) {
                if (soapHeader)
                    return {
                        price: soapHeader.SomeToken
                    };
                if (args.tickerSymbol === 'trigger error') {
                    throw new Error('triggered server error');
                } else if (args.tickerSymbol === 'Async') {
                    return cb({
                        price: 19.56
                    });
                } else if (args.tickerSymbol === 'SOAP Fault v1.2') {
                    throw {
                        Fault: {
                            Code: {
                                Value: "soap:Sender",
                                Subcode: {
                                    value: "rpc:BadArguments"
                                }
                            },
                            Reason: {
                                Text: "Processing Error"
                            }
                        }
                    };
                } else if (args.tickerSymbol === 'SOAP Fault v1.1') {
                    throw {
                        Fault: {
                            faultcode: "soap:Client.BadArguments",
                            faultstring: "Error while processing arguments"
                        }
                    };
                } else {
                    return {
                        price: 19.56
                    };
                }
            },

            SetTradePrice: function (args, cb, soapHeader) {},

            IsValidPrice: function (args, cb, soapHeader, req) {
                lastReqAddress = req.connection.remoteAddress;

                var validationError = {
                    Fault: {
                        Code: {
                            Value: "soap:Sender",
                            Subcode: {
                                value: "rpc:BadArguments"
                            }
                        },
                        Reason: {
                            Text: "Processing Error"
                        },
                        statusCode: 500
                    }
                };

                var isValidPrice = function () {
                    var price = args.price;
                    if (isNaN(price) || (price === ' ')) {
                        return cb(validationError);
                    }

                    price = parseInt(price, 10);
                    var validPrice = (price > 0 && price < Math.pow(10, 5));
                    return cb(null, {
                        valid: validPrice
                    });
                };

                setTimeout(isValidPrice, 10);
            }
        }
    }
};
var wsdl = fs.readFileSync(__dirname + '/wsdl/stockquote.wsdl', 'utf-8').toString();
server = express();

soapServer = soap.listen(server, '/', service, wsdl)

exports.stockquote = functions.https.onRequest(server)