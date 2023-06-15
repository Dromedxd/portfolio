import React from 'react';
import Logo from './logoComponent';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import './../index.css';

const grey = 'rgb(51, 51, 51)';
const white = 'rgb(196, 193, 193)';

function head() {
  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        <Grid
          xs={1}
          sm={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Logo />
        </Grid>
        <Grid xs={10} sm={10}>
          <AppBar position="static" sx={{ backgroundColor: grey }}>
            <Toolbar
              style={{ color: grey }}
              sx={{
                '& .MuiButton-root': {
                  fontSize: 22,
                  margin: 2,
                  color: white,
                  '&:hover': {
                    backgroundColor: white,
                    color: grey,
                  },
                },
              }}
            >
              <Button color="inherit">Inicio</Button>
              <Button color="inherit">React Components</Button>
              <Button color="inherit">Proyectos</Button>
              <Button color="inherit">Contacto</Button>
              <Button color="inherit">Información</Button>
              <Button color="inherit">Experiencia Laboral</Button>
              <Button color="inherit">Currículum</Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Box>
  );
}

export default head;
