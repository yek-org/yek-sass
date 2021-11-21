# YEK/SASS

> the full list of usefull libraries and resources to make sass styel fastest then past\

## NAMESPACES

### STRING

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
