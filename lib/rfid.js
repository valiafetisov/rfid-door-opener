const execSync = require('child_process').execSync

const beep = function () {
  execSync('sudo ../rfid_app/ctx-idrw-203 -b 10')
}

const read = function () {
  buffer = execSync('sudo ../rfid_app/ctx-idrw-203 -r')
  text = buffer.toString('utf-8').trim()
  if (
    typeof text !== 'string' ||
    /^[0-9A-F]{10}$/i.test(text) !== true
  ) return
  beep()
  return text
}

module.exports = { read, beep }
