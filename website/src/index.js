import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageWrapper from './Components/PageWrapper';
import Hotel from './Components/TourSection_Hotel';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route exact path="/" component={PageWrapper}/>
          <Route path="/hotel" component={Hotel}/>
        </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
