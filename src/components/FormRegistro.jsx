// src/components/FormRegistro.jsx
import { useState, useMemo } from 'react'
import {
  Paper, Box, TextField, Button, Typography, Stack
} from '@mui/material'
import Grid from '@mui/material/Grid' // Grid clásico (v1), compatible en tu MUI

export default function FormRegistro() {
  const [data, setData] = useState({
    name: '',
    breed: '',
    age: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const nameError = useMemo(() => data.name.length > 0 && data.name.length < 2, [data.name])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí podrías enviar al backend; de momento mostramos por consola
    console.log('Registro enviado:', data)
    alert(`Registro enviado:\n${JSON.stringify(data, null, 2)}`)
    // Si quieres limpiar tras enviar:
    // setData({ name:'', breed:'', age:'', description:'' })
  }

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Registro del animal
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth required
              label="Nombre"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={nameError}
              helperText={nameError ? 'Mínimo 2 caracteres' : ' '}
              inputProps={{ maxLength: 40 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Raza"
              name="breed"
              value={data.breed}
              onChange={handleChange}
              inputProps={{ maxLength: 40 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Edad (años)"
              name="age"
              value={data.age}
              onChange={handleChange}
              inputProps={{ min: 0, max: 50 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth multiline minRows={3}
              label="Descripción"
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Notas, carácter, cuidados…"
            />
          </Grid>

          <Grid item xs={12}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button type="submit" variant="contained">Guardar</Button>
              <Button
                type="button" variant="outlined"
                onClick={() => setData({ name:'', breed:'', age:'', description:'' })}
              >
                Limpiar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Vista previa "en vivo" */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Vista previa</Typography>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography><strong>Nombre:</strong> {data.name || '—'}</Typography>
          <Typography><strong>Raza:</strong> {data.breed || '—'}</Typography>
          <Typography><strong>Edad:</strong> {data.age || '—'}</Typography>
          <Typography sx={{ mt: 1 }}><strong>Descripción:</strong></Typography>
          <Typography>{data.description || '—'}</Typography>
        </Paper>
      </Box>
    </Paper>
  )
}
