import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, clickHandler } = props;
  return (
    <button className="w-full h-full" onClick={clickHandler} type="button">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
