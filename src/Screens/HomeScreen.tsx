import Header from "./components/Header";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

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
}: {
  title: string;
  author: string;
  date: string;
}) => {
  return (
    <div className="flex">
      <p className="w-1/3">{title}</p>
      <p className="w-1/3">{author}</p>
      <p className="w-1/3">{date}</p>
    </div>
  );
};

const DashboardItems = ({
  data,
}: {
  data:  { title: string; author: string; date: string; }[];
}) => {
  let books = data;
  return (
    <>
      {books.map((book) => (
        <DashboardItem
          title={book.title}
          author={book.author}
          date={book.date}
        />
      ))}
    </>
  );
};

const Dashboard = () => {
  let bookLibary = [
      {
        title: "Abs",
        author: "Paul",
        date: "01.01.2013",
      },
      {
        title: "Abs",
        author: "Peter",
        date: "01.01.2013",
      },
    ];

  let JSONBooks = localStorage.getItem("books");

  if (JSONBooks != null) {
    bookLibary = JSON.parse(JSONBooks)
  }
  return (
    <div>
      <DashboardHeader />
      <DashboardItems data={bookLibary} />
    </div>
  );
};

function HomeScreen() {
  return (
    <div>
      <Header
        buttonType="button"
        buttonText="Add new Book"
        buttonIcon={faFolderPlus}
        buttonAction="/create-book"
        isSearchBarVisible={true}
      />
      <Dashboard />
    </div>
  );
}

export default HomeScreen;
