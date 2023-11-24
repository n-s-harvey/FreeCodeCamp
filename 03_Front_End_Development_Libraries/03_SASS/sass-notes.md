# SASS Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

## Table of Contents

[Getting Started with Sass](#getting-started-with-sass)  
[Using Sass Variables](#store-data-with-sass-variables)  
[Nest CSS with Sass](#nest-css-with-sass)  
[Using Mixins](#create-reusable-css-with-mixins)  
[Using `@if` and `@else`](#use-if-and-else-to-add-logic)  
[Using `@for` to loop](#use-for-to-create-a-sass-loop)  
[Using `@each` to map](#use-each-to-map-over-items-in-a-list)  
[Using `@while` to loop](#apply-a-style-until-a-condition-is-met-with-while)  
[Using partials](#split-styles-into-smaller-chunks-with-partials)  
[Extending styles to another element](#extend-one-set-of-css-styles-to-another-element)

## Getting Started with Sass 
For Sass that is in an HTML document, use `<style type='text/scss'></style>`

## Store Data with Sass Variables

In Sass, variables start with a `$` followed by the variable name.

Definition: 
``````scss
$variable-name: variable-value;
``````

Use: 
```scss
selector {  
  property: $variable-name;
}
```

## Nest CSS with Sass 

Normally, each element is targeted on a different line to style it:
``````css
article {
  height: 200px;
}

article p {
  color: white;
}

article ul {
  color: blue;
}
``````

Instead, you can nest children inside their respective parent elements:

``````scss
article {
  height: 200px;

  p {
    color: white;
  }

  ul {
    color: blue;
  }
}
``````

## Create Reusable CSS with Mixins 

A *mixin* is a group of CSS that can be reused throughout the stylesheet.

As CSS features are adopted over time, they may need vendor prefixes: 

``````css
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
``````

Sass allows you to create a mixin, which acts like a function:

``````scss
@mixin box-shadow($x, $y, $blur, $c) { 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
``````

The definition starts with `@mixin` followed by a custom name. The parameters are optional. Now, whenever a `box-shadow` is needed, only a single line is needed. A mixin is called with the `@include` directive:

``````scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
``````

## Use @if and @else to Add Logic

``````scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
``````

Note how there are no parenthese wrapped around the test expression.

And just like other languages, Sass supports `if`/`else if`/`else` statements.

## Use @for to Create a Sass Loop

`@for` is used in two ways: "start through end" or "start to end." Start to end excludes the second number in the range, and start through end includes the second.

Start through end example:

``````scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}

``````
The `#{$i}` is the syntax to combine a variable with text to make a string.

When the Sass file is compiled to CSS, the above code will have this output:

``````css
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
``````

## Use @each to Map Over Items in a List

The syntax between iterating over a list and a map is different.

Iterating over a list:

``````scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
``````

Iterating over a map:

``````scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
``````

Both of the previous snippets are converted into this CSS:

``````css
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
``````

## Apply a Style Until a Condition is Met with @while

The `@while` loop is another way to write a loop that will compile into CSS.

``````scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
``````

## Split Styles into Smaller Chunks with Partials

*Partials* are separate files that hold segments of CSS code.

Names for partials start with a `_` and the file extension is `.scss`.

To import the styles from "_modules.scss", use 
``````scss
@import 'modules'
``````
The underscore and file extension are not needed in the `@import` directive.

## Extend One Set of CSS Styles to Another Element

The `@extend` directive allows you to reuse the rules written for one element, then add more for another element.

``````scss
.red {
  background-color: red;
  width: 100px;
}
``````

Then we can use `extend`:

``````scss
.taller-red {
  @extend .red;
  height: 1000px;
}
``````