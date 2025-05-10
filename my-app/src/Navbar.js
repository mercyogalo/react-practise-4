import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { Link, useLocation } from 'react-router-dom';


export default function NavTabs() {
  const location = useLocation();
  const currentPath = location.pathname;

  const paths = ['/', '/about', '/contact'];
  const currentTab = paths.indexOf(currentPath);

  return (
    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>

      <Tabs value={currentTab} aria-label="nav tabs example">

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      </Tabs>

     


    </Box>
  );
}
