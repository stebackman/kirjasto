const Books = ({ filteredBooks, deleteBook, toggleImportanceOf }) => {
  return (
    <ul>
      {filteredBooks.map((book) => (
        <li key={book.id}>
          {book.title}: {book.author}{" "}
          <button onClick={() => deleteBook(book.id)} className="deleteButton">
            Poista
          </button>
          <button
            onClick={() => toggleImportanceOf(book.id)}
            className={book.varattu ? "reservedButton" : "reserveButton"}
          >
            {book.varattu ? "Peru Varaus" : "Varaa"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Books;
