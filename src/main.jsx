import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FetchComponent } from './Components/FetchComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchComponent/>
  </StrictMode>,
)
