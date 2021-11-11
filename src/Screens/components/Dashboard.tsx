import { useEffect, useState } from "react";
import DashboardItems from "./DashboardItems";

const DashboardHeader = () => {
  return (
    <div className="flex">
      <p className="w-1/3 font-semibold">Title of the book</p>
      <p className="w-1/3 font-semibold">Author</p>
      <p className="w-1/3 font-semibold">Published date</p>
    </div>
  );
};

const Dashboard = ({ filter }: { filter: string }) => {
  const [bookLibary, setBookLibary] = useState(
    JSON.parse(localStorage.getItem("books") || "[]")
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

export default Dashboard;
