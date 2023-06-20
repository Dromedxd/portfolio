import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';

import './../../index.css';
import data from './pageContentText.json';

function parseContent(jsonData) {
  const contenidoHome = jsonData.find(
    (item) => item.IdContent === 'home'
  ).contenido;
  return <Typography paddingBottom={2}>{contenidoHome}</Typography>;
}
const content = parseContent(data);

function Home() {
  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={1}></Grid>
        <Grid xs={10} sm={10}>
          <Box
            sx={{
              boxShadow: '-4px -2px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Box padding={2}>
              <Typography variant="h3" paddingBottom={2}>
                Home
              </Typography>
            </Box>
            {content}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
