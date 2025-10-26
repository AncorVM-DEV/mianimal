import { Container } from '@mui/material'
import Grid from '@mui/material/Grid' // Grid clásico (v1)
import Ficha from './components/Ficha.jsx'
import FormRegistro from './components/FormRegistro.jsx'

export default function App() {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Ficha />
        </Grid>
        <Grid item xs={12} md={7}>
          <FormRegistro />
        </Grid>
      </Grid>
    </Container>
  )
}
