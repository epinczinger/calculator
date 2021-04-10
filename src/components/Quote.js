import React from 'react';

function Quote() {
  return (
    <div className="text-gray-800 font-bold flex flex-col justify-center p-2">
      <h3 className="text-xl text-center p-4 justify-self-start">
        Quote of the day!
      </h3>
      <h1 className="text-lg text-center p-4">
        <q>
          Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding.
        </q>
        <br />
        <cite className="text-sm">William Paul Thurston</cite>
      </h1>
    </div>
  );
}

export default Quote;
