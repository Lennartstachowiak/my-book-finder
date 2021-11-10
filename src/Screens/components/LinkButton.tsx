import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Button from "./Button";

const LinkButton = ({
  type,
  text,
  icon,
  action,
}: {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  icon: IconDefinition;
  action: string;
}) => {
  return (
    <Link to={action} className="mb-5" >
      <Button type={type} text={text} icon={icon} />
    </Link>
  );
};

export default LinkButton;
