const resolved = require('./index.js')

test('Mensajes encriptados', () => {
  expect(resolved('llaveS casa CASA casa llaves')).toBe('llaves2casa3')
})

test('Mensajes encriptados', () => {
  expect(resolved('taza ta za taza')).toBe('taza2ta1za1')
})

test('Mensajes encriptados', () => {
  expect(resolved('casas casa casasas')).toBe('casas1casa1casasas1')
})
