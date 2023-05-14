import React from 'react'
import "./styles/BookInfoCard.css"
import { useParams, Link } from 'react-router-dom'
import {Navbar, Button, EditButton} from "../components"
import { useEffect, useState } from 'react'
import axios from 'axios'

function BookInfoCard() {

    const {id} = useParams();

    const [bookData, setBookData] = useState([])

    useEffect(() => {
        axios.get(`https://assessment-382621.appspot.com/bookapi?id=${id}`).then(response => {
            setBookData(response.data)
        }).catch(error => console.log(error))
    },[])

    function deleteBook() {
        axios.delete(`https://assessment-382621.appspot.com/bookapi?id=${id}`).then(response => {
            setBookData(response.data)
        }).catch(error => console.log(error))
    }

  return (
    <div className='book-info-card-main'>
        <h1>{bookData && bookData.title}</h1>
        <div>
            <label>Author</label>
            <p className='author-desgin'>{bookData && bookData.author}</p>
        </div>
        <div>
            <label>Date Realsed</label>
            <p>{bookData && bookData.date}</p>
        </div>
        <div>
            <label>Genres</label>
            <p>{bookData && bookData.genres}</p>
        </div>
        <div>
            <label>Characters</label>
            <p>{bookData && bookData.characters}</p>
        </div>
        <div>
            <label>Synopsis</label>
            <p>{bookData && bookData.synopsis}</p>
        </div>
        <div className="book-info-useful-btns">
            <Link to={`/editbook/${id}`}><EditButton btnTitle='Edit' /></Link>
            <Button btnTitle='Delete' style='redbg' onClick={deleteBook}/>
        </div>
    </div>
  )
}

export default BookInfoCard