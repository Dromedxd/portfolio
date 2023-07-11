import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import ReactPlayer from 'react-player';
import Link from '@mui/material/Link';

import './../../index.css';
import data from './pageContentText.json';

function parseContent(jsonData) {
  const homeData = jsonData.find((item) => item.IdContent === 'home');
  const { contenido, gitLink } = homeData;

  return {
    contenido,
    gitLink,
  };
}

const parsedContent = parseContent(data);
const contentSplit = parsedContent.contenido.split('/separator/');
const djangoUrl =
  'https://drive.google.com/uc?export=download&id=1USrLdtvduIR8r9cXGpvQaOATr53KNk3R';

function linkToVideo(url) {
  const videoURL = url;
  return <ReactPlayer url={videoURL} controls />;
}

const djangoVideo = linkToVideo(djangoUrl);

function Home() {
  const skills = [
    { name: 'Java', value: 75 },
    { name: 'Python', value: 90 },
    { name: 'PHP', value: 50 },
    { name: 'MySQL', value: 80 },
    { name: 'TypeScript', value: 75 },
    { name: 'HTML5', value: 95 },
    { name: 'ReactJS', value: 60 },
    { name: 'Django', value: 40 },
    { name: 'CSS', value: 80 },
  ];

  return (
    <Box pt={2}>
      <Grid container spacing={2}>
        <Grid item xs={1} />
        <Grid item xs={7} sm={7}>
          <Box boxShadow={4} p={2}>
            <Box pb={2}>
              <Typography variant="h3">Home</Typography>
            </Box>
            {contentSplit.map((content, index) => (
              <Typography key={index} sx={{ marginTop: 1 }}>
                {content}
              </Typography>
            ))}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{ marginTop: 4 }}
            >
              {djangoVideo}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Box boxShadow={4} p={2}>
            <Typography variant="h4">Abilities</Typography>
            {skills.map((skill) => (
              <Box key={skill.name} width="100%" mt={1}>
                <Typography>{skill.name}</Typography>
                <LinearProgress variant="determinate" value={skill.value} />
              </Box>
            ))}
          </Box>
          <Box boxShadow={4} p={2} sx={{ marginTop: 4 }}>
            <Typography variant="h4">Links</Typography>
            <Link
              href={'https://github.com/Dromedxd/'}
              target="_blank"
              rel="noopener"
            >
              <Typography sx={{ marginTop: 2 }}>{'Github'}</Typography>
            </Link>

            <Link
              href={
                'https://www.linkedin.com/in/alexander-van-den-heuvel-cabeza-866a64276/'
              }
              target="_blank"
              rel="noopener"
            >
              <Typography sx={{ marginTop: 2 }}>{'Linkedin'}</Typography>
            </Link>
            <Link
              href={
                'https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=7677177483048273746&codigo=21eeb962-99a7-48fa-bbd2-2903d43f7e82'
              }
              target="_blank"
              rel="noopener"
            >
              <Typography sx={{ marginTop: 2 }}>{'InfoJobs'}</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
