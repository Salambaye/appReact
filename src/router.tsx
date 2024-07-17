import {  Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Settings from './pages/Setting';
import { Home } from '@mui/icons-material';

const Router = () => {
  return (
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/settings"  element={<Settings />} />
        
      </Routes>
  );
};

export default Router;