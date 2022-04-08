const express = require('express');
const talkingClock = require('./talkingClock');
const requestValidator = require('./utils/requestValidator');

const app = express();

const port = 3000;

app.get('/talkingClock', (req, res) => {
  const validatedTime = requestValidator(req.query.time);

  res.send(talkingClock(validatedTime));
});

app.listen(port, () => console.log(`Talking clock ticking on port ${port}`));
