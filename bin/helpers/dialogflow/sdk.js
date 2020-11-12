const Dialogflow = require('dialogflow');
const credentials = require('../../../credentials.json');
const config = require('../../configs/global_config');
const projectId = config.get('/dialogFlowProjectId');

let dialogflowClient;
const init = () => {
  try {
    dialogflowClient = new Dialogflow.SessionsClient({ credentials: credentials });
  } catch (error) {
    return error;
  }
};

const dialogflowQuery = async (query, number) => {
  try {
    const sessionId = number;
    const sessionPath = dialogflowClient.sessionPath(projectId, sessionId);
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: 'id-ID',
        },
      },
    };
    const responses = await dialogflowClient.detectIntent(request).then();
    const result = responses[0].queryResult;
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  init,
  dialogflowQuery,
};
