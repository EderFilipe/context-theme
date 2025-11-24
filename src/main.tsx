import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './context/ThemeProvider.tsx'
import MenuProvider from './context/MenuProvider.tsx'
import OrderProvider from './context/OrderProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')as Element).render(
  <ThemeProvider>
    <MenuProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </MenuProvider>
  </ThemeProvider>,
)
