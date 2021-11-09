import Header from "./components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button";
import { Link } from "react-router-dom";

function handleSubmit() {
  console.log("Submit");
}

const InputField = ({ type, label }: { type: string; label: string }) => {
  return (
    <div className="py-4">
      <label htmlFor={label} className="block text-lg pb-2">
        {label}
      </label>
      <input type={type} className="flex border rounded-xl px-5 py-2" />
    </div>
  );
};

const CreateBookForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField type="text" label="Title of the book" />
        <InputField type="text" label="Author" />
        <InputField type="date" label="Published date" />
        <div className="pt-5">
          <Button type="submit" text="Add book" icon={faFolderPlus} />
        </div>
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
