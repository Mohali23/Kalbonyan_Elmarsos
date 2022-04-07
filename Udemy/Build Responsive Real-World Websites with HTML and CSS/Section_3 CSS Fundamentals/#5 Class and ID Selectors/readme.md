# Class and ID selectors

In CSS, `class` and `id` selectors are used to identify various HTML elements. The main benefit of setting class or ID is that you can present the same HTML element differently, depending on its `class` or `id`.

## Class selector

The class selector selects elements with a specific class attribute. It matches all the HTML elements based on the contents of their `class` attribute.
The `.` symbol, along with the class name, is used to select the desired class.

### Syntax the class in HTML

```html
<h1 class="class-name">Hello World!</h1>
```

### Syntax the class in CSS

```css
.class-name {
  /* Define CSS properties here */
}
```

## ID selector

The ID selector matches an element based on the value of its `id` attribute. In order for the element to be selected, its ID attribute must exactly match the value given in the selector. The `#` symbol and the `id` of the HTML element name are used to select the desired element.

### Syntax the ID in HTML

```html
<h1 id="idname">Hello World!</h1>
```

### Syntax the ID in CSS

```css
#idname {
  /* Define CSS properties here */
}
```

## The difference between Class and ID selector

The difference between an ID and a class is that an ID is only used to identify one single element in our HTML. IDs are only used when one element on the page should have a particular style applied to it. However, a class can be used to identify more than one HTML element.
