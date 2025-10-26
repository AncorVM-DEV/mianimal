// src/Appgrid.jsx
import Grid from '@mui/material/Grid';   // Grid clásico (v1, estable en v5/v6/v7)
import { Button } from '@mui/material';

export default function Appgrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Button fullWidth variant="contained">1</Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Button fullWidth variant="contained">2</Button>
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <Button fullWidth variant="contained">3</Button>
      </Grid>
    </Grid>
  );
}
