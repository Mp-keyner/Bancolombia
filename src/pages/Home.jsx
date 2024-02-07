import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Stack, Typography } from '@mui/material'

const Home = () => {
  const {DataUser} = useContext(AppContext)
  console.log(DataUser)
  return (
    <Stack justifyContent='center' alignItems='center' height='100vh'>
      <Typography variant='h1'>Name: {DataUser.name}</Typography>
      <Typography variant='h1'>Account: {DataUser.account}</Typography>
      <Typography variant='h1'>Money: {DataUser.money}</Typography>
    </Stack>
  )
}

export default Home
 