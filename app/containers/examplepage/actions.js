import { UP, DOWN } from './constants'
export function up(){
  return {
    type: UP
  }
}

export function down(){
  return {
    type: DOWN
  }
}