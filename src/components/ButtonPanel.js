import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const blueButton = 'bg-blue-700 hover:bg-blue-800 flex justify-center w-16 h-16 lg:w-24 lg:h-20 border rounded border-gray-800';
  const greenButton = 'bg-green-700 hover:bg-green-800 flex justify-center w-16 h-16 lg:w-24 lg:h-20 border rounded border-gray-800';
  const greenLgButton = 'bg-green-700 hover:bg-green-800 flex justify-center w-32 h-16 lg:w-48 lg:h-20 border rounded border-gray-800';
  const yellowButton = 'bg-yellow-500 hover:bg-yellow-600 flex justify-center w-16 h-16 lg:w-24 lg:h-20 border rounded border-gray-800';

  return (
    <div className="bg-gray-800 text-lg md:text-xl">
      <div className="flex">
        <div className={blueButton}>
          <Button clickHandler={() => props.clickHandler('AC')} name="AC" />
        </div>
        <div className="bg-blue-700 hover:bg-blue-800 w-1/4 flex justify-center border rounded border-gray-800 min-w-12">
          <Button clickHandler={() => props.clickHandler('+/-')} name="+/-" />
        </div>
        <div className={blueButton}>
          <Button clickHandler={() => props.clickHandler('%')} name="%" />
        </div>
        <div className={yellowButton}>
          <Button clickHandler={() => props.clickHandler('÷')} name="÷" />
        </div>
      </div>
      <div className="flex">
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('7')} name="7" />
        </div>
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('8')} name="8" />
        </div>
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('9')} name="9" />
        </div>
        <div className={yellowButton}>
          <Button clickHandler={() => props.clickHandler('x')} name="x" />
        </div>
      </div>
      <div className="flex">
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('4')} name="4" />
        </div>
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('5')} name="5" />
        </div>
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('6')} name="6" />
        </div>
        <div className={yellowButton}>
          <Button clickHandler={() => props.clickHandler('-')} name="-" />
        </div>
      </div>
      <div className="flex">
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('1')} name="1" />
        </div>
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('2')} name="2" />
        </div>
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('3')} name="3" />
        </div>
        <div className={yellowButton}>
          <Button clickHandler={() => props.clickHandler('+')} name="+" />
        </div>
      </div>
      <div className="flex">
        <div className={greenLgButton}>
          <Button clickHandler={() => props.clickHandler('0')} name="0" />
        </div>
        <div className={greenButton}>
          <Button clickHandler={() => props.clickHandler('.')} name="." />
        </div>
        <div className={yellowButton}>
          <Button clickHandler={() => props.clickHandler('=')} name="=" />
        </div>
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
