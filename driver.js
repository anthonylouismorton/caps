'use strict'

const socketio = require('socket.io-client')
const caps = socketio.connect('http://localhost:3031/caps')

caps.on('pickup', handlePickup)

function handlePickup(payload){
  console.log(`Driver: picked up ${payload.orderID} `)
  caps.emit('in-transit', payload)
  caps.emit('delivered', payload)
}

module.exports = handlePickup;