import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';
import React from 'react'

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
  return (
    <div>
        <Typography onClick={()=>loginWithRedirect()}> Log In</Typography>
    </div>
  )
}

export default LoginButton;