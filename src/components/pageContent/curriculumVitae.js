import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import { Document, Page, pdfjs } from 'react-pdf';
import Link from '@mui/material/Link';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import './../../index.css';
import data from './pageContentText.json';

import pdfFile from '../images/CV_Alexander.pdf';

function parseContent(jsonData) {
  const contenidoHome = jsonData.find(
    (item) => item.IdContent === 'curriculumVitae'
  ).contenido;
  return <Typography paddingBottom={2}>{contenidoHome}</Typography>;
}

const content = parseContent(data);
//drive.google.com/file/d/18deEx7Q7rxHxAdcVQYvNWRY7vyOZ7yP7/view?usp=sharing
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CurriculumVitae() {
  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={2} paddingBottom={2}>
        <Grid xs={1}></Grid>
        <Grid xs={10} sm={10}>
          <Box
            sx={{
              boxShadow: '-4px -2px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Box padding={2}>
              <Typography variant="h3" paddingBottom={2}>
                CurriculumVitae
              </Typography>
            </Box>
            <Box padding={2}>
              {
                <Link
                  href={
                    'https://drive.google.com/file/d/18deEx7Q7rxHxAdcVQYvNWRY7vyOZ7yP7/view?usp=sharing'
                  }
                  target="_blank"
                  rel="noopener"
                >
                  <Typography>{content}</Typography>
                </Link>
              }
            </Box>

            <Grid
              container
              spacing={2}
              sx={{ marginLeft: '25%' }}
              paddingBottom={2}
            >
              <Document file={pdfFile}>
                <Page pageNumber={1}></Page>
              </Document>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CurriculumVitae;
