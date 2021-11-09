const SearchBar = ({ visible }: { visible: Boolean }) => {
  if (visible) {
    return (
      <input
        type="text"
        placeholder="Search for you books..."
        className="flex border rounded-xl px-5 py-2 w-full"
      />
    );
  } else {
    return(
        <div></div>
    );
  }
};

export default SearchBar;
