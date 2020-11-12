const express = require('express');
const router = express.Router();
const botHandler = require('../bin/modules/chat-bot/command-handler');

router.get('/', (req, res, next) => {
  res.status(200).send({ status: true, data: '', message: 'welcome to chat bot with Twilio and Dialogflow' });
});

router.post('/api/v1/bot', async (req, res) => {
  const payload = req.body;
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return botHandler.postMessage(payload);
  };
  const sendResponse = async (result) => {
    result.err
      ? res.status(500).send({ success: false, data: '', message: 'Failed Send Message' })
      : res.status(200).send({ success: true, data: result, message: 'Success Send Message' });
  };
  sendResponse(await postRequest(payload));
});

module.exports = router;
