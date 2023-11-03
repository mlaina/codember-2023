const resolved = require('./index.js')

test('Mensajes encriptados - llave casa', () => {
  expect(resolved('llaveS casa CASA casa llaves')).toBe('llaves2casa3')
})

test('Mensajes encriptados - taza ta za', () => {
  expect(resolved('taza ta za taza')).toBe('taza2ta1za1')
})

test('Mensajes encriptados - casas casa casasas', () => {
  expect(resolved('casas casa casasas')).toBe('casas1casa1casasas1') // en el enunciado era casas1casa1casas1 :( ?
})
