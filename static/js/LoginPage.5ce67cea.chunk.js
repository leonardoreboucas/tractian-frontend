(this["webpackJsonptractian-frontend"]=this["webpackJsonptractian-frontend"]||[]).push([[7],{300:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(45),r=a(25),c=a.n(r),i=a(58),o=a(93),s=a(80),l=a(94),u=function(e){return function(){var t=Object(n.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:i.b,payload:{loading:!0}}),t.next=3,o.a(e);case 3:!0===(n=t.sent).success?(r={current:n.result.admin,loading:!1,isLoggedIn:!0},s.a.set("auth",r),a({type:i.c,payload:n.result.admin}),l.a.push("/")):a({type:i.a,payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b(),t({type:i.d}),l.a.push("/login");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},334:function(e,t,a){"use strict";var n=a(3),r=a(4),c=a(0),i=a(7),o=a.n(i),s=a(48),l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){return c.createElement(s.a,null,(function(t){var a,i=t.getPrefixCls,s=t.direction,u=e.prefixCls,d=e.type,m=void 0===d?"horizontal":d,j=e.orientation,p=void 0===j?"center":j,f=e.orientationMargin,b=e.className,h=e.children,O=e.dashed,x=e.plain,g=l(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),y=i("divider",u),v=p.length>0?"-".concat(p):p,w=!!h,N="left"===p&&null!=f,C="right"===p&&null!=f,P=o()(y,"".concat(y,"-").concat(m),(a={},Object(r.a)(a,"".concat(y,"-with-text"),w),Object(r.a)(a,"".concat(y,"-with-text").concat(v),w),Object(r.a)(a,"".concat(y,"-dashed"),!!O),Object(r.a)(a,"".concat(y,"-plain"),!!x),Object(r.a)(a,"".concat(y,"-rtl"),"rtl"===s),Object(r.a)(a,"".concat(y,"-no-default-orientation-margin-left"),N),Object(r.a)(a,"".concat(y,"-no-default-orientation-margin-right"),C),a),b),k=Object(n.a)(Object(n.a)({},N&&{marginLeft:f}),C&&{marginRight:f});return c.createElement("div",Object(n.a)({className:P},g,{role:"separator"}),h&&c.createElement("span",{className:"".concat(y,"-inner-text"),style:k},h))}))}},360:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(288),c=a(349),i=a(350),o=a(334),s=a(356),l=a(340),u=a(329),d=a(286),m=a(294),j=a(1),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},f=a(11),b=function(e,t){return n.createElement(f.a,Object(j.a)(Object(j.a)({},e),{},{ref:t,icon:p}))};b.displayName="LockOutlined";var h=n.forwardRef(b),O=a(300),x=a(92),g=a(166),y=a(6),v=r.a.Content,w=r.a.Footer;t.default=function(){var e=Object(x.c)(g.a).loading,t=Object(x.b)();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(r.a,{className:"layout",children:[Object(y.jsx)(c.a,{children:Object(y.jsx)(i.a,{span:12,offset:6,children:Object(y.jsxs)(v,{style:{padding:"150px 0 180px",maxWidth:"360px",margin:"0 auto"},children:[Object(y.jsx)("h1",{children:"Login"}),Object(y.jsx)(o.a,{}),Object(y.jsxs)("div",{className:"site-layout-content",children:[" ",Object(y.jsxs)(s.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){t(Object(O.a)(e))},children:[Object(y.jsx)(s.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:Object(y.jsx)(l.a,{prefix:Object(y.jsx)(m.a,{className:"site-form-item-icon"}),placeholder:"admin@demo.com",autoComplete:"off"})}),Object(y.jsx)(s.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(y.jsx)(l.a,{prefix:Object(y.jsx)(h,{className:"site-form-item-icon"}),type:"password",placeholder:"123456",autoComplete:"off"})}),Object(y.jsxs)(s.a.Item,{children:[Object(y.jsx)(s.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(y.jsx)(u.a,{children:"Remember me"})}),Object(y.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password"})]}),Object(y.jsxs)(s.a.Item,{children:[Object(y.jsx)(d.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:e,children:"Log in"}),"Or ",Object(y.jsx)("a",{href:"",children:"register now!"})]})]})]})]})})}),Object(y.jsx)(w,{style:{textAlign:"center"},children:"Open Source CRM based on AntD & React \xa92020 Created by Salah Eddine Lalami"})]})})}}}]);
//# sourceMappingURL=LoginPage.5ce67cea.chunk.js.map