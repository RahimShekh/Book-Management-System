import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar() {
    return (
        <nav className="w-full shadow-lg px-8 py-4 flex items-center justify-between gap-6 border-b border-gray-800">
            <Link to="/" className="text-2xl font-bold text-black whitespace-nowrap">
                Book Management System
            </Link>

            <div className="flex-1 flex justify-center">
                <Search />
            </div>

            <Link
                to="/add-book"
                className="bg-black hover:bg-slate-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-300 whitespace-nowrap"
            >
                Add Book
            </Link>

        </nav>
    )
}

export default Navbar