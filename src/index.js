'use strict';
//Get variables (secret slack credentials) from .env
require('dotenv').config();

const signature = require('./verifySignature');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const rawBodyBuffer = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
app.use(bodyParser.json({ verify: rawBodyBuffer }));


// Static Web UI
app.get('/', (req, res) => {
  res.send('nothing to see here');
});


// slash command endpoint - /yesorno .
app.post('/command', (req, res) => {
  // verify request is from slack
  if (!signature.isVerified(req)) {
    res.sendStatus(404);
    return;
  }

  axios.get('https://yesno.wtf/api').then(res => {
    const answer = res.data.image;
    // console.log(`${answer}`)
    return answer;
  }).then((answer) => {
    let message = {};
    if (req.body.text) {
      const code = req.body.text;

      // console.log(`${answer}`)
      message = {
        response_type: 'in_channel', // public to the channel
        attachments: [
          {
            image_url: `${answer}`,
          }
        ]
      };

    } else {
      // no text was given
      message = {
        response_type: 'ephemeral', // private message
        text: '`/yesorno` _[ask your yes or no question]_',
        attachments: [
          {
            text: 'You didn\'t ask a question :nicmoji_smile:'
          }
        ]
      };
    }
    res.json(message);
  }).catch((err) => {
    console.error(err);
  })
});


const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

