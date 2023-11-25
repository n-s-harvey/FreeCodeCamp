# Bootstrap Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

## Table of Contents
[Including Bootstrap in your Project](#responsive-design-with-bootstrap-fluid-containers)  
[Making Images Responsive](#make-images-mobile-responsive)  
[Centering Text](#center-text-with-bootstrap)  
[Buttons](#bootstrap-buttons)  
[Bootstrap Grid](#use-the-bootstrap-grid-to-put-elements-side-by-side)  
[FontAwesome Icons](#add-font-awesome-icons-to-buttons)  

## Responsive Design with Bootstrap Fluid Containers

Add this link to any app by adding this to the top of your HTML:  
```htm
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>`
```

Nest all of the HTML within a `div` with the class `container-fluid`.

## Make Images Mobile Responsive

Add the `img-responsive` class to the image - this will make the image fill the width of the page.

## Center Text with Bootstrap

Add the class `text-center` to center text.

## Bootstrap Buttons

Apply the `btn` class to a `button` element. The default class is `btn-default`.

These additional button styles **require the `btn` class as well**:

- Apply the `btn-block` class to make a button a block element. 

- Add the `btn-primary` class for the main color of your app. 

- Add the `btn-info` class for optional actions. 

- Add the `btn-danger` class for optional actions. 

## Use the Bootstrap Grid to Put Elements Side by Side

Bootstrap uses a responsive 12-column grid system for content placement.

Bootstrap has column classes with the name format `col-[xx]-*` where x is the screen size - available options are `xs`, `sm`, `md`, `lg`, and `xl`.

Wrap elements in the Bootstrap `row` to work with the Bootstrap grid.

You can wrap inline elements in a `span` to target them with Bootstrap classes.

Bootstrap's grid classes can be used on form elements as well.

Add the `form-control` class to use Bootstrap sizing and styles for form elements.

## Add Font Awesome Icons to Buttons

Font Awesome icons are webfonts or vector graphics.

To include, add this code to the top of your HTML:  
```htm
`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">`
```

The `i` element is commonly used for icons; the `span` element can be used as well.

Usage:  
`<i class="fas [class]"></i>`