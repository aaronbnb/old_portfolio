import React from 'react';
import { hashHistory } from 'react-router';
import Body from './home/body';
import NavBarContainer from './home/navbar_container';

const App = ({ children }) => (
  <div>
    <header>

    </header>
    { children }



  </div>
);

export default App;
