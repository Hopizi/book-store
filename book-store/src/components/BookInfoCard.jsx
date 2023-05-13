import React from 'react'
import "./styles/BookInfoCard.css"

function BookInfoCard() {
  return (
    <div className='book-info-card-main'>
        <h1>Harry Potter and the Order of the Phoenix</h1>
        <div>
            <label>Author</label>
            <p className='author-desgin'>J.K. Rowling, Mary GrandPré (Illustrator)</p>
        </div>
        <div>
            <label>Date Realsed</label>
            <p>09/28/04</p>
        </div>
        <div>
            <label>Genres</label>
            <p>Fantasy, Young Adult, Fiction, Magic, Childrens, Adventure, Audiobook, Middle Grade, Classics, Science Fiction Fantasy</p>
        </div>
        <div>
            <label>Characters</label>
            <p>Sirius Black, Draco Malfoy, Ron Weasley, Petunia Dursley, Vernon Dursley, Dudley Dursley, Severus Snape, Rubeus Hagrid, Lord Voldemort, Minerva McGonagall, Neville Longbottom, Fred Weasley, George Weasley, Percy Weasley, Ginny Weasley, Colin Creevey, Filius Flitwick, Gilderoy Lockhart, Lucius Malfoy, Pomona Sprout, Arthur Weasley, Molly Weasley, Cho Chang, Cornelius Fudge, Remus Lupin, Sybil Trelawney, Stan Shunpike, Bellatrix Lestrange, Alastor Moody, Rita Skeeter, Luna Lovegood, Nymphadora Tonks, Dolores Umbridge, Dobby, Kingsley Shacklebolt, Padma Patil, Parvati Patil, Kreacher, Dean Thomas, Seamus Finnigan, Albus Dumbledore, Harry Potter, Hermione Granger, Lavender Brown</p>
        </div>
        <div>
            <label>Synopsis</label>
            <p>There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them all.</p>
        </div>
    </div>
  )
}

export default BookInfoCard