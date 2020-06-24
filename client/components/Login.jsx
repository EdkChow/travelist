import React, { useState } from 'react';
import List from './List';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState(false);
  const [signup, setSignup] = useState(false);
  const [list, setList] = useState([]);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    e.target.reset();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };
    fetch('/login', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.verify);
        if (res.verify) {
          setVerify(true);
          console.log('res.countries: ***', res.countries);
          setList([...res.countries]);
        }
      });
      // console.log('list: ***', list);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    e.target.reset();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };
    fetch('/signup', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.signup);
        if (res.signup) {
          setSignup(true);
          setList([res.countries]);
        }
      });
  };

  return (
    <div>
      <h3>Sign up</h3>
      <form onSubmit={handleSignup}>
        <input type="text" name="username" placeholder="username" onChange={handleUserChange} />
        <input type="password" name="password" placeholder="password" onChange={handlePassChange} />
        <input type="submit" value="submit" />
      </form>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="username" onChange={handleUserChange} />
        <input type="password" name="password" placeholder="password" onChange={handlePassChange} />
        <input type="submit" value="submit" />
      </form>
      <div>
        <List verify={verify} signup={signup} list={list} />
      </div>
    </div>
  );
}

export default Login;
