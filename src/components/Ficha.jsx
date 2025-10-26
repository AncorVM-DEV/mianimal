// src/components/Ficha.jsx
import { useState } from 'react'
import { Stack, Typography, Button, Avatar, Paper } from '@mui/material'

export default function Ficha() {
  const [rascaditas, setRascaditas] = useState(0)

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h5" component="h2">Mi animal favorito</Typography>

        <Avatar
          alt="Foto de un zorro mirando a la cámara"
          src="/zorro.jpg"
          sx={{ width: 180, height: 180 }}
        />

        <Typography aria-live="polite">Rascaditas: {rascaditas}</Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => setRascaditas(r => r + 1)}>
            ¡Ráscame!
          </Button>
          <Button variant="outlined" onClick={() => setRascaditas(0)}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
