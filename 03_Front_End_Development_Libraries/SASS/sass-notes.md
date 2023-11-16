# SASS Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

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
@mixin box-shadow($x, $y, $blur, $c){ 
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

