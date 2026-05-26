import { createContext, useState, useEffect } from 'react'

export const BookContext = createContext(null)

function BookContextProvider(props) {
    const [data, setData] = useState([])       
    const [error, setError] = useState(null)  
    const [loading, setLoading] = useState(true) 
    const [search, setSearch] = useState("")  

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("https://book-management-system-wrur.onrender.com/books")
                const books = await res.json()
                setData(books)
            } catch (err) {
                setError("Something went wrong. Make sure your server is running.")
            } finally {
                setLoading(false)
            }
        }
        fetchBooks()
    }, [])
    return (
        <BookContext.Provider value={{ data, setData, error, loading, search, setSearch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider