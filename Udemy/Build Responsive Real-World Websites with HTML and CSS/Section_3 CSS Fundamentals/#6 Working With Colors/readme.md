# Working With Colors

**How to use colors in css?**\
There are a number of different ways we can define a colour in css.
There are currently four css properties that accept a colour as a value **color**, **background-color**, **border-color**, and **outline-color**. For each of these properties, the colour value can be any of the following

- A named keyword, e.g. `red`
- An rgb or rgba unit, e.g. `rgb(255, 0, 0)`, `rgba(255, 0, 0, 0.5)`
- A Hexadecimal, e.g. `#ff0000`

## Named keywords

Named keywords are plain English names for certain colours which have been predefined within css. Modern browsers understand these keywords in the same way that they understand the other numeric inputs.

```css
h1 {
  color: red;
}

header {
  background-color: red;
  border: 5px solid red;
}
```

## rgb

The RGB format is the most popular way of defining colour in CSS. The RGB colour model works by declaring specific levels of red, green and blue.

| Notation   | Description                                         | Example           |
| ---------- | --------------------------------------------------- | ----------------- |
| Decimal    | Value between 0 and 255 for each primary colour     | rgb(255, 0, 0)    |
| Percentage | A percentage value (0-100%) for each primary colour | rgb(255%, 0%, 0%) |

```css
h1 {
  color: rgb(255, 0, 0);
}

header {
  background-color: rgb(255, 0, 0);
  border: 5px solid rgb(255, 0, 0);
}
```

## rgba

RGBA is an extension of RGB to allow the specification of transparency within the same function. Only the decimal and percentage notations can be used with RGBA.

| Notation   | Example                 |
| ---------- | ----------------------- |
| Decimal    | rgba(255, 0, 0, 0.5)    |
| Percentage | rgba(255%, 0%, 0%, 0.5) |

```css
h1 {
  color: rgba(255%, 0%, 0%, 0.5);
}

header {
  background-color: rgba(255%, 0%, 0%, 0.5);
  border: 5px solid rgba(255%, 0%, 0%, 0.5);
}
```

## Hexadecimal

Probably the most common (yet least intuitive) way to specify colors in CSS is to use their hexadecimal (or hex) values. Hex values are actually just a different way to represent RGB values. Instead of using three numbers between `0` and `255`, you use six hexadecimal numbers. Hex numbers can be `0-9` and `A-F`. Hex values are always prefixed with a `#` symbol.

```css
h1 {
  color: #ff0000;
}

header {
  background-color: #ff0000;
  border: 5px solid #ff0000;
}
```

### Shorthand Notation for Hex Values

If both digits of the red, green and blue values are the same, you may use the short three-digit notation. This is best shown by an example:

```css
h1 {
  color: #f00; /* red: same as #ff0000 */
}
```
