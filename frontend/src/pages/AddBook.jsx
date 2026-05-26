import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import { BookContext } from '../context/BookContext'

function AddBook() {

    const navigate = useNavigate()
    const { data, setData } = useContext(BookContext)

    // register = connects input to the form, handleSubmit = runs on submit, reset = clears form, formState = gives us errors
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const SubmitHandler = async (book) => {
        // Send new book to the server
        const res = await fetch("http://localhost:3001/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        })
        const newBook = await res.json()

        // Add the new book to our existing list
        setData([...data, newBook])

        toast.success("Book Added!", { transition: Bounce })
        reset()       // clear the form fields
        navigate("/") // go back to home page
    }

    return (
        <div className='w-full flex justify-center items-center py-10'>
            <form
                onSubmit={handleSubmit(SubmitHandler)}
                className='w-[90%] md:w-[600px] backdrop-blur-lg bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-8'
            >

                <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Add New Book</h1>

                {/* Book Cover URL — optional field */}
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
                    Add Book
                </button>

            </form>
        </div>
    )
}

export default AddBook