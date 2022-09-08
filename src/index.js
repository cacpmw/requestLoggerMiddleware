const debug = require('debug')('http');

function requestLoggerMiddleware(request, response, next) {
    debug('===========================================\n' +
        request.method + ' ' + request.url
        + '\nIP ' + request.ip
        + '\nHEADERS ' + JSON.stringify(request.headers)
        + '\nBody ' + JSON.stringify(request.body)
        + '\nQuery ' + JSON.stringify(request.query)
        + '\nParams ' + JSON.stringify(request.params)
        + '\nProtocol ' + request.protocol
    );
    return next();
}

module.exports = requestLoggerMiddleware;