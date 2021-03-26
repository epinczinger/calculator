import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  const blueButton = 'bg-blue-600 hover:bg-blue-700 w-1/4 p-5 flex justify-center border rounded border-gray-800';
  const greenButton = 'bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800';
  const greenLgButton = 'bg-green-700 hover:bg-green-800 w-1/2 p-5 flex justify-center border rounded border-gray-800';
  const yellowButton = 'bg-yellow-500 hover:bg-yellow-600 w-1/4 p-5 flex justify-center border rounded border-gray-800';

  return (
    <div className="bg-gray-800 text-xl">
      <div className="flex">
        <div className={blueButton}>
          <Button name="AC" />
        </div>
        {' '}
        <div className={blueButton}>
          <Button name="+/-" />
        </div>
        {' '}
        <div className={blueButton}>
          <Button name="%" />
        </div>
        {' '}
        <div className={yellowButton}>
          <Button name="÷" />
        </div>
      </div>
      <div className="flex">
        <div className={greenButton}>
          <Button name="7" />
        </div>
        {' '}
        <div className={greenButton}>
          <Button name="8" />
        </div>
        {' '}
        <div className={greenButton}>
          <Button name="9" />
        </div>
        {' '}
        <div className={yellowButton}>
          <Button name="X" />
        </div>
      </div>
      <div className="flex">
        <div className={greenButton}>
          <Button name="4" />
        </div>
        {' '}
        <div className={greenButton}>
          <Button name="5" />
        </div>
        {' '}
        <div className={greenButton}>
          <Button name="6" />
        </div>
        {' '}
        <div className={yellowButton}>
          <Button name="-" />
        </div>
      </div>
      <div className="flex">
        <div className={greenButton}>
          <Button name="1" />
        </div>
        {' '}
        <div className={greenButton}>
          <Button name="2" />
        </div>
        {' '}
        <div className={greenButton}>
          <Button name="3" />
        </div>
        {' '}
        <div className={yellowButton}>
          <Button name="+" />
        </div>
      </div>
      <div className="flex">
        <div className={greenLgButton}>
          <Button name="0" />
        </div>
        {' '}
        <div className={greenButton}>
          <Button name="." />
        </div>
        {' '}
        <div className={yellowButton}>
          <Button name="=" />
        </div>
      </div>
    </div>
  );
}
