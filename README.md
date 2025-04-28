<h1 align="center">Atsuko</h1>
<p align="center">
    A personal Discord bot project developed and maintained by <strong>Tunx</strong>.<br />
    This bot and its source code are for private use only 
    (I meant you may use it but eh, this template is created exclusively for my bot)
</p>

<p align="center">
    <a title="Discord.js version" href="https://www.npmjs.com/package/discord.js">
        <img src="https://img.shields.io/badge/discord.js-v14-blue.svg?logo=npm" alt="Discord.js version">
    </a>
</p>

<br>


## Starting the project


### Configuration
Fill in your bot details inside the `config.js` file:
```js
module.exports = {
    token: 'BOT_TOKEN',
    botID: 'BOT_APPLICATION_ID',
    prefix: 'BOT_PREFIX', // newest Atsuko no longer uses prefix
    owner: [ "OWNER_ID" ], // note: one owner only
}; 
 ```

### Installation
```sh
$ npm install
```

### Register slash commands
```sh
$ npm run slash
```

### Start the bot
```sh
$ npm run start
```

<br>
