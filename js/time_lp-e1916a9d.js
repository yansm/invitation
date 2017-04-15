!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(n){if(void 0===this||null===this)throw new TypeError;var e,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof n)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)e=arguments[1];else for(;;){if(o in i){e=i[o++];break}if(++o>=r)throw new TypeError}for(;o<r;)o in i&&(e=n.call(t,e,i[o],o,i)),o++;return e})}();var Zepto=function(){function t(t){return"[object Function]"==D.call(t)}function n(t){return t instanceof Object}function e(n){var e,i;if("[object Object]"!==D.call(n))return!1;if(!(i=t(n.constructor)&&n.constructor.prototype)||!hasOwnProperty.call(i,"isPrototypeOf"))return!1;for(e in n);return e===m||hasOwnProperty.call(n,e)}function i(t){return t instanceof Array}function r(t){return"number"==typeof t.length}function o(t){return t.filter(function(t){return t!==m&&null!==t})}function a(t){return t.length>0?[].concat.apply([],t):t}function s(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function u(t){return t in j?j[t]:j[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function c(t,n){return"number"!=typeof n||N[s(t)]?n:n+"px"}function l(t){var n,e;return O[t]||(n=T.createElement(t),T.body.appendChild(n),e=S(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),O[t]=e),O[t]}function f(t,n){return n===m?v(t):v(t).filter(n)}function h(n,e,i,r){return t(e)?e.call(n,i,r):e}function p(t,n,e){var i=t%2?n:n.parentNode;i?i.insertBefore(e,t?1==t?i.firstChild:2==t?n:null:n.nextSibling):v(e).remove()}function d(t,n){n(t);for(var e in t.childNodes)d(t.childNodes[e],n)}var m,g,v,y,w,x,b=[],E=b.slice,T=window.document,O={},j={},S=T.defaultView.getComputedStyle,N={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},C=/^\s*<(\w+|!)[^>]*>/,P=[1,3,8,9,11],A=["after","prepend","before","append"],k=T.createElement("table"),M=T.createElement("tr"),R={tr:T.createElement("tbody"),tbody:k,thead:k,tfoot:k,td:M,th:M,"*":T.createElement("div")},$=/complete|loaded|interactive/,_=/^\.([\w-]+)$/,L=/^#([\w-]+)$/,Z=/^[\w-]+$/,D={}.toString,z={},U=T.createElement("div");return z.matches=function(t,n){if(!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var i,r=t.parentNode,o=!r;return o&&(r=U).appendChild(t),i=~z.qsa(r,n).indexOf(t),o&&U.removeChild(t),i},w=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},x=function(t){return t.filter(function(n,e){return t.indexOf(n)==e})},z.fragment=function(t,n){n===m&&(n=C.test(t)&&RegExp.$1),n in R||(n="*");var e=R[n];return e.innerHTML=""+t,v.each(E.call(e.childNodes),function(){e.removeChild(this)})},z.Z=function(t,n){return t=t||[],t.__proto__=arguments.callee.prototype,t.selector=n||"",t},z.isZ=function(t){return t instanceof z.Z},z.init=function(n,r){if(!n)return z.Z();if(t(n))return v(T).ready(n);if(z.isZ(n))return n;var a;if(i(n))a=o(n);else if(e(n))a=[v.extend({},n)],n=null;else if(P.indexOf(n.nodeType)>=0||n===window)a=[n],n=null;else if(C.test(n))a=z.fragment(n.trim(),RegExp.$1),n=null;else{if(r!==m)return v(r).find(n);a=z.qsa(T,n)}return z.Z(a,n)},v=function(t,n){return z.init(t,n)},v.extend=function(t){return E.call(arguments,1).forEach(function(n){for(g in n)n[g]!==m&&(t[g]=n[g])}),t},z.qsa=function(t,n){var e;return t===T&&L.test(n)?(e=t.getElementById(RegExp.$1))?[e]:b:1!==t.nodeType&&9!==t.nodeType?b:E.call(_.test(n)?t.getElementsByClassName(RegExp.$1):Z.test(n)?t.getElementsByTagName(n):t.querySelectorAll(n))},v.isFunction=t,v.isObject=n,v.isArray=i,v.isPlainObject=e,v.inArray=function(t,n,e){return b.indexOf.call(n,t,e)},v.trim=function(t){return t.trim()},v.uuid=0,v.map=function(t,n){var e,i,o,s=[];if(r(t))for(i=0;i<t.length;i++)null!=(e=n(t[i],i))&&s.push(e);else for(o in t)null!=(e=n(t[o],o))&&s.push(e);return a(s)},v.each=function(t,n){var e,i;if(r(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},v.fn={forEach:b.forEach,reduce:b.reduce,push:b.push,indexOf:b.indexOf,concat:b.concat,map:function(t){return v.map(this,function(n,e){return t.call(n,e,n)})},slice:function(){return v(E.apply(this,arguments))},ready:function(t){return $.test(T.readyState)?t(v):T.addEventListener("DOMContentLoaded",function(){t(v)},!1),this},get:function(t){return t===m?E.call(this):this[t]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return this.forEach(function(n,e){t.call(n,e,n)}),this},filter:function(t){return v([].filter.call(this,function(n){return z.matches(n,t)}))},add:function(t,n){return v(x(this.concat(v(t,n))))},is:function(t){return this.length>0&&z.matches(this[0],t)},not:function(n){var e=[];if(t(n)&&n.call!==m)this.each(function(t){n.call(this,t)||e.push(this)});else{var i="string"==typeof n?this.filter(n):r(n)&&t(n.item)?E.call(n):v(n);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return v(e)},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!n(t)?t:v(t)},last:function(){var t=this[this.length-1];return t&&!n(t)?t:v(t)},find:function(t){var n;return n=1==this.length?z.qsa(this[0],t):this.map(function(){return z.qsa(this,t)}),v(n)},closest:function(t,n){for(var e=this[0];e&&!z.matches(e,t);)e=e!==n&&e!==T&&e.parentNode;return v(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=v.map(e,function(t){if((t=t.parentNode)&&t!==T&&n.indexOf(t)<0)return n.push(t),t});return f(n,t)},parent:function(t){return f(x(this.pluck("parentNode")),t)},children:function(t){return f(this.map(function(){return E.call(this.children)}),t)},siblings:function(t){return f(this.map(function(t,n){return E.call(n.parentNode.children).filter(function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return this.map(function(){return this[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==S(this,"").getPropertyValue("display")&&(this.style.display=l(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){return this.each(function(){v(this).wrapAll(v(t)[0].cloneNode(!1))})},wrapAll:function(t){return this[0]&&(v(this[0]).before(t=v(t)),t.append(this)),this},unwrap:function(){return this.parent().each(function(){v(this).replaceWith(v(this).children())}),this},clone:function(){return v(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(t){return(t===m?"none"==this.css("display"):t)?this.show():this.hide()},prev:function(){return v(this.pluck("previousElementSibling"))},next:function(){return v(this.pluck("nextElementSibling"))},html:function(t){return t===m?this.length>0?this[0].innerHTML:null:this.each(function(n){var e=this.innerHTML;v(this).empty().append(h(this,t,n,e))})},text:function(t){return t===m?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var i;return"string"==typeof t&&e===m?0==this.length||1!==this[0].nodeType?m:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(i=this[0].getAttribute(t))&&t in this[0]?this[0][t]:i:this.each(function(i){if(1===this.nodeType)if(n(t))for(g in t)this.setAttribute(g,t[g]);else this.setAttribute(t,h(this,e,i,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&this.removeAttribute(t)})},prop:function(t,n){return n===m?this[0]?this[0][t]:m:this.each(function(e){this[t]=h(this,n,e,this[t])})},data:function(t,n){var e=this.attr("data-"+s(t),n);return null!==e?e:m},val:function(t){return t===m?this.length>0?this[0].value:m:this.each(function(n){this.value=h(this,t,n,this.value)})},offset:function(){if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}},css:function(t,n){if(n===m&&"string"==typeof t)return 0==this.length?m:this[0].style[w(t)]||S(this[0],"").getPropertyValue(t);var e="";for(g in t)"string"==typeof t[g]&&""==t[g]?this.each(function(){this.style.removeProperty(s(g))}):e+=s(g)+":"+c(g,t[g])+";";return"string"==typeof t&&(""==n?this.each(function(){this.style.removeProperty(s(t))}):e=s(t)+":"+c(t,n)),this.each(function(){this.style.cssText+=";"+e})},index:function(t){return t?this.indexOf(v(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!(this.length<1)&&u(t).test(this[0].className)},addClass:function(t){return this.each(function(n){y=[];var e=this.className;h(this,t,n,e).split(/\s+/g).forEach(function(t){v(this).hasClass(t)||y.push(t)},this),y.length&&(this.className+=(e?" ":"")+y.join(" "))})},removeClass:function(t){return this.each(function(n){if(t===m)return this.className="";y=this.className,h(this,t,n,y).split(/\s+/g).forEach(function(t){y=y.replace(u(t)," ")}),this.className=y.trim()})},toggleClass:function(t,n){return this.each(function(e){var i=h(this,t,e,this.className);(n===m?!v(this).hasClass(i):n)?v(this).addClass(i):v(this).removeClass(i)})}},["width","height"].forEach(function(t){v.fn[t]=function(n){var e,i=t.replace(/./,function(t){return t[0].toUpperCase()});return n===m?this[0]==window?window["inner"+i]:this[0]==T?T.documentElement["offset"+i]:(e=this.offset())&&e[t]:this.each(function(e){var i=v(this);i.css(t,h(this,n,e,i[t]()))})}}),A.forEach(function(t,e){v.fn[t]=function(){var t=v.map(arguments,function(t){return n(t)?t:z.fragment(t)});if(t.length<1)return this;var i=this.length,r=i>1,o=e<2;return this.each(function(n,a){for(var s=0;s<t.length;s++){var u=t[o?t.length-s-1:s];d(u,function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&window.eval.call(window,t.innerHTML)}),r&&n<i-1&&(u=u.cloneNode(!0)),p(e,a,u)}})},v.fn[e%2?t+"To":"insert"+(e?"Before":"After")]=function(n){return v(n)[t](this),this}}),z.Z.prototype=v.fn,z.camelize=w,z.uniq=x,v.zepto=z,v}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function n(t){return t._zid||(t._zid=f++)}function e(t,e,o,a){if(e=i(e),e.ns)var s=r(e.ns);return(l[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||s.test(t.ns))&&(!o||n(t.fn)===n(o))&&(!a||t.sel==a)})}function i(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(n,e,i){t.isObject(n)?t.each(n,i):n.split(/\s/).forEach(function(t){i(t,e)})}function a(e,r,a,s,u,c){c=!!c;var f=n(e),h=l[f]||(l[f]=[]);o(r,a,function(n,r){var o=u&&u(r,n),a=o||r,l=function(t){var n=a.apply(e,[t].concat(t.data));return n===!1&&t.preventDefault(),n},f=t.extend(i(n),{fn:r,proxy:l,sel:s,del:o,i:h.length});h.push(f),e.addEventListener(f.e,l,c)})}function s(t,i,r,a){var s=n(t);o(i||"",r,function(n,i){e(t,n,i,a).forEach(function(n){delete l[s][n.i],t.removeEventListener(n.e,n.proxy,!1)})})}function u(n){var e=t.extend({originalEvent:n},n);return t.each(m,function(t,i){e[t]=function(){return this[i]=p,n[t].apply(n,arguments)},e[i]=d}),e}function c(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var n=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,n.call(this)}}}var l=(t.zepto.qsa,{}),f=1,h={};h.click=h.mousedown=h.mouseup=h.mousemove="MouseEvents",t.event={add:a,remove:s},t.proxy=function(e,i){if(t.isFunction(e)){var r=function(){return e.apply(i,arguments)};return r._zid=n(e),r}if("string"==typeof i)return t.proxy(e[i],e);throw new TypeError("expected function")},t.fn.bind=function(t,n){return this.each(function(){a(this,t,n)})},t.fn.unbind=function(t,n){return this.each(function(){s(this,t,n)})},t.fn.one=function(t,n){return this.each(function(e,i){a(this,t,n,null,function(t,n){return function(){var e=t.apply(i,arguments);return s(i,n,t),e}})})};var p=function(){return!0},d=function(){return!1},m={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(n,e,i){var r=!1;return"blur"!=e&&"focus"!=e||(t.iswebkit?e="blur"==e?"focusout":"focus"==e?"focusin":e:r=!0),this.each(function(o,s){a(s,e,i,n,function(e){return function(i){var r,o=t(i.target).closest(n,s).get(0);if(o)return r=t.extend(u(i),{currentTarget:o,liveFired:s}),e.apply(o,[r].concat([].slice.call(arguments,1)))}},r)})},t.fn.undelegate=function(t,n,e){return this.each(function(){s(this,n,e,t)})},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,i){return void 0==e||t.isFunction(e)?this.bind(n,e):this.delegate(e,n,i)},t.fn.off=function(n,e,i){return void 0==e||t.isFunction(e)?this.unbind(n,e):this.undelegate(e,n,i)},t.fn.trigger=function(n,e){return"string"==typeof n&&(n=t.Event(n)),c(n),n.data=e,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(n)})},t.fn.triggerHandler=function(n,i){var r,o;return this.each(function(a,s){r=u("string"==typeof n?t.Event(n):n),r.data=i,r.target=s,t.each(e(s,n.type||n),function(t,n){if(o=n.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return this.bind(n,t)}}),["focus","blur"].forEach(function(n){t.fn[n]=function(t){if(t)this.bind(n,t);else if(this.length)try{this.get(0)[n]()}catch(t){}return this}}),t.Event=function(t,n){var e=document.createEvent(h[t]||"Events"),i=!0;if(n)for(var r in n)"bubbles"==r?i=!!n[r]:e[r]=n[r];return e.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),e}}(Zepto),function(t){function n(t){var n=this.os={},e=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=s&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/);(e.webkit=!!i)&&(e.version=i[1]),r&&(n.android=!0,n.version=r[2]),a&&(n.ios=n.iphone=!0,n.version=a[2].replace(/_/g,".")),o&&(n.ios=n.ipad=!0,n.version=o[2].replace(/_/g,".")),s&&(n.webos=!0,n.version=s[2]),u&&(n.touchpad=!0),f&&(n.blackberry=!0,n.version=f[2]),c&&(n.kindle=!0,n.version=c[1]),l&&(e.silk=!0,e.version=l[1]),!l&&n.android&&t.match(/Kindle Fire/)&&(e.silk=!0)}n.call(t,navigator.userAgent),t.__detect=n}(Zepto),function(t,n){function e(t){return t.toLowerCase()}function i(t){return r?r+t:e(t)}var r,o="",a={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},s=window.document,u=s.createElement("div"),c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,l={};t.each(a,function(t,i){if(u.style[t+"TransitionProperty"]!==n)return o="-"+e(t)+"-",r=i,!1}),l[o+"transition-property"]=l[o+"transition-duration"]=l[o+"transition-timing-function"]=l[o+"animation-name"]=l[o+"animation-duration"]="",t.fx={off:r===n&&u.style.transitionProperty===n,cssPrefix:o,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,e,i,r){return t.isObject(e)&&(i=e.easing,r=e.complete,e=e.duration),e&&(e/=1e3),this.anim(n,e,i,r)},t.fn.anim=function(e,i,r,a){var s,u,f,h={},p=this,d=t.fx.transitionEnd;if(i===n&&(i=.4),t.fx.off&&(i=0),"string"==typeof e)h[o+"animation-name"]=e,h[o+"animation-duration"]=i+"s",d=t.fx.animationEnd;else{for(u in e)c.test(u)?(s||(s=[]),s.push(u+"("+e[u]+")")):h[u]=e[u];s&&(h[o+"transform"]=s.join(" ")),!t.fx.off&&"object"==typeof e&&(h[o+"transition-property"]=Object.keys(e).join(", "),h[o+"transition-duration"]=i+"s",h[o+"transition-timing-function"]=r||"linear")}return f=function(n){if(void 0!==n){if(n.target!==n.currentTarget)return;t(n.target).unbind(d,arguments.callee)}t(this).css(l),a&&a.call(this)},i>0&&this.bind(d,f),setTimeout(function(){p.css(h),i<=0&&setTimeout(function(){p.each(function(){f.call(this)})},0)},0),this},u=null}(Zepto),function(t){function n(n,e,i){var r=t.Event(e);return t(n).trigger(r,i),!r.defaultPrevented}function e(t,e,i,r){if(t.global)return n(e||y,i,r)}function i(n){n.global&&0==t.active++&&e(n,null,"ajaxStart")}function r(n){n.global&&!--t.active&&e(n,null,"ajaxStop")}function o(t,n){var i=n.context;if(n.beforeSend.call(i,t,n)===!1||e(n,i,"ajaxBeforeSend",[t,n])===!1)return!1;e(n,i,"ajaxSend",[t,n])}function a(t,n,i){var r=i.context,o="success";i.success.call(r,t,o,n),e(i,r,"ajaxSuccess",[n,i,t]),u(o,n,i)}function s(t,n,i,r){var o=r.context;r.error.call(o,i,n,t),e(r,o,"ajaxError",[i,r,t]),u(n,i,r)}function u(t,n,i){var o=i.context;i.complete.call(o,n,t),e(i,o,"ajaxComplete",[n,i]),r(i)}function c(){}function l(t){return t&&(t==E?"html":t==b?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,n){return(t+"&"+n).replace(/[&?]{1,2}/,"?")}function h(n){v(n.data)&&(n.data=t.param(n.data)),n.data&&(!n.type||"GET"==n.type.toUpperCase())&&(n.url=f(n.url,n.data))}function p(n,e,i,r){var o=t.isArray(e);t.each(e,function(e,a){r&&(e=i?r:r+"["+(o?"":e)+"]"),!r&&o?n.add(a.name,a.value):(i?t.isArray(a):v(a))?p(n,a,i,e):n.add(e,a)})}var d,m,g=0,v=t.isObject,y=window.document,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,b="application/json",E="text/html",T=/^\s*$/;t.active=0,t.ajaxJSONP=function(n){var e,i="jsonp"+ ++g,r=y.createElement("script"),o=function(){t(r).remove(),i in window&&(window[i]=c),u("abort",s,n)},s={abort:o};return n.error&&(r.onerror=function(){s.abort(),n.error()}),window[i]=function(o){clearTimeout(e),t(r).remove(),delete window[i],a(o,s,n)},h(n),r.src=n.url.replace(/=\?/,"="+i),t("head").append(r),n.timeout>0&&(e=setTimeout(function(){s.abort(),u("timeout",s,n)},n.timeout)),s},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:b,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0},t.ajax=function(n){var e=t.extend({},n||{});for(d in t.ajaxSettings)void 0===e[d]&&(e[d]=t.ajaxSettings[d]);i(e),e.crossDomain||(e.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(e.url)&&RegExp.$2!=window.location.host);var r=e.dataType,u=/=\?/.test(e.url);if("jsonp"==r||u)return u||(e.url=f(e.url,"callback=?")),t.ajaxJSONP(e);e.url||(e.url=window.location.toString()),h(e);var p,g=e.accepts[r],v={},y=/^([\w-]+:)\/\//.test(e.url)?RegExp.$1:window.location.protocol,w=t.ajaxSettings.xhr();e.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),g&&(v.Accept=g,g.indexOf(",")>-1&&(g=g.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(g)),(e.contentType||e.data&&"GET"!=e.type.toUpperCase())&&(v["Content-Type"]=e.contentType||"application/x-www-form-urlencoded"),e.headers=t.extend(v,e.headers||{}),w.onreadystatechange=function(){if(4==w.readyState){clearTimeout(p);var t,n=!1;if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==y){r=r||l(w.getResponseHeader("content-type")),t=w.responseText;try{"script"==r?(0,eval)(t):"xml"==r?t=w.responseXML:"json"==r&&(t=T.test(t)?null:JSON.parse(t))}catch(t){n=t}n?s(n,"parsererror",w,e):a(t,w,e)}else s(null,"error",w,e)}};var x=!("async"in e)||e.async;w.open(e.type,e.url,x);for(m in e.headers)w.setRequestHeader(m,e.headers[m]);return o(w,e)===!1?(w.abort(),!1):(e.timeout>0&&(p=setTimeout(function(){w.onreadystatechange=c,w.abort(),s(null,"timeout",w,e)},e.timeout)),w.send(e.data?e.data:null),w)},t.get=function(n,e){return t.ajax({url:n,success:e})},t.post=function(n,e,i,r){return t.isFunction(e)&&(r=r||i,i=e,e=null),t.ajax({type:"POST",url:n,data:e,success:i,dataType:r})},t.getJSON=function(n,e){return t.ajax({url:n,success:e,dataType:"json"})},t.fn.load=function(n,e){if(!this.length)return this;var i,r=this,o=n.split(/\s/);return o.length>1&&(n=o[0],i=o[1]),t.get(n,function(n){r.html(i?t(y.createElement("div")).html(n.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")).find(i).html():n),e&&e.call(r)}),this};var O=encodeURIComponent;t.param=function(t,n){var e=[];return e.add=function(t,n){this.push(O(t)+"="+O(n))},p(e,t,n),e.join("&").replace("%20","+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(n){t.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}),t.join("&")},t.fn.submit=function(n){if(n)this.bind("submit",n);else if(this.length){var e=t.Event("submit");this.eq(0).trigger(e),e.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t){function n(t){return"tagName"in t?t:t.parentNode}function e(t,n,e,i){return Math.abs(t-n)>=Math.abs(e-i)?t-n>0?"Left":"Right":e-i>0?"Up":"Down"}function i(){a=null,s.last&&(s.el.trigger("longTap"),s={})}function r(){a&&clearTimeout(a),a=null}var o,a,s={};t(document).ready(function(){var u,c;t(document.body).bind("touchstart",function(e){u=Date.now(),c=u-(s.last||u),s.el=t(n(e.touches[0].target)),o&&clearTimeout(o),s.x1=e.touches[0].pageX,s.y1=e.touches[0].pageY,c>0&&c<=250&&(s.isDoubleTap=!0),s.last=u,a=setTimeout(i,750)}).bind("touchmove",function(t){r(),s.x2=t.touches[0].pageX,s.y2=t.touches[0].pageY}).bind("touchend",function(t){r(),s.isDoubleTap?(s.el.trigger("doubleTap"),s={}):s.x2&&Math.abs(s.x1-s.x2)>30||s.y2&&Math.abs(s.y1-s.y2)>30?(s.el.trigger("swipe")&&s.el.trigger("swipe"+e(s.x1,s.x2,s.y1,s.y2)),s={}):"last"in s&&(s.el.trigger("tap"),o=setTimeout(function(){o=null,s.el.trigger("singleTap"),s={}},250))}).bind("touchcancel",function(){o&&clearTimeout(o),a&&clearTimeout(a),a=o=null,s={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(n){t.fn[n]=function(t){return this.bind(n,t)}})}(Zepto),$(function(){var t=navigator.userAgent,n=t.indexOf("Android")>-1||t.indexOf("Adr")>-1||t.indexOf("MicroMessenger")>-1,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(){var t=function(){var t=/OS ((\d+_?){2,3})\s/;if(navigator.userAgent.match(/iPad/i)||navigator.platform.match(/iPad/i)||navigator.userAgent.match(/iP(hone|od)/i)||navigator.platform.match(/iP(hone|od)/i)){var n=t.exec(navigator.userAgent);if(n.length>0)return n[0].replace("OS","").replace("os","").replace(/\s+/g,"").replace(/_/g,".")}return""}(),n=t.split(".");return!!(n&&n.length>0&&parseInt(n[0])>=9)}();if($(".landing-btn").on("click",function(){location.href=e&&i?"https://nihao.com/openappurl":"nihao://";var t=Date.now();setTimeout(function(){var e=Date.now(),r=n?"http://a.app.qq.com/o/simple.jsp?pkgname=com.nihao.time":"https://itunes.apple.com/app/id1204234194";!i&&e-t<1e3&&(window.location.href=r)},500),setTimeout(function(){n||location.reload()},2e3)}),e){var r=$(".landing-bg"),o=Date.now();window.addEventListener("deviceorientation",function(t){var n=Date.now();if(!(n-o<15)){o=n;var e=t.beta,i=t.gamma;r.css({webkitTransform:"scale(1.1) translate("+i/10+"%, "+e/20+"%)",transform:"scale(1.1) translate("+i/10+"%, "+e/20+"%)"})}},!0)}});var wxReady=function(){wx.config(WX_CONFIG),wx.ready(function(){wx.onMenuShareAppMessage({title:"你好nihao.com 把时间分享给有趣的人和事。",desc:"时间的意义，在这里被重新定义，连接你我！",link:location.href,imgUrl:LOGO_URL,success:function(){},cancel:function(){}}),wx.onMenuShareTimeline({title:"你好nihao.com 把时间分享给有趣的人和事。",desc:"nihao.com",link:location.href,imgUrl:LOGO_URL,success:function(){},cancel:function(){}})}),wx.error(function(t){console.log(JSON.stringify(t))})};"undefined"!=typeof WX_CONFIG&&wxReady();