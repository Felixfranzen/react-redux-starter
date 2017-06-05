let DEFAULT_STATE = {
  count: 0,
  last_action: ''
}

function reducer(state = DEFAULT_STATE, action){
  switch(action.type){
    case 'UP':
      return { ...state, count: state.count+1, last_action: action.type }
      break

    case 'DOWN':
      return { ...state, count: state.count-1, last_action: action.type }
      break

  }

  return state
}

export default reducer