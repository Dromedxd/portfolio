import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import { Document, Page } from 'react-pdf';
import './../../index.css';
import data from './pageContentText.json';

const pdf = './CV_Alexander.pdf';

function parseContent(jsonData) {
  const contenidoHome = jsonData.find(
    (item) => item.IdContent === 'curriculumVitae'
  ).contenido;
  return <Typography paddingBottom={2}>{contenidoHome}</Typography>;
}

const content = parseContent(data);

function CurriculumVitae() {
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
                curriculumVitae
              </Typography>
            </Box>
            {content}
            <Box height={500}>
              <Document file={pdf}>
                <Page pageNumber={1} width={800} />
              </Document>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CurriculumVitae;
