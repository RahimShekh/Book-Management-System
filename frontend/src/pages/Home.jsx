import  { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'
import BookCard from '../Components/BookCard'

function Home() {

    const { data, error, loading, search } = useContext(BookContext)
    const [genre, setGenre] = useState("") // "" means no filter selected = show all genres

    // Get a unique list of genres from all books (removes duplicates with Set)
    const genres = [...new Set(data.map(b => b.genre).filter(Boolean))]

    // Filter the books based on selected genre AND search text
    const filtered = data.filter(book => {
        // If a genre is selected, book must match it. If not selected, all genres pass.
        const matchGenre = genre ? book.genre === genre : true

        // If search text exists, check if title or author includes it (case-insensitive)
        const matchSearch = search
            ? book.title?.toLowerCase().includes(search.toLowerCase()) ||
              book.author?.toLowerCase().includes(search.toLowerCase())
            : true

        return matchGenre && matchSearch
    })

    // Show error message if fetching books failed
    if (error) return <h1 className='text-center mt-20 text-red-500'>{error}</h1>

    // Show loading spinner while books are being fetched
    if (loading) return (
        <div className='flex justify-center items-center mt-32'>
            <div className='w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin'></div>
        </div>
    )

    return (
        <div className='px-8 py-6'>

            {/* Genre Filter Dropdown */}
            <div className='flex gap-4 mb-6'>
                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className='border border-gray-400 rounded-lg px-3 py-2 bg-white/60 outline-none'
                >
                    <option value="">All Genres</option>
                    {genres.map((g, i) => (
                        <option key={i} value={g}>{g}</option>
                    ))}
                </select>
            </div>

            {/* Show message if no books match the filter/search */}
            {filtered.length === 0
                ? <h1 className='text-center mt-20 text-gray-500'>No books found</h1>
                : <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {filtered.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                  </div>
            }
            {/* Footer */}
            <footer className='text-center mt-5 py-4 text-sm text-gray-500 border-t border-gray-200'>
                Created by Rahim Shekh
            </footer>
        </div>

        
    )
}

export default Home