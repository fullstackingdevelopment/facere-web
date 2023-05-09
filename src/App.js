import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import './App.css';

function App() {
/*
  const [token, setToken] = useState(false);

  if (!token) return <Login setToken={setToken}/>
  
  async function loginUser(credentials) {
    const url = 'https://gmdevapi.com/api/Mongo';
    return fetch(url).then((r) => {
      return r.json()
    }).then((d) => {
      console.log(d)
    }).catch(e => console.log(e))
   }
  function test() {
    loginUser()
  }*/
  return (
    <div className="App">
      {/*loginState ? <Login loginState={loginState} setLoginState={setLoginState
      }/> : 
    <Main loginStateManager={setLoginState}/>*/}
      {/*<BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/main' element={<Main/>}/>
        </Routes>
      </BrowserRouter>*/}
      <button onClick={() => console.log('hello world')}>aa</button>
    </div>
  );
}

export default App;
