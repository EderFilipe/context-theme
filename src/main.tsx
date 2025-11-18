import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './context/ThemeProvider.tsx'
import MenuProvider from './context/MenuProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <MenuProvider>
      <App />
    </MenuProvider>
  </ThemeProvider>,
)
