import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="bg-gray-800 text-xl">
      <div className="flex">
        <div className="bg-blue-600 hover:bg-blue-700 w-1/4 p-5 flex justify-center border rounded border-gray-800 ">
          <Button className="m-2" name="AC" />
        </div>
        {' '}
        <div className="bg-blue-600 hover:bg-blue-700 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button n className="m-2" name="+/-" />
        </div>
        {' '}
        <div className="bg-blue-600 hover:bg-blue-700 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="%" />
        </div>
        {' '}
        <div className="bg-yellow-500 hover:bg-yellow-600 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="÷" />
        </div>
      </div>
      <div className="flex">
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="7" />
        </div>
        {' '}
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="8" />
        </div>
        {' '}
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="9" />
        </div>
        {' '}
        <div className="bg-yellow-500 hover:bg-yellow-600 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="X" />
        </div>
      </div>
      <div className="flex">
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="4" />
        </div>
        {' '}
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="5" />
        </div>
        {' '}
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="6" />
        </div>
        {' '}
        <div className="bg-yellow-500 hover:bg-yellow-600 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="-" />
        </div>
      </div>
      <div className="flex">
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="1" />
        </div>
        {' '}
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="2" />
        </div>
        {' '}
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="3" />
        </div>
        {' '}
        <div className="bg-yellow-500 hover:bg-yellow-600 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="+" />
        </div>
      </div>
      <div className="flex">
        <div className="bg-green-700 hover:bg-green-800 w-1/2 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="0" />
        </div>
        {' '}
        <div className="bg-green-700 hover:bg-green-800 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="." />
        </div>
        {' '}
        <div className="bg-yellow-500 hover:bg-yellow-600 w-1/4 p-5 flex justify-center border rounded border-gray-800">
          <Button className="m-2" name="=" />
        </div>
      </div>
    </div>
  );
}
