import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import './../../index.css';
import data from './pageContentText.json';
import exlImg from '../images/englishexamlab.jpg';

function parseContent(jsonData) {
  const workData = jsonData.find((item) => item.IdContent === 'workExperience');
  const { contenido } = workData;

  return {
    contenido,
  };
}

const parsedContent = parseContent(data);
const contentSplit = parsedContent.contenido.split('/separator/');

function WorkExperience() {
  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} sm={10}>
          <Box
            sx={{
              boxShadow: '-4px -2px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Box padding={2}>
              <Typography variant="h3" paddingBottom={2}>
                Work Experience
              </Typography>
              <Typography>{contentSplit[0]}</Typography>
              <Grid container spacing={2} alignItems="center" paddingTop={5}>
                <Grid item xs={4} sm={3}>
                  <CardMedia
                    component="img"
                    src={exlImg}
                    alt="React logo"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Grid>
                <Grid item xs={8} sm={9}>
                  <Typography>{contentSplit[1]}</Typography>
                  <Typography>{contentSplit[2]}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkExperience;
