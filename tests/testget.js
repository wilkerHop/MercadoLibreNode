var meli = require('../index.js');
var sys = require("sys");
var config = require("../config.js");
const opn = require('opn');
var meliObject = new meli.Meli();

var express = require('express');
var app = express();


var examples = {
    1: "Get your country's category tree",
    2: "Get user data",
    3: "Get multiple users at once"
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
    getSites();
    }
    else if (d == 2) {
    getUser();
    }   
    else if (d == 3) {
        getUsers();
    }
});


var getSites = function(){
        meliObject.get('sites/' + config.config.site_id +'/categories', function (err, res) {
            console.log(err, res);
});
    };

var getUser = function(){
        meliObject.get('users/145925943', function (err, res) {
             console.log(err, res);
});
    };

    var getUsers = function(){
        meliObject.get('users', {
            ids: [145925943, 145925951]
        }, function (err, res) {
            console.log(err, res);
        });
    };


