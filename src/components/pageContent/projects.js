import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import './../../index.css';
import data from './pageContentText.json';
import Link from '@mui/material/Link';

const djangoUrl =
  'https://drive.google.com/uc?export=download&id=1USrLdtvduIR8r9cXGpvQaOATr53KNk3R';

const javaGameUrl =
  'https://drive.google.com/uc?export=download&id=18pHYhMYvvBRQb6qabzEyglHxUUu91RtC';

function parseContent(jsonData) {
  const projectsData = jsonData.find((item) => item.IdContent === 'projects');
  const { contenido, urlDjango, urlJava } = projectsData;

  return {
    contenido,
    urlDjango,
    urlJava,
  };
}

function linkToVideo(url) {
  const videoURL = url;
  return <ReactPlayer url={videoURL} controls />;
}

const parsedContent = parseContent(data);
const contentSplit = parsedContent.contenido.split('/separator/');
const djangoVideo = linkToVideo(djangoUrl);
const javaGameVideo = linkToVideo(javaGameUrl);

function Projects() {
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
                Projects
              </Typography>

              <Typography>{contentSplit[0]}</Typography>
              <Typography variant="h5">{contentSplit[1]}</Typography>
              {<Typography>{contentSplit[2]}</Typography>}
              {djangoVideo}
              <Link
                href={parsedContent.urlDjango}
                target="_blank"
                rel="noopener"
              >
                {parsedContent.urlDjango}
              </Link>
              <Typography variant="h5">{contentSplit[3]}</Typography>
              {<Typography>{contentSplit[4]}</Typography>}
              {javaGameVideo}
              <Link href={parsedContent.urlJava} target="_blank" rel="noopener">
                {parsedContent.urlJava}
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
