import { createStore, Store } from 'redux';

// ACTION TYPE
interface Action {
  type: string;
  payload?: any;
}


// ACTIONS
const increaseAction: Action = {
  type: 'INCREASE'
};

const decreaseAction: Action = {
  type: 'DECREASE'
};

const multiplyAction: Action = {
  type: 'MULTIPLY',
  payload: 2
}

const divideAction: Action = {
  type: 'DIVIDE',
  payload: 2
}

const resetAction: Action = {
  type: 'RESET'
}


// REDUCER
function counterReducer(state = 10, action: Action): number {

  switch (action.type) {
    case 'INCREASE':
      return state += 1;
    case 'DECREASE':
      return state -= 1;
    case 'MULTIPLY':
      return state * action.payload;
    case 'DIVIDE':
      return state / action.payload;
    case 'RESET':
      return state;
    default:
      return state;
  }
}


// APP
const store: Store = createStore(counterReducer);

store.subscribe(() => {
  console.log('Subscription: ', store.getState());
})

store.dispatch(increaseAction); // 11
store.dispatch(decreaseAction); // 10
store.dispatch(multiplyAction); // 20
store.dispatch(divideAction);   // 10
store.dispatch(resetAction);    // 10
