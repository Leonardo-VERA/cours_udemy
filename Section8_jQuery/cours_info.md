# Section 8
* jQuery a cross-platform java scriplibrary design to simplify the client-side scripting of HTML

Example to understand:
```
No jQuery
var el = document. createElement("p");
var text = document. createTextNode("some content");
el.appendChild(text);
document.body.appendChild(el);

with jQuery

$(document.body) .append("<p>some content</p>");
```