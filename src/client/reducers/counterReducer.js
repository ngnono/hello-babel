/**
 * Created by lianghongpeng on 2016/10/31.
 */

function counter(state = {count: 0}, action) {

  const {count, title} = state;

  switch (action.type) {
    case 'increase':
      return {count: count + 1, title};
    case 'decrease':
      return {count: count - 1, title};
    default:
      return state
  }
}

export  default  counter;
