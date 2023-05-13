import React from 'react'
import {Navbar, Button} from "../components"
import "./styles/InsertBook.css"

function InsertBook() {
  return (
    <div className='insert-book-main'>
        <div className='insert-book-nav'>
            <Navbar />
        </div>
        <div className='insert-book-form-main'>
            <div className='insert-book-form-inner'>
                <h1>Insert Book</h1>
                <form className='insert-book-form'>
                    <div>
                        <label>Title</label>
                        <input type='text' placeholder='Enter Title'/>
                    </div>
                    <div>
                        <label>Author</label>
                        <input type='text' placeholder='Enter Author'/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='date' />
                    </div>
                    <div>
                        <label>Genres</label>
                        <input type='text' placeholder='Add Genres '/>
                    </div>
                    <div>
                        <label>Characters</label>
                        <input type='text' placeholder='Add Characters '/>
                    </div>
                    <div>
                        <label>Synopsis</label>
                        <input type='text' placeholder='Add Synopsis '/>
                    </div>
                    <div className='insert-book-btn-container'>
                        <Button btnTitle="Submit" style='margin-left'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default InsertBook