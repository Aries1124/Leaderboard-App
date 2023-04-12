// const cool = "sdfdsf"
// fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
//   .then(res => res.json()).then(data => cool = data)



// let summoner; 
// fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Aries1124?api_key=RGAPI-71aabf8b-c95e-4dcd-8633-6e5ff13ab93b').then((response) => {
// 	// The API call was successful!
// 	return response.json();
// }).then((data) => {
//   summoner = data; 
// 	// console.log(data);
// }).catch((err) => {
// 	console.warn('Something went wrong.', err);
// });

// console.log({summoner})

// async function getData(url) {
//   const response = await fetch(url);

//   return response.json();
// }

// const data = await getData('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Aries1124?api_key=RGAPI-71aabf8b-c95e-4dcd-8633-6e5ff13ab93b');

// console.log({ data })

let jsondata;   
const userID = "Aries1124"
const urlName = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
const APIKey = 'RGAPI-71aabf8b-c95e-4dcd-8633-6e5ff13ab93b'
const url = urlName + userID + '?api_key=' + APIKey; 

fetch(url).then(
        function(u){ 
          return u.json();}
      ).then(
        function(json){
          
          jsondata = JSON.parse(json);
          console.log(jsondata); 
        }
      )
// let parsed = JSON.parse(jsondata)
// console.log(parsed)
