import BookForm from "./BookForm";

const AddBookHandler = ({
  newTitle,
  newAuthor,
  setNewTitle,
  setNewAuthor,
  addBook,
}) => {
  return (
    <BookForm
      newTitle={newTitle}
      newAuthor={newAuthor}
      setNewTitle={setNewTitle}
      setNewAuthor={setNewAuthor}
      addBook={addBook}
    />
  );
};

export default AddBookHandler;
