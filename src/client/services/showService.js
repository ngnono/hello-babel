/**
 * Created by ngnono on 17-2-16.
 */


//import fetch from 'isomorphic-fetch';

const apiUrl = 'http://baidu.com/?=';

function fetch(url) {
  "use strict";


  return new Promise(function (resolve, reject) {

    resolve({
      json: function () {
        return {phoneNum: "我的手机号"};
      }
    });

  })
}


const fetchGet = id => (dispatch, getState) => {

  dispatch({type: "Fetch_GetById_Request", payload: {id: id}});

  let url = apiUrl + '/' + id;


  return fetch(url).then(response => response.json())
    .then(data => {
      dispatch({type: 'Fetch_GetById_Success', payload: data});
    }).catch(e => {
      dispatch({type: 'Fetch_GetById_Error', payload: e});
    });
};

export default fetchGet;
