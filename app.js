const { read } = require('./lib/rfid')
const { open } = require('./lib/phat')

const loop = async function () {
  while (true) {
    const text = read()
    if (!text) continue
    console.log('card detected', text)
    await open()
  }
}

loop()