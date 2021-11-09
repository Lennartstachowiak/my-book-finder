import Header from "./components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import { Link } from "react-router-dom";

function handleSubmit() {
  console.log("Submit");
}

const InputField = ({ label }: { label: string }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  );
};

const CreateBookForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField label="Title of the book" />
        <InputField label="Author" />
        <InputField label="Published date" />
        <Button type="submit" text="Add book" icon={faFolderPlus} />
      </form>
    </div>
  );
};
function CreateBookScreen() {
  return (
    <div>
      <Header
        buttonType="button"
        buttonText="Go back to Dashboard"
        buttonIcon={faArrowLeft}
        buttonAction="/"
        isSearchBarVisible={false}
      />
      <CreateBookForm />
    </div>
  );
}

export default CreateBookScreen;
