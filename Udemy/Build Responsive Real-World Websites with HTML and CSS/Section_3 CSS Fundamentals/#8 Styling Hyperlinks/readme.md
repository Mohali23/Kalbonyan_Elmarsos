# Styling Hyperlinks with Pseudo-classes

There are four Pseudo-classes for styling Hyperlinks:

`:link` Unvisited links
`:visited` Visited links
`:active` Currently interacting with it, like a click
`:hover` Mouse hover over it

## :link

The `:link` represents an element that has not yet been visited. It matches every unvisited `<a>` element that has an `href` attribute.

```css
a:link {
  text-dicoration: none;
  color: blue;
}
```

## :visited

The `:visited` selector can be applied to indicate which pages have already been visited by the user.

```css
a:visited {
  color: purple;
}
```

## :hover

The `:hover` selector is used to select elements when you mouse over them.

```css
a:hover {
  color: red;
}
```

> **_TIP_:** The `:hover` selector can be used on all elements, not only on links.\
> **_NOTE_:** `:hover` MUST come after `:link` and `:visited`, else the hover will take priority of it.

## :active

The `:active` selector is used to select and style the active link.

```css
a:active {
  color: red;
}
```

> **_TIP_:** The `:active` selector can be used on all elements, not only links.\
> **_NOTE_:** `:active` MUST come after :hover (if present) in the CSS definition in order to be effective!
