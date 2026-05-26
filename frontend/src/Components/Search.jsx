import React, { useContext, useState, useEffect } from 'react'
import { BookContext } from '../context/BookContext'
import { useNavigate } from 'react-router-dom'

function Search() {

    const { search, setSearch } = useContext(BookContext)
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (search === "") setInput("")
    }, [search])

    const handleSearch = () => {
        setSearch(input)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch()
    }

    // Clear search and go home
    const handleBack = () => {
        setSearch("")
        setInput("")
        navigate("/")
    }

    return (
        <div className="flex items-center gap-2 w-full max-w-xl">

            {/* Only show the Back button when user has searched something */}
            {search && (
                <button
                    onClick={handleBack}
                    className="bg-black text-white px-4 py-2  rounded-lg hover:bg-gray-300 transition duration-300 whitespace-nowrap"
                >
                   Go Back
                </button>
            )}

            <input
                type="text"
                placeholder="Search by title or author..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-2 border border-black rounded-lg outline-none focus:ring-2 focus:ring-black"
            />

            <button
                onClick={handleSearch}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition duration-300 whitespace-nowrap"
            >
                Search
            </button>

        </div>
    )
}

export default Search