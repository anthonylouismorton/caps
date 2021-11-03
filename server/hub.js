'use strict'

const socketio = require('socket.io');
const PORT = process.env.PORT || 3031;
const server = socketio(PORT);
const caps = server.of('/caps')
var now = new Date;

caps.on('connection', (socket) => {
  //console.log('socket is connected', socket.id)

  socket.on('join', (payload) => {
    socket.join(payload)
  })
  socket.on('pickup', (payload) => {
    console.log(`EVENT{event: pickup, time:, ${now.toUTCString()}, payload: ${JSON.stringify(payload)}`)
    caps.emit('pickup', payload)
  })

  socket.on('in-transit', (payload) => {
    console.log(`EVENT{event: in-transit, time:, ${now.toUTCString()}, payload: ${JSON.stringify(payload)}`)
    caps.emit('in-transit', payload)
  })

  socket.on('delivered', (payload) => {
    console.log(`EVENT{event: delivered, time:, ${now.toUTCString()}, payload: ${JSON.stringify(payload)}`)
    caps.emit('delivered', payload)
  })

});