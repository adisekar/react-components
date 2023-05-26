import className from "classnames";

const Button = (props) => {
  const {
    children,
    rounded,
    outline,
    primary,
    secondary,
    success,
    warning,
    danger,
    ...rest
  } = props;

  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-sky-500": primary,
      "border-gray-600": secondary,
      "border-green-500": success,
      "border-yellow-400": warning,
      "border-red-500": danger,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "rounded-full": rounded,
      "bg-sky-500": primary && !outline,
      "bg-gray-600": secondary && !outline,
      "bg-green-500": success && !outline,
      "bg-yellow-400": warning && !outline,
      "bg-red-500": danger && !outline,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariant: ({ primary, secondary, success, warning, danger }) => {
    // Number(true) = 1, Number(false) = 0, !!undefined = false
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only 1 of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
