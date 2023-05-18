import React from 'react'
import Button from './Button'
import "./styles/DeleteCard.css"

const DeleteCard = ({setDeleteClick, deleteBook, handlePopUp}) => {
  return (
    <div className='delete-main-container'>
        <p>Are you sure you want to delete?</p>
        <div className="delete-confirm-btn">
            <Button btnTitle="Cancel" style='redbg' onClick={() => setDeleteClick(false)}/>
            <Button btnTitle="Confirm" onClick={deleteBook}/>
        </div>
    </div>
  )
}

export default DeleteCard