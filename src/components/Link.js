import classNames from "classnames";
import { useNavigation } from "../hooks/useNavigation";

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();

  const classes = classNames("text-blue-500");

  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to} className={classes}>
      {children}
    </a>
  );
};

export default Link;
