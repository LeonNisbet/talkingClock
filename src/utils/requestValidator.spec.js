const requestValidator = require('./requestValidator');

//mock current time
Date.now = jest.fn(() => new Date("2020-05-13T12:30:00.000Z"));

describe('requestValidator', () => {
  it('should return valid requests', () => {
    expect(requestValidator('11:11')).toEqual('11:11')
  })

  it('should return valid requests with leading zero', () => {
    expect(requestValidator('01:11')).toEqual('01:11')
  })

  it('should return valid requests without leading zero', () => {
    expect(requestValidator('1:11')).toEqual('1:11')
  })

  it('should return current time for no argument', () => {
    expect(requestValidator()).toEqual('13:30')
  })

  it('should throw an error for invalid time', () => {
    expect.assertions(1)

    try{
      requestValidator('11:60')
    } catch(error) {
      expect(error.message).toEqual('Invalid request received, please provide a valid time in hh:mm format.')
    }
  })

  it('should throw an error for invalid format', () => {
    expect.assertions(1)

    try{
      requestValidator('11:59:11')
    } catch(error) {
      expect(error.message).toEqual('Invalid request received, please provide a valid time in hh:mm format.')
    }
  })
})
