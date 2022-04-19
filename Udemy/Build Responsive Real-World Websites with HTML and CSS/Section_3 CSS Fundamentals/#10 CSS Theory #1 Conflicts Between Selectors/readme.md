# CSS Specificity

**What is Specificity?**
If two CSS selectors apply to the same element, the one with higher specificity wins.

## Specificity hierarchy

Every selector has its place in the specificity hierarchy. There are four distinct categories which define the specificity level of a given selector:

- Inline styles (Presence of style in document). An inline style lives within your HTML document. It is attached directly to the element to be styled. E.g. `<h1 style=“color: #fff;”>`

- IDs (# of ID selectors) ID is an identifier for your page elements, such as `#div`.

- Classes, attributes and pseudo-classes (# of class selectors). This group includes `.classes`, `[attributes]` and pseudo-classes such as `:hover`, `:focus` etc.

- Elements and pseudo-elements (# of Element (type) selectors). Including for instance `:before` and `:after`.

## Specificity: Basic Principles

Equal specificity: the latest rule is the one that counts. “If you have written the same rule into your external style sheet twice, then the lower rule in your style sheet is closer to the element to be styled, it is deemed to be more specific and therefore will be applied. When selectors have an equal specificity value, such as

```css
#content h1 {
  padding: 5px;
}

#content h1 {
  padding: 10px;
}
```

**where both rules have the specificity the latter rule is always applied.**

## `!important` rule

The `!important` rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the `!important` rule, it will override ALL previous styling rules for that specific property on that element!

> **_Note_**: **Never use** `!important` declaration overrides normal declarations, but is unstructured and rarely required in style sheet.”
