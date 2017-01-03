/**
 * Created by ngnono on 17-1-3.
 */

import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import app from './appReducer';
import home from './homeReducer';
import counter from './counterReducer';


export default {app, home, counter,routing: routerReducer};
