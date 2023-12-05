# React Redux Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

### Getting Started with React Redux

Typically, you'll create a single Redux store that manages the state. The React components will subscribe only to pieces of data that are relevant. Then, actions are dispatched directly from React components.

## Manage State Locally First

```jsx

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState(state => ({
      input: event.target.value
    }))
  }
  submitMessage() {
    this.setState({
      input: '',
      messages: this.state.messages.concat(this.state.input)
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}></input>
        <button onClick={this.submitMessage}>Add message</button>
        <ul>{this.state.messages.map(element => <li>{element}</li>)}</ul>
      </div>
    );
  }
};
```

### Extract State Logic to Redux

Move the local state management from the React component into the redux `store`. 

```jsx

const ADD = 'ADD';

function addMessage(message) {
  return {
    type: ADD,
    message
  }
};

const defaultState = [];

function messageReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return state.concat(action.message)
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer);
```

### Use Provider to Connect Redux to React

To connect the two together, use the `react-redux` package.

The `Provider` is a wrapper component from React Redux that wraps the React app. It allows you to access the Redux `store` and `dispatch` functions throughout component tree.

`Provider` takes two props, the Redux store and the child components of your app.

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <DisplayMessages />
    </Provider>
    )
  }
};
```