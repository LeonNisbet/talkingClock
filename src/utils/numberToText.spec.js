const numberToText = require('./numberToText');

describe('numberToText', () => {
  it('should convert 1 to one', () => {
    expect(numberToText(1)).toEqual('one')
  })

  it('should convert 01 to one', () => {
    expect(numberToText('01')).toEqual('one')
  })

  it('should convert 59 to fifty nine', () => {
    expect(numberToText(59)).toEqual('fifty nine')
  })

  it('should convert 99 to ninety nine', () => {
    expect(numberToText(99)).toEqual('ninety nine')
  })

  it('should convert 0 to zero', () => {
    expect(numberToText(0)).toEqual('zero')
  })

  it('should convert null to zero', () => {
    expect(numberToText(null)).toEqual('zero')
  })

  it('should convert undefined to zero', () => {
    expect(numberToText(undefined)).toEqual('zero')
  })

  it('should return zero by default', () => {
    expect(numberToText(0)).toEqual('zero')
  })

  it('should throw an error for values greater than 99', () => {
    expect.assertions(1);

    try{
      numberToText(100)
    } catch(error) {
      expect(error.message).toBe('Cannot convert negatives or numbers greater than 99')
    }
  })

  it('should throw an error for negative values', () => {
    expect.assertions(1);
    try{
      numberToText(-10)
    } catch(error) {
      expect(error.message).toBe('Cannot convert negatives or numbers greater than 99')
    }
  })
})