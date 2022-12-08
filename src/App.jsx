import React from 'react';
import { AppContext } from './context/contextApi';

const App = () => {
  return (
    <AppContext>
      <h1 className="underline">hello</h1>
    </AppContext>
  );
};

export default App;
