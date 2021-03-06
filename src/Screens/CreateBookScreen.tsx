import Header from "./components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import { useState } from "react";
import InputField from "./components/InputField";

const CreateBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    let id = title + author;
    let book = {
      title: title,
      author: author,
      date: date,
      id: id,
    };
    let JSONBooks = localStorage.getItem("books");
    let books = [];
    let isBookExisting = false;
    if (JSONBooks) {
      books = JSON.parse(JSONBooks);
      books.forEach((book: { id: string }) => {
        if (book.id === id) {
          isBookExisting = true;
        }
      });
    }
    if (!isBookExisting) {
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
    } else {
      alert("Book already exists");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="title"
          label="Title of the book"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <InputField
          type="text"
          name="author"
          label="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <InputField
          type="date"
          name="date"
          label="Published date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <div className="pt-5">
          <Button type="submit" text="Add book" icon={faFolderPlus} />
        </div>
      </form>
    </div>
  );
};
function CreateBookScreen() {
  return (
    <div>
      <Header
        buttonType="button"
        buttonText="Go back to Dashboard"
        buttonIcon={faArrowLeft}
        buttonAction="/"
        isSearchBarVisible={false}
      />
      <CreateBookForm />
    </div>
  );
}

export default CreateBookScreen;
