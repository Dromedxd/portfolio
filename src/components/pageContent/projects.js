import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';

import './../../index.css';
import data from './pageContentText.json';

const djangoUrl =
  'https://drive.google.com/uc?export=download&id=1USrLdtvduIR8r9cXGpvQaOATr53KNk3R';

const javaGameUrl =
  'https://drive.google.com/uc?export=download&id=18pHYhMYvvBRQb6qabzEyglHxUUu91RtC';

const codeIgniterURL =
  'https://drive.google.com/uc?export=download&id=1GDGihSILI7UuA1LBUBPNMs-LNhLh97MS';

const StyledContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: 2,
});

function parseContent(jsonData) {
  const projectsData = jsonData.find((item) => item.IdContent === 'projects');
  const { contenido, urlDjango, urlJava, urlCodeIgniter } = projectsData;

  return {
    contenido,
    urlDjango,
    urlJava,
    urlCodeIgniter,
  };
}

function linkToVideo(url) {
  const videoURL = url;
  return (
    <StyledContainer>
      <ReactPlayer url={videoURL} controls style={{ maxWidth: '100%' }} />
    </StyledContainer>
  );
}

const parsedContent = parseContent(data);
const contentSplit = parsedContent.contenido.split('/separator/');
const djangoVideo = linkToVideo(djangoUrl);
const javaGameVideo = linkToVideo(javaGameUrl);
const codeIgniterVideo = linkToVideo(codeIgniterURL);

function Projects() {
  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Box boxShadow={8}>
            <Box padding={2}>
              <Typography variant="h3" paddingBottom={2}>
                Projects
              </Typography>

              <Typography>{contentSplit[0]}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} sm={1}></Grid>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={5} sm={5}>
          <Box p={2} sx={{ marginTop: 2 }} boxShadow={8}>
            <Typography variant="h5" align={'center'}>
              {contentSplit[1]}
            </Typography>

            {
              <Typography
                align={'center'}
                sx={{ marginTop: 2, marginBottom: 2 }}
              >
                {contentSplit[2]}
              </Typography>
            }

            {djangoVideo}
            <Link href={parsedContent.urlDjango} target="_blank" rel="noopener">
              <Typography sx={{ marginTop: 2 }} align={'center'}>
                {parsedContent.urlDjango}
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={5} sm={5}>
          <Box p={2} sx={{ marginTop: 2 }} boxShadow={8}>
            <Typography variant="h5" align={'center'}>
              {contentSplit[3]}
            </Typography>
            {
              <Typography
                sx={{ marginTop: 2, marginBottom: 2 }}
                align={'center'}
              >
                {contentSplit[4]}
              </Typography>
            }
            {javaGameVideo}
            <Link href={parsedContent.urlJava} target="_blank" rel="noopener">
              <Typography sx={{ marginTop: 2 }} align={'center'}>
                {parsedContent.urlJava}
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={3.5} sm={3.5}></Grid>

        <Grid item xs={5} sm={5}>
          <Box p={2} sx={{ marginTop: 2 }} boxShadow={8}>
            <Typography variant="h5" align={'center'}>
              {contentSplit[5]}
            </Typography>
            {
              <Typography
                sx={{ marginTop: 2, marginBottom: 2 }}
                align={'center'}
              >
                {contentSplit[6]}
              </Typography>
            }
            {codeIgniterVideo}
            <Link
              href={parsedContent.urlCodeIgniter}
              target="_blank"
              rel="noopener"
            >
              <Typography sx={{ marginTop: 2 }} align={'center'}>
                {parsedContent.urlCodeIgniter}
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
