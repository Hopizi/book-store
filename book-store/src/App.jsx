import { useState } from 'react'
import {Landing, InsertBook, SearchBook} from "./pages"
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/insertbook' element={<InsertBook />}/>
        <Route path='/searchbook' element={<SearchBook />}/>
      </Routes>
    </>
  )
}

export default App
