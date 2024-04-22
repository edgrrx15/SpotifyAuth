import React from 'react'

const CLIENT_ID = '927c301ef92a46c1a0bc285a1421acaa';
const REDIRECT_URI = encodeURIComponent('http://localhost:5173/callback');
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;

const Login = () => {
  return (
    <div>Logis</div>
  )
}

export default Login