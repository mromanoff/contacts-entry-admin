import './Button.css';

import React, {PropTypes} from 'react';


const Button = ({className, handleAction, label}) => {
  className = className ? className : 'Button';

  return (
    <button className={className} onClick={handleAction}>{label}</button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Button;
