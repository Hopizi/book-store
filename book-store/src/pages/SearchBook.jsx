import {Navbar, Button, BookCard} from "../components"
import "./styles/SearchBook.css"

function SearchBook() {
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
                        <input type="text" placeholder="Enter Keywords"/>
                    </div>
                    <div className="search-book-btn">
                        <Button btnTitle='Search'/>
                    </div>
                </form>
                <div className="search-book-search-results">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBook