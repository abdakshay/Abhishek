var nforce = require('nforce');
var express = require('express');
var router = express.Router();

var org = nforce.createConnection({
  clientId: '3MVG9fe4g9fhX0E7Er.O2_dqchkrIAPdwQp1WehMVu.Dubqevk8O5jt6mv0gYLBMFN7ZH52ichqQ3BfeeHojU',
  clientSecret: 'E4731EF11866578EC9829FA71ADF8755F4A496CA1C543BEB7BC8D1E9B4776DC5',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  //apiVersion: 'v27.0',  // optional, defaults to current salesforce API version
  environment: 'production',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'single' // optional, 'single' or 'multi' user mode, multi default
});

var oauth;
var data = {};
  org.authenticate({ username: 'jai@sarscoder.com', password: 'Asdfghjkl@123'}, function(err, resp){
    router.get('/', function(req, res, next) {

      org.query({ query: "Select Id, Name, Type, Industry, Rating From Account Order By LastModifiedDate DESC" })
        .then(function(results){
          console.log(results.records);
          res.render('user-list', { userData: results.records });
        });
    
    });
});
module.exports = router;
