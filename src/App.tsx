import React from "react";
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
    <button className="bg-indigo-700 px-5 py-2 rounded-xl flex flex-nowrap items-center">
      <FontAwesomeIcon
        className="mr-4"
        icon={faFolderPlus}
        color="white"
        size="sm"
      />
      <p className="text-white text-base whitespace-nowrap">Add new book</p>
    </button>
  );
};

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <p className="w-1/3">Title of the book</p>
        <p className="w-1/3">Author</p>
        <p className="w-1/3">Published date</p>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex space-x-20 items-center py-5">
      <h2 className="font-bold text-3xl whitespace-nowrap">My Book Finder</h2>
      <AddBookBtn />
      <SearchBar />
    </header>
  );
};

function App() {
  return (
    <div className="px-10">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
