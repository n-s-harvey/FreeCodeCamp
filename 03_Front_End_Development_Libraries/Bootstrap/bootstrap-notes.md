# Bootstrap Notes - from FreeCodeCamp
https://www.freecodecamp.org/learn/front-end-development-libraries/

## 1. Use Responsive Design with Bootstrap Fluid Containers

Add this link to any app by adding this to the top of your HTML:  
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>`

Nest all of the HTML within a `div` with the class `container-fluid`.

## 2. Make Images Mobile Responsive

Add the `img-responsive` class to the image - this will make the image fill the width of the page.

## 3. Center Text with Bootstrap

Add the class `text-center` to center text.

## 4. Create a Bootstrap Button

Apply the `btn` class to a `button` element. The default class is `btn-default`.

## 5. Create a Block Element Bootstrap Button

Apply the `btn-block` class to make a button a block element. **This needs to be used with the `btn` class.**

## 6. Taste the Bootstrap Button Color Rainbow

Add the `btn-primary` class for the main color of your app. **This still requires the `btn` class.**

## 7. Call out Optional Actions with btn-info

Add the `btn-info` class for optional actions. **This still requires the `btn` class.**

## 8. Warn Your Users of a Dangerous Action with btn-danger

Add the `btn-danger` class for optional actions. **This still requires the `btn` class.**

## 9. Use the Bootstrap Grid to Put Elements Side by Side

Bootstrap uses a responsive 12-column grid system for content placement.

Bootstrap has column classes with the name format `col-[xx]-*` where x is the screen size - available options are `xs`, `sm`, `md`, `lg`, and `xl`.

## 10. Ditch Custom CSS for Bootstrap

Additional Bootstrap classes are `text-primary` for your primary color.

## 11. Use a span to Target Inline Elements

You can wrap inline elements in a `span` to target them with Bootstrap classes.

## 12. Create a Custom Heading

Use the Bootstrap `row` to work with the Bootstrap grid.

## 13. Add Font Awesome Icons to Buttons

Font Awesome icons are webfonts or vector graphics.

To include, add this code to the top of your HTML:  
`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">`

The `i` element is commonly used for icons; the `span` element can be used as well.

Usage:  
`<i class="fas [class]"></i>`

