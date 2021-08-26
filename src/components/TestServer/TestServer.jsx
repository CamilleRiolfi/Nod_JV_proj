import React, { useEffect, useState } from 'react';
import TestServerController from './TestServerController';

const TestServer = () => {
  const [value, setValue] = useState();
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber(8);
    TestServerController.load().then((response) => {
      setValue(response);
    });
  },
  []);
  const handle = (ev)=>{
    setNumber(ev.currentTarget.value)
  }
  return (
    <div>
      <h1>Test</h1>
      <form>
       <input type="text" value={number} onChange={handle}/>
       <button name="InputValue"> </button>
      </form>
      {value}
    </div>
  );
};

export default TestServer;
