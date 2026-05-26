import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar() {
    return (
        <nav className="w-full shadow-lg px-8 py-4 flex items-center justify-between gap-6 border-b border-gray-800">

            {/* App title — clicking it goes home */}
            <Link to="/" className="text-2xl font-bold text-black whitespace-nowrap">
                Book Management System
            </Link>

            {/* Search bar in the middle */}
            <div className="flex-1 flex justify-center">
                <Search />
            </div>

            {/* Link styled as a button — no need to nest a <button> inside a <Link> */}
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