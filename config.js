/**
 * Created with JetBrains WebStorm.
 * User: santiago
 * Date: 16/09/13
 * Time: 20:37
 * To change this template use File | Settings | File Templates.
 */


var config = {

	api_root_url: 'https://api.mercadolibre.com',
	skd_version: '0.0.13',
	auth_url: 'https://auth.mercadolibre.com/authorization',
	oauth_url: 'https://api.mercadolibre.com/oauth/token',
	client_id :  process.env.App_ID, //process.env.clientId;
	secret_key : process.env.Secret_Key, // process.env.secretKey;
	redirect_uri : process.env.Redirect_URI,
	access_token : 'APP_USR-8636606929674838-101112-115b6c9abb6e4b08b02a346b54566a93__C_E__-101897633',
	site_id : 'MLA'
};

exports.config = config;