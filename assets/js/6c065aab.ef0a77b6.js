"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37343],{15995:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(62540);r(63696);var o=r(11750);function c({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.A)("tabItem_pnkT",r),hidden:t,children:e})}},27446:(e,t,r)=>{r.d(t,{A:()=>O});var n=r(62540),o=r(63696),c=r(11750),s=r(7846),l=r(49519),i=r(96439),a=r(19739),u=r(66904),d=r(79244);function p(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}var f=r(10709);function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function j(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function m({className:e,block:t,selectedValue:r,selectValue:o,tabValues:l}){let i=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),u=e=>{let t=e.currentTarget,n=l[i.indexOf(t)].value;n!==r&&(a(t),o(n))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=i.indexOf(e.currentTarget)+1;n=null!==(t=i[r])&&void 0!==t?t:i[0];break}case"ArrowLeft":{let t=i.indexOf(e.currentTarget)-1;n=null!==(r=i[t])&&void 0!==r?r:i[i.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",j(h({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},o),{className:(0,c.A)("tabs__item","tabItem_AQgk",null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function y({lazy:e,children:t,selectedValue:r}){let s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=s.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,c=function(e){let{values:t,children:r}=e;return(0,o.useMemo)(()=>{let e=null!=t?t:p(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[s,f]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:c})),[h,j]=function({queryString:e=!1,groupId:t}){let r=(0,l.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,a.aZ)(n),(0,o.useCallback)(e=>{var t,o;if(!n)return;let c=new URLSearchParams(r.location.search);c.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),o=o={search:c.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[m,y]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,d.Dv)(t);return[r,(0,o.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),g=(()=>{let e=null!=h?h:m;return b({value:e,tabValues:c})?e:null})();return(0,i.A)(()=>{g&&f(g)},[g]),{selectedValue:s,selectValue:(0,o.useCallback)(e=>{if(!b({value:e,tabValues:c}))throw Error(`Can't select invalid tab value=${e}`);f(e),j(e),y(e)},[j,y,c]),tabValues:c}}(e);return(0,n.jsxs)("div",{className:(0,c.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(m,h({},t,e)),(0,n.jsx)(y,h({},t,e))]})}function O(e){let t=(0,f.A)();return(0,n.jsx)(g,j(h({},e),{children:p(e.children)}),String(t))}},40576:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(62540);r(63696);var o=r(10709);function c({children:e,fallback:t}){return(0,o.A)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},59273:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(62540),o=r(63696),c=r(52711),s=r(49519);let l=o.forwardRef(function({name:e,children:t},r){let l=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(t),i=e?`${e}-${l}`:l,a=`#${i}`,u=(0,s.W6)();return(0,c.A)().collectAnchor(i),(0,n.jsx)("tr",{id:i,tabIndex:0,ref:u.location.hash===a?r:void 0,onClick:e=>{var t;let r="TD"===e.target.tagName.toUpperCase(),n=!!(null===(t=window.getSelection())||void 0===t?void 0:t.toString());r&&!n&&u.push(a)},onKeyDown:e=>{"Enter"===e.key&&u.push(a)},children:t.props.children})});function i({children:e,name:t}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[r,c]=o.Children.toArray(e.props.children),s=(0,o.useRef)(null);(0,o.useEffect)(()=>{var e;null===(e=s.current)||void 0===e||e.focus()},[s]);let i=o.Children.map(c.props.children,e=>(0,n.jsx)(l,{name:t,ref:s,children:e}));return(0,n.jsxs)("table",{className:"apiTable_e8hp",children:[r,(0,n.jsx)("tbody",{children:i})]})}},59433:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(62540);r(63696);var o=r(36372),c=r(69615),s=r(81912),l=r(27446),i=r(15995),a=r(55887);let u=void 0;function d({code:e,pluginName:t,presetOptionName:r}){let d=(0,c.ir)(u).path;return(0,n.jsxs)(l.A,{groupId:"api-config-ex",children:[(0,n.jsxs)(i.A,{value:"preset",label:(0,s.T)({message:"Preset options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.A,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,n.jsx)(o.A,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,n.jsx)(s.A,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,n.jsx)(a.A,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${r}: ${e.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,n.jsxs)(i.A,{value:"plugin",label:(0,s.T)({message:"Plugin options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.A,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,n.jsx)(a.A,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${t}',
      // highlight-start
      ${e.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},55887:(e,t,r)=>{r.d(t,{A:()=>el});var n,o,c,s={};r.r(s),r.d(s,{ButtonExample:()=>B});var l=r(62540),i=r(63696),a=r(11750),u=r(10709),d=r(55152),p=r(81912),b=r(99468),f=r(40576),h=r(1495),j=r(66659),m=r(25436);function y(){let{prism:e}=(0,m.p)(),{colorMode:t}=(0,j.G)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var g=r(43758);function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function v({children:e}){return(0,l.jsx)("div",{className:(0,a.A)("playgroundHeader_Tvsk"),children:e})}function w(){return(0,l.jsx)("div",{children:"Loading..."})}function x(){return(0,l.jsx)(f.A,{fallback:(0,l.jsx)(w,{}),children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.A,{fallback:e=>(0,l.jsx)(h.MN,O({},e)),children:(0,l.jsx)(d.pA,{})}),(0,l.jsx)(d.p1,{})]})})}function P(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:(0,l.jsx)(p.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,l.jsx)("div",{className:"playgroundPreview_mApW",children:(0,l.jsx)(x,{})})]})}function k(){let e=(0,u.A)();return(0,l.jsx)(d.w,{className:"playgroundEditor_TySg"},String(e))}function S(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{children:(0,l.jsx)(p.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,l.jsx)(k,{})]})}let E=e=>`${e};`;function A(e){var t,r,n,o,{children:c,transformCode:s}=e,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","transformCode"]);let{siteConfig:{themeConfig:a}}=(0,b.A)(),{liveCodeBlock:{playgroundPosition:u}}=a,p=y(),f=null!==(o=null===(n=i.metastring)||void 0===n?void 0:n.includes("noInline"))&&void 0!==o&&o;return(0,l.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,l.jsx)(d.Q,(t=O({code:null==c?void 0:c.replace(/\n$/,""),noInline:f,transformCode:null!=s?s:E,theme:p},i),r=r={children:"top"===u?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(P,{}),(0,l.jsx)(S,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S,{}),(0,l.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))})}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function B(e){var t,r;return(0,l.jsx)("button",(t=D({type:"button"},e),r=r={style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let N=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({React:i},i,s);var C=r(12653),T=r(19934),I=r.n(T);let L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),_=RegExp("\\{(?<range>[\\d,-]+)\\}"),$={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},R=(n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},$),o=o={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n),M=Object.keys($);function V(e,t){let r=e.map(e=>{let{start:r,end:n}=R[e];return`(?:${r}\\s*(${t.flatMap(e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)}).join("|")})\\s*${n})`}).join("|");return RegExp(`^\\s*(?:${r})\\s*$`)}function W(e){var t,r,{as:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["as"]);let c=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach(([e,n])=>{let o=t[e];o&&"string"==typeof n&&(r[o]=n)}),r}(y());return(0,l.jsx)(n,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={style:c,className:(0,a.A)(o.className,"codeBlockContainer_jDV4",C.G.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let q={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function H({children:e,className:t}){return(0,l.jsx)(W,{as:"pre",tabIndex:0,className:(0,a.A)(q.codeBlockStandalone,"thin-scrollbar",t),children:(0,l.jsx)("code",{className:q.codeBlockLines,children:e})})}var F=r(2550);let G={attributes:!0,characterData:!0,childList:!0,subtree:!0};var U=r(27663);let z={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function J({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:o}){var c,s;1===e.length&&"\n"===e[0].content&&(e[0].content="");let i=n({line:e,className:(0,a.A)(t,r&&z.codeLine)}),u=e.map((e,t)=>(0,l.jsx)("span",Q({},o({token:e})),t));return(0,l.jsxs)("span",(c=Q({},i),s=s={children:[r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:z.codeLineNumber}),(0,l.jsx)("span",{className:z.codeLineContent,children:u})]}):u,(0,l.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(s)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(s,e))}),c))}var Y=r(936);function X(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}function Z(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:t}){let[r,n]=(0,i.useState)(!1),o=(0,i.useRef)(void 0),c=(0,i.useCallback)(()=>{(0,Y.A)(e),n(!0),o.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,i.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,l.jsx)("button",{type:"button","aria-label":r?(0,p.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.A)("clean-btn",t,K.copyButton,r&&K.copyButtonCopied),onClick:c,children:(0,l.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(X,{className:K.copyButtonIcon}),(0,l.jsx)(Z,{className:K.copyButtonSuccessIcon})]})})}function et(e){var t,r;return(0,l.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let er={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function en({className:e,onClick:t,isEnabled:r}){let n=(0,p.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:t,className:(0,a.A)("clean-btn",e,r&&er.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,l.jsx)(et,{className:er.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo({children:e,className:t="",metastring:r,title:n,showLineNumbers:o,language:c}){var s,u,d,p;let{prism:{defaultLanguage:b,magicComments:f}}=(0,m.p)(),h=null==(u=null!==(s=null!=c?c:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==s?s:b)?void 0:u.toLowerCase(),j=y(),g=function(){let[e,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)(!1),o=(0,i.useRef)(null),c=(0,i.useCallback)(()=>{let r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t(e=>!e)},[o,e]),s=(0,i.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=o.current;n(e>t||o.current.querySelector("code").hasAttribute("style"))},[o]);return!function(e,t){let[r,n]=(0,i.useState)(),o=(0,i.useCallback)(()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,n]);(0,i.useEffect)(()=>{o()},[o]),function(e,t,r=G){let n=(0,F._q)(t),o=(0,F.Be)(r);(0,i.useEffect)(()=>{let t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()},[e,n,o])}(r,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(o,s),(0,i.useEffect)(()=>{s()},[e,s]),(0,i.useEffect)(()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)}),[s]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:c}}(),O=(null!==(p=null==r?void 0:null===(d=r.match(L))||void 0===d?void 0:d.groups.title)&&void 0!==p?p:"")||n,{lineClassNames:v,code:w}=function(e,t){let r=e.replace(/\n$/,""),{language:n,magicComments:o,metastring:c}=t;if(c&&_.test(c)){let e=c.match(_).groups.range;if(0===o.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=o[0].className;return{lineClassNames:Object.fromEntries(I()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:r}}if(void 0===n)return{lineClassNames:{},code:r};let s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return V(["js","jsBlock"],t);case"jsx":case"tsx":return V(["js","jsBlock","jsx"],t);case"html":return V(["js","jsBlock","html"],t);case"python":case"py":case"bash":return V(["bash"],t);case"markdown":case"md":return V(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return V(["tex"],t);case"lua":case"haskell":case"sql":return V(["lua"],t);case"wasm":return V(["wasm"],t);case"vb":case"vba":case"visual-basic":return V(["vb","rem"],t);case"vbnet":return V(["vbnet","rem"],t);case"batch":return V(["rem"],t);case"basic":return V(["rem","f90"],t);case"fsharp":return V(["js","ml"],t);case"ocaml":case"sml":return V(["ml"],t);case"fortran":return V(["f90"],t);case"cobol":return V(["cobol"],t);default:return V(M,t)}}(n,o),l=r.split("\n"),i=Object.fromEntries(o.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(o.filter(e=>e.line).map(({className:e,line:t})=>[t,e])),u=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.start,e])),d=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.end,e]));for(let e=0;e<l.length;){let t=l[e].match(s);if(!t){e+=1;continue}let r=t.slice(1).find(e=>void 0!==e);a[r]?i[a[r]].range+=`${e},`:u[r]?i[u[r]].start=e:d[r]&&(i[d[r]].range+=`${i[d[r]].start}-${e-1},`),l.splice(e,1)}r=l.join("\n");let p={};return Object.entries(i).forEach(([e,{range:t}])=>{I()(t).forEach(t=>{var r;null!==(r=p[t])&&void 0!==r||(p[t]=[]),p[t].push(e)})}),{lineClassNames:p,code:r}}(e,{metastring:r,language:h,magicComments:f}),x=null!=o?o:!!(null==r?void 0:r.includes("showLineNumbers"));return(0,l.jsxs)(W,{as:"div",className:(0,a.A)(t,h&&!t.includes(`language-${h}`)&&`language-${h}`),children:[O&&(0,l.jsx)("div",{className:q.codeBlockTitle,children:O}),(0,l.jsxs)("div",{className:q.codeBlockContent,children:[(0,l.jsx)(U.f4,{theme:j,code:w,language:null!=h?h:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>(0,l.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,a.A)(e,q.codeBlock,"thin-scrollbar"),style:t,children:(0,l.jsx)("code",{className:(0,a.A)(q.codeBlockLines,x&&q.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,l.jsx)(J,{line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:x},t))})})}),(0,l.jsxs)("div",{className:q.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,l.jsx)(en,{className:q.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,l.jsx)(ee,{className:q.codeButton,code:w})]})]})]})}function ec(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let es=(c=function(e){var t,r,{children:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]);let c=(0,u.A)(),s=i.Children.toArray(n).some(e=>(0,i.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n,a="string"==typeof s?eo:H;return(0,l.jsx)(a,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={children:s},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),String(c))},function(e){return e.live?(0,l.jsx)(A,ec({scope:N},e)):(0,l.jsx)(c,ec({},e))});function el(e){return(0,l.jsx)(es,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))}},64188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>n,toc:()=>b});let n=JSON.parse('{"id":"api/themes/theme-classic","title":"\u{1F4E6} theme-classic","description":"The classic theme for Docusaurus.","source":"@site/docs/api/themes/theme-classic.mdx","sourceDirName":"api/themes","slug":"/api/themes/@docusaurus/theme-classic","permalink":"/docs/api/themes/@docusaurus/theme-classic","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-classic.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1728059214000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/api/themes/@docusaurus/theme-classic"},"sidebar":"api","previous":{"title":"Configuration","permalink":"/docs/api/themes/configuration"},"next":{"title":"\u{1F4E6} theme-live-codeblock","permalink":"/docs/api/themes/@docusaurus/theme-live-codeblock"}}');var o=r(62540),c=r(43023),s=r(27446),l=r(15995),i=r(59273),a=r(59433);let u={sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},d="\u{1F4E6} theme-classic",p={},b=[{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function f(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-theme-classic",children:"\u{1F4E6} theme-classic"})}),"\n","\n",(0,o.jsx)(t.p,{children:"The classic theme for Docusaurus."}),"\n",(0,o.jsxs)(t.p,{children:["You can refer to the ",(0,o.jsx)(t.a,{href:"/docs/api/themes/configuration",children:"theme configuration page"})," for more details on the configuration."]}),"\n",(0,o.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,o.jsx)(l.A,{value:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-classic\n"})})}),(0,o.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-classic\n"})})}),(0,o.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-classic\n"})})})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you have installed ",(0,o.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install it as a dependency."]})}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,o.jsx)(i.A,{children:(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Option"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"customCss"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)("code",{children:"string[] | string"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"[]"})}),(0,o.jsxs)(t.td,{children:["Stylesheets to be imported globally as ",(0,o.jsx)(t.a,{href:"/docs/advanced/client#client-modules",children:"client modules"}),". Relative paths are resolved against the site directory."]})]})})]})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Most configuration for the theme is done in ",(0,o.jsx)(t.code,{children:"themeConfig"}),", which can be found in ",(0,o.jsx)(t.a,{href:"/docs/api/themes/configuration",children:"theme configuration"}),"."]})}),"\n",(0,o.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,o.jsx)(t.p,{children:"You can configure this theme through preset options or plugin options."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,o.jsx)(a.A,{pluginName:"@docusaurus/theme-classic",presetOptionName:"theme",code:"{\n  customCss: './src/css/custom.css',\n}"})]})}function h(e={}){let{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}}}]);