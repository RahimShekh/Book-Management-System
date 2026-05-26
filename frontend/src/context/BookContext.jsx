import React, { createContext, useState, useEffect } from 'react'

// Create the context — this lets any component access book data
export const BookContext = createContext(null)

function BookContextProvider(props) {

    const [data, setData] = useState([])       // stores all books
    const [error, setError] = useState(null)   // stores error message if fetch fails
    const [loading, setLoading] = useState(true) // true while books are being fetched
    const [search, setSearch] = useState("")   // stores what user typed in search

    // Fetch all books when the app first loads
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("http://localhost:3001/books")
                const books = await res.json()
                setData(books)
            } catch (err) {
                setError("Something went wrong. Make sure your server is running.")
            } finally {
                // Whether it worked or failed, stop showing the loader
                setLoading(false)
            }
        }
        fetchBooks()
    }, [])

    return (
        // Make data, setData, error, loading, search, setSearch available to all components
        <BookContext.Provider value={{ data, setData, error, loading, search, setSearch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider