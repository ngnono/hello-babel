/**
 * Created by ngnono on 16-12-30.
 */
import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Counter from './containers/counterContainer';
import App from './containers/appContainer';
import Home from './containers/homeContainer';
import Show from './containers/showContainer';


const routes =
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/counter" component={Counter} u="/counter"/>;
    <Route path="/show/:id" component={Show} u="/show"/>;
  </Route>;

export default  routes;
