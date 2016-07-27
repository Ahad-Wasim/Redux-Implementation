const combineReducers = (reducerHash) => {
  
  let reducerKeys = Object.keys(reducerHash);
  let clonedReducerHash = {};

  reducerKeys.forEach((key) => {
    if(typeof reducerHash[key] === 'function'){
      return clonedReducerHash[key] = reducerHash[key]
    }
  });

  return (state={}, action) => {

    let keysCollection = Object.keys(clonedReducerHash);
    let hasChanged = false;

    let newState = keysCollection.reduce((accumulator, key) => {
      let reducer = clonedReducerHash[key]; 
      accumulator[key] = reducer(state[key], action);
      hasChanged = hasChanged || state[key] !== accumulator[key] ;
      return accumulator; 
    }, {});

    return hasChanged ? newState : state;
  };


};

module.exports = combineReducers;

