import React from 'react'
import "./styles/BookInfoCard.css"
import { useParams, Link, useNavigate } from 'react-router-dom'
import {Navbar, Button, EditButton, Loading, SucessMessage, DeleteCard} from "../components"
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Edit, Delete} from "../assets"
import {Helmet} from "react-helmet";

function BookInfoCard({popUp, handlePopUp}) {

    const {id} = useParams();
    const navigate = useNavigate()

    const [bookData, setBookData] = useState([])
    const [loading, setLoading] = useState(false)
    const [deleteClick, setDeleteClick] = useState(false)

    useEffect(() => {
        axios.get(`https://assessment-386911.appspot.com/bookapi?id=${id}`).then(response => {
            setBookData(response.data)
            setLoading(true);
        }).catch(error => console.log(error))
    },[])

    function deleteBook() {
        axios.delete(`https://assessment-386911.appspot.com/bookapi?id=${id}`).then(response => {
            setBookData(response.data)
        }).catch(error => console.log(error))
        navigate(-1);
    }

  return (
    <div className='book-info-card-main'>
        <Helmet><title>{bookData && bookData.title}</title></Helmet>
        { loading ?
        <div className='book-info-main-inner'>
            {popUp && <SucessMessage message='Book Deleted Sucessfully' style='move-down'/>}
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
                <Link to={`/editbook/${id}`}><EditButton btnTitle='Edit' style='bdradnone bluebg' component={<Edit className="book-info-icons"/>}/></Link>
                <Button btnTitle='Delete' style='redbg bdradnone del-border' onClick={() => setDeleteClick(true)} component={<Delete className="book-info-icons"/>}/>
            </div>
            { deleteClick &&
            <div className="delete-confirmation animate__animated animate__fadeInDown">
                <DeleteCard setDeleteClick={setDeleteClick} deleteBook={deleteBook} />
            </div>
            }
        </div>
        : <Loading />
        }
    </div>
  )
}

export default BookInfoCard