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

``` shell
npm install --save-dev @yek/sass
```

or

shorthand

``` shell
npm i -D @yek/sass
```

## Import and make Refrence

if using npm installation, should make refrance to the `node_modules` folder
with any sub-folder

so, adding below line on the top head of your main sass/scss file

``` scss
// main.scss 
@import '../node_module/@yke/sass/dist/index.scss';
```

or how many level need to back to parent folder

``` scss
@import '../../../../../../node_module/@yek/sass/dist/index.scss';
```

## How to use

<details>
  <summary id="color-schema"><h3>Color Schema and Variable</h3></summary>
  
  <p>
    in this library we use variable color schema. so, that meant in yek-scss functions and mixins available to making this task easy.
  </p>

  <h4>Create Color Schema (Sass Variable system)</h4>
  <blockquote>this feature under wirtten and not tested</blockquote>

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
<td>

``` scss
$color-primary
```

</td>
<td>

``` css
--color-primary
```

</td>
</tr>
<tr>
<td>

``` scss
$color-secondary
```

</td>
<td>

``` css
--color-secondary
```

</td>
</tr>
<tr>
<td>

``` scss
$color-white
```

</td>
<td>

``` css
--color-white
```

</td>
</tr>
<tr>
<td>  

``` scss
$color-black
```

</td>
<td>

``` css
--color-black
```

</td>
</tr>
<tr>
<td>

``` scss
$color-gray
```

</td>
<td>

``` css
--color-gray
```

</td>
</tr>
<tr>
<td>

``` scss
$color-light-gray
```

</td>
<td>

``` css
--color-light-gray
```

</td>
</tr>
<tr>
<td>

``` scss
$font-family
```

</td>
<td>

``` css
--font-family
```

</td>
</tr>
<tr>
<td colspan="2">if you have any variable should be in pre-built variable as schema, you can forking on github and making PR's or Issues on <a href="https://github.com/yek-org/yek-sass">@yek/sass</a> repo
</tr>
</tbody>
</table>

  </details>

  <p> Now, We using <code>clear-root</code> mixin to reset and normilize the defautl css styles and then using <code>set-root</code> mixin to setup and assign custom css variable as root level on <code>:root</code> selector</p>

  <details>
    <summary>Code Syntax</summary>


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

  <code>val</code> function as native css <code>var</code> function and <code>color</code> function is function to giving any variable using <code>--color-</code> prefixes.

  so, to assigning new css variable and setting value on it or re-assign or changing current value of the any variable, we can use <code>set-var</code> mixin to making it easy.

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


<details>
  <summary><h3>Mixins</h3></summary>

  <details>
    <summary><h4>Flexbox</h4></summary>

  <table>
  <thead></thead>
  <tbody>
  <tr>
  <td>

  ` $dir `
  
  </td>
  <td>

  ` row [ column | row-reverse | column-reverse | col | col-rev | row-rev | r | c | rr | cr ] `

  </td>
  <td>

  alise of ` flex-direction `

  </td>
  </tr>
  <tr>
  <td>

  ` $wrap `
  
  </td>
  <td>

  ` wrap [ nowrap | no | n | w ] `

  </td>
  <td>

  alise of ` flex-wrap `
  
  </td>
  </tr>
  </tbody>
  </table>
  
  <strong>Sass Syntax</strong>

  ``` scss
  // default parameters $dir = row and $wrap = wrap
  @include flex;

  // set `flex-direction` column
  @include flex(column);
  // or
  @include flex($dir: column);

  // set `flex-direction` row
  @include flex;
  // or
  @include flex();
  // or
  @include flex(row);
  // or
  @include flex($dir: row);

  // setting `flex-wrap` nowrap
  @include flex($wrap: nowrap);
  
  // `flex-wrap` wrap
  @include flex($wrap: wrap);
  ```

  <strong>Css Syntax</strong>

  ``` css
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* for flex column, just flex direction changed */
  flex-direction: column;

  /* for wrapping fle */
  ```

  </details>

  <details>
    <summary><h4>Align System</h4></summary>
  
  <table>
  <thead></thead>
  <tbody>
  <tr>
  <td>

  ` $ver `
  
  </td>
  <td>

  ` flex-start [ flex-end | end | start | space-between | space-around | space-evenly | between | evenly | around or css native ] `

  </td>
  <td>

  vertically align, alise of ` justify-content `

  </td>
  </tr>
  <tr>
  <td>

  ` $hor `
  
  </td>
  <td>

  ` flex-start [ flex-end | end | start | space-between | space-around | space-evenly | between | evenly | around or css native ] `

  </td>
  <td>

  horizontally align, alise of ` align-items `
  
  </td>
  </tr>
  <tr>
  <td>

  ` $content `
  
  </td>
  <td>

  ` flex-start [ flex-end | end | start | space-between | space-around | space-evenly | between | evenly | around or css native ] `

  </td>
  <td>
  
  alise of ` align-content `

  </td>
  </tr>
  </tbody>
  </table>
  
  <strong>Sass Syntax</strong>

  ``` scss
  // default parameters $dir = row and $wrap = wrap
  @include flex;

  // set `flex-direction` column
  @include flex(column);
  // or
  @include flex($dir: column);

  // set `flex-direction` row
  @include flex;
  // or
  @include flex();
  // or
  @include flex(row);
  // or
  @include flex($dir: row);

  // setting `flex-wrap` nowrap
  @include flex($wrap: nowrap);
  
  // `flex-wrap` wrap
  @include flex($wrap: wrap);
  ```

  <strong>Css Syntax</strong>

  ``` css
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* for flex column, just flex direction changed */
  flex-direction: column;

  /* for wrapping flex */
  flex-wrap: wrap; /* or nowrap */
  ```

  also, we can use ` aligns ` to shorthand of ` align ` mixin. that make all three parameter as once

  ``` scss
  // default is center
  @include aligns;

  // default is center
  @include aligns();

  // or you can use manual argument
  @include aligns(center);
  ```

  ``` css
  justify-content: center;
  align-items: center;
  align-content: center;
  ```

  </details>


  <details>
    <summary><h4>Size, Width and Height</h4></summary>
  </details>


</details>

<details>
  <summary>Function</summary>


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

</details>



## License

Created with :heart: and :brain: by <a href="https://github.com/yek-org">YEK Inc</a> and Under [MIT](@mit) License <br />
this project is [Open Source](@open-source), so, if you want to contribute this project just fork and make [PR's]() or [Issuase]()
