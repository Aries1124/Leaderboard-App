import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import logoPic from './images/logo.png'
import DisplayNames from './DisplayNames'
import { useState } from 'react';

function Leaderboard () {
  const [playerList, setPlayerList] = useState([]);

  function Submitted(e) {
     e.preventDefault(); 
    const name = e.target[0].value;  
    let summoner; 
    fetch('/' + name).then(newName => newName.json()).then((newName)=> (summoner = newName))
    let updatedList = playerList.slice()
    updatedList.push(name)
    setPlayerList(updatedList)

  }
  
 return <>
  
    <Header/> 
    <img src={logoPic} class="rounded mx-auto d-block" width ="300" />
    <br></br>

    <form onSubmit={(e)=> Submitted(e)} class="d-flex"  >
        <input class="form-control me-2" type="text" placeholder="Search" aria-label="Enter"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    
    <DisplayNames/> 
    {useEffect(() => {}, [playerList]) }
    <h1> {playerList}  </h1>
    
  </>
}



export default Leaderboard; 