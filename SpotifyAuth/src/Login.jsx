import React from 'react';
import { Container } from 'react-bootstrap';

const Login = () => {

  
const CLIENT_ID = '927c301ef92a46c1a0bc285a1421acaa';
const REDIRECT_URI = encodeURIComponent('http://localhost:5173/callback');
const SCOPE = 'user-read-email user-read-private user-library-read  user-top-read';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{minHeight: '100'}}>
      <a  className='btn btn-lg btn-success' href={AUTH_URL}>Login with Spotify</a>
    </Container>
  )
}

export default Login
