import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';

const LogoutButton = () => {
    const {logout} = useAuth0()
  return (
    <div>
        <Typography onClick={()=>logout()}> Log Out</Typography>
    </div>
  )
}

export default LogoutButton