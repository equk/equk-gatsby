require('./src/styles/global.css')

// eslint-disable-next-line @typescript-eslint/no-empty-function
exports.onClientEntry = () => {}

exports.onRouteUpdate = require('./lib/onRouteUpdate').onRouteUpdate
