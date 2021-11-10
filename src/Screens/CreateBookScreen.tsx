import Header from "./components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import { useState } from "react";

const InputField = ({
  type,
  name,
  label,
  value,
  onChange,
}: {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="py-4">
      <label htmlFor={name} className="block text-lg pb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="flex border rounded-xl px-5 py-2"
        required
      />
    </div>
  );
};

const CreateBookForm = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    let book = {
      title: title,
      author: author,
      date: date,
    };
    console.log({title});
    let JSONBooks = localStorage.getItem("books")
    let books = []
    if (JSONBooks) {
      books = JSON.parse(JSONBooks);
    }
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField type="text" name="title" label="Title of the book" value={title} onChange={(event)=>setTitle(event.target.value)} />
        <InputField type="text" name="author" label="Author" value={author} onChange={(event)=>setAuthor(event.target.value)} />
        <InputField type="date" name="date" label="Published date" value={date} onChange={(event)=>setDate(event.target.value)} />
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
