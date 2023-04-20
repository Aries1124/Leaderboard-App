import React, { useEffect } from 'react';
import Header from './Header';
import logoPic from './images/logo.png'
import DisplayNames from './DisplayNames'
import { useState } from 'react';

function isRankHigher(summ1, summ2) {
  const rankValues = [
    ["UNRANKED", -1],
    ["IRON", 0],
    ['BRONZE', 1],
    ['SILVER', 2],
    ['GOLD', 3], 
    ['PLATINUM', 4],
    ['DIAMOND', 5], 
    ['MASTER', 6],
    ['GRANDMASTER', 7],
    ['CHALLENGER', 8],
    ['IV', 0],
    ['III', 1],
    ['II', 2],
    ['I', 3]
  ] 
  const rankMap = new Map(rankValues)
  let summ1Info = summ1.find((summ)=> {return Object.hasOwn(summ,"queueType") && summ.queueType==='RANKED_SOLO_5x5'})
  let summ2Info = summ2.find((summ)=> {return Object.hasOwn(summ,"queueType") && summ.queueType==='RANKED_SOLO_5x5'})
  if(summ1Info.tier != summ2Info.tier) {
    return rankMap.get(summ1Info.tier) > rankMap.get(summ2Info.tier); 
  }
  else if (summ1Info.rank != summ2Info.rank)
    return rankMap.get(summ1Info.rank) > rankMap.get(summ2Info.rank); 
  else if(summ1Info.leaguePoints != summ1Info.leaguePoints)
    return summ1Info.leaguePoints > summ2Info.leaguePoints;
  else 
    return summ1[0].summonerLevel > summ2[0].summonerLevel;  
}

function Leaderboard () {
  const [playerList, setPlayerList] = useState([]);

  function addName(summonerInfo, list) {
    let summoner=summonerInfo[0]
    if(playerList.findIndex((obj)=> (obj[0].name == summoner.name)) !== -1 || Object.hasOwn(summoner, "status") ) {
      alert('Summoner already in list or invalid')
      return; 
    }
   
    let ind = playerList.findIndex( (obj)=> (isRankHigher(summonerInfo, obj)) )
    console.log(summoner.name)
    if(ind==-1)
      list.push(summonerInfo)
    else
      list.splice(ind, 0, summonerInfo); 
  }


  function Submitted(e) {
     e.preventDefault(); 
    const name = e.target[0].value;  
    let summoner; 
    fetch('/' + name).then(newName => newName.json()).then((summoner) => {
      let updatedList = playerList.slice()
      addName(summoner, updatedList)
      setPlayerList(updatedList)
      console.log(updatedList)
    })
   
  }
  
 return <>
  
    <Header/> 
    <img src={logoPic} className="rounded mx-auto d-block" width ="300" />
    <br></br>

    <form onSubmit={(e)=> Submitted(e)} className="d-flex"  >
        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Enter"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    
    {/* <DisplayNames />  */}

    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Summoner Name</th>
          <th scope="col">Rank </th>
          <th scope="col">Summoner Level</th>
        </tr>
      </thead>
      <tbody>

      {playerList.map((summonerInfo, ind) => {
        let summoner = summonerInfo[0]
        let summonerRankInfo = summonerInfo.find((info, ind) => {
          return Object.hasOwn(info, "queueType") && (info.queueType === 'RANKED_SOLO_5x5')
        })
        console.log(summoner.name, summoner.summonerLevel)
        
        if(ind===0) {
          return (
            <tr className= "table-warning">
              <th key="ind" scope="row">{ind+1}</th>
              <td>{summoner.name}</td>
              <td> {summonerRankInfo.tier + ' ' + summonerRankInfo.rank + ' ' + summonerRankInfo.leaguePoints + ' LP'}</td>
              <td>{summoner.summonerLevel}</td>
            </tr>
          )
        }

        else if (ind==1) {
          return (
            <tr className= "table-danger">
              <th key="ind" scope="row">{ind+1}</th>
              <td>{summoner.name}</td>
              <td> {summonerRankInfo.tier + ' ' + summonerRankInfo.rank + ' ' + summonerRankInfo.leaguePoints + 'LP'}</td>
              <td>{summoner.summonerLevel}</td>
            </tr>
          )
        }
        else if (ind == 2) {
          return (
            <tr className= "table-success">
              <th key="ind" scope="row">{ind+1}</th>
              <td>{summoner.name}</td>
              <td> {summonerRankInfo.tier + ' ' + summonerRankInfo.rank + ' ' + summonerRankInfo.leaguePoints + 'LP'}</td>
              <td>{summoner.summonerLevel}</td>
            </tr>
          )
        }
        
        return (
          <tr className= "table-info">
            <th key="ind" scope="row">{ind+1}</th>
            <td>{summoner.name}</td>
            <td> {summonerRankInfo.tier + ' ' + summonerRankInfo.rank + ' ' + summonerRankInfo.leaguePoints + 'LP'}</td>
            <td>{summoner.summonerLevel}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  </>
}



export default Leaderboard; 
