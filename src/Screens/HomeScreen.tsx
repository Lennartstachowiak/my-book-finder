import Header from "./components/Header";
import { faFolderPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardHeader = () => {
  return (
    <div className="flex">
      <p className="w-1/3 font-semibold">Title of the book</p>
      <p className="w-1/3 font-semibold">Author</p>
      <p className="w-1/3 font-semibold">Published date</p>
    </div>
  );
};

const DashboardItem = ({
  title,
  author,
  date,
  id,
  bookLibary,
  setBookLibary,
}: {
  title: string;
  author: string;
  date: string;
  id: string;
  bookLibary: { title: string; author: string; date: string; id: string }[];
  setBookLibary: React.Dispatch<any>;
}) => {
  const deleteItem = (id: string) => {
    let remainingBooks: {
      title: string;
      author: string;
      date: string;
      id: string;
    }[] = [];
    bookLibary.map((book) => {
      if (book.id !== id) {
        remainingBooks.push(book);
      }
    });
    setBookLibary(remainingBooks);
  };
  return (
    <div>
      <div className="flex relative h-10 items-center">
        <p className="w-1/3">{title}</p>
        <p className="w-1/3">{author}</p>
        <p className="w-1/3">{date}</p>
        <button onClick={() => deleteItem(id)} className="absolute right-0">
          <FontAwesomeIcon type="button" icon={faTrash} />
        </button>
      </div>
      <hr />
    </div>
  );
};

const DashboardItems = ({
  bookLibary: bookLibary,
  setBookLibary,
  filter,
}: {
  bookLibary: { title: string; author: string; date: string; id: string }[];
  setBookLibary: React.Dispatch<any>;
  filter: string;
}) => {
  let books = bookLibary;
  let filteredBooks = books.filter(
    (book) => book.title.includes(filter) || book.author.includes(filter)
  );
  if (filteredBooks.length > 0) {
    return (
      <>
        {filteredBooks.map((book) => (
          <DashboardItem
            title={book.title}
            author={book.author}
            date={book.date}
            id={book.id}
            bookLibary={bookLibary}
            setBookLibary={setBookLibary}
          />
        ))}
      </>
    );
  } else if (bookLibary.length > 0) {
    return (
      <p className="w-full text-center pt-10 font-medium">
        No matching books...
      </p>
    );
  } else {
    return (
      <div>
        <p className="w-full text-center pt-10 font-medium">
          Currently you don’t have any books here.
        </p>
      </div>
    );
  }
};

const Dashboard = ({ filter }: { filter: string }) => {
  const [bookLibary, setBookLibary] = useState(
    JSON.parse(localStorage.getItem("books") || "{}")
  );

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookLibary));
  }, [bookLibary]);

  return (
    <div>
      <DashboardHeader />
      <hr className="mt-2" />
      <DashboardItems
        bookLibary={bookLibary}
        setBookLibary={setBookLibary}
        filter={filter}
      />
    </div>
  );
};

function HomeScreen() {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <Header
        buttonType="button"
        buttonText="Add new Book"
        buttonIcon={faFolderPlus}
        buttonAction="/create-book"
        isSearchBarVisible={true}
        setSearchBarFilter={setFilter}
      />
      <Dashboard filter={filter} />
    </div>
  );
}

export default HomeScreen;
