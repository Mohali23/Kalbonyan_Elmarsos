# Introduction to CSS

## What is CSS?

CSS stands for ( Cascading Style Sheets ) It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users.

## Anatomy of an CSS ruleset

```css
p {
  color: red;
}
```

> **_NOTE:_** The whole structure is called a ruleset.

![Anatomy of an CSS ruleset](images/css-declaration-small.png)

- **Selector:** This is the HTML element name at the start of the ruleset. It defines the element to be styled (in this example, `<p>` elements).\
  To style a different element, change the selector.

- **Declaration:** This is a single rule like `color: red;`. It specifies which of the element's properties you want to style.

- **Properties:** These are ways in which you can style an HTML element. (In this example, `color` is a property of the `<p>` elements.) In CSS, you choose which properties you want to affect in the rule.

- **Property value:** To the right of the property—after the colon—there is the property value. This chooses one out of many possible appearances for a given property. (For example, there are many `color` values in addition to `red`.)
