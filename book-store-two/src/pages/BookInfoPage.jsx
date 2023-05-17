import React from "react"
import "./styles/BookInfoPage.css"
import {Navbar, Button, BookInfoCard, EditButton, SideBar} from "../components"
import {Link, useParams} from "react-router-dom"


function BookInfoPage() {

  return (
    <div className="book-info-page-main">
        <SideBar />
        <div className="book-info-inner-page-main">
            <div className="book-info-section">
                <BookInfoCard />
            </div>
        </div>
    </div>
  )
}

export default BookInfoPage