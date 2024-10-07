"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79048],{1014:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ec});var r=n(62540),o=n(63696),i=n(11750),a=n(37554),l=n(12653),c=n(46222),s=n(98243),d=n(81912),u=n(7846),b=n(10264);let p={backToTopButton:"backToTopButton_PuQw",backToTopButtonShow:"backToTopButtonShow_YSA3"};function m(){let{shown:e,scrollToTop:t}=function({threshold:e}){let[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(!1),{startScroll:i,cancelScroll:a}=(0,u.gk)();return(0,u.Mq)(({scrollY:t},o)=>{let i=null==o?void 0:o.scrollY;i&&(r.current?r.current=!1:t>=i?(a(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))}),(0,b.$)(e=>{e.location.hash&&(r.current=!0,n(!1))}),{shown:t,scrollToTop:()=>i(0)}}({threshold:300});return(0,r.jsx)("button",{"aria-label":(0,d.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",l.G.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var f=n(53579),h=n(49519),j=n(85975),y=n(25436),O=n(65571);function g(e){var t,n;return(0,r.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({width:"20",height:"20","aria-hidden":"true"},e),n=n={children:(0,r.jsxs)("g",{fill:"#7a7a7a",children:[(0,r.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,r.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}function v({onClick:e}){return(0,r.jsx)("button",{type:"button",title:(0,d.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline","collapseSidebarButton_PUyN"),onClick:e,children:(0,r.jsx)(g,{className:"collapseSidebarButtonIcon_DI0B"})})}var x=n(7819),w=n(2550);let P=Symbol("EmptyContext"),S=o.createContext(P);function k({children:e}){let[t,n]=(0,o.useState)(null),i=(0,o.useMemo)(()=>({expandedItem:t,setExpandedItem:n}),[t]);return(0,r.jsx)(S.Provider,{value:i,children:e})}var _=n(27720),A=n(3107),C=n(36372),T=n(10709);function N({collapsed:e,categoryLabel:t,onClick:n}){return(0,r.jsx)("button",{"aria-label":e?(0,d.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,d.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),"aria-expanded":!e,type:"button",className:"clean-btn menu__caret",onClick:n})}function I(e){var t,n,{item:a,onItemClick:s,activePath:d,level:u,index:b}=e,p=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["item","onItemClick","activePath","level","index"]);let{items:m,label:f,collapsible:h,className:j,href:O}=a,{docs:{sidebar:{autoCollapseCategories:g}}}=(0,y.p)(),v=function(e){let t=(0,T.A)();return(0,o.useMemo)(()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,c.Nr)(e):void 0,[e,t])}(a),x=(0,c.w8)(a,d),k=(0,A.ys)(O,d),{collapsed:I,setCollapsed:E}=(0,_.u)({initialState:()=>!!h&&!x&&a.collapsed}),{expandedItem:D,setExpandedItem:L}=function(){let e=(0,o.useContext)(S);if(e===P)throw new w.dV("DocSidebarItemsExpandedStateProvider");return e}(),B=(e=!I)=>{L(e?null:b),E(e)};return!function({isActive:e,collapsed:t,updateCollapsed:n}){let r=(0,w.ZC)(e);(0,o.useEffect)(()=>{e&&!r&&t&&n(!1)},[e,r,t,n])}({isActive:x,collapsed:I,updateCollapsed:B}),(0,o.useEffect)(()=>{h&&null!=D&&D!==b&&g&&E(!0)},[h,D,b,E,g]),(0,r.jsxs)("li",{className:(0,i.A)(l.G.docs.docSidebarItemCategory,l.G.docs.docSidebarItemCategoryLevel(u),"menu__list-item",{"menu__list-item--collapsed":I},j),children:[(0,r.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,r.jsx)(C.A,(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({className:(0,i.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!O&&h,"menu__link--active":x}),onClick:h?e=>{null==s||s(a),O?B(!1):(e.preventDefault(),B())}:()=>{null==s||s(a)},"aria-current":k?"page":void 0,role:h&&!O?"button":void 0,"aria-expanded":h&&!O?!I:void 0,href:h?null!=v?v:"#":v},p),n=n={children:f},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t)),O&&h&&(0,r.jsx)(N,{collapsed:I,categoryLabel:f,onClick:e=>{e.preventDefault(),B()}})]}),(0,r.jsx)(_.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:I,children:(0,r.jsx)(R,{items:m,tabIndex:I?-1:0,onItemClick:s,activePath:d,level:u+1})})]})}var E=n(14652),D=n(93787);let L={menuExternalLink:"menuExternalLink_zaS2"};function B(e){var t,n,{item:o,onItemClick:a,activePath:s,level:d,index:u}=e,b=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["item","onItemClick","activePath","level","index"]);let{href:p,label:m,className:f,autoAddBaseUrl:h}=o,j=(0,c.w8)(o,s),y=(0,E.A)(p);return(0,r.jsx)("li",{className:(0,i.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(d),"menu__list-item",f),children:(0,r.jsxs)(C.A,(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({className:(0,i.A)("menu__link",!y&&L.menuExternalLink,{"menu__link--active":j}),autoAddBaseUrl:h,"aria-current":j?"page":void 0,to:p},y&&{onClick:a?()=>a(o):void 0},b),n=n={children:[m,!y&&(0,r.jsx)(D.A,{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))},m)}let H={menuHtmlItem:"menuHtmlItem_t1vY"};function M({item:e,level:t,index:n}){let{value:o,defaultStyle:a,className:c}=e;return(0,r.jsx)("li",{className:(0,i.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(t),a&&[H.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:o}},n)}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function W(e){var{item:t}=e,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["item"]);switch(t.type){case"category":return(0,r.jsx)(I,G({item:t},n));case"html":return(0,r.jsx)(M,G({item:t},n));default:return(0,r.jsx)(B,G({item:t},n))}}let R=(0,o.memo)(function(e){var{items:t}=e,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["items"]);let o=(0,c.Y)(t,n.activePath);return(0,r.jsx)(k,{children:o.map((e,t)=>(0,r.jsx)(W,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({item:e,index:t},n),t))})}),F={menu:"menu_rWGR",menuWithAnnouncementBar:"menuWithAnnouncementBar_Pf08"};function V({path:e,sidebar:t,className:n}){let a=function(){let{isActive:e}=(0,x.M)(),[t,n]=(0,o.useState)(e);return(0,u.Mq)(({scrollY:t})=>{e&&n(0===t)},[e]),e&&t}();return(0,r.jsx)("nav",{"aria-label":(0,d.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",F.menu,a&&F.menuWithAnnouncementBar,n),children:(0,r.jsx)("ul",{className:(0,i.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,r.jsx)(R,{items:t,activePath:e,level:1})})})}function z(){return(0,r.jsx)("div",{style:{border:"solid thin red",padding:10,textAlign:"center"},children:"Sidebar Ad"})}function U(e){let{pathname:t}=(0,h.zy)(),n=t.includes("/tests/");return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(z,{}),(0,r.jsx)(V,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},e)),n&&(0,r.jsx)(z,{})]})}let Y={sidebar:"sidebar_vtcw",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_tZ9s",sidebarHidden:"sidebarHidden_PrHU",sidebarLogo:"sidebarLogo_UK0N"},q=o.memo(function({path:e,sidebar:t,onCollapse:n,isHidden:o}){let{navbar:{hideOnScroll:a},docs:{sidebar:{hideable:l}}}=(0,y.p)();return(0,r.jsxs)("div",{className:(0,i.A)(Y.sidebar,a&&Y.sidebarWithHideableNavbar,o&&Y.sidebarHidden),children:[a&&(0,r.jsx)(O.A,{tabIndex:-1,className:Y.sidebarLogo}),(0,r.jsx)(U,{path:e,sidebar:t}),l&&(0,r.jsx)(v,{onClick:n})]})});var K=n(2454),Z=n(97883);let Q=({sidebar:e,path:t})=>{let n=(0,Z.M)();return(0,r.jsx)("ul",{className:(0,i.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,r.jsx)(R,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})},X=o.memo(function(e){return(0,r.jsx)(K.GX,{component:Q,props:e})});function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function J(e){let t=(0,j.l)();return(0,r.jsxs)(r.Fragment,{children:[("desktop"===t||"ssr"===t)&&(0,r.jsx)(q,$({},e)),"mobile"===t&&(0,r.jsx)(X,$({},e))]})}function ee({toggleSidebar:e}){return(0,r.jsx)("div",{className:"expandButton_ockD",title:(0,d.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e,children:(0,r.jsx)(g,{className:"expandButtonIcon_H1n0"})})}let et={docSidebarContainer:"docSidebarContainer_S51O",docSidebarContainerHidden:"docSidebarContainerHidden_gbDM",sidebarViewport:"sidebarViewport_K3q9"};function en({children:e}){var t;let n=(0,s.t)();return(0,r.jsx)(o.Fragment,{children:e},null!==(t=null==n?void 0:n.name)&&void 0!==t?t:"noSidebar")}function er({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){let{pathname:a}=(0,h.zy)(),[c,s]=(0,o.useState)(!1),d=(0,o.useCallback)(()=>{c&&s(!1),!c&&(0,f.O)()&&s(!0),n(e=>!e)},[n,c]);return(0,r.jsx)("aside",{className:(0,i.A)(l.G.docs.docSidebarContainer,et.docSidebarContainer,t&&et.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(et.docSidebarContainer)&&t&&s(!0)},children:(0,r.jsx)(en,{children:(0,r.jsxs)("div",{className:(0,i.A)(et.sidebarViewport,c&&et.sidebarViewportHidden),children:[(0,r.jsx)(J,{sidebar:e,path:a,onCollapse:d,isHidden:c}),c&&(0,r.jsx)(ee,{toggleSidebar:d})]})})})}let eo={docMainContainer:"docMainContainer_EfwR",docMainContainerEnhanced:"docMainContainerEnhanced_r8nV",docItemWrapperEnhanced:"docItemWrapperEnhanced_nA1F"};function ei({hiddenSidebarContainer:e,children:t}){let n=(0,s.t)();return(0,r.jsx)("main",{className:(0,i.A)(eo.docMainContainer,(e||!n)&&eo.docMainContainerEnhanced),children:(0,r.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",eo.docItemWrapper,e&&eo.docItemWrapperEnhanced),children:t})})}function ea({children:e}){let t=(0,s.t)(),[n,i]=(0,o.useState)(!1);return(0,r.jsxs)("div",{className:"docsWrapper_lLmf",children:[(0,r.jsx)(m,{}),(0,r.jsxs)("div",{className:"docRoot_kBZ6",children:[t&&(0,r.jsx)(er,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}),(0,r.jsx)(ei,{hiddenSidebarContainer:n,children:e})]})]})}var el=n(45729);function ec(e){let t=(0,c.B5)(e);if(!t)return(0,r.jsx)(el.A,{});let{docElement:n,sidebarName:o,sidebarItems:d}=t;return(0,r.jsx)(a.e3,{className:(0,i.A)(l.G.page.docsDocPage),children:(0,r.jsx)(s.V,{name:o,items:d,children:(0,r.jsx)(ea,{children:n})})})}},45729:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(62540);n(63696);var o=n(11750),i=n(81912),a=n(37425);function l({className:e}){return(0,r.jsx)("main",{className:(0,o.A)("container margin-vert--xl",e),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(a.A,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);