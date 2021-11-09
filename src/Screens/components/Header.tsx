import Button from "./AddBookButton";
import SearchBar from "./SearchBar";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function Header({
  buttonText,
  buttonIcon,
  buttonAction,
  isSearchBarVisible,
}: {
  buttonText: string;
  buttonIcon: IconDefinition;
  buttonAction: string;
  isSearchBarVisible: Boolean;
}) {
  return (
    <header className="flex space-x-20 items-center py-5">
      <h2 className="font-semibold text-3xl whitespace-nowrap">
        My Book Finder
      </h2>
      <Button text={buttonText} icon={buttonIcon} action={buttonAction} />
      <SearchBar visible={isSearchBarVisible} />
    </header>
  );
}

export default Header;
