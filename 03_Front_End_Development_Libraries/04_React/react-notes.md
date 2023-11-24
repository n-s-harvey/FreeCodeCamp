# React Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

## Intro to React

React uses JSX, which allows you to write HTML within JavaScript. 

To write JavaScript directly within JSX, include the code you want executed as JavaScript within curly braces:

``````jsx
{'this is treated as JavaScript code'}
``````

JSX needs to be transpiled since it's not a valid JavaScript language.

## Create a Simple JSX Element

``````jsx
const JSX = <h1>Hello JSX!</h1>;
``````

## Create a Complex JSX Element

Nested JSX must return a single element. It can be a container (like a div wrapped around your content), but it cannot return multiple elements.

It is optional to wrap nested JSX in parentheses.

This is a valid use:

``````jsx
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
``````

This is another valid use:

``````jsx
const JSX = (
  <div>
    <p>Hello World!</p>
  </div>
);
``````

## Adding Comments in JSX

To add comments, use the braces to execute as JavaScript:

``````jsx
{ /* */ }
``````

``````jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    {/*Comment!*/}
    <p>Here's a subtitle</p>
  </div>
);
``````

## Render HTML Elements to the DOM

We can render JSX directly to the HTML DOM using React's rendering API, ReactDOM.

The method to render elements to the DOM is as follows:
``````jsx
ReactDOM.render(componentToRender, targetNode)
``````
where `componentToRender` is the React element or component to render and `targetNode` is the DOM node that you want to render the component to.

One way to select the DOM node to render to is to call 
``````jsx
document.getElementById('id-name')
``````

## Define an HTML Class in JSX

JSX uses `className` to define HTML classes (`class` is a reserved JavaScript keyword).

The naming convention for all HTML attributes & event references in JSX is camelCase.

``````jsx
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
``````

## Self-Closing JSX Tags

Self-closing tags, like `<br />`, must always be written as self-closing in JSX (meaning `<br></br>` can't be used as it won't transpile)

However, in JSX, all elements can be self-closed: `<div />` will correctly transpile but it won't allow you to add any content to the `div`.

## Create a Stateless Functional Component

Defining a React component with a JavaScript function creates a stateless functional component - it can receive data and render it, but does not manage or track changes to that data.

To create a component with a function, write a JavaScript function that returns either JSX or `null`. React requires function names begin with a capital letter.

``````jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
``````

## Create a React Component

The other way to define a React component is with the `class` syntax.

Each component in this way is an extension of `React.Component`.

It is best practice to call a component's `constructor` with `super`, and pass `props` to both - this allows the component to initialize properly.

``````jsx
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
``````

## Create a Component with Composition

To render a component as a child in a React component, include the component name written as a custom HTML tag in the JSX.

It is common practice to define child components as an arrow function.

As an example, in the `render` method:

``````jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
``````

As a full example of child and parent:

``````jsx 
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
``````

## Use React to Render Nested Components

Think about UI as basic building blocks. In the below code, `TypesOfFruit` is a child of `Fruits`, which is a child of `TypesOfFood`.

``````jsx
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
``````

## Compose React Components

You can mix JSX elements, stateless functional components, and ES6 class components within other components.

``````jsx
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
``````

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

``````jsx
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
``````

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