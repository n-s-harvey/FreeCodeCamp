# jQuery Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

## Table of Contents
[Getting Started](#getting-started-with-jquery)  

### Targeting

[Target the Parent of an Element](#target-the-parent-of-an-element-with-jquery)  
[Target the Children of an Element](#target-the-children-of-an-element-using-jquery)  
[Target a Specific Child](#target-a-specific-child-of-an-element-using-jquery)  
[Targeting Even/Odd Elements](#target-even-elements-using-jquery)  
[Targeting HTML Elements](#targeting-html-elements-with-selectors-using-jquery)  
[Targeting by Class](#targeting-element-by-class-using-jquery)  
[Targeting by ID](#target-elements-by-id-using-jquery)  
[Using Multiple Selectors](#target-the-same-element-with-multiple-jquery-selectors)  

### Modifying Elements

[Remove Classes from an Element](#remove-classes-from-an-element-with-jquery)  
[Change CSS](#change-the-css-of-an-element-using-jquery)  
[Disabling Elements](#disable-an-element-using-jquery)  
[Changing Text](#change-text-inside-an-element-using-jquery)  
[Removing Elements](#remove-an-element-using-jquery)  
[Move Elements](#move-elements-with-jquery)  
[Copy Elements](#copy-elements-with-jquery)  
[Modifying the Entire Page](#use-jquery-to-modify-the-entire-page)  

## Getting Started with jQuery

Add a `script` element at the top of the page

If you want your code to execute after the page has loaded, add
`$(document).ready(function() {};` with your desired code inside the function

## Targeting HTML Elements with Selectors Using jQuery

All jQuery functions start with a `$`, called the dollar sign operator or as "bling."

To target an HTML element, use this syntax: `$("element")`

To add a CSS class to a specified element, use `$("element").addClass("class-name")`

## Targeting Element by Class using jQuery

To target by class, use `$(".class-name")`

## Target Elements by id Using jQuery

To target by id, use `$("#id-name")`

## Target the Same Element with Multiple jQuery Selectors

You can use mutliple jQuery selectors to target different aspects of the same element by targeting element/id/class

## Remove Classes from an Element with jQuery

Like `addClass()`, you can call `removeClass()` to remove a class by a selector

## Change the CSS of an Element Using jQuery

This is the syntax: `("selector").css("property", "value")`

Note that this is not the standard CSS syntax of `property: value`.

## Disable an Element Using jQuery

You can change the non-CSS properties of HTML elements with jQuery.

To access, call `$("selector").prop("property", value)`

## Change Text Inside an Element Using jQuery

Using `.html()`, you can add HTML tags and text within an element.

There is another function called `.text()` that only alters text without adding tags.

## Remove an Element Using jQuery

Using `.remove()`, you can entirely remove an HTML element

## Move Elements with jQuery

Using `.appendTo()`, you can select HTML elements and append them to another with the syntax `$("selector").appendTo("selector")`

## Copy Elements with jQuery

Using `.clone()`, we can copy elements from one place to another: `$("selector").clone().appendTo("selector")`

## Target the Parent of an Element with jQuery

Using `.parent()` returns the parent of the element you've selected

## Target the Children of an Element Using jQuery

Using `.children()` returns the children of the element you've selected

## Target a Specific Child of an Element Using jQuery

jQuery uses CSS selectors to target elements, so we can use the psuedo-selector `:nth-child(n)` to target a specific element

## Target Even Elements using jQuery

jQuery is zero-indexed, so selecting an element with `:odd` returns the second element (index 1), fourth element (index 3), etc

## Use jQuery to Modify the Entire Page

jQuery can target the `body` element as well