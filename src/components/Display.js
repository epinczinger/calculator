import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { next, total } = props;

  return (
    <div className="flex justify-end tracking-tighter bg-gray-400 border-4 w-64 border-gray-800 rounded-md text-lg lg:w-auto lg:text-2xl px-2 py-3 ">
      <h2 className="text-gray-700">{next || total || 0}</h2>
    </div>
  );
};

Display.defaultProps = {
  next: '0',
  total: '',
};

Display.propTypes = {
  next: PropTypes.number,
  total: PropTypes.string,
};

export default Display;
