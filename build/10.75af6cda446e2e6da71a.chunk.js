(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6d8efd0dfe5a71efcf5c":function(t,e,n){"use strict";n.r(e);var a,i=n("8af190b70a6bc55c6f1b"),o=n.n(i),r=n("90d85001242f09b43bdd"),c=n("299a81d595ed571e9e75");function l(t){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=h(t);if(e){var i=h(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(l,t);var e,n,i,o=p(l);function l(){return u(this,l),o.apply(this,arguments)}return e=l,(n=[{key:"render",value:function(){var t={source:"country",primaryKey:"ckode",dataColumn:[{name:"no",label:"No",initialValue:"",width:"80",hidden:!1},{name:"ckode",label:"Kode",initialValue:"",width:"auto",hidden:!1},{name:"cnama",label:"Nama",initialValue:"",width:"auto",hidden:!1},{name:"ccatatan",label:"Catatan",initialValue:"",width:"auto",hidden:!1},{name:"caktif",label:"Aktif",initialValue:"",width:"auto",hidden:!1},{name:"cinputuser",label:"cinputuser",initialValue:"",width:"auto",hidden:!0},{name:"cinputtgl",label:"cinputtgl",initialValue:c.c,width:"auto",hidden:!0},{name:"cmodifikasiuser",label:"cmodifikasiuser",initialValue:"",width:"auto",hidden:!0},{name:"cmodifikasitgl",label:"cmodifikasitgl",initialValue:c.c,width:"auto",hidden:!0}],dataFormatDate:["cinputtgl","cmodifikasitgl"],inputForm:[{id:"ckode",type:"text",width:"200%",label:"Kode",placeholder:"Kode"},{id:"cnama",type:"text",width:"200%",label:"Nama",placeholder:"Nama"},{id:"ccatatan",type:"text",width:"200%",label:"Catatan",placeholder:"Catatan"},{id:"caktif",type:"text",width:"200%",label:"Aktif",placeholder:"Aktif"}],inputFilter:[{id:"ckode",type:"text",width:"200%",label:"Kode",placeholder:"Kode"},{id:"cnama",type:"text",width:"200%",label:"Nama",placeholder:"Nama"},{id:"ccatatan",type:"text",width:"200%",label:"Catatan",placeholder:"Catatan"},{id:"caktif",type:"text",width:"200%",label:"Aktif",placeholder:"Aktif"}],paramFilterGlobal:function(t){return'ckode LIKE "%'.concat(t,'%" OR cnama LIKE "%').concat(t,'%" OR ccatatan LIKE "%').concat(t,'%" OR caktif LIKE "%').concat(t,'%" OR cinputuser LIKE "%').concat(t,'%" OR cinputtgl LIKE "%').concat(t,'%" OR cmodifikasiuser LIKE "%').concat(t,'%" OR cmodifikasitgl LIKE "%').concat(t,'%"')},sort:"ckode",limit:4};return function(t,e,n,i){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,r=arguments.length-3;if(e||0===r||(e={children:void 0}),1===r)e.children=i;else if(r>1){for(var c=new Array(r),l=0;l<r;l++)c[l]=arguments[l+3];e.children=c}if(e&&o)for(var u in o)void 0===e[u]&&(e[u]=o[u]);else e||(e=o||{});return{$$typeof:a,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}(r.a,{params:t})}}])&&f(e.prototype,n),i&&f(e,i),l}(o.a.Component);e.default=y}}]);