import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { result } = props;
  return (
    <div className="flex justify-end bg-gray-400 border-4 border-gray-800 rounded-md text-2xl lg-text-3xl p-2">
      <h2>{result}</h2>
    </div>
  );
}

Display.defaultProps = {
  result: '01234515',
};

Display.propTypes = {
  result: PropTypes.string,
};
