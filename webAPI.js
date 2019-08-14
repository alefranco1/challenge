// const APIKEY = require('./config');
// const fetch = require("node-fetch");
let listMin = 0;
let listMax = 5;

let json = (name) => {
    return fetch(`https://api.twitch.tv/kraken/search/streams?query=${name}&limit=${55}`, {
        method: 'GET', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Client-ID': APIKEY,
            'Accept': 'application/vnd.twitchtv.v5+json'
        },
        redirect: 'follow', 
        referrer: 'no-referrer', 
    })
    .then(response => response.json())
    .catch(error => console.error(error))

}

let listFive = (min, max, cb) => {
    let prime = 6
    for(let i = min; i < max; i++ ){
        let number = i + ''
        let parent = document.getElementById(number)
        let imageParent = document.getElementById('img' + number)
        let imageChild = document.createElement("img");
        imageChild.setAttribute("src", cb[i]['4'])
        imageParent.appendChild(imageChild)
        for(let j = 0; j < 4; j++){
            let numbr = j + ''
            let id = 'specific' + prime 
            let child = document.createElement("div")
            child.setAttribute("id", id)
            parent.appendChild(child)
            document.getElementById(id).innerHTML = cb[i][numbr];
            prime += 1
        }
    }
};

let listNextFive = (min, max, cb) => {
    let prime = 6
    for(let i = min; i < max; i++ ){
        for(let j = 0; j < 4; j++){
            let numbr = j + ''
            let id = 'specific' + prime 
            document.getElementById(id).innerHTML = cb[i][numbr];
            prime += 1
        }
    }
};

let onSearch = (cb) => {
    let gameName = document.getElementById("searchbar").value 
    console.log(gameName)
    json(gameName).then((parsedJson) => {
        let list = parsedJson.streams.map((element)=> {
            return {
                '0': element.channel.display_name, 
                '1': element.game,
                '2': element.viewers,
                '3': element.channel.description,
                '4': element.preview.medium
            }
        })
        cb(listMin, listMax, list)
    })   
};

let onNext = () => {
    if(listMax !== 50) {
        listMin = listMax;
        listMax += 5;
        onSearch(listNextFive)
    }
};

let onPrevious = () =>{
    if (listMin !== 0){
        listMax -= 5
        listMin -= 5
        onSearch(listNextFive)
    }
}
