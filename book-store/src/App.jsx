import { useState } from 'react'
import {Landing, InsertBook, SearchBook, BookInfoPage, AllBooks, EditBook} from "./pages"
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/insertbook' element={<InsertBook />}/>
        <Route path='/searchbook' element={<SearchBook />}/>
        <Route path='/bookinfo' element={<BookInfoPage />}/>
        <Route path='/allbooks' element={<AllBooks />}/>
        <Route path='/editbook' element={<EditBook />}/>
      </Routes>
    </>
  )
}

export default App
