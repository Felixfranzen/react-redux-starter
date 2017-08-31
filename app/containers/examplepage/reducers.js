import { UP, DOWN } from './constants'

export default function(count = 0, action){
  switch (action.type){
    case UP:
      return count + 1

    case DOWN:
      return count - 1

    default:
      return count
  }
}