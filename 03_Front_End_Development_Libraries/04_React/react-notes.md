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