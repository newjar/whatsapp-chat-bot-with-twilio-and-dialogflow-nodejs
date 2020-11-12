const Command = require('./command');

class ChatBot {
  constructor() {
    this.command = new Command();
  }

  async postMessage(payload) {
    const { Body, To, From } = payload;
    const dialogflowQuery = await this.command.runQuery(Body, From);
    if (!dialogflowQuery) {
      return dialogflowQuery;
    }
    const fulfillmentText = dialogflowQuery.fulfillmentText;
    const result = await this.command.sendMessage(fulfillmentText, To, From);
    if (!result) {
      return result;
    }
    return result;
  }
}

module.exports = ChatBot;
