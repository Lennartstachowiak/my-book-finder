import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({
  visible,
  setFilter,
}: {
  visible: Boolean;
  setFilter?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  if (visible) {
    return (
      <div className="flex w-full border rounded-xl px-5 py-2 items-center focus-within:border-indigo-700 focus-within:border-2">
        <FontAwesomeIcon className="mr-4 text-gray-400" icon={faSearch} />
        <input
          type="text"
          placeholder="Search for book or author..."
          className="w-full focus:outline-none"
          onChange={(event) => {
            if (setFilter) setFilter(event.target.value);
          }}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SearchBar;
