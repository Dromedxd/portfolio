import React from 'react';
import { useGlobalState } from './globalStates';
import { Typography } from '@mui/material';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './components/head';
import Home from './components/pageContent/home';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [content] = useGlobalState('content');
  content.toString;
  return (
    <>
      <Typography>{content}</Typography>
      <Head />
      <Home />
    </>
  );
}

root.render(<App />);
