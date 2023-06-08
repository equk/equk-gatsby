require('./src/styles/global.css')

// eslint-disable-next-line @typescript-eslint/no-empty-function
exports.onClientEntry = () => {}

exports.wrapPageElement = require('./lib/wrapPageElement').wrapPageElement
exports.onRouteUpdate = require('./lib/onRouteUpdate').onRouteUpdate
