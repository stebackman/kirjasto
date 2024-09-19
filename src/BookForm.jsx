const BookForm = ({
  newTitle,
  newAuthor,
  setNewTitle,
  setNewAuthor,
  addBook,
}) => {
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  return (
    <form onSubmit={addBook}>
      <div>
        Title: <input value={newTitle} onChange={handleTitleChange} />
      </div>
      <div>
        Author: <input value={newAuthor} onChange={handleAuthorChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default BookForm;
