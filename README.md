# YEK/SASS

⚠️ WARNING: this library is still under development! ⚠️

> the full list of usefull libraries and resources to make sass styel fastest then past\
> latest version : v2.2.4 (07 Jan 2022)

### Mixins & Functions

- flex (flex-dir, flex-wrap, dis:flex)
- size (width (max, min, offset), height (max, min, offset)
- align (justify, items, content, text, vertical)
- variant (bg, color) [under written / not completed]
- border

- split
- is-\* (number, pixel and other type)

### Variables and Colors

to read css custom properties (variables) instead of using `var` native function with `--` prefix, using `val` function without `--` prefix and if you want to using color variable with `color-` prefix, you can use the `color` function instead of `val` function

#### SASS/SCSS

```scss
selector {
  background-color: var(--color-primary);
  // OR //
  background-color: val(color-primary);
  // OR //
  background-color: color(primary);
}
```

#### CSS

```css
selector {
  background-color: var(--color-primary);
}
```

to setup the `:root` variable you can use the `set-root` mixin to make it easy

```scss
@include set-root(
  (
    my-variable-name: my-variable-value,
  )
);
```

```css
:root {
  --my-variable-name: my-variable-value;
}
```

and if you want to change the value of the variables or define one of its, just using the `set-var` mixin like below lines:

#### SCSS

```scss
:root {
  --my-var: my-initial-value;
}
.child {
  @include set-var(my-var, my-new-value);
}
```

#### CSS

```css
:root {
  --my-var: my-initial-value;
}
.child {
  --my-var: my-new-value;
}
```

#### `split`

> give a string and spliter to split text into list of characters

| NAME      | TYPE     | REQUIRE |
| --------- | -------- | ------- |
| `$string` | `string` | ✅      |
| `$sep`    | `string` | ❌      |

**SNIPITE**

```scss
@debug split('Hello');
@debug split('H,e,l,l,o', ',');
@debug split('H::e::l::l::o', '::');

//=> ('H', 'e', 'l', 'l', 'o'); <=//
```
