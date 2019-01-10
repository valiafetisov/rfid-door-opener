const { read, beep } = require('./lib/rfid')
const { open } = require('./lib/phat')
const delay = require('./lib/delay')

const validCodes = ['0000000001']

const loop = async function () {
  while (true) {
    const code = read()
    if (!code) continue

    console.log('card detected', code)
    if (validCodes.indexOf(code) < 0) {
      beep(false)
      await delay(1000)
      continue
    }
    beep(true)
    await open()
  }
}

loop()