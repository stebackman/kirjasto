import { useState, useEffect } from "react";
import AddBookHandler from "./AddBookHandler";
import nameService from "./services/Register";
import Books from "./Books";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    nameService.getAll().then((response) => {
      setBooks(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addBook = (event) => {
    event.preventDefault();
    const nameObject = {
      title: newTitle,
      author: newAuthor,
      varattu: false,
    };

    nameService.create(nameObject).then((response) => {
      setBooks(books.concat(response.data));
      setNewTitle("");
      setNewAuthor("");
    });
  };

  const toggleImportanceOf = (id) => {
    const book = books.find((n) => n.id === id);

    const changedBook = { ...book, varattu: !book.varattu };

    nameService
      .update(id, changedBook)
      .then((returnedBook) => {
        // Assuming returnedBook is the full book object, merge if necessary
        setBooks(
          books.map((book) =>
            book.id !== id ? book : { ...book, ...returnedBook }
          )
        );
      })
      .catch((error) => {
        console.error("Failed to update the book:", error);
      });
  };

  const filteredBooks = books
    .filter((book) => (showAll ? true : book.varattu === false)) // Filter by "varattu" if showAll is false
    .filter(
      (book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term
    );
  const deleteBook = (id) => {
    const book = books.find((n) => n.id === id);
    if (window.confirm(`Do you want to delete ${book.title}?`)) {
      nameService.deleteBook(id).then(() => {
        setBooks(books.filter((n) => n.id !== id));
      });
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          näytä {showAll ? "ainoastaan vapaat" : "kaikki"}
        </button>
      </div>
      <h2>Books</h2>
      <div>
        <input
          className="searchbar"
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <AddBookHandler
          newTitle={newTitle}
          newAuthor={newAuthor}
          setNewTitle={setNewTitle}
          setNewAuthor={setNewAuthor}
          addBook={addBook}
        />
        <h2>Books</h2>
        <Books
          filteredBooks={filteredBooks}
          deleteBook={deleteBook}
          toggleImportanceOf={toggleImportanceOf}
        />
      </div>
    </div>
  );
};

export default Library;
