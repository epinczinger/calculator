import React from 'react';

function Quote() {
  return (
    <div className="text-gray-800 font-bold flex flex-col justify-center p-2 max-w-md mx-auto">
      <h3 className="text-xl text-center p-4 justify-self-start">
        Qu
        <span className="text-blue-400">ot</span>
        e of
        {' '}
        <span className="text-green-400">t</span>
        he day
        <span className="text-yellow-400">!</span>
      </h3>
      <h1 className="text-lg text-center p-4">
        <q>
          Ma
          <span className="text-red-400">th</span>
          ematics
          {' '}
          <span className="text-red-400">i</span>
          s not about numbers,
          equations, computatio
          <span className="text-red-400">n</span>
          s, or algorithms: it is about understanding.
        </q>
        <br />
        <cite className="text-sm">
          William Paul Thur
          <span className="text-red-400">k</span>
          ston
        </cite>
      </h1>
    </div>
  );
}

export default Quote;
