const express = require('express')
const app = express()

app.listen(2000)

app.get('/*', (req, res) => 
{ 
  const userID = req.originalUrl.substring(1); 
  const urlName = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
  const APIKey = 'RGAPI-71aabf8b-c95e-4dcd-8633-6e5ff13ab93b'
  const url = urlName + userID + '?api_key=' + APIKey; 
  fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      res.send(data)
      res.end()
    }).catch((err) => {
      console.warn('Something went wrong.', err);
});
}
); 

app.post('/api', (req, res) => 
{ res.send('hello world 2')}
); 
