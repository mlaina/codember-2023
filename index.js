module.exports = (encrypted) => {
  const lowerCase = encrypted.toLowerCase()

  const words = lowerCase.split(' ')

  const result = {}

  words.forEach((word) => {
    result[word] = result[word] ? result[word] + 1 : 1
  })

  let message = ''
  for (const word in result) {
    message += `${word}${result[word]}`
  }

  return message
}
