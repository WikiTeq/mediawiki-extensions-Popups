!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.js")}({"./node_modules/redux-thunk/dist/redux-thunk.min.js":function(e,t,n){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,i=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,i,e):t(r)}}}}t.__esModule=!0;var i=n();i.withExtraArgument=n,t.default=i}])},"./node_modules/redux/dist/redux.min.js":function(e,t,n){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var r=n(2),o=i(r),a=n(7),u=i(a),s=n(6),p=i(s),c=n(5),l=i(c),d=n(1),f=i(d),v=n(3);i(v),t.createStore=o.default,t.combineReducers=u.default,t.bindActionCreators=p.default,t.applyMiddleware=l.default,t.compose=f.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var i=t[t.length-1],r=t.slice(0,-1);return function(){return r.reduceRight(function(e,t){return t(e)},i.apply(void 0,arguments))}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ActionTypes=void 0,t.default=function e(t,n,i){function r(){g===v&&(g=v.slice())}function a(){return f}function p(e){if("function"!=typeof e)throw Error("Expected listener to be a function.");var t=!0;return r(),g.push(e),function(){if(t){t=!1,r();var n=g.indexOf(e);g.splice(n,1)}}}function c(e){if(!(0,o.default)(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw Error("Reducers may not dispatch actions.");try{h=!0,f=d(f,e)}finally{h=!1}for(var t=v=g,n=0;t.length>n;n++)t[n]();return e}var l;if("function"==typeof n&&void 0===i&&(i=n,n=void 0),void 0!==i){if("function"!=typeof i)throw Error("Expected the enhancer to be a function.");return i(e)(t,n)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var d=t,f=n,v=[],g=v,h=!1;return c({type:s.INIT}),(l={dispatch:c,subscribe:p,getState:a,replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");d=e,c({type:s.INIT})}})[u.default]=function(){var e,t=p;return(e={subscribe:function(e){function n(){e.next&&e.next(a())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var i=t(n);return{unsubscribe:i}}})[u.default]=function(){return this},e},l};var r=n(4),o=i(r),a=n(12),u=i(a),s=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw Error(e)}catch(e){}}},function(e,t,n){var i=n(8),r=n(9),o=n(11),a="[object Object]",u=Function.prototype,s=Object.prototype,p=u.toString,c=s.hasOwnProperty,l=p.call(Object),d=s.toString;e.exports=function(e){if(!o(e)||d.call(e)!=a||r(e))return!1;var t=i(e);if(null===t)return!0;var n=c.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&p.call(n)==l}},function(e,t,n){"use strict";t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,r,a){var u=e(n,r,a),s=u.dispatch,p=[],c={getState:u.getState,dispatch:function(e){return s(e)}};return p=t.map(function(e){return e(c)}),s=o.default.apply(void 0,p)(u.dispatch),i({},u,{dispatch:s})}}};var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}t.__esModule=!0,t.default=function(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),r={},o=0;i.length>o;o++){var a=i[o],u=e[a];"function"==typeof u&&(r[a]=n(u,t))}return r}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=t&&t.type,i=n&&'"'+n+'"'||"an action";return"Given action "+i+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var n=e[t],i=n(void 0,{type:a.ActionTypes.INIT});if(void 0===i)throw Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var r="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:r}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}t.__esModule=!0,t.default=function(e){for(var t=Object.keys(e),n={},i=0;t.length>i;i++){var a=t[i];"function"==typeof e[a]&&(n[a]=e[a])}var u,s=Object.keys(n);try{o(n)}catch(e){u=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(u)throw u;for(var i=!1,o={},a=0;s.length>a;a++){var p=s[a],c=n[p],l=e[p],d=c(l,t);if(void 0===d){var f=r(p,t);throw Error(f)}o[p]=d,i=i||d!==l}return i?o:e}};var a=n(2),u=n(4),s=(i(u),n(3));i(s)},function(e,t,n){var i=n(10),r=i(Object.getPrototypeOf,Object);e.exports=r},function(e,t){e.exports=function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t){e.exports=function(e){return!!e&&"object"==typeof e}},function(e,t,n){e.exports=n(13)},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o=void 0;void 0!==e?o=e:"undefined"!=typeof window&&(o=window);var a=(0,r.default)(o);t.default=a}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}}])},"./src/counts.js":function(e,t){t.getEditCountBucket=function(e){var t=void 0;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=99?t="5-99":e>=100&&e<=999?t="100-999":e>=1e3&&(t="1000+"),t+" edits"},t.getPreviewCountBucket=function(e){var t=void 0;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=20?t="5-20":e>=21&&(t="21+"),void 0!==t?t+" previews":"unknown"}},"./src/index.js":function(e,t,n){"use strict";n.r(t);var i={};n.d(i,"boot",function(){return Se}),n.d(i,"fetch",function(){return ke}),n.d(i,"linkDwell",function(){return xe}),n.d(i,"abandon",function(){return Ae}),n.d(i,"linkClick",function(){return Le}),n.d(i,"previewDwell",function(){return Pe}),n.d(i,"previewShow",function(){return Ce}),n.d(i,"pageviewLogged",function(){return Ne}),n.d(i,"showSettings",function(){return Oe}),n.d(i,"hideSettings",function(){return De}),n.d(i,"saveSettings",function(){return Re}),n.d(i,"eventLogged",function(){return Ge}),n.d(i,"statsvLogged",function(){return He});var r=n("./node_modules/redux/dist/redux.min.js"),o=n("./node_modules/redux-thunk/dist/redux-thunk.min.js"),a=n.n(o),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.devicePixelRatio;return e?e>1.5?2:e>1?1.5:1:1}(),s={BRACKETED_DEVICE_PIXEL_RATIO:u,THUMBNAIL_SIZE:320*u,EXTRACT_LENGTH:525},p={TYPE_GENERIC:"generic",TYPE_PAGE:"page",TYPE_DISAMBIGUATION:"disambiguation"};function c(e,t,n,i,r,o,a,u){var s=function(e){if(void 0===e||null===e||0===e.length)return;return e}(r);return{title:e,url:t,languageCode:n,languageDirection:i,extract:s,type:function(e,t){if(void 0===t)return p.TYPE_GENERIC;switch(e){case p.TYPE_GENERIC:case p.TYPE_DISAMBIGUATION:case p.TYPE_PAGE:return e;default:return p.TYPE_PAGE}}(o,s),thumbnail:a,pageId:u}}var l=jQuery,d=mediaWiki;function f(e,t){var n=e;return void 0===e?[]:0===n.length?[]:n=function(e,t){var n=[],i="<bi-"+Math.random()+">",r="<snip-"+Math.random()+">";t=t.replace(/\s+/g," ").trim();var o=d.RegExp.escape(t),a=new RegExp("(^|\\s)("+o+")(|$)","i");return(e=(e=(e=e.replace(/\s+/," ")).replace(a,"$1"+r+i+"$2"+r+"$3")).split(r)).forEach(function(e){0===e.indexOf(i)?n.push(l("<b>").text(e.substring(i.length))):n.push(document.createTextNode(e))}),n}(n,t)}var v=300,g=jQuery;function h(e){if(e.query&&e.query.pages&&e.query.pages.length)return e.query.pages[0];throw new Error("API response `query.pages` is empty.")}function w(e){var t=g.extend({},e);return t.extract=f(e.extract,e.title),t}function m(e){return c(e.title,e.canonicalurl,e.pagelanguagehtmlcode,e.pagelanguagedir,e.extract,e.type,e.thumbnail,e.pageid)}var E="https://www.mediawiki.org/wiki/Specs/Summary/1.2.0",T=mediaWiki,y=jQuery;function b(e,t,n){function i(n){var i=t.endpoint;return e({url:i+encodeURIComponent(n),headers:{Accept:'application/json; charset=utf-8; profile="'+E+'"',"Accept-Language":t.acceptLanguage}})}return{fetch:i,convertPageToModel:I,getPageSummary:function(e){var r=i(e);return r.then(function(i){return i&&i.title||(i=y.extend(!0,i||{},{title:e})),void 0===i.extract&&(i.extract=""),I(i,t.THUMBNAIL_SIZE,n)}).catch(function(e,t,n){return y.Deferred().reject("http",{xhr:e,textStatus:t,exception:n})}).promise({abort:function(){r.abort()}})}}}function _(e,t,n){var i=e.source.split("/"),r=i[i.length-1],o=function(e){return new RegExp(/\.(jpg|jpeg|png|gif)$/i).test(e)}(t.source)||void 0,a=r.indexOf("px-");if(-1===a)return o&&t;var u=r.substr(a+3),s=void 0,p=void 0;return e.width>e.height?(s=n,p=Math.floor(n/e.width*e.height)):(s=Math.floor(n/e.height*e.width),p=n),s>=t.width&&-1===u.indexOf(".svg")?o&&t:(i[i.length-1]=s+"px-"+u,{source:i.join("/"),width:s,height:p})}function I(e,t,n){return c(e.title,new T.Title(e.title).getUrl(),e.lang,e.dir,n(e),e.type,e.thumbnail?_(e.thumbnail,e.originalimage,t):void 0,e.pageid)}function S(e){var t=e.extract_html;return 0===t.length?[]:$.parseHTML(t)}function k(e){return f(e.extract,e.title)}var x=mediaWiki,A=jQuery;function L(e){var t=A.extend({},s,{acceptLanguage:e.get("wgPageContentLanguage")}),n=A.extend({},t,{endpoint:e.get("wgPopupsRestGatewayEndpoint")});switch(e.get("wgPopupsGateway")){case"mwApiPlain":return function(e,t){function n(n){return e.get({action:"query",prop:"info|extracts|pageimages|revisions|info",formatversion:2,redirects:!0,exintro:!0,exchars:t.EXTRACT_LENGTH,explaintext:!0,piprop:"thumbnail",pithumbsize:t.THUMBNAIL_SIZE,pilicense:"any",rvprop:"timestamp",inprop:"url",titles:n,smaxage:v,maxage:v,uselang:"content"},{headers:{"X-Analytics":"preview=1","Accept-Language":t.acceptLanguage}})}return{fetch:n,extractPageFromResponse:h,convertPageToModel:m,getPageSummary:function(e){var t=n(e);return t.then(function(e){return m(w(h(e)))}).promise({abort:function(){t.abort()}})},formatPlainTextExtract:w}}(new x.Api,t);case"restbasePlain":return b(A.ajax,n,k);case"restbaseHTML":return b(A.ajax,n,S);default:throw new Error("Unknown gateway")}}var P="mwe-popups-enabled",C="ext.popups.core.previewCount";var N=mediaWiki,O=jQuery;var D=mediaWiki;function R(e){return D.html.escape(e)}function G(e){var t=R(e.heading),n=R(e.saveLabel),i=R(e.closeLabel),r=R(e.helpText);return("\n\t\t<section id='mwe-popups-settings'>\n\t\t\t<header>\n\t\t\t\t<div>\n\t\t\t\t\t<div class='mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-close close'>"+i+"</div>\n\t\t\t\t</div>\n\t\t\t\t<h1>"+t+"</h1>\n\t\t\t\t<div>\n\t\t\t\t\t<button class='save mw-ui-button mw-ui-progressive'>"+n+"</button>\n\t\t\t\t\t<button class='okay mw-ui-button mw-ui-progressive' style='display:none;'>"+R(e.okLabel)+"</button>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<main id='mwe-popups-settings-form'>\n\t\t\t\t<form>\n\t\t\t\t\t"+function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){var t=e.id,n=e.name,i=e.description,r=e.isChecked;return{id:R(t),name:R(n),description:i?R(i):"",isChecked:r}})}(e.choices).map(function(e){var t=e.id,n=e.name,i=e.description;return"\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tname='mwe-popups-setting'\n\t\t\t\t\t\t\t"+(e.isChecked?"checked":"")+"\n\t\t\t\t\t\t\tvalue='"+t+"'\n\t\t\t\t\t\t\ttype='radio'\n\t\t\t\t\t\t\tid='mwe-popups-settings-"+t+"'>\n\t\t\t\t\t\t<label for='mwe-popups-settings-"+t+"'>\n\t\t\t\t\t\t\t<span>"+n+"</span>\n\t\t\t\t\t\t\t"+i+"\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</p>"}).join("")+"\n\t\t\t\t</form>\n\t\t\t</main>\n\t\t\t<div class='mwe-popups-settings-help' style='display:none;'>\n\t\t\t\t<div class=\"mw-ui-icon mw-ui-icon-element mw-ui-icon-footer\"></div>\n\t\t\t\t<p>"+r+"</p>\n\t\t\t</div>\n\t\t</section>\n\t").trim()}var H=mediaWiki;var W=jQuery;function j(){var e=void 0,t=void 0;return function(n){return e||(e=function(e){var t=[{id:"simple",name:H.msg("popups-settings-option-simple"),description:H.msg("popups-settings-option-simple-description"),isChecked:!0},{id:"advanced",name:H.msg("popups-settings-option-advanced"),description:H.msg("popups-settings-option-advanced-description")},{id:"off",name:H.msg("popups-settings-option-off")}];return e||t.splice(1,1),$($.parseHTML(G({heading:H.msg("popups-settings-title"),closeLabel:H.msg("popups-settings-cancel"),saveLabel:H.msg("popups-settings-save"),helpText:H.msg("popups-settings-help"),okLabel:H.msg("popups-settings-help-ok"),choices:t})))}(M()),t=W("<div>").addClass("mwe-popups-overlay"),e.find(".save").click(function(){var t="simple"===function(e){return e.find("input[name=mwe-popups-setting]:checked, #mwe-popups-settings").val()}(e);n.saveSettings(t)}),e.find(".close, .okay").click(n.hideSettings)),{appendTo:function(n){t.appendTo(n),e.appendTo(t)},show:function(){t.show()},hide:function(){t.hide()},toggleHelp:function(e){!function(e,t){var n=W("#mwe-popups-settings");t?(n.find("main, .save, .close").hide(),n.find(".mwe-popups-settings-help, .okay").show()):(n.find("main, .save, .close").show(),n.find(".mwe-popups-settings-help, .okay").hide())}(0,e)},setEnabled:function(t){var n="off";t?n="simple":M()&&(n="advanced"),e.find("#mwe-popups-settings-"+n).prop("checked",!0)}}}}function M(){return"undefined"!=typeof pg&&void 0!==pg.fn.disablePopups}function B(e,t){var n=void 0;e.subscribe(function(){var i=n;i!==(n=e.getState())&&t(i,n)})}var F=mediaWiki;function U(e,t){return function(e,t){if(!e)return null;var n=F.Title.newFromText(e);return n&&$.inArray(n.namespace,t)>=0?n:null}(function(e,t){var n=new RegExp(F.RegExp.escape(t.get("wgArticlePath")).replace("\\$1","(.+)")),i=void 0;try{i=new F.Uri(e)}catch(e){return}if(i.host===location.hostname){var r=Object.keys(i.query).length;if(!r){var o=n.exec(i.path);return o?decodeURIComponent(o[1]):void 0}return 1===r&&i.query.hasOwnProperty("title")?i.query.title:void 0}}(e.href,t),t.get("wgContentNamespaces"))}var V=jQuery;function Y(e){var t=V.Deferred(),n=setTimeout(function(){t.resolve()},e);return t.catch(function(){return clearTimeout(n)}),t.promise({abort:function(){t.reject()}})}var K=n("./src/ui/pointer-mask.svg"),X=n.n(K),Q={portraitImage:{h:250,w:203},landscapeImage:{h:200,w:320}},q=jQuery;function z(e){var t=s.BRACKETED_DEVICE_PIXEL_RATIO;if(!e)return null;var n=e.width<e.height,i=e.width/t,r=e.height/t;if(!n&&i<Q.landscapeImage.w||n&&r<Q.portraitImage.h||e.source.indexOf("\\")>-1||e.source.indexOf("'")>-1||e.source.indexOf('"')>-1)return null;var o=void 0,a=void 0,u=void 0,p=void 0;n?(o=i>Q.portraitImage.w?(i-Q.portraitImage.w)/-2:Q.portraitImage.w-i,a=r>Q.portraitImage.h?(r-Q.portraitImage.h)/-2:0,u=Q.portraitImage.w,p=Q.portraitImage.h,i<u&&(o=0,u=i)):(o=0,a=r>Q.landscapeImage.h?(r-Q.landscapeImage.h)/-2:0,u=Q.landscapeImage.w,p=r>Q.landscapeImage.h?Q.landscapeImage.h:r);var c=n&&i<Q.portraitImage.w;return{el:function(e,t,n,i,r,o,a,u){var s="http://www.w3.org/2000/svg",p=document.createElementNS(s,"polyline"),c=-1===e.indexOf("not-tall")?[0,0,0,u]:[0,u-1,a,u-1];p.setAttribute("stroke","rgba(0,0,0,0.1)"),p.setAttribute("points",c.join(" ")),p.setAttribute("stroke-width",1);var l=q(document.createElementNS(s,"image"));l[0].setAttributeNS("http://www.w3.org/1999/xlink","href",t),l.addClass(e).attr({x:n,y:i,width:r,height:o});var d=q(document.createElementNS(s,"svg")).attr({xmlns:s,width:a,height:u}).append(l);return d.append(p),d}(n?"mwe-popups-is-tall":"mwe-popups-is-not-tall",e.source,o,a,i,r,u,p),isTall:n,isNarrow:c,offset:c?Q.portraitImage.w-i:0,width:i,height:r}}function Z(e,t){return("\n\t<div class='mwe-popups mwe-popups-type-"+e+"' role='tooltip' aria-hidden>\n\t\t<div class='mwe-popups-container'>"+t+"</div>\n\t</div>\n\t").trim()}function J(e,t,n,i){var r=e.title,o=e.url,a=e.type;return r=R(r),n=R(n),i=R(i),Z(a,"\n\t\t\t<div class='mw-ui-icon mw-ui-icon-element mw-ui-icon-preview-"+a+"'></div>\n\t\t\t"+(t?"<strong class='mwe-popups-title'>"+r+"</strong>":"")+"\n\t\t\t<a href='"+o+"' class='mwe-popups-extract'>\n\t\t\t\t<span class='mwe-popups-message'>"+n+"</span>\n\t\t\t</a>\n\t\t\t<footer>\n\t\t\t\t<a href='"+o+"' class='mwe-popups-read-link'>"+i+"</a>\n\t\t\t</footer>\n\t\t")}var ee=mediaWiki,te=jQuery,ne=215,ie=te(window),re=450,oe=320,ae=8;function ue(){!function(e){te("<div>").attr("id","mwe-popups-svg").html(X.a).appendTo(e)}(document.body)}function se(e){var t=function(e){switch(e.type){case p.TYPE_PAGE:return function(e){var t=z(e.thumbnail),n=null!==t,i=e.extract,r=te(te.parseHTML(function(e,t){var n=e.url,i=e.type,r=e.languageCode,o=e.languageDirection;return Z(i,"\n\t\t\t"+(t?"<a href='"+n+"' class='mwe-popups-discreet'></a>":"")+"\n\t\t\t<a dir='"+o+"' lang='"+r+"' class='mwe-popups-extract' href='"+n+"'></a>\n\t\t\t<footer>\n\t\t\t\t<a class='mwe-popups-settings-icon'>\n\t\t\t\t\t<span class=\"mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-settings\"></span>\n\t\t\t\t</a>\n\t\t\t</footer>\n\t\t")}(e,n)));n&&r.find(".mwe-popups-discreet").append(t.el);if(i){var o=function(e){return e&&e.isNarrow?ne+e.offset+"px":""}(t);r.find(".mwe-popups-extract").css("width",o).append(i),r.find("footer").css("width",o)}return{el:r,hasThumbnail:n,thumbnail:t,isTall:n&&t.isTall}}(e);case p.TYPE_DISAMBIGUATION:return function(e){var t=ee.msg("popups-preview-disambiguation"),n=ee.msg("popups-preview-disambiguation-link");return{el:te(te.parseHTML(J(e,!0,t,n))),hasThumbnail:!1,isTall:!1}}(e);default:return function(e){var t=ee.msg("popups-preview-no-preview"),n=ee.msg("popups-preview-footer-read");return{el:te(te.parseHTML(J(e,!1,t,n))),hasThumbnail:!1,isTall:!1}}(e)}}(e);return{show:function(e,n,i){return function(e,t,n,i,r,o,a){var u=function(e,t,n,i,r,o){var a=!1,u=!1,s=t.pageY?pe(t.pageY-i.scrollTop,n.clientRects,!1)+i.scrollTop+r:n.offset.top+n.height+r,p=t.pageX?t.pageX:n.offset.left,c=t.clientY?t.clientY:s;p>i.width/2&&(p+=t.pageX?0:n.width,p-=e?re:oe,a=!0);t.pageX&&(p+=a?20:-20);c>i.height/2&&(u=!0,s=n.offset.top,t.pageY&&(s=pe(t.pageY-i.scrollTop,n.clientRects,!0)+i.scrollTop),s-=r);return{offset:{top:s,left:p},flippedX:"rtl"===o?!a:a,flippedY:u,dir:o}}(e.isTall,{pageX:t.pageX,pageY:t.pageY,clientY:t.clientY},{clientRects:n.get(0).getClientRects(),offset:n.offset(),width:n.width(),height:n.height()},{scrollTop:ie.scrollTop(),width:ie.width(),height:ie.height()},ae,a);return e.el.appendTo(o),function(e,t,n,i,r){var o=e.el,a=e.isTall,u=e.hasThumbnail,s=e.thumbnail,p=t.flippedY,c=t.offset.top;!p&&!a&&u&&s.height<i&&o.find(".mwe-popups-extract").css("margin-top",s.height-r),o.addClass(n.join(" ")),p&&(c-=o.outerHeight()),o.css({top:c,left:t.offset.left+"px"}),u&&function(e,t){var n=e.el,i=e.isTall,r=t.flippedY,o=t.flippedX,a=t.dir,u=function(e,t,n){return n&&!t?e?"mwe-popups-landscape-mask":"mwe-popups-mask-flip":t&&n&&e?"mwe-popups-landscape-mask-flip":t||e?void 0:"mwe-popups-mask"}(i,r,o);if(u){var s=void 0;if("rtl"===a){var p=i?Q.portraitImage.w:Q.landscapeImage.w;s="-1 0 0 1 "+p+" 0"}else s="1 0 0 1 0 0";var c=document.getElementById(u);c.setAttribute("transform","matrix("+s+")"),n.find("image")[0].setAttribute("clip-path","url(#"+u+")")}}(e,t)}(e,u,function(e,t){var n=[];return t.flippedY?n.push("mwe-popups-fade-in-down"):n.push("mwe-popups-fade-in-up"),t.flippedY&&t.flippedX?n.push("flipped-x-y"):t.flippedY?n.push("flipped-y"):t.flippedX&&n.push("flipped-x"),e.hasThumbnail&&(!e.isTall||t.flippedX)||t.flippedY||n.push("mwe-popups-no-image-pointer"),!e.hasThumbnail||e.isTall||t.flippedY||n.push("mwe-popups-image-pointer"),e.isTall?n.push("mwe-popups-is-tall"):n.push("mwe-popups-is-not-tall"),n}(e,u),Q.landscapeImage.h,ae),e.el.show(),Y(200).then(function(){!function(e,t){e.el.on("mouseenter",t.previewDwell).on("mouseleave",t.previewAbandon),e.el.click(t.click),e.el.find(".mwe-popups-settings-icon").attr("href",t.settingsUrl).click(function(e){e.stopPropagation(),t.showSettings(e)})}(e,i),i.previewShow(r)})}(t,e,te(e.target),n,i,document.body,document.documentElement.getAttribute("dir"))},hide:function(){return function(e){var t=e.el.hasClass("mwe-popups-fade-in-up")?"mwe-popups-fade-in-up":"mwe-popups-fade-in-down",n="mwe-popups-fade-in-up"===t?"mwe-popups-fade-out-down":"mwe-popups-fade-out-up";return e.el.removeClass(t).addClass(n),Y(150).then(function(){e.el.remove()})}(t)}}}function pe(e,t,n){var i=null,r=void 0;return Array.prototype.slice.call(t).forEach(function(t){var o=Math.abs(e-t.top+e-t.bottom);(null===i||i>o)&&(i=o,r=n?Math.floor(t.top):Math.ceil(t.bottom))}),r}var ce=mediaWiki,le=jQuery;var de=jQuery;var fe=jQuery;function ve(e,t,n){return e[t]&&e[t][n]}function ge(e,t,n,i,r){var o=ve(t,n,i);e&&ve(e,n,i)!==o&&r(o)}var he={footerLink:function(e){var t=void 0;return function(n,i){void 0===t&&(t=function(){var e=le("<li>").append(le("<a>").attr("href","#").text(ce.message("popups-settings-enable").text()));e.hide();var t=le("#footer-places, #f-list");return 0===t.length&&(t=le("#footer li").parent()),t.append(e),e}()).click(function(t){t.preventDefault(),e.showSettings()}),i.settings.shouldShowFooterLink?t.show():t.hide()}},eventLogging:function(e,t,n){return function(i,r){var o=r.eventLogging,a=o.event;a&&(a=de.extend(!0,{},o.baseData,a,{timestamp:n()}),t("event.Popups",a),e.eventLogged(a))}},linkTitle:function(){var e=void 0;return function(t,n){var i=t&&t.preview.activeLink;n.preview.enabled&&(i&&t.preview.activeLink!==n.preview.activeLink&&function(t){fe(t).attr("title",e),e=void 0}(t.preview.activeLink),n.preview.activeLink&&function(t){var n=fe(t);e||(e=n.attr("title"),n.attr("title",""))}(n.preview.activeLink))}},pageviews:function(e,t){return function(n,i){var r=void 0;i.pageviews&&i.pageviews.pageview&&i.pageviews.page&&(r=i.pageviews.page,t("event.VirtualPageView",$.extend({},{source_page_id:r.id,source_namespace:r.namespaceId,source_title:r.title,source_url:r.url},i.pageviews.pageview)),e.pageviewLogged())}},render:function(e){var t=void 0;return function(n,i){i.preview.shouldShow&&!t?(t=se(i.preview.fetchResponse)).show(i.preview.activeEvent,e,i.preview.activeToken):!i.preview.shouldShow&&t&&(t.hide(),t=void 0)}},settings:function(e,t){var n=void 0;return function(i,r){i&&(!1===i.settings.shouldShow&&!0===r.settings.shouldShow?(n||(n=t(e)).appendTo(document.body),n.setEnabled(r.preview.enabled),n.show()):!0===i.settings.shouldShow&&!1===r.settings.shouldShow&&n.hide(),i.settings.showHelp!==r.settings.showHelp&&n.toggleHelp(r.settings.showHelp))}},statsv:function(e,t){return function(n,i){var r=i.statsv;r.action&&(t(r.action,r.data),e.statsvLogged())}},syncUserSettings:function(e){return function(t,n){ge(t,n,"eventLogging","previewCount",e.setPreviewCount),ge(t,n,"preview","enabled",e.setIsEnabled)}}},we={BOOT:"BOOT",LINK_DWELL:"LINK_DWELL",ABANDON_START:"ABANDON_START",ABANDON_END:"ABANDON_END",LINK_CLICK:"LINK_CLICK",FETCH_START:"FETCH_START",FETCH_END:"FETCH_END",FETCH_COMPLETE:"FETCH_COMPLETE",FETCH_FAILED:"FETCH_FAILED",FETCH_ABORTED:"FETCH_ABORTED",PAGEVIEW_LOGGED:"PAGEVIEW_LOGGED",PREVIEW_DWELL:"PREVIEW_DWELL",PREVIEW_SHOW:"PREVIEW_SHOW",PREVIEW_CLICK:"PREVIEW_CLICK",PREVIEW_SEEN:"PREVIEW_SEEN",SETTINGS_SHOW:"SETTINGS_SHOW",SETTINGS_HIDE:"SETTINGS_HIDE",SETTINGS_CHANGE:"SETTINGS_CHANGE",EVENT_LOGGED:"EVENT_LOGGED",STATSV_LOGGED:"STATSV_LOGGED"},me=jQuery,Ee=mediaWiki,Te=150,ye=1e3,be=500,_e=300;function Ie(e){return e.timestamp=Ee.now(),e}function Se(e,t,n,i,r){var o=i.get("wgUserEditCount"),a=n.getPreviewCount();return{type:we.BOOT,isEnabled:e,isNavPopupsEnabled:i.get("wgPopupsConflictsWithNavPopupGadget"),sessionToken:t.sessionId(),pageToken:t.getPageviewToken(),page:{url:r,title:i.get("wgTitle"),namespaceId:i.get("wgNamespaceNumber"),id:i.get("wgArticleId")},user:{isAnon:t.isAnon(),editCount:o,previewCount:a}}}function ke(e,t,n,i){var r=t.getPrefixedDb(),o=t.namespace;return function(a){var u=e.getPageSummary(r);a(Ie({type:we.FETCH_START,el:n,title:r,namespaceId:o,promise:u}));var s=u.then(function(e){return a(Ie({type:we.FETCH_END,el:n})),e}).catch(function(e,t){var i=new Error(e),r=t&&t.textStatus&&"abort"===t.textStatus?we.FETCH_ABORTED:we.FETCH_FAILED;throw i.data=t,a({type:r,el:n}),i});return me.when(s,Y(be-Te)).then(function(e){a({type:we.FETCH_COMPLETE,el:n,result:e,token:i})}).catch(function(e){var o=e.data,u=!0;o&&o.xhr&&0===o.xhr.readyState&&(u=!("error"===o.textStatus&&""===o.exception||"abort"===o.textStatus));u&&a({type:we.FETCH_COMPLETE,el:n,result:function(e,t){return c(e,t,"","",[],"")}(r,t.getUrl()),token:i})})}}function xe(e,t,n,i,r){var o=r(),a=e.getPrefixedDb(),u=e.namespace;return function(r,s){var p=Y(Te),c=Ie({type:we.LINK_DWELL,el:t,event:n,token:o,title:a,namespaceId:u,promise:p});function l(){return s().preview.activeToken===o}return r(c),l()?p.then(function(){if(s().preview.enabled&&l())return r(ke(i,e,t,o))}):me.Deferred().resolve().promise()}}function Ae(){return function(e,t){var n=t().preview,i=n.activeToken,r=n.promise;return i?(r.abort(),e(Ie({type:we.ABANDON_START,token:i})),Y(_e).then(function(){e({type:we.ABANDON_END,token:i})})):me.Deferred().resolve().promise()}}function Le(e){return Ie({type:we.LINK_CLICK,el:e})}function Pe(){return{type:we.PREVIEW_DWELL}}function Ce(e){return function(t,n){return t(Ie({type:we.PREVIEW_SHOW,token:e})),Y(ye).then(function(){var i=n().preview,r=i&&i.fetchResponse,o=i&&i.activeToken,a=r&&[p.TYPE_PAGE,p.TYPE_DISAMBIGUATION].indexOf(r.type)>-1;o&&o===e&&r&&a&&t({type:we.PREVIEW_SEEN,title:r.title,pageId:r.pageId,namespace:0})})}}function Ne(){return{type:we.PAGEVIEW_LOGGED}}function Oe(){return{type:we.SETTINGS_SHOW}}function De(){return{type:we.SETTINGS_HIDE}}function Re(e){return function(t,n){t({type:we.SETTINGS_CHANGE,wasEnabled:n().preview.enabled,enabled:e})}}function Ge(e){return{type:we.EVENT_LOGGED,event:e}}function He(){return{type:we.STATSV_LOGGED}}function We(e,t){var n={};for(var i in e)e.hasOwnProperty(i)&&!t.hasOwnProperty(i)&&(n[i]=e[i]);for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}var je=n("./src/counts.js");function Me(e,t){return t.linkInteractionToken=e.token,t.pageTitleHover=e.title,t.namespaceIdHover=e.namespaceId,void 0!==e.timeToPreviewShow&&(t.previewType=e.previewType,t.perceivedWait=e.timeToPreviewShow),t}function Be(e){var t={totalInteractionTime:Math.round(e.finished-e.started)};if(!e.finalized)return t.action=e.timeToPreviewShow?"dismissed":"dwelledButAbandoned",Me(e,t)}var Fe={eventLogging:function(e,t){var n=void 0,i=void 0,r=[we.FETCH_COMPLETE,we.ABANDON_END,we.PREVIEW_SHOW];if(void 0===e&&(e={previewCount:void 0,baseData:{},interaction:void 0,event:void 0}),-1!==r.indexOf(t.type)&&(!e.interaction||t.token!==e.interaction.token))return e;if(!e.interaction&&t.type!==we.BOOT&&t.type!==we.LINK_DWELL&&t.type!==we.EVENT_LOGGED&&t.type!==we.SETTINGS_CHANGE)return e;switch(t.type){case we.BOOT:return We(e,{previewCount:t.user.previewCount,baseData:function(e){var t={pageTitleSource:e.page.title,namespaceIdSource:e.page.namespaceId,pageIdSource:e.page.id,isAnon:e.user.isAnon,popupEnabled:e.isEnabled,pageToken:e.pageToken,sessionToken:e.sessionToken,previewCountBucket:je.getPreviewCountBucket(e.user.previewCount),hovercardsSuppressedByGadget:e.isNavPopupsEnabled};return e.user.isAnon||(t.editCountBucket=je.getEditCountBucket(e.user.editCount)),t}(t),event:{action:"pageLoaded"}});case we.EVENT_LOGGED:return i=We(e,{event:void 0}),t.event.linkInteractionToken&&e.interaction&&t.event.linkInteractionToken===e.interaction.token&&(i.interaction=void 0),i;case we.FETCH_COMPLETE:return We(e,{interaction:We(e.interaction,{previewType:t.result.type})});case we.PREVIEW_SHOW:return We(e,{previewCount:n=e.previewCount+1,baseData:We(e.baseData,{previewCountBucket:je.getPreviewCountBucket(n)}),interaction:We(e.interaction,{timeToPreviewShow:Math.round(t.timestamp-e.interaction.started)})});case we.LINK_DWELL:return e.interaction&&t.el===e.interaction.link?We(e,{interaction:We(e.interaction,{isUserDwelling:!0})}):We(e,{interaction:{link:t.el,title:t.title,namespaceId:t.namespaceId,token:t.token,started:t.timestamp,isUserDwelling:!0},event:e.interaction?Be(e.interaction):void 0});case we.PREVIEW_DWELL:return We(e,{interaction:We(e.interaction,{isUserDwelling:!0})});case we.LINK_CLICK:return We(e,{interaction:We(e.interaction,{finalized:!0}),event:Me(e.interaction,{action:"opened",totalInteractionTime:Math.round(t.timestamp-e.interaction.started)})});case we.ABANDON_START:return We(e,{interaction:We(e.interaction,{finished:t.timestamp,isUserDwelling:!1})});case we.ABANDON_END:return e.interaction.isUserDwelling?e:We(e,{interaction:void 0,event:Be(e.interaction)});case we.SETTINGS_SHOW:return We(e,{event:Me(e.interaction,{action:"tapped settings cog"})});case we.SETTINGS_CHANGE:return t.wasEnabled&&!t.enabled?We(e,{event:{action:"disabled",popupEnabled:!1}}):e;default:return e}},pageviews:function(e,t){switch(void 0===e&&(e={pageview:void 0}),t.type){case we.BOOT:return We(e,{page:t.page});case we.PAGEVIEW_LOGGED:return We(e,{pageview:void 0});case we.PREVIEW_SEEN:return We(e,{pageview:{page_title:t.title,page_id:t.pageId,page_namespace:t.namespace}});default:return e}},preview:function(e,t){switch(void 0===e&&(e={enabled:void 0,activeLink:void 0,activeEvent:void 0,activeToken:"",shouldShow:!1,isUserDwelling:!1}),t.type){case we.BOOT:return We(e,{enabled:t.isEnabled});case we.SETTINGS_CHANGE:return We(e,{enabled:t.enabled});case we.LINK_DWELL:return t.el!==e.activeLink?We(e,{activeLink:t.el,activeEvent:t.event,activeToken:t.token,shouldShow:!1,isUserDwelling:!0,promise:t.promise}):We(e,{isUserDwelling:!0});case we.ABANDON_END:return t.token!==e.activeToken||e.isUserDwelling?e:We(e,{activeLink:void 0,activeToken:void 0,activeEvent:void 0,fetchResponse:void 0,shouldShow:!1});case we.PREVIEW_DWELL:return We(e,{isUserDwelling:!0});case we.ABANDON_START:return We(e,{isUserDwelling:!1});case we.FETCH_START:return We(e,{fetchResponse:void 0,promise:t.promise});case we.FETCH_COMPLETE:if(t.token===e.activeToken)return We(e,{fetchResponse:t.result,shouldShow:e.isUserDwelling});default:return e}},settings:function(e,t){switch(void 0===e&&(e={shouldShow:!1,showHelp:!1,shouldShowFooterLink:!1}),t.type){case we.SETTINGS_SHOW:return We(e,{shouldShow:!0,showHelp:!1});case we.SETTINGS_HIDE:return We(e,{shouldShow:!1,showHelp:!1});case we.SETTINGS_CHANGE:return t.wasEnabled===t.enabled?We(e,{shouldShow:!1}):We(e,{shouldShow:!t.enabled,showHelp:!t.enabled,shouldShowFooterLink:!t.enabled});case we.BOOT:return We(e,{shouldShowFooterLink:t.user.isAnon&&!t.isEnabled});default:return e}},statsv:function(e,t){switch(e=e||{},t.type){case we.FETCH_START:return We(e,{fetchStartedAt:t.timestamp});case we.FETCH_END:return We(e,{action:"timing.PagePreviewsApiResponse",data:t.timestamp-e.fetchStartedAt});case we.FETCH_FAILED:return We(e,{action:"counter.PagePreviewsApiFailure",data:1});case we.LINK_DWELL:return We(e,{linkDwellStartedAt:t.timestamp});case we.PREVIEW_SHOW:return We(e,{action:"timing.PagePreviewsPreviewShow",data:t.timestamp-e.linkDwellStartedAt});case we.STATSV_LOGGED:return We(e,{action:null,data:null});default:return e}}};var Ue=mediaWiki;function Ve(e){var t=e;return t.source_title=Ue.Title.newFromText(e.source_title).getPrefixedDb(),t.page_title=Ue.Title.newFromText(e.page_title).getPrefixedDb(),t.source_url=function(e,t){var n="";return e.split("").every(function(e){return encodeURIComponent(n+e).length<t&&(n+=e)}),n}(e.source_url,1e3),t}var Ye=function(e,t,n,i){return e.get("wgPopupsVirtualPageViews")?function(e,r){var o=function(e){return e[0].toUpperCase()+e.slice(1)}(e.slice(e.indexOf(".")+1));return t(["ext.eventLogging","schema."+o]).then(function(){var e=n(),t=e.prepare(o,Ve(r)),a=e.makeBeaconUrl(t);i(a)})}:$.noop},Ke=mediaWiki,Xe=jQuery,Qe=[".extiw",".image",".new",".internal",".external",".oo-ui-buttonedElement-button",".cancelLink a"];function $e(e,t,n){return function(e,t,n){return!0===t.get("debug")||!!t.get("wgPopupsEventLogging")&&!(!n.navigator||!$.isFunction(n.navigator.sendBeacon))&&e.isAnon()}(e,t,n)?Ke.track:Xe.noop}function qe(){return window.performance&&window.performance.now?Math.round(window.performance.now()):null}!function(){var e=r.compose,t=Ke.user.generateRandomSessionId,n=L(Ke.config),o=function(e){return{getIsEnabled:function(){return"0"!==e.get(P)},setIsEnabled:function(t){e.set(P,t?"1":"0")},hasIsEnabled:function(){var t=e.get(P);return!1!==Boolean(t)},getPreviewCount:function(){var t=e.get(C);if(!1===t)return-1;if(null===t)return 0;var n=parseInt(t,10);return isNaN(n)&&(n=0,this.setPreviewCount(n)),n},setPreviewCount:function(t){e.set(C,t.toString())}}}(Ke.storage),u=j(),s=function(e){return{weightedBoolean:function(t,n,i){return"true"===e.getBucket({enabled:!0,name:t,buckets:{true:n,false:1-n}},i)}}}(Ke.experiments),p=function(e,t,n){return function(e,t,n){var i=t.get("wgPopupsStatsvSamplingRate",0);return n.weightedBoolean("ext.Popups.statsv",i,e.sessionId())}(e,t,n)?Ke.track:Xe.noop}(Ke.user,Ke.config,s),c=Ye(Ke.config,Ke.loader.using,function(){return Ke.eventLog},function(e){return e.sendBeacon?e.sendBeacon.bind(e):function(e){document.createElement("img").src=e}}(window.navigator)),l=$e(Ke.user,Ke.config,window),d=function(e,t,n){return!n.get("wgPopupsConflictsWithNavPopupGadget")&&(e.isAnon()?!t.hasIsEnabled()||t.getIsEnabled():n.get("wgPopupsShouldSendModuleToUser"))}(Ke.user,o,Ke.config);!0===Ke.config.get("debug")&&(e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||e);var f=r.createStore(r.combineReducers(Fe),e(r.applyMiddleware(a.a))),v=r.bindActionCreators(i,f.dispatch),g=function(e,t){var n=void 0,i=O.noop;e.isAnon()?i=function(e){e.preventDefault(),t.showSettings()}:n=N.Title.newFromText("Special:Preferences#mw-prefsection-rendering").getUrl();return{settingsUrl:n,showSettings:i,previewDwell:t.previewDwell,previewAbandon:t.abandon,previewShow:t.previewShow,click:t.linkClick}}(Ke.user,v);!function(e,t,n,i,r,o,a,u,s){B(e,he.footerLink(t)),B(e,he.linkTitle()),B(e,he.render(r)),B(e,he.statsv(t,o)),B(e,he.syncUserSettings(n)),B(e,he.settings(t,i)),B(e,he.eventLogging(t,a,s)),B(e,he.pageviews(t,u))}(f,v,o,u,g,p,l,c,qe),v.boot(d,Ke.user,o,Ke.config,window.location.href),Ke.popups=function(e){return{isEnabled:function(){return e.getState().preview.enabled}}}(f);var h="#mw-content-text a[href][title]:not("+Qe.join(", ")+")";ue(),Xe(document).on("mouseover keyup",h,function(e){var i=U(this,Ke.config);i&&v.linkDwell(i,this,e,n,t)}).on("mouseout blur",h,function(){U(this,Ke.config)&&v.abandon(this)}).on("click",h,function(){U(this,Ke.config)&&v.linkClick(this)})}(),window.Redux=r,window.ReduxThunk=o},"./src/ui/pointer-mask.svg":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs><clippath id="mwe-popups-mask"><polygon points="0 8, 10 8, 18 0, 26 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-mask-flip"><polygon points="0 8, 274 8, 282 0, 290 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-landscape-mask"><polygon points="0 8, 174 8, 182 0, 190 8, 1000 8, 1000 1000, 0 1000"></polygon></clippath><clippath id="mwe-popups-landscape-mask-flip"><polygon points="0 0, 1000 0, 1000 242, 190 242, 182 250, 174 242, 0 242"></polygon></clippath></defs></svg>'}});
//# sourceMappingURL=index.js.json