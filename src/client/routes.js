/**
 * Created by ngnono on 16-12-30.
 */
import React from 'react';
import {Router,Redirect, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Counter from './containers/CounterContainer';
import App from './containers/AppContainer';
import Home from './containers/HomeContainer';
import Show from './containers/ShowContainer';
import NotFound from  './containers/NotFoundContainer';


const routes =
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/counter" component={Counter} u="/counter"/>
    <Route path="/show/:id" component={Show} u="/show"/>
    <Route path="/404" component={NotFound} />
    {/*<Route path="*" component={NotFound} />*/}
    <Redirect from='*' to='/404' />
  </Route>
  ;

export default  routes;
