
## API Setup

Slack Message Webhook API


Clone Slack Message webhook Node Js API 
```
  git clone https://github.com/codeincrypt/slack-message-webhook.git
```

Install all the required packages
```
  npm i
```

Next, set your slack bot channel URL in app.js (message-bot API)

Start API,
```
  node app.js
```

API is running on PORT 4060

Call API message-bot (POST) & payload (name, email)


## Slack Webhook setup

Slack Message Webhook API

- Create New Bot
- URL : https://api.slack.com/apps
- Connect with a new Channel :
- Allow Activate Incoming Webhook
- Copy Webhook URL & Paste in App.js