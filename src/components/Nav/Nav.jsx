import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import logoBanco from '../../assets/CIB_BIG.svg'

const Nav = () => {
  return (
    <Stack bgcolor='primary.main' direction='row' padding='1pc' justifyContent='space-between'>
        <Box component='img' src={logoBanco} sx={{
            width: '17pc',
        }}/>
        <Stack direction='row' spacing={2}>
            <Button variant='outlined' color='secondary'>Movimientos</Button>
            <Button variant='contained' color='secondary'>Transferir</Button>
        </Stack>
    </Stack>
  )
}

export default Nav
