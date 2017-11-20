import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App/App.js';
import Resume from './components/Resume/Resume.js';
import Biography from './components/Biography/Biography.js';
import Abstract from './components/Abstract/Abstract.js';
import Library from './components/Library/Library.js';
import Links from './components/Links/Links.js';
import Search from './components/Search/Search.js';
import IndividualSection from './components/IndividualSection/IndividualSection.js';
import DocumentPreview from './components/DocumentPreview/DocumentPreview.js'

import registerServiceWorker from './registerServiceWorker.js';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Resume} />
        <Route path='bio' component={Biography} />
        <Route path='diss' component={Abstract} />
        <Route path='library' component={Library} />
        <Route path='links' component={Links} />
        <Route path='links/zvit' component={Search} />
        <Route path='ind' component={IndividualSection}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
