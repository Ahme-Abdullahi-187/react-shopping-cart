import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ShopProvider } from './ShopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ShopProvider>
)
