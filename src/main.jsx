import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SelectionProvider } from './context/SelectionContext.jsx'

createRoot(document.getElementById('root')).render(
  <SelectionProvider>
    <App />
  </SelectionProvider>,
)
