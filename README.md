# A simple Slack slash command

## Slack setup

### 1. Follow https://api.slack.com/slash-commands for general `Slack app` + `slash commands` setup
### 2. Edit `Slash Commands`

The following configuration were used:
- Command: `/yesorno`
- Request URL: your URL + `/command`
- Short Description: `Get a straight yes or no answer`
- Usage Hint: `[ask a yes or no question]`
- Escape channels, users, and links sent to your app: `[x]`

Example: **/yesorno will I install this slash command?**

![Alt Text](https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif)


## Local setup

### 1. `git clone https://sgohl@bitbucket.org/sgohl/goatbot.git` to clone repo
### 2. `npm install` to install dependencies
### 3. Create `.env` file and configure Slack credentials 
- *Client ID:* 
- *Client Secret:* 
- *Signing Secret:* 
### 4. `npm start` to run the app locally

## Voilà!

### Sources

https://api.slack.com/slash-commands

https://github.com/girliemac/slack-httpstatuscats

https://www.youtube.com/watch?v=nyyXTIL3Hkw&t=854s


