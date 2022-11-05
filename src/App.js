import { useState } from 'react'
import './App.css';
import TokenProvider from './token-provider/TokenProvider'

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        Repo commits
      </header>
      {token? <></> : <TokenProvider setToken={setToken}/>}
      <TokenProvider setToken={setToken}/>
    </div>
  );
}

export default App;
