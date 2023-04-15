const express = require('express')
const app = express()

app.listen(2000)

app.get('/*', (req, res) => 
{ 
  const userID = req.originalUrl.substring(1); 
  const urlName = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
  const APIKey = '' //must be obtained daily from RIOT Games API
  let url = urlName + userID + '?api_key=' + APIKey; 

  fetch(url).then((response) => {
    return response.json();
  }).then((data) => { 
    
    url = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + data.id +'?api_key=' + APIKey;  
    fetch(url).then((resp)=> resp.json()).then((resp)=>{
      if(resp.length==0) {
        resp = [{
          queueType: 'RANKED_SOLO_5x5',
          tier: 'UNRANKED',
          rank: 'UNRANKED',
          leaguePoints: 0,
          wins: 0,
          losses: 0,
          veteran: 0,
          inactive: 0,
          freshBlood: 0,
          hotStreak: 0
        }]
      }

      resp.unshift(data)
      console.log(resp)
      res.send(resp)

    })
    
  }).catch((err) => {
    console.warn('Something went wrong.', err);
  });
}
); 

