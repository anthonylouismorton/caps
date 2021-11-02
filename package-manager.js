'use strict'

const eventPool = require('./eventPool')
var now = new Date;

eventPool.on('pickup', (payload) => {
  console.log(`EVENT{event: pickup, time:, ${now.toUTCString()}, payload: ${JSON.stringify(payload)}`)
})

eventPool.on('in-transit', (payload) => {
  console.log(`EVENT{event: in-transit, time:, ${now.toUTCString()}, payload: ${JSON.stringify(payload)}`)
})

eventPool.on('delivered', (payload) => {
  console.log(`EVENT{event: delivered, time:, ${now.toUTCString()}, payload: ${JSON.stringify(payload)}`)
})


