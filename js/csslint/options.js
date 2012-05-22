CSS_LINT_OPTIONS = {

  // Borders and padding add space outside of an element's content. Setting width 
  // or height along with borders and padding is usually a mistake because you won't 
  // get the visual result you're looking for. CSSLint warns when a rule uses width or 
  // height in addition to padding and/or border.
  'box-model' : 1,

  // Even though you can define any group of properties together in a CSS rule, some of 
  // them will be ignored due to the display of the element. This leads to extra cruft 
  // in the CSS file
  'display-property-grouping' : 1,

  // When you include the same property twice, it may be intentional (to provide a fallback) 
  // or unintentional (copy-paste error). If duplicate properties are found one after the 
  // other with different values, this is okay.
  //'duplicate-properties' : 1,

  // Any rule that doesn't contain any properties
  'empty-rules' : 1,

  // It's very easy to miss a typo in your CSS. This rule checks each property 
  // name to make sure that it is a known CSS property. Vendor-prefixed properties 
  // are ignored, since they are technically not part of any specification.
  'known-properties' : 1,

  // Adjoining classes look like .foo.bar. While technically allowed in CSS, these 
  // aren't handled properly by Internet Explorer 6 and earlier. IE6 will match the 
  // selector as if it were simply '.bar' which means your selector will match more 
  // frequently than you intend it to and create cross browser bugs.
  'adjoining-classes' : 0,

  // Most CSS3 properties have vendor-prefixed equivalents for multiple vendors, including 
  // Firefox (-moz), Safari/Chrome (-webkit), Opera (-o), and Internet Explorer (-ms). 
  // Including all compatible vendor prefixes will give a consistent appearance for a 
  // wider range of users.
  'compatible-vendor-prefixes' : 1,

  // Right now, there is no standard CSS gradient implementation, which means using CSS 
  // gradients in a cross-browser way requires using many different vendor-prefixed versions. 
  // CSSLint warns when a rule with a CSS gradient doesn't have gradients for all supporting browsers.
  'gradients' : 1,

  // Negative text indent doesn't play nicely with right to left oriented languages like Arabic. 
  // If your site needs to support RTL, you should choose a different text hiding method.
  'text-indent' : 1,

  // When using vendor-prefixed properties such as -moz-border-radius, make sure to also include the 
  // standard property. The standard property should preferably come after the vendor-prefixed one
  'vendor-prefix' : 1,

  // Web fonts are growing in popularity and use of @font-face is on the rise. 
  // However, using web fonts comes with performance implications as font files 
  // can be quite large and some browsers block rendering while downloading 
  // them. For this reason, CSSLint will warn you when there are more than 
  // five web fonts in a style sheet.
  'font-faces' : 1,

  // The @import command shouldn't be used because it prevents parallel downloads 
  // in some browsers (see http://www.stevesouders.com/blog/2009/04/09/dont-use-import/).
  'import' : 1,

  // CSS3 adds complex attribute selectors such as ~= that are slow. When using attribute 
  // selectors, don't use the complex equality operators to avoid performance penalties.
  'regex-selectors' : 1,

  // The universal selector (*) selects all elements and can create performance issues when 
  // used as the far-right part of a selector. 
  'universal-selector' : 1,

  // An easy way to save bytes in CSS is not include units when a value is 0. For instance, 
  // 0px and 0 are the exact same measurement, so leave off the units and save!
  'zero-units' : 1,

  // Writing selectors such as li.active are unnecessary unless the element name causes the 
  // class to behave differently. In most cases, it's safe to remove the element name from 
  // the selector, both reducing the size of the CSS as well as improving the selector 
  // performance (doesn't have to match the element anymore).
  'overqualified-elements' : 1,

  // Sometimes when editing a rule you may end up defining multiple properties that can 
  // better be represented using shorthand. This rule checks to see if you're using 
  // margin-left, margin-right, margin-top, and margin-bottom together and suggests to 
  // use just margin instead. The same is done for the variants of padding
  'shorthand' : 1,

  // The float property is currently the best way to achieve complex layouts, however 
  // it is possible to use too many. CSS Lint simply checks to see if you've used float 
  // more than 10 times, and if so, displays a warning. Using this many floats usually 
  // means you need some sort of abstraction to achieve the layout. Consider a grids 
  // system like OOCSS, 960gs, blueprint, or YUI3. Read more about grids at: 
  // http://www.stubbornella.org/content/2011/01/22/grids-improve-site-performance/
  'floats' : 1,

  // A site is typically made up of a finite number of font treatments, including font 
  // size. If you have 10 or more font sizes specified, you probably want to refactor 
  // into a standard set of font size classes that can be used in markup.
  'font-sizes' : 1,

  // IDs shouldn't be used in selectors because these rules are too tightly coupled 
  // with the HTML and have no possibility of reuse. It's much preferred to use 
  // classes in selectors and then apply a class to an element in the page. 
  // Additionally, IDs impact your specificity and can lead to specificity wars. 
  // Read more about using IDs for styles here: http://oli.jp/2011/ids/
  //'ids' : 1,

  // Using !important overides any cascaded rule and may lead to specificity war. 
  // CSSLint checks if you've used !important, and if so, displays a warning.
  'important' : 1,

  // Heading elements (h1-h6) should be defined as top-level styles and not scoped 
  // to particular areas of the page. This allows those styles to be reused across 
  // your site for better visual consistency and performance and easier maintenance. 
  // For example, this is an example of an overqualified heading:
  'qualified-headings' : 1,

  // Heading elements (h1-h6) should have exactly one rule on a site. CSSLint 
  // warns if it finds more than one.
  'unique-headings' : 1
};
