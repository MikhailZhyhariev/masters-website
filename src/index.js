import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
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
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()
const store = configureStore();
const baseUrl = process.env.PUBLIC_URL;

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <div>
//         <App />
//         <Route exact path={ '/' } component={Resume} />
//         <Route path={ "/bio" } component={Biography} />
//         <Route path={ '/diss' } component={Abstract} />
//         <Route path={ '/library' } component={Library} />
//         <Route path={ '/library/:article0'} render={() => <DocumentPreview top={window.pageYOffset} number={0} /> }  />
//         <Route exact path={ '/links' } component={Links} />
//         <Route path={ '/links/zvit' } component={Search} />
//         <Route path={ '/ind' } component={IndividualSection}/>
//       </div>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
        <Route exact='' path={ baseUrl + '/' } component={Resume} />
        <Route path={ baseUrl + "/bio" } component={Biography} />
        <Route path={ baseUrl + '/diss' } component={Abstract} />
        <Route path={ baseUrl + '/library' } component={Library} />
        <Route path={ baseUrl + '/library/:article0'} render={() => <DocumentPreview top={window.pageYOffset} number={0} />}  />
        <Route exact path={ baseUrl + '/links' } component={Links} />
        <Route path={ baseUrl + '/links/zvit' } component={Search} />
        <Route path={ baseUrl + '/ind' } component={IndividualSection}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
