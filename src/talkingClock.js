const numberToText = require('./utils/numberToText')

const talkingClock = (time) => {
  let hours = time.split(':')[0];
  let minutes = time.split(':')[1];

  //handle 24 hours clock
  if (hours >= 12) {
    hours -= 12;
  }

  let hourText
  if(+hours === 0){
    hourText = 'twelve'
  } else {
    hourText = numberToText(hours)
  }

  //determine format and compile result
  let readableTime;
  if ((minutes == 0)) {
    readableTime = `${hourText} o'clock`;
  } else if ((minutes == 30)) {
    readableTime = `Half past ${hourText}`
  } else if (minutes < 30) {
    readableTime = `${numberToText(minutes)} past ${hourText}`
  } else {
    readableTime = `${numberToText(60 - minutes)} to ${numberToText(+hours + 1)}`
  }

  //capitalise
  readableTime = readableTime[0].toUpperCase() + readableTime.slice(1)

  return readableTime;
};

module.exports = talkingClock;
