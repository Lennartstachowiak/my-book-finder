import DashboardItem from "./Item";

const DashboardItems = ({
  bookLibary,
  setBookLibary,
  filter,
}: {
  bookLibary: { title: string; author: string; date: string; id: string }[];
  setBookLibary: React.Dispatch<any>;
  filter: string;
}) => {
  let filteredBooks = bookLibary.filter(
    (book) =>
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.author.toLowerCase().includes(filter.toLowerCase())
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
            key={book.id}
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

export default DashboardItems;
