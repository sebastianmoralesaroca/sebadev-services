import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './ThemeContext.jsx'
import Header from './Header.jsx'
import Portada from './Portada.jsx'
import Menu from './Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
      <div className="min-h-screen bg-menu-bg dark:bg-menu-bg-dark transition-colors">
        <Header />
        <Portada />
        <Menu />
      </div>
    </ThemeProvider>
  </StrictMode>,
)
