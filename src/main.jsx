import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "sonner";

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster position="bottom-right"  className="
    text-sm max-w-sm p-3
    
    sm:max-w-xs sm:text-xs sm:p-2
    
    max-[600px]:max-w-[400px] max-[600px]:text-[10px] max-[600px]:p-1 max-[600px]:right-2
  "  richColors expand={true} />
  </>
)
