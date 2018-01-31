<p align="center">
  <img width="343" height="176" src="https://raw.githubusercontent.com/Hokid/modori/master/static/logo.png" alt="Mori logo">
</p>
<p align="center">CSS helpers that help you styling on the fly🚀</p>

# Installing

```bash
npm install -S modori
```

# Examples

HTML
```HTML
<ul m-mr="1vg">
  <li>1</li>
  <li>2</li>
</ul>
```

Styles
```CSS
[m-mr~="1vg"] > * + * {
  margin-top: 24px;
}
```

HTML
```HTML
<h1 m-fnt="0.5s!" m-tal="ce"></h1>
```

Styles
```CSS
[m-fnt~="0.5s"] {
  font-size: 8px !important;
}

[m-tal~="ce"] {
  text-align: center;
}
```

HTML
```HTML
<p m-pd="1.25 0.5b!">Text</p>
```

Styles
```CSS
[m-pd~="1.25"] {
  padding: 32px;
}

[m-pd~="0.5b!"] {
  padding-bottom: 12px !important;
}
```

# Notation

Attribute name format for properties: `m-[shorthand name]`. Where `[shorthand name]` is any shorthand name of css property.

```
m-pd // padding
m-mr // margin
m-tal // text-align
```

Attribute name format for utilities : `m-utils`.
```
m-utils="utils1"
m-utils="utils1 utils2"
```

General value naming format : `[label]`. Where `[lable]` any label that present value.

```
m-mr="1t" // margin-top: 24px
m-mr="0.5t" // margin-top: 12px
m-mr="-1.5t" // margin-top: -36px
m-mr="0.75t 1b" // margin-top: 18px; margin-bottom: 24px;
```
Name format for values with `!important` flag: `[label]!`.
```
m-mr="1t!" // margin-top: 24px !important
```

# Helpers

  * [Properties](#properties)
  * [Utilites](#utilites)
  
# Properties
  
Each section contain description of helper.
  
Single value: `yes` - mean that value of attribute may be only one.
 
Single value: `no` - mean that value of attribute may be array of values.
  
For example, If "single value" is `yes`, then this construction is wrong: `m-di="bl ab"`, but this is correct: `m-di="bl"`. If "single value" is `no`, then `m-di="bl ab"` is correct and this `m-di="bl"`.

Several helpers have special value shorthand format. One of them is `[multiplier][param]`.  Where `[multiplier]` is number(*1, 1.25, 3.5*). For calculation value of property just multiply `[multiplier]` by the base value, where base value by default is **24px**. For example, if `[multipler]` is *0.5*, then value will be *0.5 * 24px = 12px*, it\`s simple. `[param]` is parameter or side, for example, `m-mr="0.5t"`(`margin-top: 12px`), where `t` is shorthand for top side.
 
 For text value format is `[text value shorthand]:[param]`, for example, `auto:t`.
 
  * [display](#display)
  * [position](#position)
  * [float](#float)
  * [z-index](#z-index)
  * [margin](#margin)
  * [padding](#padding)
  * [font](#font)
  * [line-height](#line-height)
  * [text-align](#text-align)

## display  

 * shorthand: `di`
 * path scss: `scss/display/all.scss`
 * path css: `css/display/all.css`
 * single value: `yes`
 
Value : shorthand:
  * `block`: `bl`
  * `inline`: `in`
  * `inline-block`: `inbl`
  * `table`: `ta`
  * `table-row`: `tar`
  * `table-cell`: `tac`
  * `flex`: `fl`
  * `none`: `none`
 
## position  

 * shorthand: `pos`
 * path scss: `scss/position/all.scss`
 * path css: `css/position/all.css`
 * single value: `yes`
 
Value : shorthand:
  * `absolute`: `ab`
  * `static`: `st`
  * `relative`: `re`
  * `fixed`: `fi`
   
## float  

 * shorthand: `flt`
 * path scss: `scss/float/all.scss`
 * path css: `css/float/all.css`
 * single value: `yes`
 
Value : shorthand:
  * `left`: `le`
  * `right`: `ri`
  * `none`: `none`

 
## z-index  

 * shorthand: `z`
 * path scss: `scss/z-index/all.scss`
 * path css: `css/z-index/all.css`
 * single value: `yes`
 
Value : shorthand:
  * `9999`: `max`
  * `-1`: `-1`
  * `0`: `0`
  * `1`: `1`
  * `2`: `2`
  * `3`: `3`
  * `4`: `4`
  * `5`: `5`
  * `6`: `6`
  * `7`: `7`
  * `8`: `8`
  * `9`: `9`
  * `10`: `10`

## margin

 * shorthand: `mr`
 * paths scss:
    * `scss/margin/all.scss` - all
    * `scss/margin/short.scss` - margin
    * `scss/margin/top.scss` - margin-top
    * `scss/margin/left.scss` - margin-left
    * `scss/margin/right.scss` - margin-right
    * `scss/margin/bottom.scss` - margin-bottom
    * `scss/margin/vertical.scss` - vertical margins
    * `scss/margin/horizontal.scss` - horizontal margins
    * `scss/margin/vgaps.scss` - vertical gaps
    * `scss/margin/hgaps.scss` - horizontal gaps
 * paths css:
    * `css/margin/all.css` - all
    * `css/margin/short.css` - margin
    * `css/margin/top.css` - margin-top
    * `css/margin/left.css` - margin-left
    * `css/margin/right.css` - margin-right
    * `css/margin/bottom.css` - margin-bottom
    * `css/margin/vertical.css` - vertical margins
    * `css/margin/horizontal.css` - horizontal margins
    * `css/margin/vgaps.css` - vertical gaps
    * `css/margin/hgaps.css` - horizontal gaps
 * single value: `no`

Value : `[multiplier]` or value shorthand:
  * `0: `: `0`
  * `6px: `: `0.25`
  * `12px: `: `0.5`
  * `18px: `: `0.75`
  * `24px: `: `1`
  * `30px: `: `1.25`
  * `36px: `: `1.5`
  * `42px: `: `1.75`
  * `48px: `: `2`
  * `54px: `: `2.25`
  * `60px: `: `2.5`
  * `66px: `: `2.75`
  * `72px: `: `3`
  * `78px: `: `3.25`
  * `84px: `: `3.5`
  * `90px: `: `3.75`
  * `96px: `: `4`
  * `102px: `: `4.25`
  * `108px: `: `4.5`
  * `114px: `: `4.75`
  * `120px: `: `5`
  * `126px: `: `5.25`
  * `132px: `: `5.5`
  * `138px: `: `5.75`
  * `144px: `: `6`
  * `auto: `: `auto`

Values have is\`s negative variant: `m-mr="-0.5t!"`

Property : `[param]` shorthand
  * `margin-top`: `t`
  * `margin-left`: `l`
  * `margin-right`: `r`
  * `margin-bottom`: `b`
  * `margin`: omitted, `m-mr="0.5"`
  * `margin-top margin-bottom`: `v`
  * `margin-left margin-right`: `h`

Special shorthands: `vg` and `hg`.

```HTML
<ul m-mr="1vg">
  <li>1</li>
  <li>2</li>
</ul>
```

Styles
```CSS
[m-mr~="1vg"] > * + * {
  margin-top: 24px;
}
```

Examples
```
m-mr="0.5t 0.5l 0.5r 0.5b"
m-mr="0.5t 1l! 1r! 0.5b"
m-mr="-1v -1h"
m-mr="-1.25vg"
m-mr="2.25hg"
m-mr="0!"
m-mr="auto:v 5.25t"
```

## padding

 * shorthand: `pd`
 * paths scss:
    * `scss/padding/all.scss` - all
    * `scss/padding/short.scss` - padding
    * `scss/padding/top.scss` - padding-top
    * `scss/padding/left.scss` - padding-left
    * `scss/padding/right.scss` - padding-right
    * `scss/padding/bottom.scss` - padding-bottom
    * `scss/padding/vertical.scss` - vertical padding
    * `scss/padding/horizontal.scss` - horizontal padding
    * `scss/padding/vgaps.scss` - vertical gaps
    * `scss/padding/hgaps.scss` - horizontal gaps
 * paths css:
    * `css/padding/all.css` - all
    * `css/padding/short.css` - padding
    * `css/padding/top.css` - padding-top
    * `css/padding/left.css` - padding-left
    * `css/padding/right.css` - padding-right
    * `css/padding/bottom.css` - padding-bottom
    * `css/padding/vertical.css` - vertical padding
    * `css/padding/horizontal.css` - horizontal padding
    * `css/padding/vgaps.css` - vertical gaps
    * `css/padding/hgaps.css` - horizontal gaps
 * single value: `no`

Value : `[multiplier]`:
  * `0: `: `0`
  * `6px: `: `0.25`
  * `12px: `: `0.5`
  * `18px: `: `0.75`
  * `24px: `: `1`
  * `30px: `: `1.25`
  * `36px: `: `1.5`
  * `42px: `: `1.75`
  * `48px: `: `2`
  * `54px: `: `2.25`
  * `60px: `: `2.5`
  * `66px: `: `2.75`
  * `72px: `: `3`
  * `78px: `: `3.25`
  * `84px: `: `3.5`
  * `90px: `: `3.75`
  * `96px: `: `4`
  * `102px: `: `4.25`
  * `108px: `: `4.5`
  * `114px: `: `4.75`
  * `120px: `: `5`
  * `126px: `: `5.25`
  * `132px: `: `5.5`
  * `138px: `: `5.75`
  * `144px: `: `6`

Property : `[param]` shorthand
  * `padding-top`: `t`
  * `padding-left`: `l`
  * `padding-right`: `r`
  * `padding-bottom`: `b`
  * `padding`: omitted, `m-pd="0.5"`
  * `padding-top padding-bottom`: `v`
  * `padding-left padding-right`: `h`

Examples
```
m-pd="0.5t 0.5l 0.5r 0.5b"
m-pd="0.5t 1l! 1r! 0.5b"
m-pd="1v 1h"
m-pd="0!"
```

## font

 * shorthand: `fnt`
 * paths scss:
    * `scss/font/all.scss` - all
    * `scss/font/size.scss` - font-size
    * `scss/font/weight.scss` - font-weight
 * paths css:
    * `css/font/all.css` - all
    * `css/font/size.css` - font-size
    * `css/font/weight.css` - font-weight
 * single value: `no`

For font size base value is **16px**.

(font size) Value : `[multiplier]` or value shorthand:
  * `0: `: `0`
  * `4px: `: `0.25`
  * `8px: `: `0.5`
  * `12px: `: `0.75`
  * `16px: `: `1`
  * `20px: `: `1.25`
  * `24px: `: `1.5`
  * `28px: `: `1.75`
  * `32px: `: `2`
  * `36px: `: `2.25`
  * `40px: `: `2.5`
  * `44px: `: `2.75`
  * `48px: `: `3`
  * `52px: `: `3.25`
  * `56px: `: `3.5`
  * `60px: `: `3.75`
  * `64px: `: `4`
  * `68px: `: `4.25`
  * `72px: `: `4.5`
  * `76px: `: `4.75`
  * `80px: `: `5`
  * `84px: `: `5.25`
  * `88px: `: `5.5`
  * `92px: `: `5.75`
  * `96px: `: `6`
  * `inherit: `: `in`

For font weight base value is **1**.

(font weight) Value : `[multiplier]` or value shorthand:

  * `100: `: `100`
  * `200: `: `200`
  * `300: `: `300`
  * `400: `: `400`
  * `500: `: `500`
  * `600: `: `600`
  * `700: `: `700`
  * `800: `: `800`
  * `900: `: `900`
  
Property : `[param]` shorthand
  * `font-size`: `s`
  * `font-weight`: `w`

Examples
```
m-fnt="0.5s 200w"
m-fnt="5.5s 900w"
```


## line-height

 * shorthand: `lh`
 * path scss `scss/line-height/all.scss`
 * path css `css/line-height/all.css`
 * single value: `yes`

Value : `[multiplier]` or value shorthand:
  * `0: `: `0`
  * `6px: `: `0.25`
  * `12px: `: `0.5`
  * `18px: `: `0.75`
  * `24px: `: `1`
  * `30px: `: `1.25`
  * `36px: `: `1.5`
  * `42px: `: `1.75`
  * `48px: `: `2`
  * `54px: `: `2.25`
  * `60px: `: `2.5`
  * `66px: `: `2.75`
  * `72px: `: `3`
  * `78px: `: `3.25`
  * `84px: `: `3.5`
  * `90px: `: `3.75`
  * `96px: `: `4`
  * `102px: `: `4.25`
  * `108px: `: `4.5`
  * `114px: `: `4.75`
  * `120px: `: `5`
  * `126px: `: `5.25`
  * `132px: `: `5.5`
  * `138px: `: `5.75`
  * `144px: `: `6`
  * `normal: `: `nr`
  * `inherit: `: `in`

Property : `[param]` shorthand
  * `line-height`: omitted

Examples
```
m-lh="0.5"
m-lh="3.5"
m-lh="2.75"
```

## text-align 

 * shorthand: `tal`
 * path scss: `scss/text-align/all.scss`
 * path css: `css/text-align/all.css`
 * single value: `yes`
 
Value : shorthand:
  * `left`: `le`
  * `right`: `ri`
  * `center`: `ce`
  * `justify`: `ju`
  * `inherit`: `in`
  
# Utilises

Utilises may be one or more, for example, `m-utils="utils1 crfx utils2"`.

  * [clearfix](#clearfix)

## clearfix

No need description.

 * shorthand: `crfx`
 * path scss: `scss/utils/all.scss`
 * path css: `css/utils/all.css`
 
# Customization

Some helpers have `_settings.scss` file that contain sets of variable for customization generation of it.

For example
```SCSS
$margin-base: 24px !dafault; // base for value
$margin-step: 1 / 4 !dafault; // step
$margin-limit: 24 !dafault; // limit of generations
$margin-import: true !dafault; // whether generate helper with !important
```

You may choose what to include into your project.

Sass
```SCSS
@import "~modori/scss/display/all";
@import "~modori/scss/margin/top";
@import "~modori/scss/box.sccs";
@import "~modori/scss/typography.sccs";


// or all
@import "~modori/scss/all";
```

Css:
```CSS
import 'modori/display/all.css';
import 'modori/margin/top.css';
import 'modori/margin/left.css';
import 'modori/margin/all.css';

// or all
import 'modori/css/all';
```

Variables for base sizes:
```SCSS
$base-font-size: 16px !default; // for font-size
$base-size: 24px !default; // for margins, padding etc
```
 
