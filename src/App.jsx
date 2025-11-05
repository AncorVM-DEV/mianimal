
import { Container, Typography, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'         
import Ficha from './components/Ficha.jsx'
import FormRegistro from './components/FormRegistro.jsx'

export default function App() {

  const animals = [
    { id: 1, animal: 'perro',   atribute: 'bello',    imageUrl: '/perro.jpg',    imageSize: 150, description: 'Perro callejero' },
    { id: 2, animal: 'loro',    atribute: 'hablador', imageUrl: '/pajaro.jpg',   imageSize: 150, description: 'Loro de la jungla' },
    { id: 3, animal: 'tortuga', atribute: 'perezosa', imageUrl: '/tortuga.jpg', imageSize: 150, description: 'Tortuga' }
  ]

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Ficha
            animal="zorro"
            atribute="curioso"
            imageUrl="/zorro.jpg"   
            imageSize={180}
            description="El zorro de la portada"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <FormRegistro />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Otras fichas
      </Typography>
      <Grid container spacing={3}>
        {animals.map(a => (
          <Grid item xs={12} sm={6} md={4} key={a.id}>
            <Ficha
              animal={a.animal}
              atribute={a.atribute}
              imageUrl={a.imageUrl}
              imageSize={a.imageSize}
              description={a.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
