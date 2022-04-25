const talkingClock = require('./talkingClock')
const requestValidator = require('./utils/requestValidator');

const input = process.argv.slice(2)[0];

const validatedTime = requestValidator(input);

console.log(talkingClock(validatedTime));