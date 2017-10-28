var express = require('express');
var app = express();

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.get('/', function (req, res) {
    var client_id = process.env.App_ID;
    var secret_key = process.env.Secret_Key;
    var redirect_uri = process.env.Redirect_URI;
    var site_id = 'MLA';
    var appname = req.subdomains;

    res.render('pages/index', {
        client_id: client_id,
        secret_key: secret_key,
        redirect_uri: redirect_uri,
        site_id: site_id,
        appname: appname
    });
});

app.use(express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!');
});
