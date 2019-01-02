const gpio = require('rpi-gpio')
const gpiop = gpio.promise
const delay = require('./delay')

const relayPin = 36
var settedUp

const relay = async function (state) {
  if (state !== false && state !== true) {
    throw new Error('relay requires a boolean argument')
  }
  if (settedUp == null) {
    await gpiop.setup(relayPin, gpio.DIR_OUT)
    settedUp = true
  }
  await gpiop.write(relayPin, state)
}

const open = async function () {
  await relay(true)
  await delay(3000)
  await relay(false)
  await delay(100)
}

module.exports = { relay, open }
