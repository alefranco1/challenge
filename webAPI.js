const APIKEY = require('./config')
const fetch = require("node-fetch");

 fetch('https://api.twitch.tv/kraken/search/streams?query=starcraft', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Client-ID': APIKEY,
              'Accept': 'application/vnd.twitchtv.v5+json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
      })
      .then(response => response.json()).then((parsedJson)=>{
          console.log(parsedJson)
      }).catch(error => console.error(error))

