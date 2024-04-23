import React, { useEffect, useState } from 'react'

function useAuth(code) {

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
    }, [code])
    



  return (
    <div>useAuth</div>
  )
}

export default useAuth