<p align="center">
  <img width="343" height="176" src="https://raw.githubusercontent.com/Hokid/modori/master/static/logo.png" alt="Mori logo">
</p>
<p align="center">CSS helpers that help you styling on the fly🚀</p>

# Installing

```
npm install -S modori
```

# Map of helpers

Helpers divided into main categories: *box*, *typography*, *utils*.

Square brackets contains size information. `w` - whole number, `f` - fractional, `i` - integer. For more understanding what is whole, fractional and integer see [Generating size label](#Generating size label).

 * box
    * display: `di`
       * block: `bl`
       * inline: `in`
       * inline-block: `inbl`
       * flex: `fl`
       * table: `tb`
       * table-row: `tbrw`
       * table-cell: `tbcl`
       * none: `none`
    * float: `flt`
      * left: `lf`
      * right: `rt`
      * none: `none`
    * margin **[ w: 0-6, f: .25, .5, .75 ]**: `mr`
      * top: `tp`
      * left: `lf`
      * right: `rt`
      * bottom: `bm`
      * **[non standard]** vertical margin: `vt`
      * **[non standard]** horizontal margin: `ht`
      * **[non standard]** vertical gaps: `vg`
      * **[non standard]** horizontal gaps: `hg`
    * padding: `pd`
      * top: `tp`
      * left: `lf`
      * right: `rt`
      * bottom: `bm`
      * **[non standard]** vertical padding: `vt`
      * **[non standard]** horizontal padding: `ht`
    * position: `pos`
      * static: `st`
      * relative: `rt`
      * absolute: `ab`
      * fixed: `fx`
    * z-index **[ i: 0-10 ]**: `zx`
      * 9999: `big`
 * typography
    * font: `fnt`
        * weight **[ i: 1-9 ]**: `wt`
        * size **[ w: 0-3, f: .25, .5, .75 ]**: `sz`
    * line-height **[ w: 0-24, f: .25, .5, .75 ]**: `lnh`
    * text-align: `tal`
      * left: `lf`
      * center: `ct`
      * right: `rt`

# Utils
  * clearfix: `crfx`

# Examples
```
<ul class="m-pd-1">
  <li class="m-mr-vg-1">one</li>
  <li class="m-mr-vg-1">two</li>
  <li class="m-mr-vg-1">three</li>
</ul>
```
Helper styles:
```
.m-pd-1 {
  padding: 24px;
}
```
```
.m-mr-vg-1 + .m-mr-vg-1 {
  margin-top: 24px;
}
```

```
<span class="m-fnt-sz-0-75">font-size: 12px</span>
<span class="m-tal-rt">text-align: right</span>
<div class="m-crfx">clearfix</div>
<div class="m-pos-fx">position: fixed</div>
<div class="m-pd-vt-1">padding-top: 24px; padding-bottom: 24px;</div>
```

## Naming

For props-value with text-based values
```
[namespace]-[prop short name]-[value short name]-[?important]
```

For props-value with size-based values
```
[namespace]-[prop short name]-[value short name]-[size]-[?important]
```

For utils
```
[namespace]-[utils short name]-[?important]
```

 * `[namespace]` is `m`.
 * `[prop short name]` is short name for css property.
 * `[value short name]` is short name for css text value.
 * `[utils short name]` is short name for utility.
 * `[size]` is size from base value, for example `-0-1` from 24px, see [Generating size label](#Generating size label).
 * `[?important]` is `imt`. Indicate than values of css properties of helper include `!important` flag.
 
```
.m-di-bl { ... }
.m-di-bl-imp { ... }
.m-mr-rp-0-25 { ... }
.m-mr-rp-0-25-imp { ... }

.m-mr-tp-1 {
  margin-top: 24px;
}

.m-mr-tp-0-5 {
  margin-top: 12px;
}

.m-mr-tp-1-imt {
  margin-top: 24px !important;
}
```

# Generating size label

Example of generate code:
```
$base: 24px; // base value
$step: 1 / 4; // step
$limit: 24; // limit number generated helpers

@for $i from 1 through $limit {
    $multip: $step * $i;
    $whole: floor($multip);
    $fractional: $multip - $whole;
  
    .m-margin-top-#{$whole}-#{$fractional} {
        margin-top: $base * $multip;
    }
}

// Output

.m-margin-top-0-25 { margin-top: 6px; }
.m-margin-top-0-5 { margin-top: 12px; }
.m-margin-top-0-75 { margin-top: 18px; }
...
```

For number label(`i`). The same code but with small different configuration.
```
$base: 1; // base value
$step: 1; // step
$limit: 9; // limit number generated helpers

@for $i from 1 through $limit {
    $multip: $step * $i;
    $whole: floor($multip);
    $fractional: $multip - $whole;
  
    .m-font-weight-#{$i} {
        font-weight: $base * $multip;
    }
}

// Output

.m-font-weight-1 { font-weight: 100; }
.m-font-weight-2 { font-weight: 200; }
.m-font-weight-3 { font-weight: 300; }
...
```

# Customization

Some helpers have `_settings.scss` file that contain sets of variable for customization generation of it.

For example
```
$box-margin-base: 24px !dafault; // base for value
$box-margin-step: 1 / 4 !dafault; // step
$box-margin-limit: 24 !dafault; // limit of generations
$box-margin-non-import: true !dafault; // whether generate helper without !important
$box-margin-import: true !dafault; // whether generate helper with !important
```

You may choose what to include into your project.

Sass
```
@import "~modori/scss/box/display/all";
@import "~modori/scss/box/margin/top";

// or all
@import "~modori/scss/all";
```

Css:
```
import 'modori/box/display/all.css';
import 'modori/box/margin/top.css';
import 'modori/box/margin/left.css';
import 'modori/box/margin/all.css';

// or all
import 'modori/css/all';
```

For helpers with sizes used this base variables:
```
$base-font-size: 16px !default; // for font-size
$base-line-height: 24px !default; // for margins, padding etc
```

