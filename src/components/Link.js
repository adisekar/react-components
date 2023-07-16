import classNames from "classnames";
import { useNavigation } from "../hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

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
