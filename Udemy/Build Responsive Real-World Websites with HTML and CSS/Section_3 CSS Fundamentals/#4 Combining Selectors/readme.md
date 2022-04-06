# Combining Selectors

If we have the same styles for different selectors we can group these selectors and give the same styles in one ruleset

```css
h1,
p,
li {
  font-family: sans-serif;
  text-transform: uppercase;
  font-style: bold;
  font-size: 18px;
}
```

> **_NOTE_:** This way is called grouping

## Nested selectors

In the above example, we gave the `p` selector more than of style, But these styles work with all `p` on our page, for fixe this issue, we use the nested selector

```css
article p {
  font-size: 30px;
  color: red;
}

footer p {
  font-size: 18px;
  color: blue;
}
```

In this case we are more specific, the `p` selector nested in the article is not like the `p` selector nested in the footer, each one has a different styles
