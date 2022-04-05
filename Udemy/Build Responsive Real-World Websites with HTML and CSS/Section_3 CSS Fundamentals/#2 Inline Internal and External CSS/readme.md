# Where can I write CSS code?

There are three places where we can write CSS, we call them inline CSS, internal CSS, and external CSS.

## 1- Inline CSS

Can write CSS code directly in HTML tag by using the property (style)

```html
<h1 style="color: red;">Hello World!</h1>
```

## 2- Internal CSS

Also can write CSS code in a `<style></style>` tag in `<head>` tag.

```html
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

## 2- External CSS

The last way can write CSS code in an external file, This is the best way and the most using.
By using a `<link>` tag in the `<head>` tag.

```html
<head>
  <link href="style.css" rel="stylesheet" />
</head>
```

Let me explne this tag
in the `<link>` tag we have two attributes

`href` we used this attribute before with the `<a href="URL">` tag, Also this attribute does the same thing, but the different thing is we set the path file not the URL

`rel` This attribute is shorthand for a relationship, the relationship between the external file and the HTML document, in our case, the relationship here is a stylesheet

> **_NOTE:_** The extension file should be ( `.css` )
