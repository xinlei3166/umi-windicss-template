(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Ac47:function(x,f,t){"use strict";t.r(f);var Ie=t("B9cy"),g=t("Ol7k"),Me=t("lUTK"),O=t("BvKs"),Re=t("GNNt"),M=t("wEI+"),S=t("tJVT"),L=t("oBTY"),b=t("q1tI"),G=t("SA0R"),R=t.n(G),H=t("dxGJ"),W=t("wJku"),E=t("QttV"),y=t("9kvl"),z=t("V75h"),Q=t("ubFk"),we=t("qVdP"),Z=t("jsC+"),X=t("cJ7L"),w=t("eFNv"),k=t("YFOr"),q=t("8/dN"),_=t("EZUY"),ee=t.n(_),De=t("trwo"),e=t("nKUr"),te=Object(e.jsxs)(O.a,{children:[Object(e.jsx)(O.a.Item,{children:Object(e.jsxs)("a",{href:"#",children:[Object(e.jsx)(X.a,{className:"menu-item-icon"}),"\u4E2A\u4EBA\u4E2D\u5FC3"]})},"person"),Object(e.jsx)(O.a.Item,{children:Object(e.jsxs)("a",{href:"#",children:[Object(e.jsx)(w.a,{className:"menu-item-icon"}),"\u4E2A\u4EBA\u8BBE\u7F6E"]})},"setting"),Object(e.jsx)(O.a.Divider,{}),Object(e.jsx)(O.a.Item,{children:Object(e.jsxs)("a",{href:"#",children:[Object(e.jsx)(k.a,{className:"menu-item-icon"}),"\u9000\u51FA\u767B\u5F55"]})},"logout")]});function ne(){return Object(e.jsxs)("div",{className:"layout-nav",children:[Object(e.jsx)(q.a,{className:"layout-header-icon"}),Object(e.jsx)(Z.a,{overlay:te,children:Object(e.jsxs)("span",{className:"dropdown-link",children:[Object(e.jsx)("span",{className:"dropdown-img-wrap",children:Object(e.jsx)("img",{className:"dropdown-img",src:ee.a})}),Object(e.jsx)("span",{className:"dropdown-text",children:"\u541B\u60DC"})]})})]})}var ae=Object(b.memo)(ne),Te=t("sPJy"),D=t("bE4q");function se(a){return a[a.length-1].unlink=!0,a.length>1?a.slice(1):a}function ce(a){var i=a.location,d=a.breadcrumbs,h=d.map(function(j){return j.match.path});return h.includes(i==null?void 0:i.pathname)||y.c.push("/404"),Object(e.jsx)(D.a,{children:se(d).map(function(j){return Object(e.jsx)(D.a.Item,{children:j.unlink?j.breadcrumb:Object(e.jsx)(E.a,{to:j.match.url,children:j.breadcrumb})},j.key)})})}var le=Object(b.memo)(ce),Ke=t("bbsP"),oe=t("/wGt"),$e=t("BoS7"),F=t("Sdc0"),Je=t("OaEy"),p=t("2fM7"),re=t("4i/N"),Ue=t("HK2/");function ie(a){var i=a.theme,d=a.dispatch,h=Object(b.useState)(!1),j=Object(S.a)(h,2),s=j[0],m=j[1],o=function(r){d==null||d({type:"theme/changeTheme",payload:r})};function v(u){o(u)}function I(u){v(u);var r=document.querySelector("html");r==null||r.classList.toggle("dark",u.theme==="dark"),localStorage.theme=u.theme}return Object(e.jsx)(oe.a,{visible:s,className:"setting-drawer",placement:"right",width:"280px",closable:!1,handler:Object(e.jsx)("div",{className:"setting-drawer-btn-wrap",onClick:function(){return m(!s)},children:s?Object(e.jsx)(re.a,{className:"setting-drawer-btn"}):Object(e.jsx)(w.a,{className:"setting-drawer-btn"})}),children:Object(e.jsxs)("div",{className:"setting-drawer-content",children:[Object(e.jsx)("h3",{className:"drawer-title",children:"\u7CFB\u7EDF\u5E03\u5C40\u914D\u7F6E"}),Object(e.jsxs)("div",{className:"drawer-item",children:[Object(e.jsx)("span",{children:"\u4FA7\u8FB9\u680F\u4E3B\u9898\u989C\u8272"}),Object(e.jsxs)(p.a,{value:i.theme,className:"select",onChange:function(r){return I({theme:r})},children:[Object(e.jsx)(p.a.Option,{value:"dark",children:"\u6697\u9ED1"},"dark"),Object(e.jsx)(p.a.Option,{value:"light",children:"\u660E\u4EAE"},"light")]})]}),Object(e.jsxs)("div",{className:"drawer-item",children:[Object(e.jsx)("span",{children:"\u4FA7\u8FB9\u680F\u83DC\u5355\u7C7B\u578B"}),Object(e.jsxs)(p.a,{value:i.mode,className:"select",onChange:function(r){return v({mode:r})},children:[Object(e.jsx)(p.a.Option,{value:"vertical",children:"\u5782\u76F4"},"vertical"),Object(e.jsx)(p.a.Option,{value:"inline",children:"\u5185\u5D4C"},"inline")]})]}),Object(e.jsxs)("div",{className:"drawer-item",children:[Object(e.jsx)("span",{children:"\u4FA7\u8FB9\u680F\u6298\u53E0"}),Object(e.jsx)(F.a,{checked:i.collapsed,onChange:function(r){return v({collapsed:r})}})]}),Object(e.jsxs)("div",{className:"drawer-item",children:[Object(e.jsx)("span",{children:"\u6298\u53E0\u5C55\u793A\u83DC\u5355\u540D\u79F0"}),Object(e.jsx)(F.a,{checked:i.showSubMenuName,onChange:function(r){return v({showSubMenuName:r})}})]}),Object(e.jsxs)("div",{className:"drawer-item",children:[Object(e.jsx)("span",{children:"\u663E\u793A\u9762\u5305\u5C51"}),Object(e.jsx)(F.a,{checked:i.showBreadcrumb,onChange:function(r){return v({showBreadcrumb:r})}})]})]})})}var ue=Object(y.b)(function(a){return{theme:a.theme}})(ie),de=t("TSYQ"),je=t.n(de),he=t("mxmt"),me=t.n(he),ve=t("R+Pm"),Oe=Object(ve.a)({scriptUrl:"//at.alicdn.com/t/font_2430965_vlgkrnfr1lg.js"}),A=Oe,Pe=t("hgoN"),be=function a(i){return i.reduce(function(d,h){return h.routes?d.concat([h].concat(Object(L.a)(a(h.routes)))):d.concat(h)},[])};function xe(a){var i,d,h,j=a.children,s=a.location,m=a.routes,o=a.theme,v=a.dispatch,I=Object(b.useState)([]),u=Object(S.a)(I,2),r=u[0],T=u[1],fe=Object(b.useState)([]),K=Object(S.a)(fe,2),pe=K[0],C=K[1],ge=function(n){C(n)},Ne=function(n){var l=n.key,N=n.keyPath;C(N.slice(1)),T([l])},$=Object(b.useMemo)(function(){var c;return be(m==null||(c=m[0].routes)===null||c===void 0?void 0:c.filter(function(n){return n.path}))},[m]),J=Object(b.useMemo)(function(){return Object(z.a)({routes:$,location:s,options:{disableDefaults:!0}})},[$,s]),U=Object(b.useMemo)(function(){var c;return m==null||(c=m[0].routes)===null||c===void 0?void 0:c.filter(function(n){return!n.hidden&&n.path})},[m]),ye=function(){return U.find(function(n){var l=new RegExp("^".concat(n.path));return l.test(s==null?void 0:s.pathname)})},Ce=function(n){return n.routes.find(function(l){return l.path===(s==null?void 0:s.pathname)})},P=function(){var n=ye();if(C([n==null?void 0:n.name]),n&&!o.collapsed){var l=Ce(n);T([l==null?void 0:l.name])}},Be=function(n){v==null||v({type:"theme/changeTheme",payload:n})},V=function(){var n=!o.collapsed;Be({collapsed:n}),n?C([]):P()};if(Object(Q.a)(function(){P()}),(s==null?void 0:s.pathname)==="/login")return Object(e.jsx)(M.a,{locale:R.a,children:j});var Se=function(n){return(s==null?void 0:s.pathname)===n.path?Object(e.jsxs)("span",{className:"menu-item-link",children:[Object(e.jsx)(A,{type:n.icon,className:"icon"}),Object(e.jsx)("span",{className:"menu-item-title",children:n.breadcrumb})]}):Object(e.jsxs)(E.a,{className:"menu-item-link",to:n.path,children:[Object(e.jsx)(A,{type:n.icon,className:"icon"}),Object(e.jsx)("span",{className:"menu-item-title",children:n.breadcrumb})]})},Ee=function(n){return n.map(function(l){return Object(e.jsx)(O.a.Item,{children:Se(l)},l.name)})},Fe=function(n){return n.map(function(l){var N;return Object(e.jsx)(O.a.SubMenu,{title:Object(e.jsx)("span",{className:"menu-item-title",children:l.breadcrumb}),icon:Object(e.jsx)(A,{type:l.icon,className:"icon"}),children:Ee(l==null||(N=l.routes)===null||N===void 0?void 0:N.filter(function(Y){return!Y.hidden&&Y.path}))},l.name)})},B=J.find(function(c){return c.match.url===(s==null?void 0:s.pathname)}),Ae=B!=null&&(i=B.breadcrumb)!==null&&i!==void 0&&i.props.children?"".concat((d=B.breadcrumb)===null||d===void 0||(h=d.props)===null||h===void 0?void 0:h.children," - react-umi-dva-windicss"):"react-umi-dva-windicss";return Object(e.jsxs)(M.a,{locale:R.a,children:[Object(e.jsx)(y.a,{children:Object(e.jsx)("title",{children:Ae})}),Object(e.jsxs)(g.a,{id:"layout",style:{overflow:"auto",height:"100vh"},children:[Object(e.jsx)("div",{className:"layout-fixed-stuff",style:{width:o.collapsed?o.collapsedWidth:o.width}}),Object(e.jsxs)(g.a.Sider,{collapsible:!0,collapsed:o.collapsed,trigger:null,theme:o.theme,width:o.width,collapsedWidth:o.collapsedWidth,className:je()("layout-sider",{"show-name":o.showSubMenuName}),children:[Object(e.jsx)("div",{className:"logo",children:Object(e.jsxs)(E.a,{to:"/",className:"logo-link",children:[Object(e.jsx)("img",{className:"logo-img",src:me.a,alt:"logo"}),o.collapsed?null:Object(e.jsx)("h1",{className:"logo-text",children:"React Demo"})]})}),Object(e.jsx)("div",{className:"layout-menu-wrap",children:Object(e.jsx)(O.a,{selectedKeys:r,openKeys:pe,className:"sider-menu",theme:o.theme,mode:o.mode,onOpenChange:ge,onClick:Ne,children:Fe(U)})})]}),Object(e.jsxs)(g.a,{children:[Object(e.jsxs)(g.a.Header,{className:"layout-header",children:[o.collapsed?Object(e.jsx)(H.a,{className:"trigger",onClick:V}):Object(e.jsx)(W.a,{className:"trigger",onClick:V}),Object(e.jsx)(ae,{})]}),Object(e.jsxs)(g.a.Content,{className:"layout-content-wrap",children:[o.showBreadcrumb?Object(e.jsx)("div",{className:"layout-breadcrumb",children:Object(e.jsx)(le,{location:s,breadcrumbs:J})}):null,Object(e.jsx)("div",{className:"layout-content",children:j})]})]})]}),Object(e.jsx)(ue,{})]})}var Ve=f.default=Object(y.b)(function(a){return{theme:a.theme}})(xe)},EZUY:function(x,f,t){x.exports=t.p+"static/avatar.c8414c56.png"},"HK2/":function(x,f,t){},hgoN:function(x,f,t){},mxmt:function(x,f,t){x.exports=t.p+"static/logo.103b5fa1.svg"},trwo:function(x,f,t){}}]);