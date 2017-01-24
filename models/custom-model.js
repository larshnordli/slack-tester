//custom-model.js
//Custom model to do stuff with a Watson Service

var watson = require('watson-developer-cloud');

//Initialize q (promise library)
var q = require('q');

//Rename to reflect the specific Watson service
var _watsonService;

//Change property prod to test to change local credentials
//Change name and create new entry in ./credentials/credentials.js to reflet the specific Watson service
var localCredentials = require('../credentials/credentials').credentials.test.watsonServiceCredentials;

module.exports.apiFunction = function(params) {
    var deferred = q.defer();

    _watsonService.apiFunction({
      params: params
    }, function(err, response) {
        if (err) {
            console.error('Service failed with the following error:\n' + err);
            deferred.reject(err);
        } else {
            deferred.resolve(response);
        }
    });
    return deferred.promise;
};

var initializeService = function() {
    var username = '';
    var password = '';

    //If running on cloud, use VCAP environment credentials
    if (process.env.VCAP_SERVICES) {
        var services = JSON.parse(process.env.VCAP_SERVICES);
        username = services.watsonServiceCredentials[0].credentials.username;
        password = services.watsonServiceCredentials[0].credentials.password;
        console.info("Running on Cloud, setting the service with the name " + services.watsonServiceCredentials[0].name);
    //If running locally, use local credentials
    } else {
        username = localCredentials.username;
        password = localCredentials.password;
        console.info("Running locally, setting the service with the name " + localCredentials.name);
    }

    _watsonService = watson.watsonService({
        username: username,
        password: password,
        version: 'v1',
    });
};

//Initialize model
initializeService();
