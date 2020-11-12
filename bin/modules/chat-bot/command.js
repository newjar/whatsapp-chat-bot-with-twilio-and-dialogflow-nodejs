const Twilio = require('../../helpers/twilio/sdk');
const Dialogflow = require('../../helpers/dialogflow/sdk');

class Command {
  async sendMessage(body, from, to) {
    Twilio.init();
    const result = await Twilio.sendMessage(body, from, to);
    return result;
  }

  async runQuery(query, number) {
    Dialogflow.init();
    const result = await Dialogflow.dialogflowQuery(query, number);
    return result;
  }
}

module.exports = Command;
