import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import { BookContext } from '../context/BookContext'

function AddBook() {

    const navigate = useNavigate()
    const { data, setData } = useContext(BookContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const SubmitHandler = async (book) => {
        const res = await fetch("https://book-management-system-wrur.onrender.com/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        })
        const newBook = await res.json()

        setData([...data, newBook])

        toast.success("Book Added!", { transition: Bounce })
        reset()       
        navigate("/") 
    }

    return (
        <div className='w-full flex justify-center items-center py-10'>
            <form
                onSubmit={handleSubmit(SubmitHandler)}
                className='w-[90%] md:w-[600px] backdrop-blur-lg bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-8'
            >

                <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Add New Book</h1>
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-5 bg-transparent'
                    {...register("image")}
                    type="url"
                    placeholder='Book Cover URL (optional)'
                />
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-1 bg-transparent'
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    placeholder='Book Title'
                />
                {errors.title && <small className='text-red-500 mb-4 block'>{errors.title.message}</small>}
                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-1 bg-transparent mt-4'
                    {...register("author", { required: "Author is required" })}
                    type="text"
                    placeholder='Author Name'
                />
                {errors.author && <small className='text-red-500 mb-4 block'>{errors.author.message}</small>}

                <input
                    className='border-b border-gray-500 outline-0 p-3 block w-full mb-1 bg-transparent mt-4'
                    {...register("genre", { required: "Genre is required" })}
                    type="text"
                    placeholder='Book Genre'
                />
                {errors.genre && <small className='text-red-500 mb-4 block'>{errors.genre.message}</small>}

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