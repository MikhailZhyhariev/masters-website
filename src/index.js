import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom'
import './index.css';

import App from './containers/App/App.js';

import Resume from './components/Resume/Resume.js';
import Biography from './components/Biography/Biography.js';
import Abstract from './components/Abstract/Abstract.js';
import Library from './components/Library/Library.js';
import Links from './components/Links/Links.js';
import Search from './components/Search/Search.js';
import IndividualSection from './components/IndividualSection/IndividualSection.js';
import DocumentPreview from './components/DocumentPreview/DocumentPreview.js';

import configureStore from './store/configureStore';

const store = configureStore();
const baseUrl = process.env.PUBLIC_URL;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
        <Route exact path={ '/' } component={Resume} />
        <Route path={ "/bio" } component={Biography} />
        <Route path={ '/diss' } component={Abstract} />
        <Route path={ '/library' } component={Library} />
        <Route path={ '/library/:article0'} render={() => <DocumentPreview top={window.pageYOffset} number={0} /> }  />
        <Route exact path={ '/links' } component={Links} />
        <Route path={ '/links-zvit' } component={Search} />
        <Route path={ '/ind' } component={IndividualSection}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
