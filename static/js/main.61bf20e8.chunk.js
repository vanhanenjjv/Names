(this.webpackJsonpnames=this.webpackJsonpnames||[]).push([[0],{498:function(e,t,n){},812:function(e,t,n){"use strict";n.r(t);var a=n(32),r=(n(497),n(498),n(1)),c=n.n(r),i=n(50),s=n.n(i),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,831)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},u=n(823),l=n(234),d=n(821),j=n(824),b=n(125),h=n(830),f=n(315),m=n(828),x=n(827),p=n(825),O=n(820),v=n(476),y=n(6);var g=function(e){return function(t){return Object(a.jsx)(c.a.Suspense,{fallback:Object(a.jsx)(e,Object(y.a)({suspended:!0},t)),children:Object(a.jsx)(e,Object(y.a)({suspended:!1},t))})}};var w=function(e){var t,n="pending",a=e.then((function(e){n="success",t=e}),(function(e){n="error",t=e}));return{read:function(){if("pending"===n)throw a;if("error"===n)throw t;return t}}},C=n(66),k=n.n(C),S=n(123);function F(){return(F=Object(S.a)(k.a.mark((function e(){var t,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){if("object"!==typeof e)return!1;if(null===e)return!1;if(!("names"in e))return!1;var t=e.names;if(!Array.isArray(t))return!1;if(0===t.length)return!0;if("object"!==typeof t[0])return!1;if(null===t[0])return!1;if(!("name"in t[0]))return!1;if(!("amount"in t[0]))return!1;var n=t[0],a=n.name,r=n.amount;return"string"===typeof a&&"number"===typeof r},e.next=3,fetch("https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch names.");case 6:return e.next=8,t.json();case 8:if(n=e.sent,a(n)){e.next=11;break}throw new Error("Invalid response body.");case 11:return e.abrupt("return",n.names);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=w(function(){return F.apply(this,arguments)}()),I=function(e){var t=e.suspended,n=c.a.useCallback((function(){return T.read().map((function(e){return e.amount})).reduce((function(e,t){return e+t}))}),[]);return Object(a.jsxs)(m.b,{size:"small",direction:"vertical",style:{width:"100%"},children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(p.a,{title:"Total amount of names",value:t?void 0:n(),loading:t})}),Object(a.jsx)(O.a,{}),Object(a.jsx)(v.a,{style:{height:400},data:t?[]:T.read(),wordField:"name",weightField:"amount",colorField:"name",wordStyle:{fontFamily:"Verdana",fontSize:[18,64]}})]})};I.displayName="Count";var P=g(I),A=n(36),L=n(8);var z=function(e,t){var n=null;return function(a){n&&clearInterval(n),n=setTimeout((function(){e(a)}),t)}},B=n(826).a.Search,N=function(e){var t=e.onChange,n=e.disabled;return Object(a.jsx)(B,{disabled:n,onChange:function(e){return t(e.target.value)},style:{width:"100%"},placeholder:"Search by name"})},E=n(127),D=n(829),J=function(e){var t=e.names;return 0===t.length?Object(a.jsx)(E.a,{description:"No matches"}):t.length>=5?Object(a.jsx)(u.a.Paragraph,{children:"Too many matches"}):1===t.length?Object(a.jsxs)(u.a.Paragraph,{children:["Solita has ",t[0].amount," employees named ",t[0].name]}):Object(a.jsx)(D.b,{style:{width:"100%"},children:t.map((function(e){var t=e.name;return Object(a.jsx)(D.b.Item,{children:t},t)}))})},G=g((function(e){var t=e.suspended,n=c.a.useState(""),r=Object(L.a)(n,2),i=r[0],s=r[1],o=c.a.useCallback((function(){var e,t=[],n=Object(A.a)(T.read());try{for(n.s();!(e=n.n()).done;){var a=e.value,r=a.name.toLowerCase(),c=i.toLowerCase();if(r===c)return[a];r.includes(c)&&t.push(a)}}catch(s){n.e(s)}finally{n.f()}return t}),[i]);return Object(a.jsxs)(m.b,{direction:"vertical",size:"large",style:{justifyContent:"center"},children:[Object(a.jsx)(N,{onChange:z(s,250),disabled:t}),Object(a.jsx)(J,{names:t?[]:o()})]})})),H=n(822),K=[{title:"Name",dataIndex:"name",key:"name",sorter:function(e,t){return e.name.localeCompare(t.name)}},{title:"Amount",dataIndex:"amount",key:"amount",sorter:function(e,t){return e.amount-t.amount}}],M=g((function(e){var t=e.suspended;return Object(a.jsx)(H.a,{tableLayout:"fixed",dataSource:t?void 0:T.read(),columns:K,rowKey:t?void 0:function(e){return e.name}})})),V=f.a.TabPane,W=function(){var e=l.a.useBreakpoint();return Object(a.jsxs)(f.a,{tabPosition:e.md?"left":"top",children:[Object(a.jsx)(V,{tab:"Count",children:Object(a.jsx)(P,{})},"1"),Object(a.jsx)(V,{tab:"Search",children:Object(a.jsx)(G,{})},"2"),Object(a.jsx)(V,{tab:"Table",children:Object(a.jsx)(M,{})},"3")]})};W.Count=P,W.Search=G,W.Table=M;var _=W,q=u.a.Text,Q=function(){var e=l.a.useBreakpoint();return Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(d.a.Content,{style:{height:"100%",width:"100%",alignSelf:"center",maxWidth:960,padding:16},children:[Object(a.jsx)(j.a,{ghost:!0,title:"Names",subTitle:e.sm?"Solita Dev Academy 2021":null,extra:[Object(a.jsx)(b.a,{shape:"circle",size:"large",href:"https://www.github.com/vanhanenjjv/names",target:"_blank",children:Object(a.jsx)(h.a,{})},"GitHub")]}),Object(a.jsx)(_,{})]}),Object(a.jsx)(d.a.Footer,{style:{textAlign:"center"},children:Object(a.jsx)(q,{type:"secondary",children:"git commit"})})]})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root")),o()}},[[812,1,2]]]);
//# sourceMappingURL=main.61bf20e8.chunk.js.map