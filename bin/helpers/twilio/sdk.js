const Twilio = require('twilio');
const config = require('../../configs/global_config');
const twilioConfig = config.get('/twilioConfig');
const accountSid = twilioConfig.accountSid;
const authToken = twilioConfig.authToken;
let twilioClient;

const init = () => {
  try {
    twilioClient = new Twilio(accountSid, authToken);
  } catch (error) {
    return Promise.reject(error);
  }
};

const sendMessage = async (body, from, to) => {
  try {
    const result = twilioClient.messages.create({
      body,
      from,
      to,
    });
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  init,
  sendMessage,
};
