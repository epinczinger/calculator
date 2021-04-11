import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { next, total } = props;

  return (
    <div className="flex justify-end bg-gray-400 border-4 border-gray-800 rounded-md text-2xl lg-text-3xl px-2 py-3 ">
      <h2 className="text-gray-700">
        {next || total || 0}
      </h2>
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
