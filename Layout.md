# CSS layout: width, postion,

In general, HTML elements can be divided into two groups: block level and inline elements.

## Block level elements (new line, big structure, nested)
* p
* h1, h2 ... h6
* ol, ul
* pre
* address
* blockquote
* dl
* div
* fieldset
* form
* hr
* noscript
* table

## Inline elements (no new line. small)
* b, big, i, small, tt
* abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
* a, bdo, br, img, map, object, q, script, span, sub, sup
* button, input, label, select, textarea

## width, max-width, box model, and box-sizing

## position: static (default), relative, fixed, absolute

A fixed element is positioned relative to the viewport, which means it stays in the same place if the page is scrolled. As with relative, the top, right, bottom and left properties are used.

absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling. Remember, a "positioned" element is one whose position is anything except static.

