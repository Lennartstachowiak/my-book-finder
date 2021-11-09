import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const Button = ({text, icon, action}: {text:string, icon:IconDefinition, action:string}) => {
  return (
    <Link to={action}>
      <button
        type="button"
        className="bg-indigo-700 px-5 py-2 rounded-xl flex flex-nowrap items-center"
      >
        <FontAwesomeIcon
          className="mr-4"
          icon={icon}
          color="white"
          size="sm"
        />
        <p className="text-white text-base whitespace-nowrap">{text}</p>
      </button>
    </Link>
  );
};

export default Button;