import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default function App() {
  return (
    <>
      <div className="flex-column items-center bg-gray-800 justify-center h-4/5 sm:h-2/3 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-auto">
        <Display />
        <ButtonPanel />
      </div>
    </>
  );
}
