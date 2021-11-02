'use strict'

const driver = require('./eventPool.js');
require('./package-manager')
require('./vendor.js')

driver.on('pickup', handlePickup)

function handlePickup(payload){
  console.log(`Driver: picked up ${payload.orderID} `)
  driver.emit('in-transit', payload)
  driver.emit('delivered', payload)
}

module.exports = handlePickup;