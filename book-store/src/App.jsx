import { useState } from 'react'
import {Landing, InsertBook, SearchBook, BookInfoPage, AllBooks, EditBook} from "./pages"
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/insertbook' element={<InsertBook />}/>
        <Route path='/searchbooks' element={<SearchBook />}/>
        <Route path='/book/:id' element={<BookInfoPage />}/>
        <Route path='/allbooks' element={<AllBooks />}/>
        <Route path='/editbook/:id' element={<EditBook />}/>
      </Routes>
    </>
  )
}

export default App
