import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  let { next, total, operation } = props;

  if (next === null && total === null) {
    next = '0';
  }

  if (operation === '=') {
    operation = '';
    total = '';
  }
  return (
    <div className="flex justify-end bg-gray-400 border-4 border-gray-800 rounded-md text-2xl lg-text-3xl p-2">
      <h2>
        {next || total }
      </h2>
    </div>
  );
};

Display.defaultProps = {
  next: '0',
  total: '0',
  operation: '',
};

Display.propTypes = {
  next: PropTypes.number,
  total: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
