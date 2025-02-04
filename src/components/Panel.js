import React from 'react';
import classNames from 'classnames';

function Panel({ children, className, onClick, ...rest }) {
  const finalClassName = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div className={finalClassName} onClick={onClick} {...rest}>
      {children}
    </div>
  );
}

export default Panel;
