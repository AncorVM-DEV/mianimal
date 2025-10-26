import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme, Container, Stack } from '@mui/material'
import App from './App.jsx'
import Appgrid from './Appgrid.jsx'

const theme = createTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 4 }}>
        <Stack spacing={4}>
          <App />
          <Appgrid />
        </Stack>
      </Container>
    </ThemeProvider>
  </React.StrictMode>
)
