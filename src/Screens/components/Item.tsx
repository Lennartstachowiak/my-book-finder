import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    bookLibary.forEach((book) => {
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

export default DashboardItem;
