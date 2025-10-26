// src/components/Ficha.jsx
import { useState } from 'react'
import { Paper, Stack, Typography, Avatar, Button, Chip } from '@mui/material'

/**
 * Props:
 *  - animal (string)
 *  - atribute (string)  // ojo: "atribute" como en el enunciado
 *  - imageUrl (string)
 *  - imageSize (number)
 *  - description (string)
 */
export default function Ficha({ animal, atribute, imageUrl, imageSize = 150, description }) {
  const [rascaditas, setRascaditas] = useState(0)

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Stack spacing={1.5} alignItems="center">
        <Typography variant="h6" component="h3">
          {animal ?? 'Animal'}
        </Typography>

        <Chip label={atribute ?? '—'} variant="outlined" />

        <Avatar
          src={imageUrl}
          alt={`Foto de ${animal}`}
          sx={{ width: imageSize, height: imageSize }}
        />

        <Typography align="center" sx={{ minHeight: 48 }}>
          {description || 'Sin descripción'}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={() => setRascaditas(r => r + 1)}>
            ¡Ráscame!
          </Button>
          <Button variant="outlined" onClick={() => setRascaditas(0)}>
            Reset
          </Button>
        </Stack>

        <Typography aria-live="polite">Rascaditas: {rascaditas}</Typography>
      </Stack>
    </Paper>
  )
}
