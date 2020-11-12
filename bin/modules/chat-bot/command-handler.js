const ChatBot = require('./domain');

const postMessage = async (payload) => {
  const chatBot = new ChatBot();
  const postData = async (payload) => await chatBot.postMessage(payload);
  return postData(payload);
};

module.exports = {
  postMessage,
};
