/**
 * Created with JetBrains WebStorm.
 * User: santiago
 * Date: 17/09/13
 * Time: 19:53
 * To change this template use File | Settings | File Templates.
 */

var m = require('./config.js');
var m = require('./index.js');

var meliObj = new m.Meli(config.config.client_id, config.config.secret_key, [access_token], [refresh_token]);

var def = function () {
    console.log(arguments);
};