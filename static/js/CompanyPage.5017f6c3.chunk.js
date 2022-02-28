(this["webpackJsonptractian-frontend"]=this["webpackJsonptractian-frontend"]||[]).push([[5],{297:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return S}));var a=n(5),r=n(0),c=n(1),o="OPEN_MODAL",s="CLOSE_MODAL",i="OPEN_ADVANCED_BOX",u="CLOSE_ADVANCED_BOX",l="OPEN_EDIT_BOX",p="CLOSE_EDIT_BOX",d="OPEN_PANEL",j="CLOSE_PANEL",b="COLLAPSE_PANEL",f="OPEN_BOX",O="CLOSE_BOX",x="COLLAPSE_BOX",h="OPEN_READ_BOX",y="CLOSE_READ_BOX",m="COLLAPSE_READ_BOX",v={isModalOpen:!1,isPanelCollapsed:!1,isBoxCollapsed:!1,isReadBoxOpen:!0,isAdvancedBoxOpen:!1,isEditBoxOpen:!1};function g(e,t){switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!0});case s:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!1});case d:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!1});case j:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!0});case b:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!e.isPanelCollapsed});case f:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!0});case O:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!1});case x:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!e.isBoxCollapsed});case h:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1,isEditBoxOpen:!1,isReadBoxOpen:!0});case y:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1});case i:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isEditBoxOpen:!1,isAdvancedBoxOpen:!0});case u:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1});case l:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!0});case p:return Object(c.a)(Object(c.a)({},e),{},{isEditBoxOpen:!1});case m:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!e.isReadBoxOpen});default:throw new Error("Unhandled action type: ".concat(t.type))}}var C=function(e){return{modal:{open:function(){e({type:o})},close:function(){e({type:s})}},advancedBox:{open:function(){e({type:i})},close:function(){e({type:u})}},editBox:{open:function(){e({type:l})},close:function(){e({type:p})}},panel:{open:function(){e({type:d})},close:function(){e({type:j})},collapse:function(){e({type:b})}},collapsedBox:{open:function(){e({type:f})},close:function(){e({type:O})},collapse:function(){e({type:x})}},readBox:{open:function(){e({type:h}),console.log("readBox open")},close:function(){e({type:y}),console.log("readBox close")},collapse:function(){e({type:m})}}}},w=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},E=n(6),B=Object(r.createContext)();function k(e){var t=e.children,n=Object(r.useReducer)(g,v),c=Object(a.a)(n,2),o=c[0],s=c[1],i=Object(r.useMemo)((function(){return[o,s]}),[o]);return Object(E.jsx)(B.Provider,{value:i,children:t})}function S(){var e=Object(r.useContext)(B);if(void 0===e)throw new Error("useCrudContext must be used within a CrudContextProvider");var t=Object(a.a)(e,2),n=t[0],c=t[1];return{state:n,crudContextAction:C(c),crudContextSelector:w(n)}}},298:function(e,t,n){"use strict";function a(){var e=String.fromCharCode(Math.floor(25*Math.random()+65));do{var t=Math.floor(25*Math.random()+65);e+=String.fromCharCode(t),e+=Math.floor(99*Math.random())}while(e.length<8);return e}n.d(t,"a",(function(){return a}))},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(45),r=n(1),c=n(4),o=n(25),s=n.n(o),i=n(134),u=n.n(i),l=n(81),p=n(93),d=n(135),j=n(136),b=Object(c.a)({},l.a,p.c.get()),f=u.a.create({baseURL:l.b,timeout:3e4,headers:Object(r.a)({},b)}),O={create:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),console.log("jsonData",n),e.prev=2,e.next=5,f.post(t+"/",n);case 5:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),read:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.get(t+"/read/"+n);case 4:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(a.a)(s.a.mark((function e(t,n,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.patch(t+"/"+n,a);case 4:return c=e.sent,e.abrupt("return",Object(j.a)(c));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),delete:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>2&&void 0!==c[2]?c[2]:{},f.defaults.headers=Object(r.a)({},b),e.prev=2,e.next=5,f.delete(t+"/"+n);case 5:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),filter:function(){var e=Object(a.a)(s.a.mark((function e(t){var n,a,c,o,i,u=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},f.defaults.headers=Object(r.a)({},b),e.prev=2,a=n.filter?"filter="+n.filter:"",c=n.equal?"&equal="+n.equal:"",o="?".concat(a).concat(c),e.next=8,f.get(t+"/filter"+o);case 8:return i=e.sent,e.abrupt("return",Object(j.a)(i));case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a,r,o,i,u,b=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.length>2&&void 0!==b[2]?b[2]:{},f.defaults.headers=Object(c.a)({},l.a,p.c.get()),e.prev=2,r="",a!=={}&&(o=a.fields?"fields="+a.fields:"",i=a.question?"&q="+a.question:"",r="?".concat(o).concat(i)),e.next=7,f.get(t+"/"+r,{cancelToken:n.token});case 7:return u=e.sent,e.abrupt("return",Object(j.a)(u));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),list:function(){var e=Object(a.a)(s.a.mark((function e(t){var n,a,r,o,i,u=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},f.defaults.headers=Object(c.a)({},l.a,p.c.get()),console.log(p.c.get()),e.prev=3,a="",n!=={}&&(r=n.page?"page="+n.page:"",o=n.items?"&items="+n.items:"",a="?".concat(r).concat(o)),e.next=8,f.get(t+"/"+a);case 8:return i=e.sent,e.abrupt("return",Object(j.a)(i));case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",Object(d.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>2&&void 0!==c[2]?c[2]:{},f.defaults.headers=Object(r.a)({},b),e.prev=2,e.next=5,f.post(t,n);case 5:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),get:function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.get(t);case 4:return n=e.sent,e.abrupt("return",Object(j.a)(n));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),patch:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.patch(t,n);case 4:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),source:function(){var e=u.a.CancelToken.source();return e}},x=O},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(45),r=n(25),c=n.n(r),o=n(58),s=n(93),i=n(80),u=n(94),l=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:o.b,payload:{loading:!0}}),t.next=3,s.a(e);case 3:!0===(a=t.sent).success?(r={current:a.result.admin,loading:!1,isLoggedIn:!0},i.a.set("auth",r),n({type:o.c,payload:a.result.admin}),u.a.push("/")):n({type:o.a,payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.b(),t({type:o.d}),u.a.push("/login");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return T}));var a=n(0),r=n(297),c=n(6);var o=function(e){var t=e.children;return Object(c.jsx)(r.a,{children:t})},s=n(92),i=n(288),u=n(287),l=n(322),p=n(344),d=n(294),j=n(300),b=n(298),f=i.a.Header;function O(){var e=Object(s.b)(),t=Object(c.jsx)(u.a,{children:Object(c.jsx)(u.a.Item,{onClick:function(){return e(Object(j.b)())},children:"Logout"},"".concat(Object(b.a)()))});return Object(c.jsx)(f,{className:"site-layout-background",style:{padding:0,background:"none"},children:Object(c.jsx)(l.a,{overlay:t,placement:"bottomRight",arrow:!0,children:Object(c.jsx)(p.a,{icon:Object(c.jsx)(d.a,{})})})})}var x=n(5),h=n(367),y=n(351),m=n(352),v=function(e){var t=e.onChange,n=e.title;return Object(c.jsx)("div",{className:"collapseBoxHeader",onClick:t,children:n})},g=function(e){var t=e.isOpen,n=e.children,a=t?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(c.jsx)("div",{className:"TopCollapseBox",children:Object(c.jsx)("div",{style:a,children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(m.a,{span:24,children:[" ",n]})})})})},C=function(e){var t=e.isOpen,n=e.children,a=t?{display:"none",opacity:0}:{display:"block",opacity:1};return Object(c.jsx)("div",{className:"BottomCollapseBox",children:Object(c.jsx)("div",{style:a,children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(m.a,{span:24,children:[" ",n]})})})})};function w(e){var t=e.topContent,n=e.bottomContent,a=e.buttonTitle,r=e.isCollapsed,o=e.onCollapse,s=r?"collapsed":"",i=e.isPanelCollapsed?"-400px":"0px";return Object(c.jsxs)("div",{className:"panelBox",style:{width:"400px",marginLeft:i},children:[Object(c.jsx)(g,{isOpen:r,children:t}),Object(c.jsxs)("div",{className:"collapseBox "+s,children:[Object(c.jsx)(v,{title:a,onChange:o}),Object(c.jsx)("div",{className:"whiteBg"}),Object(c.jsx)(C,{isOpen:r,children:n})]})]})}var E=i.a.Sider;function B(e){var t=e.config,n=e.topContent,o=e.bottomContent,s=e.fixHeaderPanel,i=t.ADD_NEW_ENTITY,u=Object(r.b)(),l=u.state,p=u.crudContextAction,d=l.isPanelCollapsed,j=l.isBoxCollapsed,b=p.panel,f=p.collapsedBox,O=Object(a.useState)("0px"),y=Object(x.a)(O,2),m=y[0],v=y[1],g=Object(a.useState)("1"),C=Object(x.a)(g,2),B=C[0],k=C[1];Object(a.useEffect)((function(){d?(v("-400px"),k(0)):(v("0px"),k(1)),setTimeout((function(){v("0px"),k(1)}),300)}),[d]);return Object(c.jsxs)(E,{trigger:Object(c.jsx)(h.a,{className:"trigger"}),width:400,collapsible:!0,collapsed:d,collapsedWidth:"0px",onCollapse:function(){b.collapse()},zeroWidthTriggerStyle:{right:"-50px",top:"15px"},style:{background:"#FFF",left:m,opacity:B},children:[s,Object(c.jsx)(w,{buttonTitle:i,isPanelCollapsed:d,isCollapsed:j,onCollapse:function(){f.collapse()},topContent:n,bottomContent:o})]})}var k=i.a.Content;function S(e){var t=e.children,n=e.config,a=e.sidePanelTopContent,r=e.sidePanelBottomContent,s=e.fixHeaderPanel;return Object(c.jsx)(o,{children:Object(c.jsxs)(i.a,{style:{minHeight:"100vh"},children:[Object(c.jsx)(B,{config:n,topContent:a,bottomContent:r,fixHeaderPanel:s}),Object(c.jsxs)(i.a,{className:"site-layout",children:[Object(c.jsx)(O,{}),Object(c.jsx)(k,{className:"site-layout-background",style:{padding:"50px 40px",margin:"50px auto",width:"100%",maxWidth:"1000px"},children:t})]})]})})}var N=i.a.Content;function T(e){var t=e.children;return Object(c.jsxs)(i.a,{className:"site-layout",children:[Object(c.jsx)(O,{}),Object(c.jsx)(N,{style:{padding:"30px 40px",margin:"20px auto",width:"100%",maxWidth:"1100px"},children:t})]})}},303:function(e,t,n){"use strict";n.d(t,"a",(function(){return fe}));var a=n(0),r=n(351),c=n(352),o=n(286),s=n(365),i=n(1),u=n(5),l=n(92),p=n(45),d=n(25),j=n.n(d),b=n(54),f=n(299),O=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:b.g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(p.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:b.f,keyState:e,payload:null});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(p.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:b.b,payload:Object(i.a)({},e)});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e,t){return function(){var n=Object(p.a)(j.a.mark((function n(a){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:b.a,keyState:e,payload:Object(i.a)({},t)});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(p.a)(j.a.mark((function n(a){var r,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:b.d,keyState:"list",payload:null}),n.next=3,f.a.list(e,{page:t});case 3:!0===(r=n.sent).success?(c={items:r.result,pagination:{current:parseInt(r.pagination.page,10),pageSize:10,total:parseInt(r.pagination.count,10)}},a({type:b.e,keyState:"list",payload:c})):a({type:b.c,keyState:"list",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(p.a)(j.a.mark((function n(a){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:b.d,keyState:"create",payload:null}),console.log("jsonData action redux",t),n.next=4,f.a.create(e,t);case 4:!0===(r=n.sent).success?(a({type:b.e,keyState:"create",payload:r.result}),a({type:b.b,payload:r.result})):a({type:b.c,keyState:"create",payload:null});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e,t,n){return function(){var a=Object(p.a)(j.a.mark((function a(r){var c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:b.d,keyState:"update",payload:null}),a.next=3,f.a.update(e,t,n);case 3:!0===(c=a.sent).success?(r({type:b.e,keyState:"update",payload:c.result}),r({type:b.b,payload:c.result})):r({type:b.c,keyState:"update",payload:null});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},C=function(e,t){return function(){var n=Object(p.a)(j.a.mark((function n(a){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:b.d,keyState:"delete",payload:null}),n.next=3,f.a.delete(e,t);case 3:!0===(r=n.sent).success?a({type:b.e,keyState:"delete",payload:r.result}):a({type:b.c,keyState:"delete",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(e,t,n){return function(){var a=Object(p.a)(j.a.mark((function a(r){var c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:b.d,keyState:"search",payload:null}),t.cancel(),t=f.a.source(),a.next=5,f.a.search(e,t,n);case 5:!0===(c=a.sent).success?r({type:b.e,keyState:"search",payload:c.result}):r({type:b.c,keyState:"search",payload:null});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},E=n(297),B=n(101),k=function(e){return e.crud},S=Object(B.a)([k],(function(e){return e.current})),N=Object(B.a)([k],(function(e){return e.list})),T=Object(B.a)([k],(function(e){return e.create})),A=Object(B.a)([k],(function(e){return e.update})),P=(Object(B.a)([k],(function(e){return e.read})),Object(B.a)([k],(function(e){return e.delete}))),L=Object(B.a)([k],(function(e){return e.search})),_=n(358),D=n(209),I=n(82),M=n(6);function Y(e){var t=e.isLoading,n=e.children,a=Object(M.jsx)(I.a,{style:{fontSize:24},spin:!0});return Object(M.jsx)(D.a,{indicator:a,spinning:t,children:n})}function F(e){var t=e.config,n=e.formElements,r=t.entity,c=Object(l.b)(),s=Object(l.c)(T),p=s.isLoading,d=s.isSuccess,j=Object(E.b)().crudContextAction,b=j.panel,f=j.collapsedBox,O=j.readBox,h=_.a.useForm(),y=Object(u.a)(h,1)[0];return Object(a.useEffect)((function(){d&&(O.open(),f.open(),b.open(),y.resetFields(),c(x("create")),c(m(r)))}),[d]),Object(M.jsx)(Y,{isLoading:p,children:Object(M.jsxs)(_.a,{form:y,layout:"vertical",onFinish:function(e){e&&(e.birthday&&(e=Object(i.a)(Object(i.a)({},e),{},{birthday:e.birthday.format("DD/MM/YYYY")})),e.date&&(e=Object(i.a)(Object(i.a)({},e),{},{date:e.date.format("DD/MM/YYYY")}))),c(v(r,e))},children:[n,Object(M.jsx)(_.a.Item,{children:Object(M.jsx)(o.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}var R=n(308),q=n.n(R);function X(e){var t=e.config,n=e.formElements,r=t.entity,c=Object(l.b)(),s=Object(l.c)(A),p=s.current,d=s.isLoading,j=s.isSuccess,b=Object(E.b)(),f=b.state,O=b.crudContextAction,h=O.panel,y=O.collapsedBox,v=O.readBox,C=_.a.useForm(),w=Object(u.a)(C,1)[0];Object(a.useEffect)((function(){p&&(p.birthday&&(p.birthday=q()(p.birthday)),p.date&&(p.date=q()(p.date)),w.setFieldsValue(p))}),[p]),Object(a.useEffect)((function(){j&&(v.open(),y.open(),h.open(),w.resetFields(),c(x("update")),c(m(r)))}),[j]);var B=f.isEditBoxOpen?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(M.jsx)("div",{style:B,children:Object(M.jsx)(Y,{isLoading:d,children:Object(M.jsxs)(_.a,{form:w,layout:"vertical",onFinish:function(e){e&&(e.birthday&&(e=Object(i.a)(Object(i.a)({},e),{},{birthday:e.birthday.format("DD/MM/YYYY")})),e.date&&(e=Object(i.a)(Object(i.a)({},e),{},{birthday:e.date.format("DD/MM/YYYY")})));var t=p._id;c(g(r,t,e))},children:[n,Object(M.jsx)(_.a.Item,{children:Object(M.jsx)(o.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})}var H=n(360);n(309);function W(e,t,n){return void 0===n&&(n="|"),t.split(n).map((function(t){return function(e,t){return t.split(".").reduce((function(e,t){return void 0===e||null===e?e:e[t]}),e)}(e,t)})).join(" ")}Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,r=n.length;a<r;++a){var c=n[a];if(null===e)return;if(!(c in e))return;e=e[c]}return e};function U(e){var t=e.config,n=t.entity,r=t.entityDisplayLabels,c=t.deleteMessage,o=void 0===c?"Do you want delete : ":c,s=t.modalTitle,i=void 0===s?"Remove Item":s,p=Object(l.b)(),d=Object(l.c)(P),j=d.current,b=d.isLoading,f=d.isSuccess,O=Object(E.b)(),h=O.state,y=O.crudContextAction,v=h.isModalOpen,g=y.modal,w=Object(a.useState)(""),B=Object(u.a)(w,2),k=B[0],S=B[1];Object(a.useEffect)((function(){if(f&&(g.close(),p(m(n)),p(x(n))),j){var e=r.map((function(e){return W(j,e)})).join(" ");S(e)}}),[f,j]);return Object(M.jsx)(H.a,{title:i,visible:v,onOk:function(){var e=j._id;p(C(n,e))},onCancel:function(){b||g.close()},confirmLoading:b,children:Object(M.jsxs)("p",{children:[o,k]})})}function z(e){var t=e.config.readColumns,n=Object(l.c)(S).result,o=Object(E.b)().state.isReadBoxOpen,s=Object(a.useState)([]),i=Object(u.a)(s,2),p=i[0],d=i[1],j=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(console.log("currentResult :",n),console.log("readColumns :",t),j.current)j.current=!1;else{var e=[];t.map((function(t){var a=t.dataIndex,r=t.title,c=W(n,a);e.push({propsKey:a,label:r,value:c})})),d(e)}}),[n]);var b=o?{display:"block",opacity:1}:{display:"none",opacity:0},f=p.map((function(e){return Object(M.jsxs)(r.a,{gutter:12,children:[Object(M.jsx)(c.a,{className:"gutter-row",span:8,children:Object(M.jsx)("p",{children:e.label})}),Object(M.jsx)(c.a,{className:"gutter-row",span:2,children:Object(M.jsx)("p",{children:" : "})}),Object(M.jsx)(c.a,{className:"gutter-row",span:14,children:Object(M.jsx)("p",{children:e.value})})]},e.propsKey)}));return console.log("itemsList :",f),Object(M.jsx)("div",{style:b,children:f})}var V=n(354),K=n(342),J=n(317),$=n(77);function G(e){var t=e.config,n=t.entity,r=t.searchConfig,c=r.displayLabels,o=r.searchFields,s=r.outputValue,i=void 0===s?"_id":s,p=Object(l.b)(),d=Object(a.useState)(""),j=Object(u.a)(d,2),b=j[0],O=j[1],x=Object(a.useState)([]),y=Object(u.a)(x,2),m=y[0],v=y[1],g=Object(E.b)().crudContextAction,C=g.panel,B=g.collapsedBox,k=g.readBox,S=f.a.source(),N=Object(l.c)(L),T=N.result,A=N.isLoading,P=N.isSuccess,_=Object(a.useRef)(!1),D=null;Object(a.useEffect)((function(){A&&v([{label:"... Searching"}])}),[A]);return Object(a.useEffect)((function(){var e=[];T.map((function(t){var n=c.map((function(e){return t[e]})).join(" ");e.push({label:n,value:t[i]})})),v(e)}),[T]),Object(M.jsx)(V.a,{value:b,options:m,style:{width:"100%"},onSelect:function(e){var t=T.find((function(t){return t[i]===e}));p(h(t)),C.open(),B.open(),k.open()},onSearch:function(e){_.current=!0,clearTimeout(D),D=setTimeout((function(){_.current&&""!==e&&p(w(n,S,{question:e,fields:o})),_.current=!1}),500)},onChange:function(e){var t=m.find((function(t){return t.value===e})),n=t?t.label:e;O(n)},notFoundContent:P?"":Object(M.jsx)($.a,{}),allowClear:!0,placeholder:"Your Search here",children:Object(M.jsx)(K.a,{suffix:Object(M.jsx)(J.a,{})})})}var Q=n(301),Z=n(287),ee=n(331),te=n(368),ne=n(350),ae=n(298),re=n(8),ce=n(322),oe=n(359),se=n(356),ie=n(172);function ue(e){var t=e.config,n=e.DropDownRowMenu,r=e.AddNewItem,c=t.entity,s=t.dataTableColumns,i=t.dataTableTitle;s=[].concat(Object(re.a)(s),[{title:"",render:function(e){return Object(M.jsx)(ce.a,{overlay:n({row:e}),trigger:["click"],children:Object(M.jsx)(ie.a,{style:{cursor:"pointer",fontSize:"24px"}})})}}]);var u=Object(l.c)(N),p=u.result,d=u.isLoading,j=p.pagination,b=p.items,f=Object(l.b)(),O=Object(a.useCallback)((function(e){f(m(c,e.current))}),[]);return Object(a.useEffect)((function(){f(m(c))}),[]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(oe.a,{onBack:function(){return window.history.back()},title:i,ghost:!1,extra:[Object(M.jsx)(o.a,{onClick:O,children:"Refresh"},"".concat(Object(ae.a)())),Object(M.jsx)(r,{config:t},"".concat(Object(ae.a)()))],style:{padding:"20px 0px"}}),Object(M.jsx)(se.a,{columns:s,rowKey:function(e){return e._id},dataSource:b,pagination:j,loading:d,onChange:O})]})}function le(e){var t=e.config,n=Object(E.b)().crudContextAction,a=n.collapsedBox,r=n.panel,c=t.ADD_NEW_ENTITY;return Object(M.jsx)(o.a,{onClick:function(){r.open(),a.close()},type:"primary",children:c})}function pe(e){var t,n=e.row,a=Object(l.b)(),r=Object(E.b)().crudContextAction,c=r.panel,o=r.collapsedBox,s=r.modal,i=r.readBox,u=r.editBox,p=Object(l.c)((t=n._id,Object(B.a)(N,(function(e){return e.result.items.find((function(e){return e._id===t}))}))));return Object(M.jsxs)(Z.a,{style:{width:130},children:[Object(M.jsx)(Z.a.Item,{icon:Object(M.jsx)(ee.a,{}),onClick:function(){a(h(p)),c.open(),o.open(),i.open()},children:"Show"},"".concat(Object(ae.a)())),Object(M.jsx)(Z.a.Item,{icon:Object(M.jsx)(te.a,{}),onClick:function(){a(y("update",p)),u.open(),c.open(),o.open()},children:"Edit"},"".concat(Object(ae.a)())),Object(M.jsx)(Z.a.Item,{icon:Object(M.jsx)(ne.a,{}),onClick:function(){a(y("delete",p)),s.open()},children:"Delete"},"".concat(Object(ae.a)()))]})}function de(e){var t=e.config;return Object(M.jsx)(ue,{config:t,DropDownRowMenu:pe,AddNewItem:le})}function je(e){var t=e.config,n=e.formElements;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(z,{config:t}),Object(M.jsx)(X,{config:t,formElements:n})]})}function be(e){var t=e.config,n=Object(E.b)().crudContextAction.collapsedBox;return Object(M.jsxs)("div",{className:"box",children:[Object(M.jsx)(r.a,{gutter:12,children:Object(M.jsx)(c.a,{className:"gutter-row",span:21,children:Object(M.jsx)("h1",{style:{fontSize:20,marginBottom:20},children:t.panelTitle})})}),Object(M.jsxs)(r.a,{gutter:8,children:[Object(M.jsx)(c.a,{className:"gutter-row",span:21,children:Object(M.jsx)(G,{config:t})}),Object(M.jsx)(c.a,{className:"gutter-row",span:3,children:Object(M.jsx)(o.a,{onClick:function(){n.close()},block:!0,icon:Object(M.jsx)(s.a,{})})})]})]})}function fe(e){var t=e.config,n=e.createForm,r=e.updateForm,c=Object(l.b)();return Object(a.useLayoutEffect)((function(){c(O())}),[]),Object(M.jsxs)(Q.a,{config:t,fixHeaderPanel:Object(M.jsx)(be,{config:t}),sidePanelBottomContent:Object(M.jsx)(F,{config:t,formElements:n}),sidePanelTopContent:Object(M.jsx)(je,{config:t,formElements:r}),children:[Object(M.jsx)(de,{config:t}),Object(M.jsx)(U,{config:t})]})}},364:function(e,t,n){"use strict";n.r(t);n(0);var a=n(303),r=n(358),c=n(342),o=n(6);function s(e){e.isUpdateForm;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input company name!"}],children:Object(o.jsx)(c.a,{})}),Object(o.jsx)(r.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!1,message:"Please input company E-mail!"}],children:Object(o.jsx)(c.a,{})}),Object(o.jsx)(r.a.Item,{name:"manager",label:"Manager",rules:[{required:!1,message:"Please input the company's manager name!"}],children:Object(o.jsx)(c.a,{})}),Object(o.jsx)(r.a.Item,{name:"phone",label:"Phone",rules:[{type:"string",message:"The input is not valid string"},{required:!1,message:"Please input company phone!"}],children:Object(o.jsx)(c.a,{})})]})}t.default=function(){var e={entity:"company",panelTitle:"Company Panel",dataTableTitle:"Company Lists",ENTITY_NAME:"company",CREATE_ENTITY:"Create company",ADD_NEW_ENTITY:"Add new company",UPDATE_ENTITY:"Update company",DATATABLE_TITLE:"company List",readColumns:[{title:"Id",dataIndex:"_id"},{title:"Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Manager",dataIndex:"manager"},{title:"Phone",dataIndex:"phone"}],dataTableColumns:[{title:"Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Manager",dataIndex:"manager"},{title:"Phone",dataIndex:"phone"}],searchConfig:{displayLabels:["name"],searchFields:"name, email, manager, phone",outputValue:"_id"},entityDisplayLabels:["name"]};return Object(o.jsx)(a.a,{createForm:Object(o.jsx)(s,{}),updateForm:Object(o.jsx)(s,{isUpdateForm:!0}),config:e})}}}]);
//# sourceMappingURL=CompanyPage.5017f6c3.chunk.js.map