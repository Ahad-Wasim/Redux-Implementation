// Ahad Wasim - Redux Store implementation

const createStore = (reducer) => {
  
  var _state;
  var _cbList = [];
  
  const getState = () => {
    return _state;
  };
  
  const dispatch = (action) => {
    _state = reducer(_state, action)
    _cbList.forEach((cb) => cb());
  };
  
  
  
  const subscribe = (cb) => {
    _cbList.push(cb);
    
    // Returns an unsubscriber function - Unsubscribes the current function.
    return () => {
      _cbList = _cbList.filter( callback => callback !== cb )
    };
    
  };
  
  dispatch({type: "STORE_INITIATION"});
  
  return { getState, dispatch, subscribe };
}









