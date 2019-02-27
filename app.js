const { read, beep } = require('./lib/rfid')
const { open } = require('./lib/phat')
const delay = require('./lib/delay')
const { isCardValid } = require('./lib/cards')

const loop = async function () {
  while (true) {
    const card = read()
    if (!card) continue

    console.log('card detected', new Date(), card)
    if (isCardValid(card)) {
      beep(true)
      await open()
      continue
    } else {
      beep(false)
      await delay(1000)
    }
  }
}

loop()