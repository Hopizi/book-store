import {Navbar, Button, BookCard, Loading} from "../components"
import "./styles/SearchBook.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import { debounce } from 'lodash';

function SearchBook() {

    const [queryBooks, setQueryBooks] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(false)


     useEffect(() => {
        const debouncedSearch = debounce(() => {
        axios.get(`https://assessment-382621.appspot.com/bookapi?query=${searchQuery}`).then((response) => {
            setQueryBooks(response.data);
            })
            .catch((error) => console.log(error));
        }, 500);

        if (searchQuery) {
        debouncedSearch();
        }

        return debouncedSearch.cancel;
    }, [searchQuery]);

    function handleChange(event) {
        setSearchQuery(event.target.value)
    }



  return (
    <div className="search-book-main">
        <Navbar />
        <div className="search-book-inner">
            <div className="search-book-display">
                <form>
                    <div>
                        <label>Search By:</label>
                        <select>
                            <option value='title'>Title</option>
                            <option value='author'>Author</option>
                            <option value='date'>Date</option>
                            <option value='genres'>Genres</option>
                            <option value='characters'>Characters</option>
                            <option value='synopsis'>Synopsis</option>
                        </select>
                    </div>
                    <div className="search-book-search-box">
                        <input type="text" value={searchQuery} onChange={handleChange} placeholder="Enter Keywords"/>
                    </div>
                    <div className="search-book-btn">
                        <Button btnTitle='Search' />
                    </div>
                </form>
                <div className="search-book-search-results">
                    {
                        queryBooks.map((book, index) => {
                            return <BookCard 
                            bookTitle={book && book.title}
                            bookAuthor={book && book.author}
                            bookDate={book && book.date}
                            id={book && book.id}
                            key={index}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBook