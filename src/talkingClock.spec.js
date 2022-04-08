const talkingClock = require('./talkingClock');


describe('talkingClock', () => {
  it('should convert 12:00 to Twelve o clock', () => {
    expect(talkingClock('12:00')).toEqual("Twelve o'clock");
  })

  it('should convert 12:30 to Half past twelve', () => {
    expect(talkingClock('12:30')).toEqual("Half past twelve");
  })

  it('should convert 12:50 to Ten to one', () => {
    expect(talkingClock('12:50')).toEqual("Ten to one");
  })

  it('should convert 12:10 to Ten past twelve', () => {
    expect(talkingClock('12:10')).toEqual("Ten past twelve");
  })

  it('should convert 00:00 to Twelve o clock', () => {
    expect(talkingClock('00:00')).toEqual("Twelve o'clock");
  })

  it('should convert 23:00 to Eleven o clock', () => {
    expect(talkingClock('23:00')).toEqual("Eleven o'clock");
  })

  it('should convert 23:50 to Ten to twelve', () => {
    expect(talkingClock('23:50')).toEqual("Ten to twelve");
  })
})