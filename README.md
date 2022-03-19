# YEK/SASS

⚠️ WARNING: this library is still under development! ⚠️

> the full list of usefull libraries and resources to make sass styel fastest then past\
> latest version : v3.1.0 (08 Jan 2022)

----

[![](https://data.jsdelivr.com/v1/package/npm/@yek/sass/badge)](https://www.jsdelivr.com/package/npm/@yek/sass)


## Installation (v 3.1.0)

### CDN ([jsdelivr](https://www.jsdelivr.com/package/npm/@yek/sass))
```
https://cdn.jsdelivr.net/npm/@yek/sass@3.1.0/dist/index.scss
```

or

```
https://cdn.jsdelivr.net/gh/yek-org/yek-sass@3.1.0/dist/index.scss
```


### CDN (unpkg)

```
unpkg.com/@yek/sass@3.1.0/dist/index.scss
```

<p>copy and paste which one of above cdn links on your project</p>


### npm

<p>execute below one of the below lines with copy and pasting their on your terminal</p>

``` bash
npm install --save-dev @yek/sass
```

or

shorthand
``` bash
npm i -D @yek/sass
```

## Import and make Refrence
if using npm installation, should make refrance to the `node_modules` folder
with any sub-folder

so, adding below line on the top head of your main sass/scss file
```scss
// main.scss 
@import '../node_module/@yke/sass/dist/index.scss';
```

or how many level need to back to parent folder

```scss
@import '../../../../../../node_module/@yek/sass/dist/index.scss';
```


## Mixins & Functions

<details>
  <summary id="color-schema"><strong>Color Schema and Variable</strong></summary>
  
  <p>
    to read css custom properties (variables) instead of using `var` native function with `--` prefix, using `val` function without `--` prefix and if you want to using color variable with `color-` prefix, you can use the `color` function instead of `val` function
  </p>
  
  <p><strong>SCSS</strong></p>

```scss
selector {
  background-color: var(--color-primary);
  // OR //
  background-color: val(color-primary);
  // OR //
  background-color: color(primary);
}
```

  <p><strong>CSS</strong></p>

```css
selector {
  background-color: var(--color-primary);
}
```

to setup the `:root` variable you can use the `set-root` mixin to make it easy

  <p><strong>SCSS</strong></p>
  
```scss
@include set-root(
  (
    my-variable-name: my-variable-value,
  )
);
```
  
  <p><strong>CSS</strong></p>

```css
:root {
  --my-variable-name: my-variable-value;
}
```

and if you want to change the value of the variables or define one of its, just using the `set-var` mixin like below lines:

<details>
  <summary>Example</summary>
  
  **SCSS**

  ```scss
  :root {
    --my-var: my-initial-value;
  }
  .child {
    @include set-var(my-var, my-new-value);
  }
  ```

  **CSS**

  ```css
  :root {
    --my-var: my-initial-value;
  }
  .child {
    --my-var: my-new-value;
  }
  ```

</details>
  
  </details>

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
