import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ visible }: { visible: Boolean }) => {
  if (visible) {
    return (
      <div className="flex border rounded-xl px-5 py-2 w-full items-center focus-within:border-indigo-700 focus-within:border-2">
        <FontAwesomeIcon className="mr-4 text-gray-400" icon={faSearch} />
        <input
        type="text"
        placeholder="Search for your books..."
        className="w-full focus:outline-none"
      />
      </div>
      
    );
  } else {
    return(
        <div></div>
    );
  }
};

export default SearchBar;
