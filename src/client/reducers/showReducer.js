/**
 * Created by ngnono on 17-2-16.
 */

import fetchGet from  '../services/showService';




function reduce(state = {phoneNum: ''}, action = {type: 'default', payload: {}}) {
  // "use strict";


  console.log('action:%s', JSON.stringify(action));

  switch (action.type) {

    case "Fetch_GetById_Success":



      console.log('reducer:%s', action.payload);
      return {phoneNum: action.payload.phoneNum};
    case "Fetch_GetById_Error":
      return {error: action.payload.error};

    default :
      return state;

  }

}

export default reduce;
