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
import TourSection_Flight from './Components/TourSection_Flight';
import CarSection from './Components/CarSection';
import TourSection_Vacation from './Components/TourSection_Vacation';
import BlogSection from './Components/BlogSection';
import ContactSection from './Components/ContactSection';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route exact path="/" component={PageWrapper}/>
          <Route path="/hotel" component={Hotel}/>
          <Route path="/flights" component={TourSection_Flight}/>
          <Route path="/car" component={CarSection}/>
          <Route path="/vacations" component={TourSection_Vacation}/>
          <Route path="/blog" component={BlogSection}/>
          <Route path="/contact" component={ContactSection}/>
        </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
