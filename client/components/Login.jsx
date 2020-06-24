import React, { useState } from 'react';
import List from './List';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState(false);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };
    fetch('/login', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.verify);
        if (res.verify) setVerify(true);
      });
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="username" onChange={handleUserChange} />
        <input type="password" name="password" placeholder="password" onChange={handlePassChange} />
        <input type="submit" value="submit" />
      </form>
      
      <ul>
        {/* <List verify={verify} submit={submit} destination={destination} /> */}
      </ul>
    </div>
  );
}

export default Login;
