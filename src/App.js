import Big from "big.js";
import PropTypes from "prop-types";
import React from 'react';

const Calculating = (props) => {
  return <h2>Number {props.total}</h2>
}

Calculating.propTypes = {
  total: PropTypes.number
}
Calculating.defaulProps = {
  total: 0
}

class Calculator extends React.Component {

  render() {
    const a = Big(1.2).mul(2);
    return <Calculating total={`${a}`}/>
  }
};


function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App;
