const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) =>{
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173/',
        clientId:'927c301ef92a46c1a0bc285a1421acaa',
        clientSecret: 'd1ae9e3866e847d9be6b71829f01c583'
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(()=>{
        res.sendStatus(400)
    })
})