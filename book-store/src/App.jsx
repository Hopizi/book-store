import { useState } from 'react'
import {Landing, InsertBook, SearchBook, BookInfoPage, AllBooks, EditBook} from "./pages"
import {Routes, Route} from "react-router-dom";

function App() {

  const [popUp, setPopUp] = useState(false)

    function handlePopUp(event) {
        if (event) {
            event.preventDefault();
        }
        setPopUp(true);
        setTimeout(() => {
            setPopUp(false)
        },5500)
    }

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/insertbook' element={<InsertBook popUp={popUp} handlePopUp={handlePopUp}/>}/>
        <Route path='/searchbooks' element={<SearchBook />}/>
        <Route path='/book/:id' element={<BookInfoPage />}/>
        <Route path='/allbooks' element={<AllBooks />}/>
        <Route path='/editbook/:id' element={<EditBook />}/>
      </Routes>
    </>
  )
}

export default App
