"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[9109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09",sidebar_position:5,tags:["solana-cook-book","pda"]},i="\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09",l={unversionedId:"core-concepts/pdas",id:"core-concepts/pdas",title:"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09",description:"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09\u662f\u4e3a\u4e86\u8ba9\u7279\u5b9a\u7a0b\u5e8f\u53ef\u4ee5\u63a7\u5236\u4e00\u4e9b\u8d26\u6237\u800c\u8bbe\u8ba1\u51fa\u6765\u7684\u3002\u4f7f\u7528PDA\uff0c\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u7f16\u7a0b\u65b9\u6cd5\u4e3a\u4e00\u4e9b\u5730\u5740\u8fdb\u884c\u7b7e\u540d\uff0c\u800c\u4e0d\u4e00\u5b9a\u7528\u5230\u79c1\u94a5\u3002",source:"@site/docs/cookbook-zh/core-concepts/pdas.md",sourceDirName:"core-concepts",slug:"/core-concepts/pdas",permalink:"/solana-co-learn/cookbook-zh/core-concepts/pdas",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/core-concepts/pdas.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"pda",permalink:"/solana-co-learn/cookbook-zh/tags/pda"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1698134215,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:5,frontMatter:{title:"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09",sidebar_position:5,tags:["solana-cook-book","pda"]},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u6237",permalink:"/solana-co-learn/cookbook-zh/core-concepts/accounts"},next:{title:"\u7a0b\u5e8f",permalink:"/solana-co-learn/cookbook-zh/core-concepts/programs"}},p={},s=[{value:"\u751f\u6210PDA",id:"\u751f\u6210pda",level:3},{value:"\u4e0ePDA\u4ea4\u4e92",id:"\u4e0epda\u4ea4\u4e92",level:3},{value:"Other Resources",id:"other-resources",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237pda"},"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09"),(0,r.kt)("p",null,"\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08PDA\uff09\u662f\u4e3a\u4e86\u8ba9\u7279\u5b9a\u7a0b\u5e8f\u53ef\u4ee5\u63a7\u5236\u4e00\u4e9b\u8d26\u6237\u800c\u8bbe\u8ba1\u51fa\u6765\u7684\u3002\u4f7f\u7528PDA\uff0c\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u7f16\u7a0b\u65b9\u6cd5\u4e3a\u4e00\u4e9b\u5730\u5740\u8fdb\u884c\u7b7e\u540d\uff0c\u800c\u4e0d\u4e00\u5b9a\u7528\u5230\u79c1\u94a5\u3002\nPDA\u662f",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations"},"Cross-Program Invocation\uff08\u8de8\u7a0b\u5e8f\u8c03\u7528\uff09"),"\u7684\u57fa\u7840\uff0c\n\u8fd9\u4e2a\u529f\u80fd\u8ba9Solana\u7684app\u53ef\u4ee5\u8ddf\u5176\u4ed6app\u8fdb\u884c\u7ec4\u5408\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"tip \u8981\u70b9")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"PDA\u662f\u957f\u5ea6\u4e3a32\u7684\u5b57\u8282\u4e32\uff0c\u770b\u8d77\u6765\u548c\u516c\u94a5\u5f88\u50cf\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u4e0e\u4e4b\u5bf9\u5e94\u7684\u79c1\u94a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"findProgramAddress"),"\u53ef\u4ee5\u9488\u5bf9\u4e00\u4e2aprogramId\uff08\u7a0b\u5e8fid\uff09\u548cseeds\uff08\u79cd\u5b50\uff09\u552f\u4e00\u786e\u5b9a\u7684\u751f\u6210\u4e00\u4e2aPDA\u3002\u8fd9\u91cc\u7684seeds\uff08\u79cd\u5b50\uff09\u662f\u4e00\u7ec4\u6307\u5b9a\u7684\u5b57\u8282\u4e32"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8df3\u8dc3\uff08\u4e00\u4e2a\u5b57\u8282\uff09\u7528\u4e8e\u5c06\u5019\u9009PDA\u63a8\u79bbed25519\u692d\u5706\u66f2\u7ebf"),(0,r.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u901a\u8fc7\u4f20\u5165\u79cd\u5b50\u548c\u8df3\u8dc3\u53c2\u6570\uff0c\u8c03\u7528",(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-signed-accounts"},"invoke_signed"),"\u4e3aPDA\u8fdb\u884c\u7b7e\u540d"),(0,r.kt)("li",{parentName:"ul"},"PDA\u53ea\u80fd\u88ab\u7528\u6765\u6d3e\u751f\u51fa\u8fd9\u4e2a\u5730\u5740\u7684\u7a0b\u5e8f\u6240\u7b7e\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u9664\u4e86\u5141\u8bb8\u7a0b\u5e8f\u4e3a\u4e0d\u540c\u7684instruction\u7b7e\u540d\u4e4b\u5916\uff0cPDA\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u50cf\u54c8\u5e0c\u8868\u4e00\u6837\u7684\u63a5\u53e3\uff0c\u7528\u4e8e",(0,r.kt)("a",{parentName:"li",href:"/solana-co-learn/cookbook-zh/guides/account-maps"},"\u5efa\u7acb\u8d26\u6237\u7d22\u5f15")))),(0,r.kt)("h1",{id:"\u6df1\u5165"},"\u6df1\u5165"),(0,r.kt)("p",null,"PDA\u662fSolana\u7a0b\u5e8f\u5f00\u53d1\u7684\u91cd\u8981\u6784\u6210\u8981\u7d20\u3002\u6709\u4e86PDA\uff0c\u7a0b\u5e8f\u53ef\u4ee5\u4e3a\u8d26\u6237\u7b7e\u540d\uff0c\u540c\u65f6\u4fdd\u8bc1\u6ca1\u6709\u5916\u90e8\u7528\u6237\u80fd\u591f\u4ea7\u751f\u9488\u5bf9\u540c\u4e00\u4e2a\u8d26\u6237\u7684\u6709\u6548\u7b7e\u540d\u3002\n\u9664\u4e86\u4e3a\u8d26\u6237\u7b7e\u540d\u5916\uff0c\u4e00\u4e9b\u7a0b\u5e8f\u8fd8\u53ef\u4ee5\u4fee\u6539\u81ea\u5df1\u6d3e\u751f\u51fa\u6765\u7684PDA\u91cc\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Accounts matrix",src:n(73923).Z,width:"856",height:"831"})),(0,r.kt)("h3",{id:"\u751f\u6210pda"},"\u751f\u6210PDA"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7406\u89e3PDA\u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u8ba4\u4e3aPDA\u4ece\u6280\u672f\u89d2\u5ea6\u8bb2\u5e76\u4e0d\u662f\u521b\u5efa\u51fa\u6765\u7684\uff0c\u800c\u662f\u627e\u5230\u7684\u3002PDA\u7531\u4e00\u7ec4\u79cd\u5b50\uff08\u4f8b\u5982\u5b57\u7b26\u4e32",(0,r.kt)("inlineCode",{parentName:"p"},'"vote_account"'),"\uff09\u4ee5\u53ca\u7a0b\u5e8fid\u751f\u6210\u3002\n\u8fd9\u7ec4\u79cd\u5b50\u548c\u7a0b\u5e8fid\u63a5\u4e0b\u6765\u4f1a\u653e\u5230sha256\u54c8\u5e0c\u51fd\u6570\u4e2d\u6267\u884c\u4e00\u904d\uff0c\u68c0\u67e5\u4ed6\u4eec\u4ea7\u751f\u7684\u516c\u94a5\u662f\u5426\u843d\u5728ed25519\u692d\u5706\u66f2\u7ebf\u4e0a\u3002"),(0,r.kt)("p",null,"\u5728\u7a0b\u5e8fid\u548c\u79cd\u5b50\u4e0a\u8fd0\u884c\u54c8\u5e0c\u51fd\u6570\u65f6\uff0c\u6709\u5927\u7ea650%\u7684\u6982\u7387\u4f1a\u5f97\u5230\u5728\u4e00\u4e2a\u843d\u5728\u692d\u5706\u66f2\u7ebf\u4e0a\u6709\u6548\u7684\u516c\u94a5\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u5411\u8f93\u5165\u5f53\u4e2d\u52a0\u70b9\u6270\u52a8\uff0c\u7565\u5fae\u6539\u53d8\u8f93\u5165\uff0c\u518d\u8fdb\u884c\u91cd\u8bd5\u3002\n\u8fd9\u4e2a\u6270\u52a8\u7684\u6280\u672f\u540d\u79f0\u53ebbump\uff08\u8df3\u8dc3\uff09\u3002\u5728Solana\u4e2d\uff0c\u6211\u4eec\u4e00\u5f00\u59cb\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"bump = 255"),"\uff0c\u7136\u540e\u5411\u4e0b\u8fed\u4ee3bump\uff0c\u5230254\uff0c253\u7b49\u7b49\u3002\u77e5\u9053\u6211\u4eec\u80fd\u591f\u627e\u5230\u4e00\u4e2a\u4e0d\u5728\u692d\u5706\u66f2\u7ebf\u4e0a\u7684\u5730\u5740\u4e3a\u6b62\u3002\n\u8fd9\u4e2a\u770b\u8d77\u6765\u7b80\u964b\u7684\u529e\u6cd5\u53ef\u4ee5\u8ba9\u6211\u4eec\u6bcf\u6b21\u751f\u6210PDA\u7684\u65f6\u5019\u90fd\u80fd\u591f\u5f97\u5230\u552f\u4e00\u786e\u5b9a\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u843d\u5728\u692d\u5706\u66f2\u7ebf\u4e0a\u7684PDA",src:n(11375).Z,width:"861",height:"484"})),(0,r.kt)("h3",{id:"\u4e0epda\u4ea4\u4e92"},"\u4e0ePDA\u4ea4\u4e92"),(0,r.kt)("p",null,"\u751f\u6210PDA\u7684\u65f6\u5019\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"findProgramAddress"),"\u4f1a\u628a\u5f97\u5230\u7684\u5730\u5740\u548c\u7528\u6765\u5c06PDA\u78b0\u649e\u51fa\u692d\u5706\u66f2\u7ebf\u6240\u7528\u7684bump\u90fd\u8fd4\u56de\u51fa\u6765\u3002\n\u6709\u4e86\u8fd9\u4e2abump\uff0c\u7a0b\u5e8f\u5c31\u53ef\u4ee5\u5bf9\u4efb\u4f55\u9700\u8981\u8fd9\u4e2aPDA\u5730\u5740\u7684\u6307\u4ee4\u8fdb\u884c\u7b7e\u540d\u3002\u7b7e\u540d\u65f6\uff0c\u7a0b\u5e8f\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"invoke_signed"),"\u51fd\u6570\uff0c\u4f20\u5165\u6307\u4ee4\uff0c\u8d26\u6237\u5217\u8868\uff0c\u4ee5\u53ca\u7528\u4e8e\u751f\u6210PDA\u7684\u79cd\u5b50\u548cbump\u3002\n\u9664\u4e86\u4e3a\u6307\u4ee4\u7b7e\u540d\u4e4b\u5916\uff0cPDA\u5728\u4ed6\u81ea\u5df1\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"invoke_signed"),"\u51fd\u6570\u88ab\u521b\u5efa\u65f6\uff0c\u4e5f\u9700\u8981\u7b7e\u540d\u3002"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528PDA\u7f16\u5199\u7a0b\u5e8f\u65f6\uff0c\u7ecf\u5e38\u4f1a\u5c06\u8fd9\u4e2abump",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/blob/78e29e9238e555967b9125799d7d420d7d12b959/token-swap/program/src/state.rs#L100"},"\u5b58\u50a8\u5728\u8fd9\u4e2a\u8d26\u6237\u672c\u8eab\u7684\u6570\u636e\u5f53\u4e2d"),"\u3002\n\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u8f7b\u6613\u7684\u5bf9PDA\u8fdb\u884c\u9a8c\u8bc1\uff0c\u800c\u4e0d\u7528\u91cd\u65b0\u5728\u6307\u4ee4\u53c2\u6570\u5f53\u4e2d\u4f20\u5165\u8fd9\u4e2a\u503c\u3002"),(0,r.kt)("h2",{id:"other-resources"},"Other Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.brianfriel.xyz/understanding-program-derived-addresses/"},"Understanding Program Derived Addresses"))))}m.isMDXComponent=!0},73923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account-matrix-bb613c3b3be9d09e1e44f1af0575efc2.png"},11375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pda-curve-eba3d842c3ef8e7e4335366de060786a.png"}}]);