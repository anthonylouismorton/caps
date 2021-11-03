'use strict'

const socketio = require('socket.io-client')
const faker = require('faker')
const caps = socketio.connect('http://localhost:3031/caps')

let store = '1-206-flowers'
var randomStore = faker.company.companyName();
var randomAddress = faker.address.streetAddress();
var randomCustomer = faker.name.findName();
var randomOrderId = faker.finance.account();

caps.emit('join', store)

caps.on('delivered', handleDelivery
)

function handleDelivery(payload){
  console.log(`thank you, ${payload.customer}`)
}

caps.emit('pickup', {
  store: store,
  orderID: randomOrderId,
  customer: randomCustomer,
  address: randomAddress,
})

module.exports = handleDelivery;