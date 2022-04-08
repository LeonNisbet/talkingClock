const moment = require('moment');

const requestValidator = (request) => {
  const hhmmRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  if (!request) {
    //ignore empty request, use current time
    const now = moment().format('HH:mm');

    return now;
  } else if (!request.match(hhmmRegex)) {
    throw new Error('Invalid request received, please provide a valid time in hh:mm format.');
  }

  return request;
};

module.exports = requestValidator;
