'use strict'

const vendor = require('./eventPool.js')
require('./package-manager.js')
require('./driver.js')
const faker = require('faker')

var randomStore = faker.company.companyName();
var randomAddress = faker.address.streetAddress();
var randomCustomer = faker.name.findName();
var randomOrderId = faker.finance.account();

vendor.on('delivered', handleDelivery
)

function handleDelivery(payload){
  console.log(`thank you, ${payload.customer}`)
}

vendor.emit('pickup', {
  store: randomStore,
  orderID: randomOrderId,
  customer: randomCustomer,
  address: randomAddress,
})

module.exports = handleDelivery;