import { Route, Routes } from 'react-router-dom'
import AddBook from '../pages/AddBook'
import Home from '../pages/Home'
import EditBook from '../pages/EditBook'


function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />                    
            <Route path='/add-book' element={<AddBook />} />           
            <Route path='/edit-book/:id' element={<EditBook />} />     
        </Routes>
    )
}

export default MainRoutes