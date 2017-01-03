function app(state = {title: "application"}, action) {

  const {title} = state;
  
  switch (action.type) {
    case 'default':
      return {title};
    default:
      return state
  }
}

export  default  app;
