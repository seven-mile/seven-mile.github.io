"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[293],{6013:function(e,t,l){l.r(t),l.d(t,{Head:function(){return m},default:function(){return c}});var n=l(4506),r=l(6540),a=l(4194),s=l(4967),o=l(9259),i=l(7528);l(7107).$W.autoAddCss=!1;var c=e=>{var t,l;let{data:i,location:c}=e;const m=(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=(null===(l=i.site.siteMetadata)||void 0===l?void 0:l.description)||"Description",u=[].concat((0,n.A)(i.allMarkdownRemark.nodes),(0,n.A)(i.allTypst.nodes));return u.sort(((e,t)=>{const l=new Date(e.frontmatter.date);return new Date(t.frontmatter.date)-l})),0===u.length?r.createElement(o.A,{location:c,title:m,subtitle:d},r.createElement(s.A,null),r.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.createElement(o.A,{location:c,title:m,subtitle:d},r.createElement("ol",{style:{listStyle:"none"}},u.map((e=>{const t=e.frontmatter.title||e.fields.slug;return r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},t))),r.createElement("small",null,e.frontmatter.date)),r.createElement("section",{className:"post-list-item-excerpt"},r.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const m=()=>r.createElement(i.A,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-6359a492525c7ba7e1ae.js.map