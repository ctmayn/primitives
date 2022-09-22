const pathToPascalCase = require('../build.js').pathToPascalCase

describe('Token formatters: PascalCase', () => {
  test('returns a valid token name in PascalCase', () => {
    expect(pathToPascalCase({path: ['red']})).toBe('Red')
    expect(pathToPascalCase({path: ['color', 'red']})).toBe('ColorRed')
    expect(pathToPascalCase({path: ['color', 'functional', 'danger']})).toBe('ColorFunctionalDanger')
  })

  it('works as expected with empty token path', () => {
    expect(pathToPascalCase({path: []})).toBe('')
    expect(() => pathToPascalCase({path: null})).toThrowError()
    expect(() => pathToPascalCase([])).toThrowError()
  })
})