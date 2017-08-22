import React from 'react';
import { hashHistory } from 'react-router';
import Body from './home/body';

const App = ({ children }) => (
  <div>
    <header>

    </header>
    <Body />
    { children }
  </div>
);

export default App;
