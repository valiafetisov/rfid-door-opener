const fs = require('fs')
const pathToValidCardCodes = '/home/pi/CardListForDoorOpener.txt'

const validCards = getValidCards()

function getValidCards () {
  let cards = fs.readFileSync(pathToValidCardCodes).toString('utf8').split('\n')
  if (cards.length <= 0) throw Error('file with valid cards is empty')
  cards = cards.filter(card => typeof card === 'string' && card != null && card.length === 10)
  if (cards.length <= 0) throw Error('file with valid cards doesn\'t have valid codes')
  cards = cards.map(card => card.toLowerCase())
  return cards
}

const isCardValid = function (card) {
  if (typeof card !== 'string') return false
  if (card.length !== 10) return false
  const lowerCasedCard = card.toLowerCase()
  return validCards.indexOf(lowerCasedCard) >= 0
}

module.exports = { isCardValid }
