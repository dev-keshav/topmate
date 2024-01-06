import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', bgcolor: '#B4B0D8', height: '20vh', width: '20vw', borderRadius: '15px' }}>
        <Typography variant='h4' sx={{ color: '#2A2C7C'}} mt={2}>Foundation</Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}