import React from 'react'
import {Navbar, Button, SideBar, SucessMessage, Loading} from "../components"
import "./styles/EditBook.css"
import {Link, useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

function EditBook({popUp, handlePopUp}) {

    const {id} = useParams()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [editValue, setEditValue] = useState({
        title: '',
        author: '',
        date: '',
        genres: '',
        characters: '',
        synopsis: ''
        })

    useEffect(() => {
        axios.get(`https://assessment-386911.appspot.com/bookapi?id=${id}`).then(response => {
            const data = response.data;
            setEditValue({
                title: data.title,
                author: data.author,
                date: data.date,
                genres: data.genres,
                characters: data.characters,
                synopsis: data.synopsis,
                id: id
            })
            setLoading(true)
        }).catch(error => console.log(error))
    },[])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditValue(prevState => ({
        ...prevState,
        [name]: value
        }));
    }

    function updateBook() {
        axios.put(`https://assessment-386911.appspot.com/bookapi?id=${id}`, editValue).then(response => {console.log(response)}).catch(err => console.log(err));
        handlePopUp()
        setTimeout(() => {
            navigate(-1)
        }, 3600)
    }

  return (
    <div className='edit-book-main'>
        <SideBar />
        <div className='edit-book-form-main'>
            { loading ?
            <div className='edit-book-form-inner'>
                {popUp && <SucessMessage message="Book Entry Edited Succesfully" style='rightrd'/>}
                <h1>Edit Book</h1>
                <form className='edit-book-form'>
                    <div>
                        <label>Title</label>
                        <input type='text' value={editValue.title} name='title' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Author</label>
                        <input type='text' value={editValue.author} name='author' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='text' value={editValue.date} name='date' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Genres</label>
                        <input type='text' value={editValue.genres} name='genres' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Characters</label>
                        <input type='text' value={editValue.characters} name='characters' onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Synopsis</label>
                        <input type='text' value={editValue.synopsis} name='synopsis' onChange={handleInputChange}/>
                    </div>
                    <div style={{display: "none"}}>
                        <label>Id</label>
                        <input type='text' name='id' value={id}/> 
                    </div>
                    <div className='edit-book-btn-container'>
                        <Button btnTitle="Save Changes" style='margin-left' onClick={updateBook}/>
                    </div>
                </form>
            </div> : <Loading />
        }
        </div>
    </div>
  )
}

export default EditBook