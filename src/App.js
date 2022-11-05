import { useState,useEffect } from 'react'
import { Octokit } from "@octokit/core";
import './App.css';
import TokenProvider from './token-provider/TokenProvider'
import UserCommits from './user-commits/UserCommits'
import { fetchCommits } from './apis';

function App() {
  
  
  // const [loading,setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [commits,setCommits] = useState([]);
  
  useEffect(()=>{
    const readValue = sessionStorage['gitToken'];
    if(readValue){
      console.log("i am called")
      fetchCommits(setCommits,readValue)
    }
  },[token])

  return (
    <div className="App">
      <header className="App-header">
        Repo commits
      </header>
      {commits.length>0? <UserCommits token={token} setCommits={setCommits} commits={commits}/> : <TokenProvider setToken={setToken}/>}
    </div>
  );
}

export default App;
