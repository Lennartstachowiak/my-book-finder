import LinkButton from "./LinkButton";
import SearchBar from "./SearchBar";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function Header({
  buttonType,
  buttonText,
  buttonIcon,
  buttonAction,
  isSearchBarVisible,
  setSearchBarFilter,
}: {
  buttonType: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  buttonIcon: IconDefinition;
  buttonAction: string;
  isSearchBarVisible: Boolean;
  setSearchBarFilter?: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <header className="flex space-x-20 items-center py-5 h-20">
      <h2 className="font-semibold text-3xl whitespace-nowrap">
        My Book Finder
      </h2>
      <LinkButton
        type={buttonType}
        text={buttonText}
        icon={buttonIcon}
        action={buttonAction}
      />
      <SearchBar visible={isSearchBarVisible} setFilter={setSearchBarFilter} />
    </header>
  );
}

export default Header;
