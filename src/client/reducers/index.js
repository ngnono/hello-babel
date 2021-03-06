/**
 * Created by ngnono on 17-1-3.
 */

import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import app from './appReducer';
import home from './homeReducer';
import counter from './counterReducer';
import show from './showReducer';
import notFound from './notFountReducer'


export default {app, home, counter, show, notFound, routing: routerReducer};
