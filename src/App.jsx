import { useState } from 'react'
import { Stack, Typography, Button, Avatar } from '@mui/material'

export default function App() {
  const [rascaditas, setRascaditas] = useState(0)

  const handleRasca = () => setRascaditas(r => r + 1)
  const handleReset = () => setRascaditas(0)

  return (
    <Stack minHeight="100dvh" alignItems="center" justifyContent="center" spacing={3}>
      <Typography variant="h3" component="h1">
        Mi animal favorito
      </Typography>

      {/* Imagen accesible del animal (coloca /public/zorro.jpg) */}
      <Avatar
        alt="Foto de un zorro mirando a la cámara"
        src="/zorro.jpg"
        sx={{ width: 220, height: 220 }}
      />

      {/* Estado con lectura accesible */}
      <Typography aria-live="polite">Rascaditas: {rascaditas}</Typography>

      {/* Botones con layout responsive usando breakpoints */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1.5, sm: 2, md: 3 }}
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100%' }}
      >
        <Button variant="contained" size="large" onClick={handleRasca}>
          ¡Ráscame!
        </Button>

        <Button variant="outlined" size="medium" onClick={handleReset}>
          Reset
        </Button>

        <Button variant="text" size="small" disabled>
          Deshabilitado
        </Button>
      </Stack>
    </Stack>
  )
}
