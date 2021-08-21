import React, { useEffect, useState } from 'react';
import TestServerController from './TestServerController';

const TestServer = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    TestServerController.load().then((response) => {
      setValue(response);
    });
  }, []);
  return (
    <div>
      <h1>Test</h1>
      {value}
    </div>
  );
};

export default TestServer;
