import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface MenuItemProps {
  text: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon, onClick }) => {
  return (
    <ListItem button onClick={onClick} >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MenuItem;