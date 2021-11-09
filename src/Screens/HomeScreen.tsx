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

function HomeScreen() {
  return (
    <div>
      <Header
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
