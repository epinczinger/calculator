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
      <div className="flex justify-around bg-calculator bg-cover bg-center bg-opacity-70 h-full">
        <h1 className="text-blue-700 text-3xl mx-4">Let`s do some Maths</h1>
        <div className="flex-column items-center bg-gray-800 justify-center  w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-auto">
          <Display total={total} next={next} operation={operation} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
