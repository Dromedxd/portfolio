import React from 'react';
import { useGlobalState } from './globalStates';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './components/head';
import Home from './components/pageContent/home';
import Contact from './components/pageContent/contact';
import CurriculumVitae from './components/pageContent/curriculumVitae';
import Info from './components/pageContent/info';
import Projects from './components/pageContent/projects';
import ReactComponents from './components/pageContent/reactComponents';
import WorkExperience from './components/pageContent/workExperience';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [viewValue] = useGlobalState('content');
  function setContent(view) {
    switch (view) {
      case 'home':
        return <Home />;
      case 'contact':
        return <Contact />;
      case 'curriculumVitae':
        return <CurriculumVitae />;
      case 'info':
        return <Info />;
      case 'projects':
        return <Projects />;
      case 'reactComponents':
        return <ReactComponents />;
      case 'workExperience':
        return <WorkExperience />;
      default:
        return <Home />;
    }
  }

  const content = setContent(viewValue);

  return (
    <>
      <Head />
      {content}
    </>
  );
}

root.render(<App />);
