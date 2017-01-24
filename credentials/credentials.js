// If only one service is used across multiple apps (test/prod), use same credentials
// or merge into fewer properties

module.exports.credentials = {
    test: {
      watsonServiceCredentials:{
        username: 'username',
        password: 'password',
        url: 'http://api.url.com/test'
      }
    },
    prod: {
      watsonServiceCredentials:{
        username: 'usernameProd',
        password: 'passwordProd',
        url: 'http://api.url.com'
      }
    }
};
