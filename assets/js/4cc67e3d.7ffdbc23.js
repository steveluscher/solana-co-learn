"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[8494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,d=u["".concat(s,".").concat(m)]||u[m]||k[m]||r;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Solana\u79d8\u7c4d",sidebar_position:0,slug:"/",tags:["solana-cook-book","solana"]},l="Solana\u79d8\u7c4d",i={unversionedId:"README",id:"README",title:"Solana\u79d8\u7c4d",description:"\u300aSolana \u79d8\u7c4d\u300b\u4e2d\u6587\u53d6\u81ea\uff1aSolana Cookbook\u4ed3\u5e93\u91cc\u9762\u5df2\u7ecf\u6709\u7684\u4e2d\u6587\u7248\u672c\u3002\u540e\u671f\u4f1a\u6839\u636e\u5b98\u65b9\u7684\u66f4\u65b0\u53ca\u65f6\u66f4\u65b0\u4e2d\u6587\u7248\u672c\uff0c\u7531All in One Solana \u793e\u533a\u7ef4\u62a4\u3002",source:"@site/docs/cookbook-zh/README.md",sourceDirName:".",slug:"/",permalink:"/solana-co-learn/cookbook-zh/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/README.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"solana",permalink:"/solana-co-learn/cookbook-zh/tags/solana"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1698134215,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:0,frontMatter:{title:"Solana\u79d8\u7c4d",sidebar_position:0,slug:"/",tags:["solana-cook-book","solana"]},sidebar:"tutorialSidebar",next:{title:"\u5f00\u59cb",permalink:"/solana-co-learn/cookbook-zh/getting-started/"}},s={},p=[{value:"\u8d21\u732e\u4ee3\u7801",id:"\u8d21\u732e\u4ee3\u7801",level:2},{value:"\u5982\u4f55\u9605\u8bfbSolana\u79d8\u7c4d",id:"\u5982\u4f55\u9605\u8bfbsolana\u79d8\u7c4d",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solana\u79d8\u7c4d"},"Solana\u79d8\u7c4d"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u300aSolana \u79d8\u7c4d\u300b\u4e2d\u6587\u53d6\u81ea\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://solanacookbook.com/"},"Solana Cookbook"),"\u4ed3\u5e93\u91cc\u9762\u5df2\u7ecf\u6709\u7684\u4e2d\u6587\u7248\u672c\u3002\u540e\u671f\u4f1a\u6839\u636e\u5b98\u65b9\u7684\u66f4\u65b0\u53ca\u65f6\u66f4\u65b0\u4e2d\u6587\u7248\u672c\uff0c\u7531All in One Solana \u793e\u533a\u7ef4\u62a4\u3002")),(0,o.kt)("p",null,"\u300aSolana\u79d8\u7c4d\u300b\u529b\u56fe\u4e3a\u4f60\u63d0\u4f9b\u5728Solana\u516c\u94fe\u4e0a\u7f16\u5199\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u6240\u9700\u7684\u6838\u5fc3\u6982\u5ff5\u3001 \u53c2\u8003\u3002\n\u6bcf\u4e2a\u6982\u5ff5\u548c\u53c2\u8003\u90fd\u4f1a\u805a\u7126\u4e8eSolana\u5f00\u53d1\u4e2d\u7684\u67d0\u4e2a\u5177\u4f53\u65b9\u9762\uff0c\u540c\u65f6\u63d0\u4f9b\u989d\u5916\u7684\u6280\u672f\u7ec6\u8282\u4ee5\u53ca\u7528\u4f8b\u3002"),(0,o.kt)("h2",{id:"\u8d21\u732e\u4ee3\u7801"},"\u8d21\u732e\u4ee3\u7801"),(0,o.kt)("p",null,"Solana\u79d8\u7c4d\u7684\u8bbe\u8ba1\u529b\u56fe\u8ba9\u65b0\u7684Solana\u5f00\u53d1\u8005\u4e5f\u80fd\u5bb9\u6613\u7684\u8d21\u732e\u4ee3\u7801\u3002\n\u5373\u4f7f\u4f60\u8fd8\u4e0d\u592a\u4e86\u89e3\u5982\u4f55\u505a\u9879\u76ee\uff0c\u8d21\u732e\u4ee3\u7801\u4e5f\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u5b66\u4e60\u8fc7\u7a0b\uff01"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/CreatorsDAO/solana-co-learn/issues"},"\u8fd9\u91cc"),"\n\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u5f85\u89e3\u51b3\u7684issue\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u8fd9\u91cc\u662f\u4e2d\u6587\u7248\u672c\u7684issue\uff0c\u5982\u679c\u4f60\u60f3\u67e5\u770b\u82f1\u6587\u7248\u672c\u7684issue\uff0c\u8bf7\u70b9\u51fb",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-developers/solana-cookbook/issues"},"\u8fd9\u91cc"),"\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u89c9\u5f97\u8fd8\u6709\u5176\u4ed6\u54ea\u4e9b\u5efa\u8bae\uff0c\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2aissue."),(0,o.kt)("h2",{id:"\u5982\u4f55\u9605\u8bfbsolana\u79d8\u7c4d"},"\u5982\u4f55\u9605\u8bfbSolana\u79d8\u7c4d"),(0,o.kt)("p",null,"Solana\u79d8\u7c4d\u5206\u4e3a\u4e0d\u540c\u7684\u7ae0\u8282\u3002\u6bcf\u4e2a\u7ae0\u8282\u90fd\u6709\u4e0d\u540c\u7684\u76ee\u6807\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7ae0\u8282"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6838\u5fc3\u6982\u5ff5"),(0,o.kt)("td",{parentName:"tr",align:null},"Solana\u7684\u57fa\u7840\u5143\u7d20\u3002\u5f00\u53d1\u8005\u6700\u597d\u80fd\u4e86\u89e3\u8fd9\u4e9b\u5185\u5bb9\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5357"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5173\u4e8e\u5f00\u53d1\u4e2d\u6240\u80fd\u7528\u5230\u7684\u5de5\u5177\u7684\u7b80\u8981\u4ecb\u7ecd\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53c2\u8003"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e38\u7528\u7684\u4ee3\u7801\u7247\u6bb5\u53c2\u8003")))))}k.isMDXComponent=!0}}]);