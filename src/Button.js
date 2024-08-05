import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  
  return <button className="px-3 py-1.5 border border-blue-600 bg-orange-200 text-red-400" >{children}</button>;
}

Button.propTypes = {
  checkVarValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!success) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!outline) +
      Number(!!rounded);

    if (count > 1) {
      return new Error("one the props that was setup within code");
    }
  },
};

export default Button;
