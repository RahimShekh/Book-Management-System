import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import { BookContext } from '../context/BookContext'

function EditBook() {

    // Get the book id from the URL (e.g. /edit-book/3 → id = "3")
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, setData } = useContext(BookContext)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    // When the page loads, fetch this book's current data and fill the form
    useEffect(() => {
        const getBook = async () => {
            const res = await fetch(`http://localhost:3001/books/${id}`)
            const book = await res.json()

            // setValue fills each input field with the book's existing data
            setValue("image", book.image)
            setValue("title", book.title)
            setValue("author", book.author)
            setValue("genre", book.genre)
            setValue("year", book.year)
        }
        getBook()
    }, [id])

    const SubmitHandler = async (book) => {
        // Send the updated book data to the server
        const res = await fetch(`http://localhost:3001/books/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        })
        const updatedBook = await res.json()

        // Replace the old book in our list with the updated one
        const updatedList = data.map(b => b.id == id ? updatedBook : b)
        setData(updatedList)

        toast.success("Book Updated!", { transition: Bounce })
        navigate("/") // go back to home page
    }

    return (
        <div className='w-full flex justify-center items-center py-10'>
            <form
                onSubmit={handleSubmit(SubmitHandler)}
                className='w-[90%] md:w-[600px] backdrop-blur-lg bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-8'
            >

                <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Edit Book</h1>

                {/* Book Cover URL — optional */}
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-5 bg-transparent'
                    {...register("image")}
                    type="url"
                    placeholder='Book Cover URL (optional)'
                />

                {/* Title — required */}
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-1 bg-transparent'
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    placeholder='Book Title'
                />
                {errors.title && <small className='text-red-500 mb-4 block'>{errors.title.message}</small>}

                {/* Author — required */}
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-1 bg-transparent mt-4'
                    {...register("author", { required: "Author is required" })}
                    type="text"
                    placeholder='Author Name'
                />
                {errors.author && <small className='text-red-500 mb-4 block'>{errors.author.message}</small>}

                {/* Genre — required */}
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-1 bg-transparent mt-4'
                    {...register("genre", { required: "Genre is required" })}
                    type="text"
                    placeholder='Book Genre'
                />
                {errors.genre && <small className='text-red-500 mb-4 block'>{errors.genre.message}</small>}

                {/* Year — required */}
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-1 bg-transparent mt-4'
                    {...register("year", { required: "Year is required" })}
                    type="number"
                    placeholder='Publication Year'
                />
                {errors.year && <small className='text-red-500 mb-4 block'>{errors.year.message}</small>}

                <button className='mt-8 block w-full bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300'>
                    Update Book
                </button>

            </form>
        </div>
    )
}

export default EditBook