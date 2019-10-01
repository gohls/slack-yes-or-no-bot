# A simple Slack slash command

“goatbot” is a Slackbot I made for the Computer Science Club Slack workspace. It takes the slash command "/yesorno [ask a yes or no question]" and will randomly respond with a gif post to the channel with yes or no context.

goatbot derives from St. Edward's goat mascot

Technologies in this project include: Node.js, Express.js, Axios, and dotenv config. A GET request to a RESTful API endpoint (https://yesno.wtf/api) is made to retrieve the gif.

## Slack setup

### 1. Follow https://api.slack.com/slash-commands for general `Slack app` + `slash commands` setup
### 2. Edit `Slash Commands`

The following configuration were used:

- **Command:** `/yesorno`
- **Request URL:** your URL + `/command`
- **Short Description:** `Get a straight yes or no answer`
- **Usage Hint:** `[ask a yes or no question]`
- **Escape channels, users, and links sent to your app:** `[x]`



## Local setup

### 1. `git clone https://sgohl@bitbucket.org/sgohl/goatbot.git` to clone repo
### 2. `npm install` to install dependencies
### 3. Create `.env` file and configure with your Slack credentials 

- **SLACK_CLIENT_ID=** xxxx-yyyy
- **SLACK_CLIENT_SECRET=** y0urcl13n753cr37
- **SLACK_SIGNING_SECRET=** y0ur516n1n653cr37
### 4. `npm start` to run the app locally

## Voilà!


## Example: **/yesorno will I install this slash command?**

![Alt Text](https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif)

### Sources

https://api.slack.com/slash-commands

https://github.com/girliemac/slack-httpstatuscats

https://www.youtube.com/watch?v=nyyXTIL3Hkw&t=854s


