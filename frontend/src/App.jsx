import "./App.css"
import Navbar from "./Components/Navbar"
import MainRoutes from "./routes/MainRoutes"

function App() {
    return (
        <div className='background'>
            <Navbar />
            <MainRoutes />
        </div>
    )
}

export default App