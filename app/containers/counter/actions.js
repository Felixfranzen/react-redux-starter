export function up(){
  const action = {
    type: 'UP',
    payload: null
  }

  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(action);
    }, 1000);
  })
};

export function down(){
  return {
    type: 'DOWN',
    payload: null
  };
}


