/**
 * Created by lianghongpeng on 2016/10/28.
 */




function reducer(state = {value: 0, clickCount: 0}, action) {
  const value = state.value;
  const count = state.clickCount;
  let clickCount = (count + 1);
  switch (action.type) {
    case 'onClient':

      return {value: value, clickCount: clickCount};
    default:
      return state
  }
}

export default reducer;
