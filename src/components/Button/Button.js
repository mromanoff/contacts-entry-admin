/**
 *
 * Button.react.js
 *
 */


import 'suitcss-components-button';  //TODO: imports second time. fix needed
import './Button.css';

import React, {PropTypes} from 'react';


const Button = ({className, handleAction, label}) => {
    className = className ? className : 'Button'; //TODO: doesn't work: styles.Button;

    return (
        <button className={className} onClick={handleAction}>{label}</button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    handleAction: PropTypes.func
};

export default Button;
