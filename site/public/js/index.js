'use strict';

let d = new Date();
var h = document.createElement("h1");
var date = document.createTextNode("" + d);
h.appendChild(date);
document.body.appendChild(h);