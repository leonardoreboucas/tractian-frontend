(this["webpackJsonptractian-frontend"]=this["webpackJsonptractian-frontend"]||[]).push([[2],{551:function(e,t,r){"use strict";var n=r(3),a=r(18),o=r(5),l=r(4),i=r(0),c=r(7),u=r.n(c),s=r(131),d=r(48),f=r(29),m=i.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),p=i.createContext(null),b=i.createContext({prefixCls:""});function v(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function h(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function O(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return h(r.overflowY,t)||h(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function g(e,t,r,n,a,o,l,i){return o<e&&l>t||o>e&&l<t?0:o<=e&&i<=r||l>=t&&i>=r?o-e-n:l>t&&i<r||o<e&&i>r?l-t+a:0}var j=function(e,t){var r=window,n=t.scrollMode,a=t.block,o=t.inline,l=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!v(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,s=[],d=e;v(d)&&c(d);){if((d=d.parentElement)===u){s.push(d);break}null!=d&&d===document.body&&O(d)&&!O(document.documentElement)||null!=d&&O(d,i)&&s.push(d)}for(var f=r.visualViewport?r.visualViewport.width:innerWidth,m=r.visualViewport?r.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,h=e.getBoundingClientRect(),j=h.height,y=h.width,w=h.top,E=h.right,C=h.bottom,x=h.left,F="start"===a||"nearest"===a?w:"end"===a?C:w+j/2,k="center"===o?x+y/2:"end"===o?E:x,N=[],M=0;M<s.length;M++){var S=s[M],I=S.getBoundingClientRect(),P=I.height,R=I.width,_=I.top,q=I.right,T=I.bottom,V=I.left;if("if-needed"===n&&w>=0&&x>=0&&C<=m&&E<=f&&w>=_&&C<=T&&x>=V&&E<=q)return N;var W=getComputedStyle(S),A=parseInt(W.borderLeftWidth,10),L=parseInt(W.borderTopWidth,10),H=parseInt(W.borderRightWidth,10),z=parseInt(W.borderBottomWidth,10),B=0,D=0,U="offsetWidth"in S?S.offsetWidth-S.clientWidth-A-H:0,Y="offsetHeight"in S?S.offsetHeight-S.clientHeight-L-z:0;if(u===S)B="start"===a?F:"end"===a?F-m:"nearest"===a?g(b,b+m,m,L,z,b+F,b+F+j,j):F-m/2,D="start"===o?k:"center"===o?k-f/2:"end"===o?k-f:g(p,p+f,f,A,H,p+k,p+k+y,y),B=Math.max(0,B+b),D=Math.max(0,D+p);else{B="start"===a?F-_-L:"end"===a?F-T+z+Y:"nearest"===a?g(_,T,P,L,z+Y,F,F+j,j):F-(_+P/2)+Y/2,D="start"===o?k-V-A:"center"===o?k-(V+R/2)+U/2:"end"===o?k-q+H+U:g(V,q,R,A,H+U,k,k+y,y);var K=S.scrollLeft,X=S.scrollTop;F+=X-(B=Math.max(0,Math.min(X+B,S.scrollHeight-P+Y))),k+=K-(D=Math.max(0,Math.min(K+D,S.scrollWidth-R+U)))}N.push({el:S,top:B,left:D})}return N};function y(e){return e===Object(e)&&0!==Object.keys(e).length}var w=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(y(t)&&"function"===typeof t.behavior)return t.behavior(r?[]:j(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:y(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,a=e.top,o=e.left;n.scroll&&r?n.scroll({top:a,left:o,behavior:t}):(n.scrollTop=a,n.scrollLeft=o)}))}(j(e,n),n.behavior)}},E=["parentNode"];function C(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function x(e,t){if(e.length){var r=e.join("_");return t?"".concat(t,"_").concat(r):E.indexOf(r)>=0?"".concat("form_item","_").concat(r):r}}function F(e){return C(e).join("_")}function k(e){var t=Object(s.useForm)(),r=Object(o.a)(t,1)[0],a=i.useRef({}),l=i.useMemo((function(){return null!==e&&void 0!==e?e:Object(n.a)(Object(n.a)({},r),{__INTERNAL__:{itemRef:function(e){return function(t){var r=F(e);t?a.current[r]=t:delete a.current[r]}}},scrollToField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=C(e),a=x(r,l.__INTERNAL__.name),o=a?document.getElementById(a):null;o&&w(o,Object(n.a)({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:function(e){var t=F(e);return a.current[t]}})}),[e,r]);return[l]}var N=r(80),M=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},S=function(e,t){var r,c=i.useContext(N.b),f=i.useContext(d.b),p=f.getPrefixCls,b=f.direction,v=f.form,h=e.prefixCls,O=e.className,g=void 0===O?"":O,j=e.size,y=void 0===j?c:j,w=e.form,E=e.colon,C=e.labelAlign,x=e.labelWrap,F=e.labelCol,S=e.wrapperCol,I=e.hideRequiredMark,P=e.layout,R=void 0===P?"horizontal":P,_=e.scrollToFirstError,q=e.requiredMark,T=e.onFinishFailed,V=e.name,W=M(e,["prefixCls","className","size","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),A=Object(i.useMemo)((function(){return void 0!==q?q:v&&void 0!==v.requiredMark?v.requiredMark:!I}),[I,q,v]),L=null!==E&&void 0!==E?E:null===v||void 0===v?void 0:v.colon,H=p("form",h),z=u()(H,(r={},Object(l.a)(r,"".concat(H,"-").concat(R),!0),Object(l.a)(r,"".concat(H,"-hide-required-mark"),!1===A),Object(l.a)(r,"".concat(H,"-rtl"),"rtl"===b),Object(l.a)(r,"".concat(H,"-").concat(y),y),r),g),B=k(w),D=Object(o.a)(B,1)[0],U=D.__INTERNAL__;U.name=V;var Y=Object(i.useMemo)((function(){return{name:V,labelAlign:C,labelCol:F,labelWrap:x,wrapperCol:S,vertical:"vertical"===R,colon:L,requiredMark:A,itemRef:U.itemRef}}),[V,C,F,S,R,L,A]);i.useImperativeHandle(t,(function(){return D}));return i.createElement(N.a,{size:y},i.createElement(m.Provider,{value:Y},i.createElement(s.default,Object(n.a)({id:V},W,{name:V,onFinishFailed:function(e){null===T||void 0===T||T(e);var t={block:"nearest"};_&&e.errorFields.length&&("object"===Object(a.a)(_)&&(t=_),D.scrollToField(e.errorFields[0].name,t))},form:D,className:z}))))},I=i.forwardRef(S),P=r(8),R=r(31),_=r(540),q=r(47),T=r(42),V=r(1),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},A=r(10),L=function(e,t){return i.createElement(A.a,Object(V.a)(Object(V.a)({},e),{},{ref:t,icon:W}))};L.displayName="QuestionCircleOutlined";var H=i.forwardRef(L),z=r(381),B=r(97),D=r(54),U=r(136),Y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var K=function(e){var t=e.prefixCls,r=e.label,c=e.htmlFor,s=e.labelCol,d=e.labelAlign,f=e.colon,p=e.required,b=e.requiredMark,v=e.tooltip,h=Object(B.b)("Form"),O=Object(o.a)(h,1)[0];return r?i.createElement(m.Consumer,{key:"label"},(function(e){var o,m,h=e.vertical,g=e.labelAlign,j=e.labelCol,y=e.labelWrap,w=e.colon,E=s||j||{},C=d||g,x="".concat(t,"-item-label"),F=u()(x,"left"===C&&"".concat(x,"-left"),E.className,Object(l.a)({},"".concat(x,"-wrap"),!!y)),k=r,N=!0===f||!1!==w&&!1!==f;N&&!h&&"string"===typeof r&&""!==r.trim()&&(k=r.replace(/[:|\uff1a]\s*$/,""));var M=function(e){return e?"object"!==Object(a.a)(e)||i.isValidElement(e)?{title:e}:e:null}(v);if(M){var S=M.icon,I=void 0===S?i.createElement(H,null):S,P=Y(M,["icon"]),R=i.createElement(U.a,P,i.cloneElement(I,{className:"".concat(t,"-item-tooltip"),title:""}));k=i.createElement(i.Fragment,null,k,R)}"optional"!==b||p||(k=i.createElement(i.Fragment,null,k,i.createElement("span",{className:"".concat(t,"-item-optional"),title:""},(null===O||void 0===O?void 0:O.optional)||(null===(m=D.a.Form)||void 0===m?void 0:m.optional))));var _=u()((o={},Object(l.a)(o,"".concat(t,"-item-required"),p),Object(l.a)(o,"".concat(t,"-item-required-mark-optional"),"optional"===b),Object(l.a)(o,"".concat(t,"-item-no-colon"),!N),o));return i.createElement(z.a,Object(n.a)({},E,{className:F}),i.createElement("label",{htmlFor:c,className:_,title:"string"===typeof r?r:""},k))})):null},X=r(85),J=r(99),Q=r(110),$=r(112),G=r(36),Z=r(96),ee=[];function te(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{key:"string"===typeof e?e:"".concat(r,"-").concat(n),error:e,errorStatus:t}}function re(e){var t=e.help,r=e.helpStatus,a=e.errors,o=void 0===a?ee:a,c=e.warnings,s=void 0===c?ee:c,f=e.className,m=i.useContext(b).prefixCls,p=i.useContext(d.b).getPrefixCls,v="".concat(m,"-item-explain"),h=p(),O=i.useMemo((function(){return void 0!==t&&null!==t?[te(t,r,"help")]:[].concat(Object(P.a)(o.map((function(e,t){return te(e,"error","error",t)}))),Object(P.a)(s.map((function(e,t){return te(e,"warning","warning",t)}))))}),[t,r,o,s]);return i.createElement(G.default,Object(n.a)({},Z.a,{motionName:"".concat(h,"-show-help"),motionAppear:!1,motionEnter:!1,visible:!!O.length,onLeaveStart:function(e){return e.style.height="auto",{height:e.offsetHeight}}}),(function(e){var t=e.className,r=e.style;return i.createElement("div",{className:u()(v,t,f),style:r},i.createElement(G.CSSMotionList,Object(n.a)({keys:O},Z.a,{motionName:"".concat(h,"-show-help-item"),component:!1}),(function(e){var t=e.key,r=e.error,n=e.errorStatus,a=e.className,o=e.style;return i.createElement("div",{key:t,role:"alert",className:u()(a,Object(l.a)({},"".concat(v,"-").concat(n),n)),style:o},r)})))}))}var ne={success:Q.a,warning:$.a,error:J.a,validating:X.a},ae=function(e){var t=e.prefixCls,r=e.status,a=e.wrapperCol,o=e.children,l=e.errors,c=e.warnings,s=e.hasFeedback,d=e._internalItemRender,f=e.validateStatus,p=e.extra,v=e.help,h="".concat(t,"-item"),O=i.useContext(m),g=a||O.wrapperCol||{},j=u()("".concat(h,"-control"),g.className),y=f&&ne[f],w=s&&y?i.createElement("span",{className:"".concat(h,"-children-icon")},i.createElement(y,null)):null,E=i.useMemo((function(){return Object(n.a)({},O)}),[O]);delete E.labelCol,delete E.wrapperCol;var C=i.createElement("div",{className:"".concat(h,"-control-input")},i.createElement("div",{className:"".concat(h,"-control-input-content")},o),w),x=i.useMemo((function(){return{prefixCls:t,status:r}}),[t,r]),F=i.createElement(b.Provider,{value:x},i.createElement(re,{errors:l,warnings:c,help:v,helpStatus:r,className:"".concat(h,"-explain-connected")})),k=p?i.createElement("div",{className:"".concat(h,"-extra")},p):null,N=d&&"pro_table_render"===d.mark&&d.render?d.render(e,{input:C,errorList:F,extra:k}):i.createElement(i.Fragment,null,C,F,k);return i.createElement(m.Provider,{value:E},i.createElement(z.a,Object(n.a)({},g,{className:j}),N))},oe=r(21),le=r(20);function ie(e){var t=i.useState(e),r=Object(o.a)(t,2),n=r[0],a=r[1];return i.useEffect((function(){var t=setTimeout((function(){a(e)}),e.length?0:10);return function(){clearTimeout(t)}}),[e]),n}var ce=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},ue=(Object(q.a)("success","warning","error","validating",""),i.memo((function(e){return e.children}),(function(e,t){return e.value===t.value&&e.update===t.update})));var se=function(e){var t=e.name,r=e.noStyle,c=e.dependencies,b=e.prefixCls,v=e.style,h=e.className,O=e.shouldUpdate,g=e.hasFeedback,j=e.help,y=e.rules,w=e.validateStatus,E=e.children,F=e.required,k=e.label,N=e.messageVariables,M=e.trigger,S=void 0===M?"onChange":M,I=e.validateTrigger,q=e.hidden,V=ce(e,["name","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),W=Object(i.useContext)(d.b).getPrefixCls,A=Object(i.useContext)(m),L=A.name,H=A.requiredMark,z="function"===typeof E,B=Object(i.useContext)(p),D=Object(i.useContext)(s.FieldContext).validateTrigger,U=void 0!==I?I:D,Y=function(e){return null===e&&Object(T.a)(!1,"Form.Item","`null` is passed as `name` property"),!(void 0===e||null===e)}(t),X=W("form",b),J=i.useContext(s.ListContext),Q=i.useRef(),$=function(e){var t=i.useState(e),r=Object(o.a)(t,2),n=r[0],a=r[1],l=Object(i.useRef)(null),c=Object(i.useRef)([]),u=Object(i.useRef)(!1);return i.useEffect((function(){return function(){u.current=!0,le.a.cancel(l.current)}}),[]),[n,function(e){u.current||(null===l.current&&(c.current=[],l.current=Object(le.a)((function(){l.current=null,a((function(e){var t=e;return c.current.forEach((function(e){t=e(t)})),t}))}))),c.current.push(e))}]}({}),G=Object(o.a)($,2),Z=G[0],ee=G[1],te=i.useState((function(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}})),re=Object(o.a)(te,2),ne=re[0],se=re[1],de=function(e,t){ee((function(r){var a=Object(n.a)({},r),o=[].concat(Object(P.a)(e.name.slice(0,-1)),Object(P.a)(t)).join("__SPLIT__");return e.destroy?delete a[o]:a[o]=e,a}))},fe=i.useMemo((function(){var e=Object(P.a)(ne.errors),t=Object(P.a)(ne.warnings);return Object.values(Z).forEach((function(r){e.push.apply(e,Object(P.a)(r.errors||[])),t.push.apply(t,Object(P.a)(r.warnings||[]))})),[e,t]}),[Z,ne.errors,ne.warnings]),me=Object(o.a)(fe,2),pe=me[0],be=me[1],ve=ie(pe),he=ie(be),Oe=function(){var e=i.useContext(m).itemRef,t=i.useRef({});return function(r,n){var o=n&&"object"===Object(a.a)(n)&&n.ref,l=r.join("_");return t.current.name===l&&t.current.originRef===o||(t.current.name=l,t.current.originRef=o,t.current.ref=Object(R.a)(e(r),o)),t.current.ref}}();function ge(t,a,o){var c;if(r&&!q)return t;var s="";void 0!==w?s=w:(null===ne||void 0===ne?void 0:ne.validating)?s="validating":ve.length?s="error":he.length?s="warning":(null===ne||void 0===ne?void 0:ne.touched)&&(s="success");var d=(c={},Object(l.a)(c,"".concat(X,"-item"),!0),Object(l.a)(c,"".concat(X,"-item-with-help"),void 0!==j&&null!==j||ve.length||he.length),Object(l.a)(c,"".concat(h),!!h),Object(l.a)(c,"".concat(X,"-item-has-feedback"),s&&g),Object(l.a)(c,"".concat(X,"-item-has-success"),"success"===s),Object(l.a)(c,"".concat(X,"-item-has-warning"),"warning"===s),Object(l.a)(c,"".concat(X,"-item-has-error"),"error"===s),Object(l.a)(c,"".concat(X,"-item-is-validating"),"validating"===s),Object(l.a)(c,"".concat(X,"-item-hidden"),q),c);return i.createElement(_.a,Object(n.a)({className:u()(d),style:v,key:"row"},Object(f.a)(V,["colon","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","labelAlign","labelWrap","labelCol","normalize","preserve","tooltip","validateFirst","valuePropName","wrapperCol","_internalItemRender"])),i.createElement(K,Object(n.a)({htmlFor:a,required:o,requiredMark:H},e,{prefixCls:X})),i.createElement(ae,Object(n.a)({},e,ne,{errors:ve,warnings:he,prefixCls:X,status:s,validateStatus:s,help:j}),i.createElement(p.Provider,{value:de},t)))}if(!Y&&!z&&!c)return ge(E);var je={};return"string"===typeof k?je.label=k:t&&(je.label=String(t)),N&&(je=Object(n.a)(Object(n.a)({},je),N)),i.createElement(s.Field,Object(n.a)({},e,{messageVariables:je,trigger:S,validateTrigger:U,onMetaChange:function(e){var t=null===J||void 0===J?void 0:J.getKey(e.name);if(se(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[]}:e),r&&B){var n=e.name;if(e.destroy)n=Q.current||n;else if(void 0!==t){var a=Object(o.a)(t,2),l=a[0],i=a[1];n=[l].concat(Object(P.a)(i)),Q.current=n}B(e,n)}}}),(function(r,o,l){var u=C(t).length&&o?o.name:[],s=x(u,L),d=void 0!==F?F:!(!y||!y.some((function(e){if(e&&"object"===Object(a.a)(e)&&e.required&&!e.warningOnly)return!0;if("function"===typeof e){var t=e(l);return t&&t.required&&!t.warningOnly}return!1}))),f=Object(n.a)({},r),m=null;if(Object(T.a)(!(O&&c),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(E)&&Y)Object(T.a)(!1,"Form.Item","`children` is array of render props cannot have `name`."),m=E;else if(z&&(!O&&!c||Y))Object(T.a)(!(!O&&!c),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),Object(T.a)(!Y,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(!c||z||Y)if(Object(oe.b)(E)){Object(T.a)(void 0===E.props.defaultValue,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var p=Object(n.a)(Object(n.a)({},E.props),f);p.id||(p.id=s),Object(R.c)(E)&&(p.ref=Oe(u,E)),new Set([].concat(Object(P.a)(C(S)),Object(P.a)(C(U)))).forEach((function(e){p[e]=function(){for(var t,r,n,a,o,l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];null===(n=f[e])||void 0===n||(t=n).call.apply(t,[f].concat(i)),null===(o=(a=E.props)[e])||void 0===o||(r=o).call.apply(r,[a].concat(i))}})),m=i.createElement(ue,{value:f[e.valuePropName||"value"],update:E},Object(oe.a)(E,p))}else z&&(O||c)&&!Y?m=E(l):(Object(T.a)(!u.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),m=E);else Object(T.a)(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");return ge(m,s,d)}))},de=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},fe=function(e){var t=e.prefixCls,r=e.children,a=de(e,["prefixCls","children"]);Object(T.a)(!!a.name,"Form.List","Miss `name` prop.");var o=(0,i.useContext(d.b).getPrefixCls)("form",t),l=i.useMemo((function(){return{prefixCls:o,status:"error"}}),[o]);return i.createElement(s.List,a,(function(e,t,a){return i.createElement(b.Provider,{value:l},r(e.map((function(e){return Object(n.a)(Object(n.a)({},e),{fieldKey:e.key})})),t,{errors:a.errors,warnings:a.warnings}))}))},me=I;me.Item=se,me.List=fe,me.ErrorList=re,me.useForm=k,me.Provider=function(e){var t=Object(f.a)(e,["prefixCls"]);return i.createElement(s.FormProvider,t)},me.create=function(){Object(T.a)(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};t.a=me}}]);
//# sourceMappingURL=2.23258eb1.chunk.js.map