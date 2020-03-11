
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


// REDUCER
function counterReducer(state, action: Action): number {

  switch (action.type) {
    case 'INCREASE':
      return state += 1;
    case 'DECREASE':
      return state -= 1;
    case 'MULTIPLY':
      return state * action.payload;
    case 'DIVIDE':
      return state / action.payload;
    default:
      return state;
  }

}

// APP
console.log(counterReducer(10, increaseAction));  // 11
console.log(counterReducer(10, decreaseAction));  // 9
console.log(counterReducer(10, multiplyAction));  // 20
console.log(counterReducer(10, divideAction));    // 5
