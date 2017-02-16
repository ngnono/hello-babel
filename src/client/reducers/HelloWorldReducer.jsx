/**
 * Created by lianghongpeng on 2016/10/28.
 */




function reducer(state = {value: 0, payload: {}}, action) {
  const value = state.value;
  const count = state.payload.clickCount;
  let clickCount = (count + 1);

  switch (action.type) {
    case 'helloWorld':

      return {value: value, payload: {clickCount: clickCount}};
    default:
      return state
  }
}

export default reducer;
