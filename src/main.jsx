import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ChakraProvider>
  </BrowserRouter>
)
