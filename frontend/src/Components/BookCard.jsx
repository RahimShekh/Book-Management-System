import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import { BookContext } from '../context/BookContext'

function BookCard(props) {

    const { id, image, title, author, genre, year } = props.book

    const { data, setData } = useContext(BookContext)

    const deleteBook = async () => {
        await fetch(`https://book-management-system-wrur.onrender.com/books/${id}`, { method: "DELETE" })

        const updatedList = data.filter(b => b.id != id)
        setData(updatedList)

        toast.success("Book Deleted!", { transition: Bounce })
    }

    return (
        <div className='bg-white/40 border border-white/30 shadow-xl rounded-2xl overflow-hidden'>

            <img
                src={image || "https://placehold.co/400x250?text=No+Cover"}
                alt={title}
                className='w-full h-48 object-cover'
            />

            <div className='p-4'>
                <h1 className='text-lg font-bold text-gray-800'>{title}</h1>
                <p className='text-sm text-gray-600'>Author : {author}</p>
                <small className='text-gray-500'>Genre: {genre}</small>
                <p className='text-sm text-gray-500'>Year: {year}</p>

                <div className='flex gap-2 mt-4'>
                    <Link
                        to={`/edit-book/${id}`}
                        className='flex-1 text-center bg-black text-white py-2 rounded-lg text-sm'
                    >
                        Edit
                    </Link>
                    <button
                        onClick={deleteBook}
                        className='flex-1 bg-red-500 text-white py-2 rounded-lg text-sm'
                    >
                        Delete
                    </button>

                </div>
            </div>

        </div>
    )
}

export default BookCard