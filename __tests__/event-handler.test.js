'use strict'

const handlePickup = require('../driver.js')
const handleDelivery = require('../vendor.js')
require('../server/hub.js')
require('../driver.js')
require('../vendor.js')

jest.spyOn(console, 'log')


describe('Testing event handler function for connectivity', () => {

  it('handle pickup successfully calls 4 console.logs', () => {
    expect(console.log.mock.calls.length).toBe(0);
    handlePickup({orderID: 123456});
    expect(console.log.mock.calls.length).toBe(1);

  })

  it('handle delivery should successfully call a console.log', () => {
    handleDelivery('thank you', 'anthony');
    expect(console.log.mock.calls.length).toBe(2);
  })

})