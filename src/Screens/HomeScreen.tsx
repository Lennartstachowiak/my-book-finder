import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search for you books..."
      className="flex border rounded-xl px-5 py-2 w-full"
    />
  );
};

const AddBookBtn = () => {
  return (
    <Link to={"/create-book"}>
      <button
        type="button"
        className="bg-indigo-700 px-5 py-2 rounded-xl flex flex-nowrap items-center"
      >
        <FontAwesomeIcon
          className="mr-4"
          icon={faFolderPlus}
          color="white"
          size="sm"
        />
        <p className="text-white text-base whitespace-nowrap">Add new book</p>
      </button>
    </Link>
  );
};

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

const Dashboard = () => {
  var title = "Example book";
  var author = "author";
  var date = "date";

  return (
    <div>
      <DashboardHeader />
      <DashboardItem title={title} author={author} date={date} />
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex space-x-20 items-center py-5">
      <h2 className="font-semibold text-3xl whitespace-nowrap">
        My Book Finder
      </h2>
      <AddBookBtn />
      <SearchBar />
    </header>
  );
};

function HomeScreen() {
  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
}

export default HomeScreen;
