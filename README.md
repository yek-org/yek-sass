# YEK/SASS

⚠️ WARNING: this library is still under development! ⚠️

> the full list of usefull libraries and resources to make sass styel fastest then past\
> latest version : v3.1.0 (08 Jan 2022)

----

[![](https://data.jsdelivr.com/v1/package/npm/@yek/sass/badge)](https://www.jsdelivr.com/package/npm/@yek/sass)

## Installation (v 3.1.0)

<h3>CDN<a href="https://www.jsdelivr.com/package/npm/@yek/sass">(jsdelivr)</a></h3>

``` https
https://cdn.jsdelivr.net/npm/@yek/sass@3.1.0/dist/index.scss
```

or

``` https
https://cdn.jsdelivr.net/gh/yek-org/yek-sass@3.1.0/dist/index.scss
```

### CDN (unpkg)

``` https
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
    in this library we use variable color schema. so, that meant in yek-scss functions and mixins available to making this task easy.
  </p>

  <h4>Create Color Schema (Sass Variable system)</h4>
> this feature under wirtten and not tested

  <p>in this case we syncing sass variable with css variable (custom property) and this featuer just availbe to using native color function who can use with css variables<br />

  to working scss variable, should assigning before `clear-root` and `set-root` mixins
  </p>

  <details>
  <summary>Varialbe Table</summary>

  <table>
  <thead>
  <tr><th>SASS Syntax</th><th>CSS Syntax</th></tr>
  </thead>
  <tbody>
  <tr>
    <td>`$color-primary`</td>
    <td>`--color-primary`</td>
  </tr>
  <tr>
    <td>`$color-secondary`</td>
    <td>`--color-secondary`</td>
  </tr>
  <tr>
    <td>`$color-white`</td>
    <td>`--color-white`</td>
  </tr>
  <tr>
    <td>`$color-black`</td>
    <td>`--color-black`</td>
  </tr>
  <tr>
    <td>`$color-gray`</td>
    <td>`--color-gray`</td>
  </tr>
  <tr>
    <td>`$color-light-gray`</td>
    <td>`--color-light-gray`</td>
  </tr>
  <tr>
    <td>`$font-family`</td>
    <td>`--font-family`</td>
  </tr>
  <tr>
    <td colspan="2">if you have any variable should be in pre-built variable as schema, you can forking on github and making PR's or Issues on <a href="https://github.com/yek-org/yek-sass">@yek/sass</a> repo
  </tr>
  </tbody>
  </table>

  </details>

  <p> Now, We using <code>clear-root</code> mixin to reset and normilize the defautl css styles and then using <code>set-root</code> mixin to setup and assign custom css variable as root level on <code>:root</code> selector</p>

  <details>
    <summary><strong>Code Syntax</strong></summary>


  <strong>Sass Syntax</strong>

  ```scss
  // custom or schema scss variable in here...
  @include clear-root();

  // if we have custom css variable, we setting it with set-root mixin in here
  @include set-root((
    custom-variable: 'custom-name',
    // and so on
  ));
  ```

  <strong>Css Syntax</strong>

  ```css
  :root {
    --color-primary: #1a2556;
    --color-secondary: #a5b3d4;
    --color-gray: #dde6f3;
    --color-light-gray: #f3f6fb;
    --color-white: white;
    --color-black: #3e3743;
    --font-family: Roboto, Montserrat, sans-serif;
  }
  ```

  </details>

  <p> And, for using on the your stylesheet, your code should be like some thing on the below
  </p>

  <details>
    <summary>Code Syntax</summary>

  <strong>Sass Syntax</strong>

  ```scss
  .selector{
    // sass native variable
    background-color: $color-primary;

    // css native variable
    background-color: var(--color-primary);

    // varialbe function
    background-color: val(color-primary);

    // color function
    background-color: color(primary);
  }
  ```

  <strong>Css Syntax</strong>

  ```css
  .selector{
    /* sass native variable */
    background-color: #1a2556;

    /* css native variable */
    background-color: var(--color-primary);

    /* varialbe function */
    background-color: var(--color-primary);

    /* color function */
    background-color: var(--color-primary);
  }
  ```

  </details>


  <h4><code>val</code>, <code>color</code> function</h4>

  to using css variable and color variable, these function are easy way to use.

  <h4>how assign new css variable and set value</h4>

  to assigning new css variable and setting value on it or re-assign or changing current value of the any variable, we can use `set-var` mixin to making it easy.

  <details>
  <summary>Code Syntax</summary>

  <strong>Sass Syntax</strong>

  ```scss
  @include set-root(( custom-variable : 'custom-value' ));

  .selector::after {
    @include set-var(custom-variable, 'new-value');

    content: val(custom-variable);
  }
  ```

  <strong>Css Syntax</strong>

  ```css
  :root {
    /* another css root variable */
    --custom-variable: 'custom-variable';
  }

  .selector::after {
    --custom-variable: 'new-value';

    content: var(--custom-variable); /* replaced by 'new-value' */
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
