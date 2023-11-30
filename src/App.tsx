import '@/App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { themeSettings } from './theme'
import { Box, CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '@/pages/navbar/index'
import Dashboard from "@/pages/dashboard";
import Prediction from './pages/predection'

function App() {

  const theme = useMemo( () => createTheme(themeSettings), [])

  const content = (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/predictions' element={<Prediction />}/>
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )

  return content
}

export default App
