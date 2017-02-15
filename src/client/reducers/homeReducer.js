/**
 * Created by ngnono on 17-1-3.
 */


function app(state = {title: " ok "}, action) {

  const {title} = state;

  switch (action.type) {
    case 'default':
      return {title};
    default:
      return state;
  }
}

export  default  app;
