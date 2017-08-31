import { UP, DOWN } from './constants'
export function up(){
  return {
    type: UP
  }
}

export function upAsync(){
  return (dispatch, getState) => {
    setTimeout(() => {

      const { counter } = getState()
      if (counter >= 5) {
        return
      }

      dispatch(up())
    }, 1000)
  }
}

export function down(){
  return {
    type: DOWN
  }
}