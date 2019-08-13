const APIKEY = require('./config')

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.twitch.tv/kraken/search/streams?query=starcraft");
xhr.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
xhr.setRequestHeader("Client-ID", APIKEY);
xhr.setRequestHeader("cache-control", "no-cache");
return xhr.send(data)


