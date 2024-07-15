import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

const Settings = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Paramètres</h1>      
        <p>Page de paramètres pour configurer l'application.</p>
      </Grid>
      <Grid item xs={6}>
        <TextField label="Nom d'utilisateur" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Mot de passe" variant="outlined" type="password" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Enregistrer les modifications
        </Button>
      </Grid>
    </Grid>
  );
};

export default Settings;