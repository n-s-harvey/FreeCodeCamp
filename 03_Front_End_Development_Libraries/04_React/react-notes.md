# React Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

## Table of Contents

<details>
<Summary>(Click to expand)

- [Introduction to React](#intro-to-react)  
  - [Creating Simple JSX](#create-a-simple-jsx-element)  
  - [Creating Complex JSX](#create-a-complex-jsx-element)  
  - [Adding Comments](#adding-comments-in-jsx)  
  

</details>


## Intro to React

React uses JSX, which allows you to write HTML within JavaScript. 

To write JavaScript directly within JSX, include the code you want executed as JavaScript within curly braces:

```jsx
{'this is treated as JavaScript code'}
```

JSX needs to be transpiled since it's not a valid JavaScript language.

## Create a Simple JSX Element

```jsx
const JSX = <h1>Hello JSX!</h1>;
```

## Create a Complex JSX Element

Nested JSX must return a single element. It can be a container (like a div wrapped around your content), but it cannot return multiple elements.

It is optional to wrap nested JSX in parentheses.

This is a valid use:

```jsx
const JSX = 
  <div>
    <h1>Hello World</h1>
    <p>Welcome to a demonstration of JSX!</p>
    <ul>
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
    </ul>
  </div>;
```

This is another valid use:

```jsx
const JSX = (
  <div>
    <p>Hello World!</p>
  </div>
);
```

## Adding Comments in JSX

To add comments, use the braces to execute as JavaScript:

```jsx
{ /* */ }
```

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    {/*Comment!*/}
    <p>Here's a subtitle</p>
  </div>
);
```

## Render HTML Elements to the DOM

We can render JSX directly to the HTML DOM using React's rendering API, ReactDOM.

The method to render elements to the DOM is as follows:
```jsx
ReactDOM.render(componentToRender, targetNode)
```
where `componentToRender` is the React element or component to render and `targetNode` is the DOM node that you want to render the component to.

One way to select the DOM node to render to is to call 
```jsx
document.getElementById('id-name')
```

## Define an HTML Class in JSX

JSX uses `className` to define HTML classes (`class` is a reserved JavaScript keyword).

The naming convention for all HTML attributes & event references in JSX is camelCase.

```jsx
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
```

## Self-Closing JSX Tags

Self-closing tags, like `<br />`, must always be written as self-closing in JSX (meaning `<br></br>` can't be used as it won't transpile)

However, in JSX, all elements can be self-closed: `<div />` will correctly transpile but it won't allow you to add any content to the `div`.

## Create a Stateless Functional Component

Defining a React component with a JavaScript function creates a stateless functional component - it can receive data and render it, but does not manage or track changes to that data.

To create a component with a function, write a JavaScript function that returns either JSX or `null`. React requires function names begin with a capital letter.

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

## Create a React Component

The other way to define a React component is with the `class` syntax.

Each component in this way is an extension of `React.Component`.

It is best practice to call a component's `constructor` with `super`, and pass `props` to both - this allows the component to initialize properly.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div><h1>Hello React!</h1></div>
    )
  }
};
```

## Create a Component with Composition

To render a component as a child in a React component, include the component name written as a custom HTML tag in the JSX.

It is common practice to define child components as an arrow function.

As an example, in the `render` method:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

As a full example of child and parent:

```jsx 
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
```

## Use React to Render Nested Components

Think about UI as basic building blocks. In the below code, `TypesOfFruit` is a child of `Fruits`, which is a child of `TypesOfFood`.

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
        <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
          <Fruits />
      </div>
    );
  }
};
```

## Compose React Components

You can mix JSX elements, stateless functional components, and ES6 class components within other components.

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
          <Citrus />
          <NonCitrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
      </div>
    );
  }
};
```

## Render a Class Component to the DOM

For React code to render, a call must be made to the ReactDOM API.

The syntax for rendering JSX is different than rendering React components.


```jsx
{ /* Rendering JSX components: */ }
ReactDOM.render(componentToRender, targetNode);
```

```jsx
{ /* Rendering React components: */ }
ReactDom.render(<ComponentToRender />, targetNode);
```

Note that the syntax to render React components is similar to nested components.

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
```

## Pass Props to a Stateless Functional Component

You can pass a property to a stateless function component with the following syntax:

```jsx
<parent>
  <child-component property-name='value' />
</parent>
```

In essence, you are defining custom HTML attributes that are being passed to the component.

To access the value, use the following syntax:

```jsx
const child-component = (props) => <p>Here is the data: {props.property-name}</p>
```

It is standard to call the argument `props` in the function definition.

You can have `prop` values evaluated as JavaScript by enclosing in curly brackets: `date={Date()}`

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: { props.date } </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={ Date() }/>
      </div>
    );
  }
};
```

## Pass an Array as Props

To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

Array methods such as `join()` can be used when accessing the property:

```jsx
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
```

## Use Default Props

Syntax:

```jsx
ComponentName.defaultProps = { property-name: value };
```

## Override Default Props

To override default props, explicitly set the prop values.

To pass in non-string values as a prop, it needs to be executed as JavaScript by wrapping in `{ }`

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />
  }
};
```

## Use PropTypes to Define the Props You Expect

It's best practice to define the type when you know it ahead of time. React will throw an error if the type doesn't match the expected type.

Usage:

```jsx
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

In the above snippet, `PropTypes.func` checks that `handleClick` is a function. Adding `isRequired` tells React that `handleClick` is a required property for that component.

`func` is one of the primitive JavaScript types.

As of React v15.5.0, `PropTypes` is imported independently from React:

```jsx
import PropTypes from 'prop-types';
```

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {quantity: PropTypes.number.isRequired}

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

## Access Props Using `this.props`

If the component that you're passing a prop to is an ES6 class component, use the `this` keyword:

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <Welcome name="Nick"/>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <p>Hello, <strong>{ this.props.name }</strong>!</p>
        </div>
    );
  }
};
```

## Summary of Stateless Functional Components, Stateless Components, and Stateful Components

- **Stateless functional component**: any function which accepts props and returns JSX
- **Stateless component**: a class that extends `React.component` but does not use internal state
- **Stateful component**: a class component that maintains its own internal state

It is best to minimize statefulness and to create stateless functional components whever possible to reduce the number of areas which are affected by state.

Note that `.defaultProps` and `.propTypes` are still available to use with a functional component:


```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};

const Camper = (props) => {
  return (
    <>
    <p>My name is</p>
    <p>{props.name}</p>
    </>
  );
}

Camper.defaultProps = {name: 'CamperBot'};

Camper.propTypes = {name: PropTypes.string.isRequired};
```

## Create a Stateful Component

The `state` consists of any data your app needs to know about.

To create a state in a React component, declare a `state` property on the component class in its constructor. The `state` property must be set to a JavaScript object.

The `state` object is persistent throughout life of the component.

To use `state`, it is required to extend `React.Component`.

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Nick"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

## Render State in the User Interface

If a component is stateful, it will always have access to the data in `state` in its `render()` method with `this.state`.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

## Another Way to Render State in the User Interface

In the `render()` method, before the `return` statement, you can write JavaScript and then use `props` and/or `state` in the return value.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
```

## Set State with `this.setState()`

To use `.setState()`, pass in an object with key-value pairs.

Avoid modifying  state directly and instead use `setState()`

State updates through `setState()` may be asynchronous, and React may run multiple updates at once to improve performance

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(
      {name: "React Rocks!"}
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

## Bind `this` to a Class Method

A class method typically needs access to the `this` keyword, so it is useful to bind `this` in the constructor for the methods that need access

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```

## Use State to Toggle an Element

Remember that React may batch multiple `setState()` calls into a single update. So, we should avoid using code like this:

```jsx
{/* Don't do this! */}

this.setState({
  counter: this.state.counter + this.props.increment
});
```

Instead, pass `setState` a function that allows you to access state and props.

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({visibility: !state.visibility}))
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

## Write a Simple Counter

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState(
      state => ({ count: state.count + 1 })
    );
  }
  decrement() {
    this.setState(
      state => ({ count: state.count - 1 })
    );
  }
  reset() {
    this.setState(
      state => ({ count: 0 })
    );
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

## Create a Controlled Input

Form control elements for text input, like `input` and `textarea`, maintain their own state in the DOM. 

However, this can be moved to a mutable state into a React component's `state`. This allows React to control the value of that input field.

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState(
      state => ({input: event.target.value})
    )
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

## Create a Controlled Form

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // event.preventDefault() is to stop default form behavior -
    // which is to refresh the page
    event.preventDefault();
    this.setState(state => (
      {submit: state.input}
    ))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```

## Pass State as Props to Child Components

A common pattern is to have a stateful component containing a `state` that then renders child components, which you may want to have access to some pieces of `state` passed as props.

The idea of passing part of `state` as a prop shows some important paradigms in React:

1. *Unidirectional data flow* - state flows in one direction down the tree of components
2. Complex stateful apps can be decomposed into few stateful components. This allows you to separate logic handling state from the UI rendering.

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```

## Pass a Callback as Props

You can pass handler functions or any method defined on a React component to a child component.

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

## Use the Lifecycle Method `componentWillMount()`

These are also called lifecycle hooks. 

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Component about to mount");
  }
  render() {
    return <div />
  }
};
```

## Use the Lifecycle Method `componentDidMount()`

The best practice with React to place API calls in the `componentDidMount()`. It is called after a component is mounted to the DOM. Any calls to `setState()` will trigger a re-rendering of the component.

When you call an API in this method and set the state with the data that the API returns, it will automatically trigger an update when the data is received.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```

## Add Event Listeners

The `componentDidMount()` is the best place to attach any event listeners.

React has a synthetic event system that wraps the native event system; even though different browsers may handle events differently, how developers handle the synthetic system is the same.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

## Optimize Re-Renders with `shouldComponentUpdate()`

The default behavior when a component receives new `state` or `props` is to re-render. 

To optimize performance, you can use `shouldComponentUpdate()`, which takes `nextProps` and `nextState` as parameters, and lets you define if the components should update or not.

One way to use this is to compare `this.props` to `nextProps` - if they are equal, then the component wouldn't need to be re-rendered.

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    if (nextProps.value % 2 == 0) return true;
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

## Introducing Inline Styles

JSX elements use the `style` attribute, but because of transpilation, it will need to be equal to a JavaScript `object`.

React does not accept *kebab-case* in the style object, so camelCase is used:

```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

## Add Inline Styles in React

All property value length units (like `height`, `width`, and `fontSize`) are assumed to be in `px` unless otherwise specified.

```jsx
const styles = {
  color: "purple",
  fontSize: "40",
  border: "2px solid purple"
}

class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};
```

## Use Advanced JavaScript in React Render Method

Before the `return` statement inside the `render` method, you can write JavaScript directly without the need for curly braces.

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; 
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
  }
}
```

## Render with an `If-Else` Condition

It seems that using `if-else` within JSX does not work: even if wrapped in curly braces, it expects an expression. Instead, the `if-else` should be outside of the return statement.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    }
    else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
};
```

## Use `&&` for a More Concise Conditional

Using the `&&` within a `return` statement allows you to avoid multiple `if-else` and instead render content if a condition is true:

```jsx
{condition && <p>markup</p>}
```

You can also string multiple `condition`s together by writing `&&` after each.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

## Use a Ternary Expression for Conditional Rendering

A ternary operator can be used in JSX by wrapping in curly braces:

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userAge: ""
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge =="" ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree  }
      </div>
    );
  }
}
```

## Render Conditionally from Props

It is common to use the value of a given prop to make decisions about what to render.

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.fiftyFifty ? <h1>You Win!</h1> : <h1>You Lose!</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= 0.5; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```

## Change Inline CSS Conditionally Based on Component State

To change inline CSS conditionally, modify the styles object assigned to the JSX elements in the render method.

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) inputStyle = {
      border: '3px solid red'
    }
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

## Use `Array.map()` to Dynamically Render Elements

Often, we have no way of knowing what the state of an application is until runtime. 

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(element => <li>{element}</li>); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

## Give Sibling Elements a Unique Key Attribute

In the last snippet, whenever an array of elements is created, each element needs a unique `key` attribute. React uses these keys to keep track of which items are added, changed, or removed.

Keys only need to be unique between sibling elements.

In the below snippet, the index of the item in the array is used as a unique `key`.

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(
    (element, index) => {
      return <li key={index}>{element}</li>
    }
  ); 
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```

## Use `Array.filter()` to Dynamically Filter an Array

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(
      user => user.online
    ); 
    const renderOnline = usersOnline.map(
      (user, index) => <li key={index}>{user.username}</li>
    ); 
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

## Render React on the Server with `renderToString`

Typically, React components are rendered on the client. However, there are some times where you will want to render on the server.

One is to improve performance - instead of sending a large JavaScript bundle to the client, you can instead send HTML.

Additionally, it is easier for web crawlers to crawl your app when it returns HTML.

The `renderToString()` method is available on the `ReactDOMServer`. It takes one argument which is a React element.

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

ReactDOMServer.renderToString(<App />);
```