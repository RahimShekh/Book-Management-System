import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import BookContextProvider from './context/BookContext.jsx'

createRoot(document.getElementById('root')).render(
    <BookContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BookContextProvider>
)