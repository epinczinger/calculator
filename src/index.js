import React from 'react';
import ReactDOM from 'react-dom';
import Big from 'big.js';
import PropTypes from 'prop-types';

const Items = props => {
  const { total } = props;
  return (
    <h1>
      Number:
      {total}
    </h1>
  );
};

Items.propTypes = {
  total: PropTypes.number,
};

Items.defaultProps = {
  total: 0,
};

export default class App extends React.PureComponent {
  render() {
    const a = Big(1.2).mul(2);
    return <Items total={`${a}`} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
