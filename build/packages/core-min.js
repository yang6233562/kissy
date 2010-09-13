/*
Copyright 2010, KISSY UI Library v1.1.3
MIT Licensed
build time: Sep 9 13:08
*/
KISSY.add("ua",function(b){var k=navigator.userAgent,l="",n="",f,h={},g=function(d){var o=0;return parseFloat(d.replace(/\./g,function(){return o++===0?".":""}))};if((f=k.match(/AppleWebKit\/([\d.]*)/))&&f[1]){h[l="webkit"]=g(f[1]);if((f=k.match(/Chrome\/([\d.]*)/))&&f[1])h[n="chrome"]=g(f[1]);else if((f=k.match(/\/([\d.]*) Safari/))&&f[1])h[n="safari"]=g(f[1]);if(/ Mobile\//.test(k))h.mobile="apple";else if(f=k.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))h.mobile=f[0].toLowerCase()}else if((f=
k.match(/Presto\/([\d.]*)/))&&f[1]){h[l="presto"]=g(f[1]);if((f=k.match(/Opera\/([\d.]*)/))&&f[1]){h[n="opera"]=g(f[1]);if((f=k.match(/Opera\/.* Version\/([\d.]*)/))&&f[1])h[n]=g(f[1]);if((f=k.match(/Opera Mini[^;]*/))&&f)h.mobile=f[0].toLowerCase();else if((f=k.match(/Opera Mobi[^;]*/))&&f)h.mobile=f[0]}}else if((f=k.match(/MSIE\s([^;]*)/))&&f[1]){h[l="trident"]=0.1;h[n="ie"]=g(f[1]);if((f=k.match(/Trident\/([\d.]*)/))&&f[1])h[l]=g(f[1])}else if(f=k.match(/Gecko/)){h[l="gecko"]=0.1;if((f=k.match(/rv:([\d.]*)/))&&
f[1])h[l]=g(f[1]);if((f=k.match(/Firefox\/([\d.]*)/))&&f[1])h[n="firefox"]=g(f[1])}h.core=l;h.shell=n;h._numberify=g;b.UA=h});
KISSY.add("ua-extra",function(b){var k=b.UA,l=navigator.userAgent,n,f,h={},g=k._numberify;if(l.match(/360SE/))h[f="se360"]=3;else if(l.match(/Maxthon/)&&(n=window.external)){f="maxthon";try{h[f]=g(n.max_version)}catch(d){h[f]=0.1}}else if(n=l.match(/TencentTraveler\s([\d.]*)/))h[f="tt"]=n[1]?g(n[1]):0.1;else if(l.match(/TheWorld/))h[f="theworld"]=3;else if(n=l.match(/SE\s([\d.]*)/))h[f="sougou"]=n[1]?g(n[1]):0.1;f&&(h.shell=f);b.mix(k,h)});
KISSY.add("dom",function(b,k){function l(n,f){return n&&n.nodeType===f}b.DOM={_isElementNode:function(n){return l(n,1)},_isKSNode:function(n){return b.Node&&l(n,b.Node.TYPE)},_getWin:function(n){return n&&"scrollTo"in n&&n.document?n:l(n,9)?n.defaultView||n.parentWindow:n===k?window:false},_nodeTypeIs:l}});
KISSY.add("selector",function(b,k){function l(a,c){var i,j=[],p,x;c=n(c);if(b.isString(a)){a=b.trim(a);if(z.test(a)){if(a=f(a.slice(1),c))j=[a]}else if(i=e.exec(a)){p=i[1];x=i[2];i=i[3];if(c=p?f(p,c):c)if(i)if(!p||a.indexOf(m)!==-1)j=g(i,x,c);else{if((a=f(p,c))&&v.hasClass(a,i))j=[a]}else if(x)j=h(x,c)}else if(b.ExternalSelector)return b.ExternalSelector(a,c);else d(a)}else if(a&&(a[w]||a[y]))j=a[w]?[a[w]()]:a[y]();else if(a&&(b.isArray(a)||a.item&&!a.nodeType))j=a;else if(a)j=[a];if(j.item)j=b.makeArray(j);
j.each=function(t,u){return b.each(j,t,u)};return j}function n(a){if(a===k)a=o;else if(b.isString(a)&&z.test(a))a=f(a.slice(1),o);else if(a&&a.nodeType!==1&&a.nodeType!==9)a=null;return a}function f(a,c){if(c.nodeType!==9)c=c.ownerDocument;return c.getElementById(a)}function h(a,c){return c.getElementsByTagName(a)}function g(a,c,i){i=a=i.getElementsByClassName(a);var j=0,p=0,x=a.length,t;if(c&&c!==r){i=[];for(c=c.toUpperCase();j<x;++j){t=a[j];if(t.tagName===c)i[p++]=t}}return i}function d(a){b.error("Unsupported selector: "+
a)}var o=document,v=b.DOM,m=" ",r="*",w="getDOMNode",y=w+"s",z=/^#[\w-]+$/,e=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var a=o.createElement("div");a.appendChild(o.createComment(""));if(a.getElementsByTagName(r).length>0)h=function(c,i){i=i.getElementsByTagName(c);if(c===r){c=[];for(var j=0,p=0,x;x=i[j++];)if(x.nodeType===1)c[p++]=x;i=c}return i}})();o.getElementsByClassName||(g=o.querySelectorAll?function(a,c,i){return i.querySelectorAll((c?c:"")+"."+a)}:function(a,c,i){c=i.getElementsByTagName(c||
r);i=[];var j=0,p=0,x=c.length,t,u;for(a=m+a+m;j<x;++j){t=c[j];if((u=t.className)&&(m+u+m).indexOf(a)>-1)i[p++]=t}return i});b.query=l;b.get=function(a,c){return l(a,c)[0]||null};b.mix(v,{query:l,get:b.get,filter:function(a,c){var i=l(a),j,p,x,t=[];if(b.isString(c)&&(j=e.exec(c))&&!j[1]){p=j[2];x=j[3];c=function(u){return!(p&&u.tagName!==p.toUpperCase()||x&&!v.hasClass(u,x))}}if(b.isFunction(c))t=b.filter(i,c);else if(c&&b.ExternalSelector)t=b.ExternalSelector._filter(a,c);else d(c);return t},test:function(a,
c){a=l(a);return v.filter(a,c).length===a.length}})});
KISSY.add("dom-class",function(b,k){function l(g,d,o,v){if(!(d=b.trim(d)))return v?false:k;g=b.query(g);var m=0,r=g.length;d=d.split(f);for(var w;m<r;m++){w=g[m];if(n._isElementNode(w)){w=o(w,d,d.length);if(w!==k)return w}}if(v)return false}var n=b.DOM,f=/[\.\s]\s*\.?/,h=/[\n\t]/g;b.mix(n,{hasClass:function(g,d){return l(g,d,function(o,v,m){if(o=o.className){o=" "+o+" ";for(var r=0,w=true;r<m;r++)if(o.indexOf(" "+v[r]+" ")<0){w=false;break}if(w)return true}},true)},addClass:function(g,d){l(g,d,function(o,
v,m){var r=o.className;if(r){var w=" "+r+" ";r=r;for(var y=0;y<m;y++)if(w.indexOf(" "+v[y]+" ")<0)r+=" "+v[y];o.className=b.trim(r)}else o.className=d})},removeClass:function(g,d){l(g,d,function(o,v,m){var r=o.className;if(r)if(m){r=(" "+r+" ").replace(h," ");for(var w=0,y;w<m;w++)for(y=" "+v[w]+" ";r.indexOf(y)>=0;)r=r.replace(y," ");o.className=b.trim(r)}else o.className=""})},replaceClass:function(g,d,o){n.removeClass(g,d);n.addClass(g,o)},toggleClass:function(g,d,o){var v=b.isBoolean(o),m;l(g,
d,function(r,w,y){for(var z=0,e;z<y;z++){e=w[z];m=v?!o:n.hasClass(r,e);n[m?"removeClass":"addClass"](r,e)}})}})});
KISSY.add("dom-attr",function(b,k){function l(e,a){return a&&a.nodeName.toUpperCase()===e.toUpperCase()}var n=b.UA,f=n.ie,h=f&&f<8,g=document.documentElement.textContent!==k?"textContent":"innerText",d=b.DOM,o=d._isElementNode,v=function(e){return d._nodeTypeIs(e,3)},m=/href|src|style/,r=/href|src|colspan|rowspan/,w=/\r/g,y=/radio|checkbox/,z={readonly:"readOnly"};h&&b.mix(z,{"for":"htmlFor","class":"className"});b.mix(d,{attr:function(e,a,c){if(b.isPlainObject(a))for(var i in a)d.attr(e,i,a[i]);
else if(a=b.trim(a)){a=a.toLowerCase();a=z[a]||a;if(c===k){e=b.get(e);if(!o(e))return k;var j;m.test(a)||(j=e[a]);if(j===k)j=e.getAttribute(a);if(h)if(r.test(a))j=e.getAttribute(a,2);else if(a==="style")j=e.style.cssText;return j===null?k:j}b.each(b.query(e),function(p){if(o(p))if(a==="style")p.style.cssText=c;else{if(a==="checked")p[a]=!!c;p.setAttribute(a,""+c)}})}},removeAttr:function(e,a){b.each(b.query(e),function(c){if(o(c)){d.attr(c,a,"");c.removeAttribute(a)}})},val:function(e,a){if(a===k){var c=
b.get(e);if(!o(c))return k;if(l("option",c))return(c.attributes.value||{}).specified?c.value:c.text;if(l("select",c)){var i=c.selectedIndex;e=c.options;if(i<0)return null;else if(c.type==="select-one")return d.val(e[i]);c=[];for(var j=0,p=e.length;j<p;++j)e[j].selected&&c.push(d.val(e[j]));return c}if(n.webkit&&y.test(c.type))return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(w,"")}b.each(b.query(e),function(x){if(l("select",x)){if(b.isNumber(a))a+="";var t=b.makeArray(a),
u=x.options,A;j=0;for(p=u.length;j<p;++j){A=u[j];A.selected=b.inArray(d.val(A),t)}if(!t.length)x.selectedIndex=-1}else if(o(x))x.value=a})},text:function(e,a){if(a===k){e=b.get(e);if(o(e))return e[g]||"";else if(v(e))return e.nodeValue}else b.each(b.query(e),function(c){if(o(c))c[g]=a;else if(v(c))c.nodeValue=a})}})});
KISSY.add("dom-style",function(b,k){function l(a,c){var i=b.get(a),j=c===o?i.offsetWidth:i.offsetHeight;b.each(c===o?["Left","Right"]:["Top","Bottom"],function(p){j-=parseFloat(f._getComputedStyle(i,"padding"+p))||0;j-=parseFloat(f._getComputedStyle(i,"border"+p+"Width"))||0});return j}function n(a,c,i){var j=i;if(i===v&&r.test(c)){j=0;if(f.css(a,"position")==="absolute"){i=a[c==="left"?"offsetLeft":"offsetTop"];if(h.ie===8||h.opera)i-=m(f.css(a.offsetParent,"border-"+c+"-width"))||0;j=i-(m(f.css(a,
"margin-"+c))||0)}}return j}var f=b.DOM,h=b.UA,g=document,d=g.documentElement,o="width",v="auto",m=parseInt,r=/^left|top$/,w=/width|height|top|left|right|bottom|margin|padding/i,y=/-([a-z])/ig,z=function(a,c){return c.toUpperCase()},e={};b.mix(f,{_CUSTOM_STYLES:e,_getComputedStyle:function(a,c){var i="",j=a.ownerDocument;if(a.style)i=j.defaultView.getComputedStyle(a,null)[c];return i},css:function(a,c,i){if(b.isPlainObject(c))for(var j in c)f.css(a,j,c[j]);else{if(c.indexOf("-")>0)c=c.replace(y,z);
c=e[c]||c;if(i===k){a=b.get(a);j="";if(a&&a.style){j=c.get?c.get(a):a.style[c];if(j===""&&!c.get)j=n(a,c,f._getComputedStyle(a,c))}return j===k?"":j}else{if(i===null||i==="")i="";else if(!isNaN(new Number(i))&&w.test(c))i+="px";(c===o||c==="height")&&parseFloat(i)<0||b.each(b.query(a),function(p){if(p&&p.style){c.set?c.set(p,i):(p.style[c]=i);if(i==="")p.style.cssText||p.removeAttribute("style")}})}}},width:function(a,c){if(c===k)return l(a,o);else f.css(a,o,c)},height:function(a,c){if(c===k)return l(a,
"height");else f.css(a,"height",c)},addStyleSheet:function(a,c){var i;if(c)i=b.get("#"+c);if(!i){i=f.create("<style>",{id:c});b.get("head").appendChild(i);if(i.styleSheet)i.styleSheet.cssText=a;else i.appendChild(g.createTextNode(a))}}});if(d.style.cssFloat!==k)e["float"]="cssFloat";else if(d.style.styleFloat!==k)e["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(b,k){if(b.UA.ie){var l=b.DOM;b=document;var n=b.documentElement,f=l._CUSTOM_STYLES,h=/^-?\d+(?:px)?$/i,g=/^-?\d/,d=/^width|height$/;try{if(n.style.opacity===k&&n.filters)f.opacity={get:function(v){var m=100;try{m=v.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(r){try{m=v.filters("alpha").opacity}catch(w){}}return m/100+""},set:function(v,m){var r=v.style;v=(v.currentStyle||0).filter||"";r.zoom=1;if(v)if(v=v.replace(/alpha\(opacity=.+\)/ig,""))v+=", ";
r.filter=v+"alpha(opacity="+m*100+")"}}}catch(o){}if(!(b.defaultView||{}).getComputedStyle&&n.currentStyle)l._getComputedStyle=function(v,m){var r=v.style,w=v.currentStyle[m];if(d.test(m))w=l[m](v)+"px";else if(!h.test(w)&&g.test(w)){var y=r.left,z=v.runtimeStyle.left;v.runtimeStyle.left=v.currentStyle.left;r.left=m==="fontSize"?"1em":w||0;w=r.pixelLeft+"px";r.left=y;v.runtimeStyle.left=z}return w}}});
KISSY.add("dom-offset",function(b,k){function l(t){var u=0,A=0,q=m(t[a]);if(t[x]){t=t[x]();u=t[c];A=t[i];if(h.mobile!=="apple"){u+=f[j](q);A+=f[p](q)}}return{left:u,top:A}}function n(t,u){if(f.css(t,z)==="static")t.style[z]=e;var A=l(t),q={},s,B;for(B in u){s=y(f.css(t,B),10)||0;q[B]=s+u[B]-A[B]}f.css(t,q)}var f=b.DOM,h=b.UA,g=window,d=document,o=f._isElementNode,v=f._nodeTypeIs,m=f._getWin,r=d.compatMode==="CSS1Compat",w=Math.max,y=parseInt,z="position",e="relative",a="ownerDocument",c="left",i=
"top",j="scrollLeft",p="scrollTop",x="getBoundingClientRect";b.mix(f,{offset:function(t,u){if(!(t=b.get(t))||!t[a])return null;if(u===k)return l(t);n(t,u)},scrollIntoView:function(t,u,A,q){if((t=b.get(t))&&t[a]){q=q===k?true:!!q;A=A===k?true:!!A;if(!u||u===g)return t.scrollIntoView(A);u=b.get(u);if(v(u,9))u=m(u);var s=u&&"scrollTo"in u&&u.document,B=f.offset(t),C=s?{left:f.scrollLeft(u),top:f.scrollTop(u)}:f.offset(u),D={left:B[c]-C[c],top:B[i]-C[i]};B=s?f.viewportHeight(u):u.clientHeight;C=s?f.viewportWidth(u):
u.clientWidth;var G=f[j](u),E=f[p](u),F=G+C,M=E+B,I=t.offsetHeight;t=t.offsetWidth;var H=D.left+G-(y(f.css(u,"borderLeftWidth"))||0);D=D.top+E-(y(f.css(u,"borderTopWidth"))||0);var N=H+t,J=D+I,K,L;if(I>B||D<E||A)K=D;else if(J>M)K=J-B;if(q)if(t>C||H<G||A)L=H;else if(N>F)L=N-C;if(s){if(K!==k||L!==k)u.scrollTo(L,K)}else{if(K!==k)u[p]=K;if(L!==k)u[j]=L}}}});b.each(["Left","Top"],function(t,u){var A="scroll"+t;f[A]=function(q){var s=0,B=m(q),C;if(B&&(C=B.document))s=B[u?"pageYOffset":"pageXOffset"]||C.documentElement[A]||
C.body[A];else if(o(q=b.get(q)))s=q[A];return s}});b.each(["Width","Height"],function(t){f["doc"+t]=function(u){u=u||d;return w(r?u.documentElement["scroll"+t]:u.body["scroll"+t],f["viewport"+t](u))};f["viewport"+t]=function(u){var A="inner"+t;u=m(u);var q=u.document;return A in u?u[A]:r?q.documentElement["client"+t]:q.body["client"+t]}})});
KISSY.add("dom-traversal",function(b,k){function l(g,d,o,v){if(!(g=b.get(g)))return null;if(d===k)d=1;var m=null,r,w;if(b.isNumber(d)&&d>=0){if(d===0)return g;r=0;w=d;d=function(){return++r===w}}for(;g=g[o];)if(h(g)&&(!d||f.test(g,d))&&(!v||v(g))){m=g;break}return m}function n(g,d,o){var v=[];var m=g=b.get(g);if(g&&o)m=g.parentNode;if(m){o=0;for(m=m.firstChild;m;m=m.nextSibling)if(h(m)&&m!==g&&(!d||f.test(m,d)))v[o++]=m}return v}var f=b.DOM,h=f._isElementNode;b.mix(f,{parent:function(g,d){return l(g,
d,"parentNode",function(o){return o.nodeType!=11})},next:function(g,d){return l(g,d,"nextSibling")},prev:function(g,d){return l(g,d,"previousSibling")},siblings:function(g,d){return n(g,d,true)},children:function(g,d){return n(g,d)},contains:function(g,d){var o=false;if((g=b.get(g))&&(d=b.get(d)))if(g.contains)return g.contains(d);else if(g.compareDocumentPosition)return!!(g.compareDocumentPosition(d)&16);else for(;!o&&(d=d.parentNode);)o=d==g;return o}})});
KISSY.add("dom-create",function(b,k){function l(q,s){w(q)&&b.isPlainObject(s)&&o.attr(q,s);return q}function n(q,s){var B=null,C;if(q&&(q.push||q.item)&&q[0]){s=s||q[0].ownerDocument;B=s.createDocumentFragment();if(q.item)q=b.makeArray(q);s=0;for(C=q.length;s<C;s++)B.appendChild(q[s])}return B}function f(q){var s=q.cloneNode(true);if(v.ie<8)s.innerHTML=q.innerHTML;return s}function h(q,s,B,C){if(B){var D=b.guid("ks-tmp-"),G=new RegExp(a);s+='<span id="'+D+'"></span>';b.available(D,function(){var E=
b.get("head"),F,M,I,H,N,J;for(G.lastIndex=0;F=G.exec(s);)if((I=(M=F[1])?M.match(i):false)&&I[2]){F=d.createElement("script");F.src=I[2];if((H=M.match(j))&&H[2])F.charset=H[2];F.async=true;E.appendChild(F)}else if((J=F[2])&&J.length>0)b.globalEval(J);(N=d.getElementById(D))&&o.remove(N);b.isFunction(C)&&C()});g(q,s)}else{g(q,s);b.isFunction(C)&&C()}}function g(q,s){s=(s+"").replace(a,"");try{q.innerHTML=s}catch(B){for(;q.firstChild;)q.removeChild(q.firstChild);s&&q.appendChild(o.create(s))}}var d=
document,o=b.DOM,v=b.UA,m=v.ie,r=o._nodeTypeIs,w=o._isElementNode,y=o._isKSNode,z=d.createElement("div"),e=/<(\w+)/,a=/<script([^>]*)>([\s\S]*?)<\/script>/ig,c=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,i=/\ssrc=(['"])(.*?)\1/i,j=/\scharset=(['"])(.*?)\1/i;b.mix(o,{create:function(q,s,B){if(r(q,1)||r(q,3))return f(q);if(y(q))return f(q[0]);if(!(q=b.trim(q)))return null;var C=null;C=o._creators;var D,G="div",E;if(D=c.exec(q))C=(B||d).createElement(D[1]);else{if((D=e.exec(q))&&(E=D[1])&&b.isFunction(C[E=E.toLowerCase()]))G=
E;q=C[G](q,B).childNodes;C=q.length===1?q[0].parentNode.removeChild(q[0]):n(q,B||d)}return l(C,s)},_creators:{div:function(q,s){s=s?s.createElement("div"):z;s.innerHTML=q;return s}},html:function(q,s,B,C){if(s===k){q=b.get(q);if(w(q))return q.innerHTML}else b.each(b.query(q),function(D){w(D)&&h(D,s,B,C)})},remove:function(q){b.each(b.query(q),function(s){w(s)&&s.parentNode&&s.parentNode.removeChild(s)})}});if(v.gecko||m){var p=o._creators,x=o.create,t=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,
u={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};for(var A in u)(function(q){p[A]=function(s,B){return x("<"+q+">"+s+"</"+q+">",null,B)}})(u[A]);if(m){p.script=function(q,s){s=s?s.createElement("div"):z;s.innerHTML="-"+q;s.removeChild(s.firstChild);return s};if(m<8)p.tbody=function(q,s){s=x("<table>"+q+"</table>",null,s);var B=s.children.tags("tbody")[0];s.children.length>1&&B&&!t.test(q)&&B.parentNode.removeChild(B);return s}}b.mix(p,{optgroup:p.option,th:p.td,
thead:p.tbody,tfoot:p.tbody,caption:p.tbody,colgroup:p.tbody})}});KISSY.add("dom-insertion",function(b){b.mix(b.DOM,{insertBefore:function(k,l){if((k=b.get(k))&&(l=b.get(l))&&l.parentNode)l.parentNode.insertBefore(k,l);return k},insertAfter:function(k,l){if((k=b.get(k))&&(l=b.get(l))&&l.parentNode)l.nextSibling?l.parentNode.insertBefore(k,l.nextSibling):l.parentNode.appendChild(k);return k}})});
KISSY.add("event",function(b,k){function l(e,a,c,i,j){if(b.isString(a))a=b.query(a);if(b.isArray(a)){b.each(a,function(p){z[e](p,c,i,j)});return true}if((c=b.trim(c))&&c.indexOf(r)>0){b.each(c.split(r),function(p){z[e](a,p,i,j)});return true}}function n(e){return g(e)?e[m]:-1}function f(e,a){if(!g(e))return b.error("Text or comment node is not valid event target.");try{e[m]=a}catch(c){b.error(c)}}function h(e){try{e[m]=k;delete e[m]}catch(a){}}function g(e){return e&&e.nodeType!==3&&e.nodeType!==
8}var d=document,o=d.addEventListener?function(e,a,c,i){e.addEventListener&&e.addEventListener(a,c,!!i)}:function(e,a,c){e.attachEvent&&e.attachEvent("on"+a,c)},v=d.removeEventListener?function(e,a,c,i){e.removeEventListener&&e.removeEventListener(a,c,!!i)}:function(e,a,c){e.detachEvent&&e.detachEvent("on"+a,c)},m="ksEventTargetId",r=" ",w=b.now(),y={},z={EVENT_GUID:m,special:{},add:function(e,a,c,i){if(!l("add",e,a,c,i)){var j=n(e),p,x,t,u,A;if(!(j===-1||!a||!b.isFunction(c))){if(!j){f(e,j=w++);
y[j]={target:e,events:{}}}x=y[j].events;if(!x[a]){p=((j=!e.isCustomEventTarget)||e._supportSpecialEvent)&&z.special[a]||{};t=function(q,s){if(!q||!q.fixed){q=new b.EventObject(e,q,a);b.isPlainObject(s)&&b.mix(q,s)}p.setup&&p.setup(q);return(p.handle||z._handle)(e,q,x[a].listeners)};x[a]={handle:t,listeners:[]};u=p.fix||a;A=p.capture;if(j)o(e,u,t,A);else e._addEvent&&e._addEvent(u,t,A)}x[a].listeners.push({fn:c,scope:i||e})}}},remove:function(e,a,c,i){if(!l("remove",e,a,c,i)){var j=n(e),p,x,t,u,A,
q,s;if(j!==-1)if(j&&(p=y[j]))if(p.target===e){i=i||e;p=p.events||{};if(x=p[a]){t=x.listeners;q=t.length;if(b.isFunction(c)&&q){A=u=0;for(s=[];u<q;++u)if(c!==t[u].fn||i!==t[u].scope)s[A++]=t[u];x.listeners=s;q=s.length}if(c===k||q===0){if(e.isCustomEventTarget)e._addEvent&&e._removeEvent(a,x.handle);else{c=z.special[a]||{};v(e,c.fix||a,x.handle)}delete p[a]}}if(a===k||b.isEmptyObject(p)){for(a in p)z.remove(e,a);delete y[j];h(e)}}}},_handle:function(e,a,c){c=c.slice(0);for(var i,j=0,p=c.length;j<p;++j){i=
c[j];i=i.fn.call(i.scope||e,a);if(i===false&&e.isCustomEventTarget||a.isImmediatePropagationStopped)break}return i},_getCache:function(e){return y[e]},_simpleAdd:o,_simpleRemove:v};z.on=z.add;b.Event=z});
KISSY.add("event-object",function(b,k){function l(h,g,d){this.currentTarget=h;this.originalEvent=g||{};if(g){this.type=g.type;this._fix()}else{this.type=d;this.target=h}this.currentTarget=h;this.fixed=true}var n=document,f="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");b.augment(l,
{_fix:function(){var h=this.originalEvent,g=f.length,d,o=this.currentTarget;for(o=o.nodeType===9?o:o.ownerDocument||n;g;){d=f[--g];this[d]=h[d]}if(!this.target)this.target=this.srcElement||n;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===k&&this.clientX!==k){h=o.documentElement;g=o.body;this.pageX=this.clientX+(h&&h.scrollLeft||g&&g.scrollLeft||
0)-(h&&h.clientLeft||g&&g.clientLeft||0);this.pageY=this.clientY+(h&&h.scrollTop||g&&g.scrollTop||0)-(h&&h.clientTop||g&&g.clientTop||0)}if(this.which===k)this.which=this.charCode!==k?this.charCode:this.keyCode;if(this.metaKey===k)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==k)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var h=this.originalEvent;if(h.preventDefault)h.preventDefault();else h.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var h=
this.originalEvent;if(h.stopPropagation)h.stopPropagation();else h.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var h=this.originalEvent;h.stopImmediatePropagation?h.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(h){h?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});b.EventObject=l});
KISSY.add("event-target",function(b,k){var l=b.Event,n=l.EVENT_GUID;b.EventTarget={isCustomEventTarget:true,fire:function(f,h){if((f=((l._getCache(this[n]||-1)||{}).events||{})[f])&&b.isFunction(f.handle))return f.handle(k,h);return this},on:function(f,h,g){l.add(this,f,h,g);return this},detach:function(f,h,g){l.remove(this,f,h,g);return this}}});
KISSY.add("event-mouseenter",function(b){var k=b.Event;b.UA.ie||b.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(l){k.special[l.name]={fix:l.fix,setup:function(n){n.type=l.name},handle:function(n,f,h){var g=f.relatedTarget;try{for(;g&&g!==n;)g=g.parentNode;g!==n&&k._handle(n,f,h)}catch(d){}}}})});
KISSY.add("event-focusin",function(b){var k=b.Event;document.addEventListener&&b.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(l){k.special[l.name]={fix:l.fix,capture:true,setup:function(n){n.type=l.name}}})});
KISSY.add("node",function(b){function k(f,h,g){var d;if(!(this instanceof k))return new k(f,h,g);if(f){if(n(f,1)||n(f,3))d=f;else if(b.isString(f))d=l.create(f,h,g);this[0]=d}else this.length=0}var l=b.DOM,n=l._nodeTypeIs;k.TYPE="-ks-Node";b.augment(k,{length:1,getDOMNode:function(){return this[0]},nodeType:k.TYPE});b.one=function(f,h){return(f=b.get(f,h))?new k(f):null};b.Node=k});
KISSY.add("nodelist",function(b){function k(f){if(!(this instanceof k))return new k(f);n.push.apply(this,f||[])}var l=b.DOM,n=Array.prototype;b.mix(k.prototype,{length:0,item:function(f){var h=null;if(l._isElementNode(this[f]))h=new b.Node(this[f]);return h},getDOMNodes:function(){return n.slice.call(this)},each:function(f,h){var g=this.length,d=0,o;for(o=new b.Node(this[0]);d<g&&f.call(h||o,o,d,this)!==false;o=new b.Node(this[++d]));return this}});b.all=function(f,h){return new k(b.query(f,h,true))};
b.NodeList=k});
KISSY.add("node-attach",function(b,k){function l(e,arguments,a,c){var i=[this[e?r:m]()].concat(b.makeArray(arguments));if(arguments[a]===k)return c.apply(f,i);else{c.apply(f,i);return this}}function n(e,a){b.each(e,function(c){b.each([o,v],function(i,j){i[c]=function(p){switch(a){case w:return function(){return l.call(this,j,arguments,1,p)};case y:return function(){return l.call(this,j,arguments,0,p)};case z:return function(){var x=this[j?r:m]();return(x=p.apply(f,[x].concat(b.makeArray(arguments))))?new (b[b.isArray(x)?
"NodeList":"Node"])(x):null};default:return function(){var x=this[j?r:m]();x=p.apply(f,[x].concat(b.makeArray(arguments)));return x===k?this:x}}}(f[c])})})}var f=b.DOM,h=b.Event,g=f._nodeTypeIs,d=f._isKSNode,o=b.Node.prototype,v=b.NodeList.prototype,m="getDOMNode",r=m+"s",w=1,y=2,z=4;b.mix(o,{one:function(e){return b.one(e,this[0])},all:function(e){return b.all(e,this[0])}});n(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);n(["attr","removeAttr"],w);n(["val","text"],y);n(["css"],
w);n(["width","height"],y);n(["offset"],y);n(["scrollIntoView"]);n(["parent","next","prev","siblings","children"],z);n(["contains"]);n(["html"],y);n(["remove"]);b.each(["insertBefore","insertAfter"],function(e){o[e]=function(a){f[e].call(f,this[0],a);return this}});b.each([o,v],function(e,a){b.mix(e,{append:function(c){c&&b.each(this,function(i){var j;if(a||b.isString(c))j=f.create(c);else{if(g(c,1)||g(c,3))j=c;if(d(c))j=c[0]}i.appendChild(j)});return this},appendTo:function(c){if((c=b.get(c))&&c.appendChild)b.each(this,
function(i){c.appendChild(i)});return this}})});b.each([o,v],function(e){b.mix(e,b.EventTarget,{_supportSpecialEvent:true});e._addEvent=function(a,c,i){for(var j=0,p=this.length;j<p;j++)h._simpleAdd(this[j],a,c,i)};e._removeEvent=function(a,c,i){for(var j=0,p=this.length;j<p;j++)h._simpleRemove(this[j],a,c,i)};delete e.fire})});
KISSY.add("cookie",function(b){function k(h){return b.isString(h)&&h!==""}var l=document,n=encodeURIComponent,f=decodeURIComponent;b.Cookie={get:function(h){var g;if(k(h))if(h=l.cookie.match("(?:^| )"+h+"(?:(?:=([^;]*))|;|$)"))g=h[1]?f(h[1]):"";return g},set:function(h,g,d,o,v,m){g=n(g);var r=d;if(typeof r==="number"){r=new Date;r.setTime(r.getTime()+d*864E5)}if(r instanceof Date)g+="; expires="+r.toUTCString();if(k(o))g+="; domain="+o;if(k(v))g+="; path="+v;if(m)g+="; secure";l.cookie=h+"="+g},remove:function(h,
g,d,o){this.set(h,"",0,g,d,o)}}});
KISSY.add("json",function(b){function k(m){return m<10?"0"+m:m}function l(m){h.lastIndex=0;return h.test(m)?'"'+m.replace(h,function(r){var w=o[r];return typeof w==="string"?w:"\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+m+'"'}function n(m,r){var w,y,z=g,e,a=r[m];if(a&&typeof a==="object"&&typeof a.toJSON==="function")a=a.toJSON(m);if(typeof v==="function")a=v.call(r,m,a);switch(typeof a){case "string":return l(a);case "number":return isFinite(a)?String(a):"null";case "boolean":case "null":return String(a);
case "object":if(!a)return"null";g+=d;e=[];if(Object.prototype.toString.apply(a)==="[object Array]"){y=a.length;for(m=0;m<y;m+=1)e[m]=n(m,a)||"null";r=e.length===0?"[]":g?"[\n"+g+e.join(",\n"+g)+"\n"+z+"]":"["+e.join(",")+"]";g=z;return r}if(v&&typeof v==="object"){y=v.length;for(m=0;m<y;m+=1){w=v[m];if(typeof w==="string")if(r=n(w,a))e.push(l(w)+(g?": ":":")+r)}}else for(w in a)if(Object.hasOwnProperty.call(a,w))if(r=n(w,a))e.push(l(w)+(g?": ":":")+r);r=e.length===0?"{}":g?"{\n"+g+e.join(",\n"+g)+
"\n"+z+"}":"{"+e.join(",")+"}";g=z;return r}}b=b.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var f=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,d,o={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},v;if(typeof b.stringify!=="function")b.stringify=function(m,r,w){var y;d=g="";if(typeof w==="number")for(y=0;y<w;y+=1)d+=" ";else if(typeof w==="string")d=w;if((v=r)&&typeof r!=="function"&&(typeof r!=="object"||typeof r.length!=="number"))throw new Error("JSON.stringify");return n("",
{"":m})};if(typeof b.parse!=="function")b.parse=function(m,r){function w(y,z){var e,a,c=y[z];if(c&&typeof c==="object")for(e in c)if(Object.hasOwnProperty.call(c,e)){a=w(c,e);if(a!==undefined)c[e]=a;else delete c[e]}return r.call(y,z,c)}m=String(m);f.lastIndex=0;if(f.test(m))m=m.replace(f,function(y){return"\\u"+("0000"+y.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(m.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){m=eval("("+m+")");return typeof r==="function"?w({"":m},""):m}throw new SyntaxError("JSON.parse");}});
KISSY.add("anim-easing",function(b){var k=Math,l=k.PI,n=k.pow,f=k.sin,h=1.70158,g={easeNone:function(d){return d},easeIn:function(d){return d*d},easeOut:function(d){return(2-d)*d},easeBoth:function(d){return(d*=2)<1?0.5*d*d:0.5*(1- --d*(d-2))},easeInStrong:function(d){return d*d*d*d},easeOutStrong:function(d){return 1- --d*d*d*d},easeBothStrong:function(d){return(d*=2)<1?0.5*d*d*d*d:0.5*(2-(d-=2)*d*d*d)},elasticIn:function(d){if(d===0||d===1)return d;return-(n(2,10*(d-=1))*f((d-0.075)*2*l/0.3))},
elasticOut:function(d){if(d===0||d===1)return d;return n(2,-10*d)*f((d-0.075)*2*l/0.3)+1},elasticBoth:function(d){if(d===0||(d*=2)===2)return d;if(d<1)return-0.5*n(2,10*(d-=1))*f((d-0.1125)*2*l/0.45);return n(2,-10*(d-=1))*f((d-0.1125)*2*l/0.45)*0.5+1},backIn:function(d){if(d===1)d-=0.0010;return d*d*((h+1)*d-h)},backOut:function(d){return(d-=1)*d*((h+1)*d+h)+1},backBoth:function(d){if((d*=2)<1)return 0.5*d*d*(((h*=1.525)+1)*d-h);return 0.5*((d-=2)*d*(((h*=1.525)+1)*d+h)+2)},bounceIn:function(d){return 1-
g.bounceOut(1-d)},bounceOut:function(d){return d<1/2.75?7.5625*d*d:d<2/2.75?7.5625*(d-=1.5/2.75)*d+0.75:d<2.5/2.75?7.5625*(d-=2.25/2.75)*d+0.9375:7.5625*(d-=2.625/2.75)*d+0.984375},bounceBoth:function(d){if(d<0.5)return g.bounceIn(d*2)*0.5;return g.bounceOut(d*2-1)*0.5+0.5}};b.Easing=g});
KISSY.add("anim",function(b,k){function l(e,a,c,i,j){if(e=b.get(e)){if(!(this instanceof l))return new l(e,a,c,i,j);var p=b.isPlainObject(c);a=a;this.domEl=e;if(b.isPlainObject(a))a=b.param(a,";").replace(/=/g,":");this.props=n(a);this.targetStyle=a;if(p)e=b.merge(z,c);else{e=b.clone(z);c&&(e.duration=m(c,10)||1);b.isString(i)&&(i=v[i]);b.isFunction(i)&&(e.easing=i);b.isFunction(j)&&(e.complete=j)}this.config=e;b.isFunction(j)&&this.on(y,j)}}function n(e){var a={},c=w.length,i;r.innerHTML='<div style="'+
e+'"></div>';for(e=r.firstChild.style;c--;)if(i=e[w[c]])a[w[c]]=f(i);return a}function f(e){var a=m(e);e=(e+"").replace(/^[-\d\.]+/,"");return isNaN(a)?{v:e,u:"",f:g}:{v:a,u:e,f:h}}function h(e,a,c){return(e+(a-e)*c).toFixed(3)}function g(e,a,c){for(var i=2,j,p,x=[],t=[];j=3,p=arguments[i-1],i--;)if(d(p,0,4)==="rgb(")for(p=p.match(/\d+/g);j--;)x.push(~~p[j]);else if(d(p,0)==="#"){if(p.length===4)p="#"+d(p,1)+d(p,1)+d(p,2)+d(p,2)+d(p,3)+d(p,3);for(;j--;)x.push(parseInt(d(p,1+j*2,2),16))}else return a;
for(;j--;){i=~~(x[j+3]+(x[j]-x[j+3])*c);t.push(i<0?0:i>255?255:i)}return"rgb("+t.join(",")+")"}function d(e,a,c){return e.substr(a,c||1)}var o=b.DOM,v=b.Easing,m=parseFloat,r=o.create("<div>"),w="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
y="complete",z={duration:1,easing:v.easeNone};b.augment(l,b.EventTarget,{run:function(){var e=this,a=e.config,c=e.domEl,i=a.duration*1E3,j=a.easing,p=b.now(),x=p+i,t=e.props,u={},A;for(A in t)u[A]=f(o.css(c,A));if(e.fire("start")!==false){e.stop();e.timer=b.later(a=function(){var q=b.now(),s=q>x?1:(q-p)/i,B,C,D;for(A in t){B=u[A];C=t[A];if(C.v==0)C.u=B.u;if(B.u!==C.u)B.v=0;o.css(c,A,C.f(B.v,C.v,j(s))+C.u)}if(e.fire("step")===false||(D=q>x)){e.stop();D&&e.fire(y)}},13,true);a();return e}},stop:function(e){var a=
this.domEl,c=this.targetStyle;if(this.timer){this.timer.cancel();this.timer=k}if(e){b.UA.ie&&c.indexOf("opacity")>-1&&o.css(a,"opacity",this.props.opacity.v);a.style.cssText+=";"+c;this.fire(y)}return this}});b.Anim=l});KISSY.add("anim-node-plugin",function(b,k){var l=b.Anim;b.each([b.Node.prototype,b.NodeList.prototype],function(n){n.animate=function(){var f=b.makeArray(arguments);b.each(this,function(h){l.apply(k,[h].concat(f)).run()});return this}})});KISSY.add("core");