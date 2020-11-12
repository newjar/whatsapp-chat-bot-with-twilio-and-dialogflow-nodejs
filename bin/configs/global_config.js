require('dotenv').config();
const confidence = require('confidence');

const config = {
  port: process.env.PORT,
  twilioConfig: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
  },
  dialogFlowProjectId: process.env.DIALOGFLOW_PROJECT_ID,
};

const store = new confidence.Store(config);
exports.get = (key) => store.get(key);
