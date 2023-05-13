import React from 'react'
import {Navbar, Button} from "../components"
import "./styles/EditBook.css"

function EditBook() {
  return (
    <div className='edit-book-main'>
        <div className='edit-book-nav'>
            <Navbar />
        </div>
        <div className='edit-book-form-main'>
            <div className='edit-book-form-inner'>
                <h1>Edit Book</h1>
                <form className='edit-book-form'>
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
                    <div className='edit-book-btn-container'>
                        <Button btnTitle="Save Changes" style='margin-left'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditBook