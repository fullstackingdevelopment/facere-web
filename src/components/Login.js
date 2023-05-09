import Header from "./Header";
import { useState } from "react";
import propTypes from 'prop-types';
/*
 async function loginUser(credentials) {
  const url = 'https://gmdevapi.com/api/Mongo';
  return fetch(url)
  .then((r) => r.json())
  .catch(e => console.log(e))
 }

function Login(setToken) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

   const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <>
      <Header/>
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}
*/
return (
  <>
    <Header/>
    <form placeholder='test'/>
  </>
)

Login.propTypes = {
  setToken: propTypes.func.isRequired
}

export default Login;