import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/Calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    setState(state => Calculate(state, buttonName));
  };

  const { total, next, operation } = state;

  return (
    <>
      <div className="flex flex-col h-full px-3">
        <h1 className="text-gray-800 font-bold text-xl py-3">Let`s do some Maths</h1>
        <div className="mx-auto bg-gray-800">
          <Display total={total} next={next} operation={operation} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
