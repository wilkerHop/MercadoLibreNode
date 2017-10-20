var meli = require('../index.js');
var config = require("../config.js").config;
var express = require('express');
var session = require('express-session');
const opn = require('opn');

var app = express();
var meliObject = new meli.Meli();
var sess;

var test = function(){
	console.log("test");
}

var oAuthExample = function() {

console.log('oAuthExample');

	sess = session;

if(sess.code || sess.access_token){

	if(sess.code && !sess.access_token){

		sess.test = "test";

	console.log('session created');

	var user = meliObject.authorize(sess.code, config.redirect_uri);

	sess.access_token = user.body.access_token

} else{
console.log(sess);
}
}
else{
	console.log('getAuthURL');

	var authUrl = meliObject.getAuthURL(config.redirect_uri);
	opn(authUrl);
	sess.test = "test";
}
};

exports.oAuthExample = oAuthExample;
