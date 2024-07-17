import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemIcon, ListItemText, CssBaseline, Box } from '@mui/material';
import EditableTable from './Components/EditableTable';
import { Home, Settings, Info } from '@mui/icons-material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Setting from './pages/Setting';


const drawerWidth = 240;

// const AppBarCustom = styled(AppBar)({

//   backgroundColor: '#3f51b5',

//   color: 'white',

//   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',

// });

// const BoxCustom = styled(Box)({

//   backgroundColor: '#f5f5f5',

//   padding: '20px',

// });

// // @ts-ignore
// const ListItemButtonCustom = styled(ListItemButton)({

//   '&:hover': {

//     backgroundColor: '#e0e0e0',

//   },

// });

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" noWrap >
              Mon Application React
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Accueil" />
              </ListItemButton>

              <ListItemButton component={Link} to="/about">
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText primary="À propos" />
              </ListItemButton>

              <ListItemButton component={Link} to="/setting">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Paramètres" />
              </ListItemButton>

            </List>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Routes>

            <Route path="/" element={<EditableTable />} />

            <Route path="/about" element={<About />} /> 

            <Route path="/setting" element={<Setting />} />

          </Routes>
    
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;