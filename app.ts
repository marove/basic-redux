
// STORE
export interface Reducer<T> {
  (state: T, action: Action ): T
}

export class Store<T> {

  constructor(
      private reducer: Reducer<T>,
      private state: T
  ) {}

  getState(): T {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
  }
}


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
    case 'RESET':
      return state;
    default:
      return state;
  }

}


// APP
const store = new Store(counterReducer, 10);

store.dispatch(increaseAction);
console.log(store.getState()); // 11

store.dispatch(decreaseAction);
console.log(store.getState()); // 10

store.dispatch(multiplyAction);
console.log(store.getState()); // 20

store.dispatch(divideAction);
console.log(store.getState()); // 10

store.dispatch(resetAction);
console.log(store.getState()); // 10
