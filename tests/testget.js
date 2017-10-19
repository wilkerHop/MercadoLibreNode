var meli = require('../index.js');
var sys = require("sys");
var config = require("../config.js");
const opn = require('opn');
var meliObject = new meli.Meli();

var express = require('express');
var app = express();


var examples = {
    1: "Get your country's category tree",
    2: "Get your user private data with access_token",
    3: "Get multiple users at once",
    4: "oAuth example"
};
function printOptions() {
    console.log("Ingrese un numero:");
    for (var i in examples) {
        console.log(i + ": " + examples[i]);

    }
}


printOptions();
var stdin = process.openStdin();
stdin.addListener("data", function (d) {
    var end = d.toString();

    if (d == 1) {
        meliObject.get('sites/' + config.config.site_id +'/categories', function (err, res) {
            console.log(err, res);
        });
    }
    else if (d == 2) {
        meliObject.get('users/me?access_token=' + config.config.access_token, function (err, res) {
             console.log(err, res);
        });
    }   
    else if (d == 3) {
        meliObject.get('users', {
            ids: [145925943, 145925951]
        }, function (err, res) {
            console.log(err, res);
        });
    }
    else if (d == 4) {
    meliObject.getAuthURL(config.config.redirect_uri, function (authUrl) {
        opn(authUrl);  
        });
}
});






