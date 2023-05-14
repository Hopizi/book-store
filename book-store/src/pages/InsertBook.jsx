import React from 'react'
import {Navbar, Button} from "../components"
import "./styles/InsertBook.css"
import { useState, useEffect } from 'react'
import axios from 'axios'

function InsertBook() {

    const [id, setId] = useState('')
    const [books, setBooks] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        date: '',
        genres: '',
        characters: '',
        synopsis: ''
        });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => {
        axios.get("https://assessment-382621.appspot.com/bookapi").then(response => {
            setBooks(response.data)
        }).catch(err => console.log(err))
    },[])

    useEffect(() => {
        function checkIfIdExists(id, books) {
            for (let i = 0; i < books.length; i++) {
                if (books[i].id === id) {
                return true;
                }
            }
            return false;
        }

        function generateId(books) {
            let id = '';
            do {
                const random = Math.floor(1000 + Math.random() * 9000);
                id = random;
            } while (checkIfIdExists(id, books));
            setId(id);
        }
        generateId(books);
    }, [])

    function postData() {
        console.log("Posted To Server")
        const book = {
            title: formData.title,
            author: formData.author,
            date: formData.date,
            genres: formData.genres,
            characters: formData.characters,
            synopsis: formData.synopsis,
            id: id
        }
        axios.post("https://assessment-382621.appspot.com/bookapi", book).then(response => {console.log(response)}).catch(err => console.log(err))
    }

  return (
    <div className='insert-book-main'>
        <div className='insert-book-nav'>
            <Navbar />
        </div>
        <div className='insert-book-form-main'>
            <div className='insert-book-form-inner'>
                <h1>Add Book</h1>
                <form className='insert-book-form'>
                    <div>
                        <label>Title</label>
                        <input type='text' name='title' value={formData.title} placeholder='Enter Title' onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Author</label>
                        <input type='text' name='author' value={formData.author} placeholder='Enter Author' onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='date' value={formData.date} name='date' onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Genres</label>
                        <input type='text' name='genres' value={formData.genres} placeholder='Add Genres' onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Characters</label>
                        <input type='text' name='characters' value={formData.characters} placeholder='Add Characters ' onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Synopsis</label>
                        <input type='text' name='synopsis' value={formData.synopsis} placeholder='Add Synopsis ' onChange={handleChange}/>
                    </div>
                    <div style={{display: "none"}}>
                        <label>Id</label>
                        <input type='text' name='id' value={id}/> 
                    </div>
                    <div className='insert-book-btn-container'>
                        <Button btnTitle="Submit" style='margin-left' onClick={postData}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default InsertBook