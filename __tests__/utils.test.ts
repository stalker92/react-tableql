import { formatStringToTitleCase } from '../src/utils'

describe('Utils Functions', () => {
  it('formatStringToTitleCase', () => {
    const finalResult = 'Foo Bar'
    expect(formatStringToTitleCase('Foo Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('fooBar')).toBe(finalResult)
    expect(formatStringToTitleCase('FooBar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('Foo bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo_Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo-Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo=Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo+Bar')).toBe(finalResult)
    expect(formatStringToTitleCase('foo~Bar')).toBe(finalResult)
  })
})