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