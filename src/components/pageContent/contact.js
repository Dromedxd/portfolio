import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import data from './pageContentText.json';
import { useForm, ValidationError } from '@formspree/react';
import { FormControl, Button } from '@mui/material';

function parseContent(jsonData) {
  const contactInfo = jsonData.find((item) => item.IdContent === 'contact');
  const { contenido, email } = contactInfo;

  return { contenido, email };
}

const Contact = () => {
  const [state, handleSubmit] = useForm('mzblbbwb');

  if (state.succeeded) {
    return (
      <Grid container spacing={2}>
        <Grid xs={1}></Grid>
        <Grid xs={10} sm={10}>
          <Box
            padding={2}
            sx={{
              boxShadow: '-4px -2px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography>Email Sent Thank You!</Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }

  const content = parseContent(data);
  const contentSplit = content.contenido.split('/separator/');

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
                Contact
              </Typography>

              <Typography>
                {contentSplit[0]}
                <Typography variant="body1" fontWeight="bold" component="span">
                  {content.email}
                </Typography>
                {contentSplit[1]}
              </Typography>

              <FormControl
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  width: '100%',
                  style: {
                    color: 'rgb(196, 193, 193)',
                    marginTop: '1%',
                    marginBottom: '1%',
                  },
                }}
              >
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                    autoComplete: 'new-password', //disable autocomplete due to css
                  }}
                  fullWidth
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                    autoComplete: 'new-password', //disable autocomplete due to css
                  }}
                  fullWidth
                />
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone (Optional)"
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                    autoComplete: 'new-password', //disable autocomplete due to css
                  }}
                  fullWidth
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  InputLabelProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                  }}
                  InputProps={{
                    style: {
                      color: 'rgb(196, 193, 193)',
                      marginTop: '1%',
                      marginBottom: '1%',
                    },
                    autoComplete: 'new-password', //disable autocomplete due to css
                  }}
                  fullWidth
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Button
                  type="submit"
                  disabled={state.submitting}
                  sx={{ color: 'rgb(196, 193, 193)' }}
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
