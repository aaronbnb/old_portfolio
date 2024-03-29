import React from 'react';
import { Provider } from 'react-redux';

import Body from './home/body';
import DevContainer from './dev/dev_container';
import HomeContainer from './home/home_container';
import TeachContainer from './teach/teach_container';
import ResumeContainer from './resume/resume_container';
//react router, won't be using browserHistory
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';


const Root = ({ store }) => {

  return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={HomeContainer}/>
            <Route path="dev" component={DevContainer}></Route>
            <Route path="teach" component={TeachContainer}></Route>
            <Route path="resume" component={ResumeContainer}></Route>
          </Route>
        </Router>
      </Provider>
    );
  };


export default Root;
