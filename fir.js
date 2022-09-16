console.log("Connection Established");
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all);
console.log(document.all[3]);

document.title = 12345;
document.all[3].textContent='67syeeytu';
console.log(window);

var age = prompt ("please enter age");
if (age<18)
{
	alert ("You must be 18 to visit this website");
	window.close();
}
else 
{
	window.open();
	window.print();
	window.open("https://www.google.com");
}
var head= document.getElementById("head1");
console.dir(head);
var head1 = document.getElementsByClassName("hobby");
console.dir(head1);
console.log(head1);
var head2 = document.getElementsByTagName("p");
//head2.style.color="blue";
console.log(head2);
//head1[3].textContent='Real Analysis';
console.log(head2[0]);
console.dir(head2[0]);
//head1[3]="Real Analysis";
var head3 = document.querySelector('.hobby');
console.log(head3);
//document.querySelectorAll(".hobby");
//var idx= document.getElementById("head_sec");
var idx=document.getElementById("head_sec");
//console.dir(idx);
//idx.style.color='blue';
//idx.align="right";
// head2.style.color = 'blue';
/*URL: "file:///C:/Users/warsi/Desktop/html%20and%20css%20files/firststreamer.html"
activeElement: body
adoptedStyleSheets: []
alinkColor: ""
all: HTMLAllCollection(6) [html, head, meta, title, script, body]
anchors: HTMLCollection []
applets: HTMLCollection []
baseURI: "file:///C:/Users/warsi/Desktop/html%20and%20css%20files/firststreamer.html"
bgColor: ""
body: body
characterSet: "UTF-8"
charset: "UTF-8"
childElementCount: 1
childNodes: NodeList(2) [<!DOCTYPE html>, html]
children: HTMLCollection [html]
compatMode: "CSS1Compat"
contentType: "text/html"
cookie: ""
currentScript: null
defaultView: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
designMode: "off"
dir: ""
doctype: <!DOCTYPE html>
documentElement: html
documentURI: "file:///C:/Users/warsi/Desktop/html%20and%20css%20files/firststreamer.html"
domain: ""
embeds: HTMLCollection []
featurePolicy: FeaturePolicy {}
fgColor: ""
firstChild: <!DOCTYPE html>
firstElementChild: html
fonts: FontFaceSet {onloading: null, onloadingdone: null, onloadingerror: null, ready: Promise, status: "loaded", …}
forms: HTMLCollection []
fragmentDirective: FragmentDirective {}
fullscreen: false
fullscreenElement: null
fullscreenEnabled: true
head: head
hidden: false
images: HTMLCollection []
implementation: DOMImplementation {}
inputEncoding: "UTF-8"
isConnected: true
lastChild: html
lastElementChild: html
lastModified: "07/01/2021 09:18:33"
linkColor: ""
links: HTMLCollection []
location: Location {ancestorOrigins: DOMStringList, href: "file:///C:/Users/warsi/Desktop/html%20and%20css%20files/firststreamer.html", origin: "file://", protocol: "file:", host: "", …}
nextSibling: null
nodeName: "#document"
nodeType: 9
nodeValue: null
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfreeze: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointerlockchange: null
onpointerlockerror: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreadystatechange: null
onreset: null
onresize: null
onresume: null
onscroll: null
onsearch: null
onsecuritypolicyviolation: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvisibilitychange: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
ownerDocument: null
parentElement: null
parentNode: null
pictureInPictureElement: null
pictureInPictureEnabled: true
plugins: HTMLCollection []
pointerLockElement: null
previousSibling: null
readyState: "complete"
referrer: ""
rootElement: null
scripts: HTMLCollection [script]
scrollingElement: html
styleSheets: StyleSheetList {length: 0}
textContent: null
timeline: DocumentTimeline {currentTime: 97239.538}
title: "Document"
visibilityState: "visible"
vlinkColor: ""
wasDiscarded: false
webkitCurrentFullScreenElement: null
webkitFullscreenElement: null
webkitFullscreenEnabled: true
webkitHidden: false
webkitIsFullScreen: false
webkitVisibilityState: "visible"
xmlEncoding: null
xmlStandalone: false
xmlVersion: null
__proto__: HTMLDocument
fir.js:4 
﻿
​*/
