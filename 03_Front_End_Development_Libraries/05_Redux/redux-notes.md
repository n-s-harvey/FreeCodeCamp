# Redux Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

- [Redux Notes - from FreeCodeCamp](#redux-notes---from-freecodecamp)
    - [Create a Redux Store](#create-a-redux-store)
    - [Get State from the Redux Store](#get-state-from-the-redux-store)
    - [Define a Redux Action](#define-a-redux-action)
    - [Define an Action Creator](#define-an-action-creator)
    - [Dispatch an Action Event](#dispatch-an-action-event)
    - [Handle an Action in the Store](#handle-an-action-in-the-store)
    - [Use a Switch Statement to Handle Multiple Actions](#use-a-switch-statement-to-handle-multiple-actions)
    - [Use `const` for Action Types](#use-const-for-action-types)
    - [Register a Store Listener](#register-a-store-listener)
    - [Combine Multiple Reducers](#combine-multiple-reducers)
    - [Send Action Data to the Store](#send-action-data-to-the-store)
    - [Use Middleware to Handle Asynchronous Actions](#use-middleware-to-handle-asynchronous-actions)
    - [Write a Counter with Redux](#write-a-counter-with-redux)
    - [Never Mutate State](#never-mutate-state)
    - [Use the Spread Operator on Arrays](#use-the-spread-operator-on-arrays)
    - [Remove an Item from an Array](#remove-an-item-from-an-array)
    - [Copy an Object with `Object.assign`](#copy-an-object-with-objectassign)


### Create a Redux Store

Redux has a single state object that's responsible for the entire state of your app.

Redux methods are available from a Redux object. 

To create a store, call `Redux.createStore(reducerCallback)`.

```jsx
const store = Redux.createStore(reducer);
```

### Get State from the Redux Store

Retrieve the current state by calling `getState()`.

### Define a Redux Action

All state updates are triggered by dispatching actions.

An action is a JavaScript object that contains information about an action event that has occurred.

Actions can optionally carry data.

Actions must carry a `type` property that specifies the type of action that occurred.

```jsx
const action = {type: 'LOGIN'};
```

### Define an Action Creator

After creating an action, the action needs to be sent to the Redux store so it can update its state.

Action creators are JavaScript functions that return an action.

```jsx
const action = {
  type: 'LOGIN'
}

function actionCreator() {
  return action;
}
```

### Dispatch an Action Event

The `dispatch()` method is used to dispatch actions to the Redux store.

```jsx
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
```

### Handle an Action in the Store

After an action is created an dispatched, a `reducer` function handles the state modifications. It takes `state` and `action` as arguments, and it always returns a new `state`. 

A key principle of Redux is that `state` is read-only. A `reducer` function must always return a new copy of `state` and never modify state directly.

```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if (action.type == 'LOGIN') return {
    login: true
  }
  else return state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

### Use a Switch Statement to Handle Multiple Actions

Don't forget to write a `default` case in the switch that returns the current `state`. Once your app has multiple reducers, they are all run any time an action dispatch is made, even if the action isn't related to the reducer.

```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      }
    case 'LOGOUT':
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

### Use `const` for Action Types

A common practices is to assign action types as constants.

```jsx
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```

### Register a Store Listener

Using the `subscribe()` method, the listener functions are called whenever an action is dispatched against the store. One use case could be logging a message every time an action is received.

```jsx
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

let count = 0;

function increment() {
  count++;
}
store.subscribe(increment);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

### Combine Multiple Reducers

You can define multiple reducers to handle different pieces of your app's state, then compose them into one reducer with `combineReducers()`. 

The root reducer is then passed into the Redux `createStore()` method.

This accepts an object as an argument of the type:

```jsx
const rootReducer = Redux.combineReducers({
  stateChunkOne: reducerFunction,
  stateChunkTwo: anotherReducer
});
```

```jsx
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```

### Send Action Data to the Store

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text
      
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

### Use Middleware to Handle Asynchronous Actions

Redux Thunk middleware helps handle asynchronous actions.

To include it, pass it as an argument to `Redux.applyMiddleware()`. 

This statement is then provided as a second optional parameter to `createStore()`. 

To create an asynchronous action, you return a function in the action creator that takes `dispatch` aas an argument. This function will handle dispatch actions and perform asynchronous requests.

It's common to dispatch an action before initiating any asynchronous behavior so that your app state knows that some data is being requested. Then, once data is received, you dispatch another action which carries the data along with the information that the action is completed.

```jsx
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
    }, 2500);
    dispatch(receivedData(data))
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

### Write a Counter with Redux

```jsx
const INCREMENT = 'INCREMENT'; 
const DECREMENT = 'DECREMENT';

const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}; 

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```

### Never Mutate State

```jsx
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

### Use the Spread Operator on Arrays

The spread operator provides immutable array operations only for one-dimensional arrays.

```jsx
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

### Remove an Item from an Array

`slice()` and `concat()` are useful to avoid mutating an array in `state`

```jsx
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

### Copy an Object with `Object.assign`

`Object.assign()` takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects.

```jsx
const newObject = Object.assign({}, obj1, obj2);
```

```jsx
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```