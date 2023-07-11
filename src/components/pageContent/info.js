import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';

import './../../index.css';
import data from './pageContentText.json';
import rootImg from '../images/tree.png';

function parseContent(jsonData) {
  const infoData = jsonData.find((item) => item.IdContent === 'info');
  const { contenido, gitLink } = infoData;

  return {
    contenido,
    gitLink,
  };
}

const parsedContent = parseContent(data);
const contentSplit = parsedContent.contenido.split('\n');

function Info() {
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
                Info
              </Typography>
              <Typography>{contentSplit[0]}</Typography>
              <Typography sx={{ marginTop: 2 }}>{contentSplit[1]}</Typography>
              <Link href={parsedContent.gitLink} target="_blank" rel="noopener">
                <Typography sx={{ marginTop: 2 }}>
                  {parsedContent.gitLink}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={5}>
          <CardMedia
            boxShadow={3}
            p={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
            component="img"
            src={rootImg}
            alt="tree"
            style={{
              width: '400px',
              height: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Info;
