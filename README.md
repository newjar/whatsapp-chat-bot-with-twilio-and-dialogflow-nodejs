#### WhatsApp chat bot with Twilio and Dialogflow

###### Prerequisites

```
NodeJS
NPM
Twilio Account
Dialogflow Account
ngrok
```

###### Preinstalling
* Create ENV file (.env) on the root folder with this configuration

```
PORT = 3000 || whatever_you_like
TWILIO_ACCOUNT_SID = your_twilio_sid
TWILIO_AUTH_TOKEN = your_twilio_token
DIALOGFLOW_PROJECT_ID = your_google_console_project_id
```

* first, you need to create Service Account in your GCP, then export the key as .json.
* rename your key.json to credentials.json and move it to the root folder.

###### Installing
* install dependencies and run

```
$ npm install
$ npm run dev
```

* make sure you already download ngrok, then running it with your port, i.e `./ngrok http 3000` and copy your ngrok url.
* then fill your http post url whatsapp sandbox setting in Twilio, i.e `https://20e86405b0ee.ngrok.io/api/v1/bot`. don't forget to add `/api/v1/bot` and just leave it blank for status callback url.
* then fill your Fulfillment URL in Dialogflow, i.e `https://20e86405b0ee.ngrok.io` without `/api/v1/bot`.



### Enjoy! :)
