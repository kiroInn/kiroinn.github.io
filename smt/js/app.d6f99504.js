(function(e){function t(t){for(var s,n,i=t[0],l=t[1],c=t[2],f=0,u=[];f<i.length;f++)n=i[f],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},r={app:0},o=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d72f0442"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"566cc497"}[e]+".css",r=l.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],f=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(f===s||f===r))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){c=u[i],f=c.getAttribute("data-href");if(f===s||f===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],p.parentNode.removeChild(p),a(o)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=o);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=i(e);var u=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=f;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"038e":function(e,t,a){},2395:function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"501a":function(e,t,a){},"6ef9":function(e,t,a){"use strict";var s=a("da01"),n=a.n(s);n.a},7402:function(e,t,a){"use strict";var s=a("038e"),n=a.n(s);n.a},"7c55":function(e,t,a){"use strict";var s=a("2395"),n=a.n(s);n.a},8896:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("ac1f"),a("1276");function s(e){var t=e.split("."),a=t[t.length-1];return"xlsx"===a.toLowerCase()}},aff5:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[e._t("header",[e._v(" default header ")])],2),a("div",{staticClass:"modal-body"},[e._t("body",[e._v(" default body ")])],2),a("div",{staticClass:"modal-footer"},[e._t("footer",[a("a",{staticClass:"modal-default-button",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.$emit("submit")}}},[e._v(" OK ")]),a("a",{staticClass:"modal-default-button",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.$emit("close")}}},[e._v(" CLOSE ")])])],2)])])])},n=[],r=a("d4ec"),o=a("262e"),i=a("2caf"),l=a("9ab4"),c=a("60a3"),f=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return a}(c["b"]);f=Object(l["a"])([c["a"]],f);var u=f,p=u,d=(a("6ef9"),a("2877")),m=Object(d["a"])(p,s,n,!1,null,"486df99c",null);t["a"]=m.exports},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[e._m(0),a("router-link",{attrs:{to:"/transform"}},[e._v("fill")]),e._v(" | "),a("router-link",{attrs:{to:"/evaluation"}},[e._v("evaluation")])],1),a("router-view")],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:a("cf05"),alt:"logo"}}),s("span",[e._v("Smart Excel Tools")])])}],o=(a("7c55"),a("2877")),i={},l=Object(o["a"])(i,n,r,!1,null,null,null),c=l.exports,f=a("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var u=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"description"},[e._v("“fill” function is using mapping generate multiple Excel's🗂")]),e.message?a("h1",{staticClass:"message"},[e._v(e._s(e.message))]):e._e(),a("div",[a("input",{ref:"file",staticClass:"inputfile",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),a("label",{staticClass:"select-file",attrs:{for:"file"}},[e._v("Choose a file")]),a("label",{staticClass:"configMapping",on:{click:function(t){e.isEditMapping=!0}}},[e._v("Config")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"loader"},[e._v("Processing...")]),a("loader",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"loader"}),e.files.length?a("div",{staticClass:"downloadOperate"},[a("a",{staticClass:"downloadAll",attrs:{href:"javascript:void(0)"},on:{click:e.downloadAll}},[e._v("Download all")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.isPrefixing,expression:"isPrefixing"}],attrs:{type:"checkbox",id:"prefixing"},domProps:{checked:Array.isArray(e.isPrefixing)?e._i(e.isPrefixing,null)>-1:e.isPrefixing},on:{change:function(t){var a=e.isPrefixing,s=t.target,n=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&(e.isPrefixing=a.concat([r])):o>-1&&(e.isPrefixing=a.slice(0,o).concat(a.slice(o+1)))}else e.isPrefixing=n}}}),a("label",{staticClass:"prefixing",attrs:{for:"prefixing"}},[e._v("enable prefixing")])]):e._e(),e.isPrefixing?a("div",{staticClass:"filePrefix"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.prefixFileName,expression:"prefixFileName"}],attrs:{type:"text",placeholder:"file name prefix"},domProps:{value:e.prefixFileName},on:{input:function(t){t.target.composing||(e.prefixFileName=t.target.value)}}})]):e._e(),e.files.length?a("ul",{staticClass:"results"},e._l(e.files,(function(t){return a("li",{key:t.key},[a("span",[e._v(e._s(e.prefixFileName)+e._s(t.name))]),a("span",{staticClass:"status-success"},[e._v("success")]),a("a",{staticClass:"download",attrs:{href:"javascript:void(0);"},on:{click:function(a){return e.download(t.key)}}},[e._v("download")])])})),0):e._e(),e.isEditMapping?a("modal",{on:{submit:e.onEditConfig,close:function(t){e.isEditMapping=!1}},scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",[e._v("Config Mapping")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.isJSON,expression:"isJSON"}],attrs:{type:"checkbox",id:"isJSON"},domProps:{checked:Array.isArray(e.isJSON)?e._i(e.isJSON,null)>-1:e.isJSON},on:{change:function(t){var a=e.isJSON,s=t.target,n=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&(e.isJSON=a.concat([r])):o>-1&&(e.isJSON=a.slice(0,o).concat(a.slice(o+1)))}else e.isJSON=n}}}),a("label",{staticClass:"isJSON",attrs:{for:"isJSON"}},[e._v("switch JSON")])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"configMapping"},[e.isJSON?a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.mappingsJSON,expression:"mappingsJSON"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.mappingsJSON},on:{input:function(t){t.target.composing||(e.mappingsJSON=t.target.value)}}})]):e._e(),e.isJSON?e._e():a("table",[a("thead",[a("tr",[a("th",{attrs:{rowspan:"2"}},[e._v("source")]),a("th",{attrs:{colspan:"2"}},[e._v("to")]),a("th",{attrs:{rowspan:"2"}},[e._v("type")]),a("th",{attrs:{rowspan:"2"}},[e._v("operate")])]),a("tr",[a("td",[e._v("destination")]),a("td",[e._v("fileName")])])]),a("tbody",[e._l(e.mappings,(function(t,s){return a("tr",{key:s},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.from,expression:"mapping.from"}],attrs:{type:"text"},domProps:{value:t.from},on:{input:function(a){a.target.composing||e.$set(t,"from",a.target.value)}}})]),a("td",{class:{imageType:"image"===t.type}},[a("div",{staticClass:"to"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.to,expression:"mapping.to"}],attrs:{type:"text"},domProps:{value:t.to},on:{input:function(a){a.target.composing||e.$set(t,"to",a.target.value)}}})]),"image"===t.type?a("div",[a("div",[a("label",[e._v("tl:col")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.range.tl.col,expression:"mapping.range.tl.col"}],attrs:{type:"text"},domProps:{value:t.range.tl.col},on:{input:function(a){a.target.composing||e.$set(t.range.tl,"col",a.target.value)}}})]),a("div",[a("label",[e._v("tl:row")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.range.tl.row,expression:"mapping.range.tl.row"}],attrs:{type:"text"},domProps:{value:t.range.tl.row},on:{input:function(a){a.target.composing||e.$set(t.range.tl,"row",a.target.value)}}})]),a("div",[a("label",[e._v("br:col")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.range.br.col,expression:"mapping.range.br.col"}],attrs:{type:"text"},domProps:{value:t.range.br.col},on:{input:function(a){a.target.composing||e.$set(t.range.br,"col",a.target.value)}}})]),a("div",[a("label",[e._v("br:row")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.range.br.row,expression:"mapping.range.br.row"}],attrs:{type:"text"},domProps:{value:t.range.br.row},on:{input:function(a){a.target.composing||e.$set(t.range.br,"row",a.target.value)}}})])]):e._e()]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.toFile,expression:"mapping.toFile"}],attrs:{type:"text"},domProps:{value:t.toFile},on:{input:function(a){a.target.composing||e.$set(t,"toFile",a.target.value)}}})]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"mapping.type"}],on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"type",a.target.multiple?s:s[0])}}},[a("option",{attrs:{value:"sheet"},domProps:{selected:"sheet"===t.type}},[e._v("Sheet")]),a("option",{attrs:{value:"string"},domProps:{selected:"string"===t.type}},[e._v("String")]),a("option",{attrs:{value:"date"},domProps:{selected:"date"===t.type}},[e._v("Date")]),a("option",{attrs:{value:"image"},domProps:{selected:"image"===t.type}},[e._v("Image")])])]),a("td",[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.removeMapping(s)}}},[e._v("delete")])])])})),a("tr",[a("td",{attrs:{colspan:"5"}},[a("a",{staticClass:"addMapping",attrs:{href:"javascript:void(0);"},on:{click:e.addMapping}},[e._v("Add")])])])],2)])])]},proxy:!0}],null,!1,3235276080)}):e._e()],1)},d=[],m=(a("99af"),a("4de4"),a("4160"),a("b0c0"),a("159b"),a("96cf"),a("1da1")),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"circleloader"})])}],h=a("d4ec"),b=a("262e"),j=a("2caf"),y=a("9ab4"),x=a("60a3"),w=function(e){Object(b["a"])(a,e);var t=Object(j["a"])(a);function a(){return Object(h["a"])(this,a),t.apply(this,arguments)}return a}(x["b"]);w=Object(y["a"])([x["a"]],w);var k=w,N=k,_=(a("f353"),Object(o["a"])(N,g,v,!1,null,"0680d644",null)),O=_.exports,C=a("aff5"),E=a("e8ae"),S=a("21a6"),A=(a("a630"),a("a15b"),a("d81d"),a("a9e3"),a("ac1f"),a("6062"),a("3ca3"),a("1276"),a("ddb0"),a("c1df")),P=a.n(A),M=a("2ef0"),J=a.n(M),F={IMAGE:"image",DATE:"date",STRING:"string",SHEET:"sheet",VALUE:"value"};function z(e,t){return e&&e.getWorksheet(t)}function T(e){return 2===e.split(":").length?e.split(":")[0]:e}function I(e){return 2===e.split(":").length?e.split(":")[1]:e}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=M["flatten"](e.map((function(e){return M["get"](e,"values",[]).map((function(e){return M["get"](e,t)}))})));return Array.from(new Set(a.map(T)))}function $(e,t){var a=[],s=L(t,"from");return s.forEach((function(t){z(e,t)||a.push(t)})),a.length>0?"from sheet ".concat(a.join(",")," is not found"):""}function D(e,t,a){var s=M["get"](a,"values");return console.log("values: ",s),M["forEach"](s,(function(a){var s=e.getWorksheet(T(M["get"](a,"from"))),n=t.getWorksheet(T(M["get"](a,"to")));n||(n=t.addWorksheet(T(M["get"](a,"to"))));var r=M["get"](a,"type");if(F.VALUE,r===F.SHEET)console.log("toSheet.model: ",n.model),console.log("fromSheet.model: ",s.model),n.model=s.model,n.name=T(M["get"](a,"to")),M["each"](s.getImages(),(function(a){var s=Number(M["get"](a,"imageId")),r=t.addImage({buffer:e.getImage(s).buffer,extension:"png"});n.addImage(r,{tl:{col:Number(M["get"](a,"range.tl.col")),row:Number(M["get"](a,"range.tl.row"))},br:{col:Number(M["get"](a,"range.br.col")),row:Number(M["get"](a,"range.br.row"))}})}));else if(r===F.IMAGE){var o=Number(M["get"](M["first"](s.getImages()),"imageId")),i=t.addImage({buffer:e.getImage(o).buffer,extension:"png"});n.addImage(i,M["get"](a,"range"))}else if(r===F.DATE){var l=s.getCell(I(M["get"](a,"from"))).value;n.getCell(I(M["get"](a,"to"))).value=P()(M["get"](l,"result")).format("YYYY-MM-DD")}else n.getCell(I(M["get"](a,"to"))).value=s.getCell(I(M["get"](a,"from"))).value})),t}var R=a("8896"),B=(a("7db0"),a("13d5"),a("5530")),U=[{templateName:"106700.xlsx",values:[{from:"106700-Reconciliation",to:"Reconciliation",type:"sheet"},{from:"106700-Outstanding Checks",to:"Outstanding Checks",type:"sheet"},{from:"106700-Deposits in Transit",to:"Deposits in Transit",type:"sheet"},{from:"106700-Instructions",to:"Instructions",type:"sheet"}]},{templateName:"106710.xlsx",values:[{from:"106710-Reconciliation",to:"Reconciliation",type:"sheet"},{from:"106710-Instructions",to:"Instructions",type:"sheet"},{from:"106710-Outstanding Checks",to:"Outstanding Checks",type:"sheet"},{from:"106710-Deposits in Transit",to:"Deposits in Transit",type:"sheet"}]},{templateName:"106750.xlsx",values:[{from:"106750-Reconciliation",to:"Reconciliation",type:"sheet"},{from:"106750-Instructions",to:"Instructions",type:"sheet"},{from:"106750-Outstanding Checks",to:"Outstanding Checks",type:"sheet"},{from:"106750-Deposits in Transit",to:"Deposits in Transit",type:"sheet"}]},{templateName:"112000.xlsx",values:[{from:"112000",to:"112000",type:"sheet"},{from:"112000-1",to:"1",type:"sheet"}]},{templateName:"119000.xlsx",values:[{from:"119000",to:"119000",type:"sheet"}]},{templateName:"190500.xlsx",values:[{from:"190500",to:"190500",type:"sheet"},{from:"190500-1",to:"1",type:"sheet"}]},{templateName:"196000.xlsx",values:[{from:"196000",to:"196000",type:"sheet"},{from:"196000-1",to:"1",type:"sheet"}]},{templateName:"200000.xlsx",values:[{from:"200000",to:"200000",type:"sheet"},{from:"200000-1",to:"1",type:"sheet"},{from:"200000-2",to:"2",type:"sheet"}]},{templateName:"205000.xlsx",values:[{from:"205000",to:"205000",type:"sheet"},{from:"205000-1",to:"1",type:"sheet"}]},{templateName:"215000.xlsx",values:[{from:"215000",to:"215000",type:"sheet"},{from:"215000-1",to:"1",type:"sheet"},{from:"215000-Jan",to:"Jan",type:"sheet"},{from:"215000-Feb",to:"Feb",type:"sheet"},{from:"215000-Mar",to:"Mar",type:"sheet"},{from:"215000-Apr",to:"Apr",type:"sheet"},{from:"215000-May",to:"May",type:"sheet"}]},{templateName:"215100.xlsx",values:[{from:"215100-1",to:"1",type:"sheet"},{from:"215100",to:"215100",type:"sheet"}]},{templateName:"215300.xlsx",values:[{from:"215300",to:"215300",type:"sheet"},{from:"215300-1",to:"1",type:"sheet"}]},{templateName:"215600.xlsx",values:[{from:"215600",to:"215600",type:"sheet"},{from:"215600-1",to:"1",type:"sheet"},{from:"215600-Jan",to:"Jan",type:"sheet"},{from:"215600-Feb",to:"Feb",type:"sheet"},{from:"215600-Mar",to:"Mar",type:"sheet"},{from:"215600-Apr",to:"Apr",type:"sheet"},{from:"215600-May",to:"May",type:"sheet"}]},{templateName:"216000.xlsx",values:[{from:"216000",to:"216000",type:"sheet"},{from:"216000-1",to:"1",type:"sheet"}]},{templateName:"217500.xlsx",values:[{from:"217500",to:"217500",type:"sheet"},{from:"217500-1",to:"1",type:"sheet"},{from:"217500-Jan",to:"Jan",type:"sheet"},{from:"217500-Feb",to:"Feb",type:"sheet"},{from:"217500-Mar",to:"Mar",type:"sheet"},{from:"217500-Apr",to:"Apr",type:"sheet"},{from:"217500-May",to:"May",type:"sheet"}]},{templateName:"274000.xlsx",values:[{from:"274000",to:"274000",type:"sheet"},{from:"274000-1",to:"1",type:"sheet"}]},{templateName:"897100.xlsx",values:[{from:"897100",to:"897100",type:"sheet"}]},{templateName:"897600.xlsx",values:[{from:"897600",to:"897600",type:"sheet"}]}];function W(e){var t=[];return J.a.forEach(e,(function(e){var a=J.a.get(e,"templateName"),s={tl:{col:0,row:0},br:{col:1,row:1}};t=J.a.concat(t,J.a.map(J.a.get(e,"values"),(function(e){return Object(B["a"])(Object(B["a"])({range:s},e),{},{toFile:a})})))})),t}function q(e){return J.a.reduce(e,(function(e,t){var a=J.a.find(e,(function(e){return J.a.get(e,"templateName")===J.a.get(t,"toFile")})),s={from:J.a.get(t,"from"),to:J.a.get(t,"to"),type:J.a.get(t,"type")};return J.a.get(t,"type")===F.IMAGE&&J.a.assign(s,{range:J.a.get(t,"range")}),a?J.a.get(a,"values",[]).push(s):e.push({templateName:J.a.get(t,"toFile"),values:[s]}),e}),[])}var G={name:"Transform",components:{Loader:O,Modal:C["a"]},computed:{mappingsJSON:{get:function(){return JSON.stringify(this.mappings)},set:function(e){console.log("newValue: ",e);try{this.mappings=JSON.parse(e)}catch(t){console.error(t)}}}},created:function(){this.mappings=W(U)},data:function(){return{prefixFileName:"",message:"",isLoading:!1,isEditMapping:!1,isPrefixing:!1,isJSON:!1,files:[],mappings:[]}},methods:{addMapping:function(){this.mappings.push({type:"string",range:{tl:{col:0,row:0},br:{col:1,row:1}}})},removeMapping:function(e){this.mappings=J.a.remove(this.mappings,(function(t,a){return e!==a}))},onEditConfig:function(){console.log(this.mappings),this.isEditMapping=!1},downloadAll:function(){var e=this;this.files.length>0&&this.files.forEach((function(t){return e.download(t.key)}))},download:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function a(){var s,n,r,o,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.files.filter((function(t){return t.key===e}))[0],n=s.workbook,a.next=4,n.xlsx.writeBuffer();case 4:r=a.sent,o="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",i=new Blob([r],{type:o}),l="".concat(t.prefixFileName).concat(s.name),Object(S["saveAs"])(i,l);case 9:case"end":return a.stop()}}),a)})))()},handleFileUpload:function(){var e=this;this.message="",this.isLoading=!0,this.files=[];var t=this.$refs.file.files[0],a=new FileReader,s=q(this.mappings);a.onload=Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new E["Workbook"],t.next=3,n.xlsx.load(a.result);case 3:e.message=$(n,s),e.message?e.isLoading=!1:(s.forEach(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(a){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=new E["Workbook"],o=D(n,r,a),e.files.push({key:J.a.get(a,"templateName"),name:J.a.get(a,"templateName"),workbook:o,buffer:o.xlsx.writeBuffer()}),e.files.length===s.length&&(e.isLoading=!1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),console.log("parsing success",e.files));case 5:case"end":return t.stop()}}),t)}))),Object(R["a"])(t.name)?a.readAsArrayBuffer(t):(this.message="File type is not supported",this.isLoading=!1)}}},Y=G,H=(a("7402"),Object(o["a"])(Y,p,d,!1,null,"0de6dad3",null)),V=H.exports;s["a"].use(u["a"]);var K=[{path:"/",redirect:"/transform"},{path:"/transform",name:"transform",component:V},{path:"/evaluation",name:"Evaluation",component:function(){return a.e("about").then(a.bind(null,"44bf"))}}],Q=new u["a"]({mode:"hash",base:"",routes:K}),X=Q;s["a"].config.productionTip=!1,new s["a"]({router:X,render:function(e){return e(c)}}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.e4fa5eb5.png"},da01:function(e,t,a){},f353:function(e,t,a){"use strict";var s=a("501a"),n=a.n(s);n.a}});
//# sourceMappingURL=app.d6f99504.js.map