const execSync = require('child_process').execSync
const exec = require('child_process').exec

const beep = function (is_right) {
  if (is_right) {
    execSync(`./rfid_app/ctx-idrw-203 -b`)
  } else {
    execSync(`./rfid_app/ctx-idrw-203 -n`)
  }
}

const read = function () {
  buffer = execSync('./rfid_app/ctx-idrw-203 -r')
  text = buffer.toString('utf-8').trim()
  if (
    typeof text !== 'string' ||
    /^[0-9A-F]{10}$/i.test(text) !== true
  ) return
  return text
}

module.exports = { read, beep }
