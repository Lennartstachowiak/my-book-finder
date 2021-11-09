import Header from "./components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CreateBookForm = () => {
  return <div></div>;
};
function CreateBook() {
  return (
    <div>
      <Header
        buttonText="Go back to Dashboard"
        buttonIcon={faArrowLeft}
        buttonAction="/"
        isSearchBarVisible={false}
      />
      <CreateBookForm />
    </div>
  );
}

export default CreateBook;
