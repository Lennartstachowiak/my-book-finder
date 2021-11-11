import Header from "./components/Header";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

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
