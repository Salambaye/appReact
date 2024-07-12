import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, CssBaseline, Box } from '@mui/material';
import EditableTable from './Components/EditableTable';
import MenuItem from './Components/MenuItem';
import { Home, Settings, Info } from '@mui/icons-material';

const drawerWidth = 240;

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
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
            <MenuItem text="Accueil" icon={<Home />} onClick={() => console.log('Accueil')} />
            <MenuItem text="Paramètres" icon={<Settings />} onClick={() => console.log('Paramètres')} />
            <MenuItem text="À propos" icon={<Info />} onClick={() => console.log('À propos')} />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Tableau de données éditables
        </Typography>
        <EditableTable />
      </Box>
    </Box>
  );
};

export default App;