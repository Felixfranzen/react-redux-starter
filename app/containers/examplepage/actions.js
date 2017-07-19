import { UP, DOWN } from './constants'
export function up(){
  return {
    type: UP
  }
}

export function upAsync(){
  return dispatch => {
    setTimeout(() => {
      dispatch(up())
    }, 1000)
  }
}

export function down(){
  return {
    type: DOWN
  }
}