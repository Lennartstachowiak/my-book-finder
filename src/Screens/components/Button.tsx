import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Button = ({
  type,
  text,
  icon,
}: {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  icon: IconDefinition;
}) => {
  return (
    <button
      type={type}
      className="bg-indigo-700 px-5 py-2 rounded-xl flex flex-nowrap items-center"
    >
      <FontAwesomeIcon className="mr-4" icon={icon} color="white" size="sm" />
      <p className="text-white text-base whitespace-nowrap">{text}</p>
    </button>
  );
};

export default Button;
