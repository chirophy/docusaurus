"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95454],{95938:(e,s,n)=>{n.d(s,{A:()=>t});let t=n.p+"assets/images/social-card-8dc2413b4f9e86328bf77575e91171d7.png"},75639:(e,s,n)=>{n.d(s,{A:()=>t});let t=n.p+"assets/images/doc-card-list-e52d727eadceb3d21cfc0f851f09aa93.png"},10369:(e,s,n)=>{n.d(s,{A:()=>t});let t=n.p+"assets/images/social-card-8dc2413b4f9e86328bf77575e91171d7.png"},24594:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var t=n(38766),i=n(62540),o=n(43023);let r={title:"Docusaurus 2.1",authors:["slorber"],tags:["release"],image:"./img/social-card.png"},a=void 0,l={image:n(95938).A,authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"DocCardList improvements",id:"doccardlist-improvements",level:3},{value:"<code>noindex</code> improvements",id:"noindex-improvements",level:3},{value:"Overriding default meta tags",id:"overriding-default-meta-tags",level:3},{value:"Ukrainian translations",id:"ukrainian-translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function d(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["We are happy to announce ",(0,i.jsx)(s.strong,{children:"Docusaurus 2.1"}),", our very first minor version release."]}),"\n",(0,i.jsxs)(s.p,{children:["The upgrade should be easy: as explained in our ",(0,i.jsx)(s.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,i.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Docusaurus 2.1 social card",src:n(10369).A+"",width:"1200",height:"600"})}),"\n",(0,i.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsx)(s.h3,{id:"doccardlist-improvements",children:"DocCardList improvements"}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8008",children:"#8008"}),", we simplified the usage of the",(0,i.jsx)(s.code,{children:"<DocCardList>"})," component, that is notably used on sidebar category generated index pages."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"items"})," prop is now optional, and will be automatically inferred from the content of the parent sidebar category:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:"import DocCardList from '@theme/DocCardList';\n- import {useCurrentSidebarCategory} from '@docusaurus/theme-common';\n\n- <DocCardList items={useCurrentSidebarCategory().items}/>\n+ <DocCardList/>\n"})}),"\n",(0,i.jsx)(s.p,{children:"Also, we made it possible to use it on any document, including regular docs not linked to any sidebar category."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"simplified DocCardList component",src:n(75639).A+"",width:"1062",height:"489"})}),"\n",(0,i.jsxs)(s.h3,{id:"noindex-improvements",children:[(0,i.jsx)(s.code,{children:"noindex"})," improvements"]}),"\n",(0,i.jsxs)(s.p,{children:["We improved the support of the ",(0,i.jsxs)(s.a,{href:"https://developers.google.com/search/docs/advanced/crawling/block-indexing",children:[(0,i.jsx)(s.code,{children:"noindex"})," meta ",(0,i.jsx)(s.code,{children:"robots"})," directive"]}),", a way to signal search engines you don't want a specific page to be indexed."]}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7963",children:"#7963"}),", we allow ",(0,i.jsx)(s.code,{children:"noindex"})," to be configured on a per-docs-version basis."]}),"\n",(0,i.jsxs)(s.p,{children:["Use the following plugin options to tell crawlers you don't want the ",(0,i.jsx)(s.code,{children:"1.0.0"})," version to be indexed:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"const options = {\n  versions: {\n    '1.0.0': {\n      noIndex: true,\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"In practice, Docusaurus will add the following meta to each page of that version:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<meta name="robots" content="noindex, nofollow" />\n'})}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7964",children:"#7964"}),", we also fixed a bug where the sitemap plugin would still contain pages that have a ",(0,i.jsx)(s.code,{children:"noindex"})," directive. Now the sitemap plugin will reliably filter out all the pages containing ",(0,i.jsx)(s.code,{children:"noindex"})," directives."]}),"\n",(0,i.jsx)(s.h3,{id:"overriding-default-meta-tags",children:"Overriding default meta tags"}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7952",children:"#7952"}),", it becomes possible to override default html meta tags you couldn't before:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:'<>\n  {siteConfig.noIndex && <meta name="robots" content="nofollow, noindex" />}\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n</>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["It is now possible to use ",(0,i.jsx)(s.code,{children:"<Head>"})," or ",(0,i.jsx)(s.code,{children:"themeConfig.metadata"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["to override the ",(0,i.jsx)(s.code,{children:"viewport"})," meta"]}),"\n",(0,i.jsxs)(s.li,{children:["to override the ",(0,i.jsx)(s.code,{children:"robots"})," meta: you could mark your site as ",(0,i.jsx)(s.code,{children:"noIndex"}),", but except for specific pages that should be indexed"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ukrainian-translations",children:"Ukrainian translations"}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7953",children:"#7953"}),", we added default classic theme translations for the Ukrainian language."]}),"\n",(0,i.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,i.jsxs)(s.p,{children:["Check the ",(0,i.jsx)(s.a,{href:"/changelog/2.1.0",children:"2.1.0 changelog entry"})," for an exhaustive list of changes."]})]})}function h(e={}){let{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(63696);let i={},o=t.createContext(i);function r(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}},38766:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/09/01/docusaurus-2.1","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/2022/09-01-docusaurus-2.1/index.mdx","source":"@site/blog/2022/09-01-docusaurus-2.1/index.mdx","title":"Docusaurus 2.1","description":"We are happy to announce Docusaurus 2.1, our very first minor version release.","date":"2022-09-01T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":1.725,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 2.1","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png"},"unlisted":false,"lastUpdatedAt":1728059214000,"lastUpdatedBy":"S\xe9bastien Lorber","prevItem":{"title":"Docusaurus 2.2","permalink":"/blog/releases/2.2"},"nextItem":{"title":"Announcing Docusaurus 2.0","permalink":"/blog/2022/08/01/announcing-docusaurus-2.0"}}')}}]);