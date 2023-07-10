import React from 'react';
import Logo from './logoComponent';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { setGlobalState } from '../globalStates';
import './../index.css';

const grey = 'rgb(51, 51, 51)';
const white = 'rgb(196, 193, 193)';

function Head() {
  const handleButtonClick = (newcontent) => {
    setGlobalState('content', newcontent);
  };
  return (
    <Box sx={{ pt: 2, alignItems: 'center' }}>
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
        <Grid xs={3} sm={10}>
          <AppBar
            position="static"
            sx={{ backgroundColor: grey, alignItems: 'center' }}
          >
            <Toolbar
              style={{ color: grey }}
              sx={{
                '& .MuiButton-root': {
                  fontSize: 21,
                  margin: 2,
                  color: white,
                  '&:hover': {
                    backgroundColor: white,
                    color: grey,
                  },
                },
              }}
            >
              <Button color="inherit" onClick={() => handleButtonClick('home')}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('reactComponents')}
              >
                React Components
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('proyects')}
              >
                Proyects
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('contact')}
              >
                Contact
              </Button>
              <Button color="inherit" onClick={() => handleButtonClick('info')}>
                Info
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('workExperience')}
              >
                Work Experience
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('curriculumVitae')}
              >
                Curriculum vitae
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Head;
