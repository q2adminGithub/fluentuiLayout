// import ui libs
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import pages
import HomePage from './pages/Home';
import DataPage from './pages/Data';
import ResultPage from './pages/Result';
import SettingsPage from './pages/Settings';

// import components
import Layout from './components/Layout/Layout';

// define typescript interface
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='layout' element={<Layout />} />
        <Route path='/' element={<HomePage />} />
        <Route path='data' element={<DataPage />} />
        <Route path='results' element={<ResultPage />} />
        <Route path='settings' element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>    
  );
};

export default Application;