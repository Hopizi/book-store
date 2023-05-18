import React from 'react';
import { useState } from 'react'
import './App.css'
import {Landing, InsertBook, SearchBook, BookInfoPage, AllBooks, EditBook} from "./pages"
import {Routes, Route} from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function App() {

  const [popUp, setPopUp] = useState(false)

  function handlePopUp(event) {
        if (event) {
            event.preventDefault();
        }
        setPopUp(true);
        setTimeout(() => {
            setPopUp(false)
        },3500)
    }

  return (
    <div>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/addbook' element={<InsertBook popUp={popUp} handlePopUp={handlePopUp}/>}/>
          <Route path='/searchbooks' element={<SearchBook />}/>
          <Route path='/book/:id' element={<BookInfoPage />}/>
          <Route path='/allbooks' element={<AllBooks />}/>
          <Route path='/editbook/:id' element={<EditBook popUp={popUp} handlePopUp={handlePopUp}  />}/>
        </Routes>
      </SkeletonTheme>
    </div>
  )
}

export default App
