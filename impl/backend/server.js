var express = require('express');
var request = require('request');
var _ = require('underscore');
var app = express();

var PORT = 8080;
var CYPHER_QUERY_URL = "http://localhost:7474/db/data/transaction/commit";

function cypherQuery(query, params, callback) {
    request.post({
        uri: CYPHER_QUERY_URL,
        json: { statements: [{statement: query, parameters: params}] },
        headers: {
            "Authorization": "Basic " +  new Buffer("neo4j:neopasswd", "utf8").toString("base64")
        }
    }, function (err, res, body) {
        callback(res, body);
    });
}

function reportError(type, obj) {
    return {
        "error": {
            "type": type,
            "res": obj
        }
    };
}

app.get('/stores', function (req, res) {
    cypherQuery("MATCH (s:Store) RETURN s", {}, function(err, cres) {
        if(cres.errors.length > 0) {
            res.json(reportError("cypher", cres.errors));
        }
        
        res.json(_.map(cres.results[0].data, function(x) {
            return x.row[0]
        }));
    });
});

app.listen(PORT, function () {
    console.log("Started server on " + PORT); 
});