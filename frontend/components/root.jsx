import React from 'react';
import { Provider } from 'react-redux';
import HomeContainer from './home/home_container.jsx';

//react router, won't be using browserHistory
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';


const Root = ({ store }) => {

  return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={HomeContainer}/>

          </Route>
        </Router>
      </Provider>
    );
  };


export default Root;
