"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[509],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>d});var a=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},k=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=u(l),m=n,d=c["".concat(p,".").concat(m)]||c[m]||s[m]||r;return l?a.createElement(d,i(i({ref:t},k),{},{components:l})):a.createElement(d,i({ref:t},k))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=l[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},98697:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=l(87462),n=(l(67294),l(3905));const r={sidebar_position:6,sidebar_label:"\u533a\u5757\u94fe\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd",sidebar_class_name:"green",tags:["blockchain","basic"]},i="\u533a\u5757\u94fe\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd",o={unversionedId:"module1/block-chain-basic/README",id:"module1/block-chain-basic/README",title:"\u533a\u5757\u94fe\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd",description:"1. \u4ec0\u4e48\u662f\u533a\u5757\u94fe\uff1f",source:"@site/docs/Solana-Co-Learn/module1/block-chain-basic/README.md",sourceDirName:"module1/block-chain-basic",slug:"/module1/block-chain-basic/",permalink:"/solana-co-learn/Solana-Co-Learn/module1/block-chain-basic/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module1/block-chain-basic/README.md",tags:[{label:"blockchain",permalink:"/solana-co-learn/Solana-Co-Learn/tags/blockchain"},{label:"basic",permalink:"/solana-co-learn/Solana-Co-Learn/tags/basic"}],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1725959650,formattedLastUpdatedAt:"Sep 10, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\u533a\u5757\u94fe\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd",sidebar_class_name:"green",tags:["blockchain","basic"]},sidebar:"tutorialSidebar",previous:{title:"Solana \u57fa\u7840 (\u4e0eSolana\u7f51\u7edc\u901a\u8fc7rpc\u4ea4\u4e92)",permalink:"/solana-co-learn/Solana-Co-Learn/module1/"},next:{title:"\u672c\u5730\u5f00\u53d1\u73af\u5883\u914d\u7f6e",permalink:"/solana-co-learn/Solana-Co-Learn/module1/local_program_development/"}},p={},u=[{value:"1. \u4ec0\u4e48\u662f\u533a\u5757\u94fe\uff1f",id:"1-\u4ec0\u4e48\u662f\u533a\u5757\u94fe",level:2},{value:"1.1 \u533a\u5757\u94fe\u7684\u5b9a\u4e49",id:"11-\u533a\u5757\u94fe\u7684\u5b9a\u4e49",level:3},{value:"1.2 \u6bd4\u7279\u5e01\u548c\u533a\u5757\u94fe\u7684\u5173\u7cfb",id:"12-\u6bd4\u7279\u5e01\u548c\u533a\u5757\u94fe\u7684\u5173\u7cfb",level:3},{value:"1.3 \u533a\u5757\u94fe\u6280\u672f\u7684\u6f14\u8fdb",id:"13-\u533a\u5757\u94fe\u6280\u672f\u7684\u6f14\u8fdb",level:3},{value:"2 \u4ece\u4f7f\u7528\u8005\u7684\u89d2\u5ea6\u770b\uff0c\u533a\u5757\u94fe\u662f\u600e\u6837\u8fd0\u884c\u7684\uff1f",id:"2-\u4ece\u4f7f\u7528\u8005\u7684\u89d2\u5ea6\u770b\u533a\u5757\u94fe\u662f\u600e\u6837\u8fd0\u884c\u7684",level:2},{value:"2.1 \u6bd4\u7279\u5e01\u7684\u8fd0\u884c",id:"21-\u6bd4\u7279\u5e01\u7684\u8fd0\u884c",level:3},{value:"2.2 \u51e0\u4e2a\u91cd\u8981\u7684\u95ee\u9898",id:"22-\u51e0\u4e2a\u91cd\u8981\u7684\u95ee\u9898",level:3},{value:"3 \u4ece\u5b9e\u73b0\u7684\u89d2\u5ea6\u770b\uff0c\u770b\u533a\u5757\u94fe\u7684\u67b6\u6784",id:"3-\u4ece\u5b9e\u73b0\u7684\u89d2\u5ea6\u770b\u770b\u533a\u5757\u94fe\u7684\u67b6\u6784",level:2},{value:"3.1 \u6bd4\u7279\u5e01\u7cfb\u7edf\u67b6\u6784",id:"31-\u6bd4\u7279\u5e01\u7cfb\u7edf\u67b6\u6784",level:3},{value:"3.2 \u4ee5\u592a\u574a\u7cfb\u7edf\u67b6\u6784",id:"32-\u4ee5\u592a\u574a\u7cfb\u7edf\u67b6\u6784",level:3},{value:"3. \u901a\u5e38\u7684\u533a\u5757\u94fe\u7cfb\u7edf\u67b6\u6784",id:"3-\u901a\u5e38\u7684\u533a\u5757\u94fe\u7cfb\u7edf\u67b6\u6784",level:2},{value:"4 solana\u7684\u539f\u7406",id:"4-solana\u7684\u539f\u7406",level:2},{value:"5 \u63a8\u8350\u8d44\u6599",id:"5-\u63a8\u8350\u8d44\u6599",level:2},{value:"\u53c2\u8003\u8d44\u6599\ud83d\udcbe",id:"\u53c2\u8003\u8d44\u6599",level:2}],k={toc:u},c="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u533a\u5757\u94fe\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd"},"\u533a\u5757\u94fe\u57fa\u672c\u6982\u5ff5\u4ecb\u7ecd"),(0,n.kt)("h2",{id:"1-\u4ec0\u4e48\u662f\u533a\u5757\u94fe"},"1. \u4ec0\u4e48\u662f\u533a\u5757\u94fe\uff1f"),(0,n.kt)("h3",{id:"11-\u533a\u5757\u94fe\u7684\u5b9a\u4e49"},"1.1 \u533a\u5757\u94fe\u7684\u5b9a\u4e49"),(0,n.kt)("p",null,"\u6765\u81ea\u7ef4\u57fa\u767e\u79d1\u7684\u5b9a\u4e49\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u533a\u5757\u94fe\u662f\u501f\u7531\u5bc6\u7801\u5b66\u548c\u5171\u8bc6\u673a\u5236\u7b49\u6280\u672f\u5efa\u7acb\u4e0e\u5b58\u50a8\u5e9e\u5927\u4ea4\u6613\u8d44\u6599\u4e32\u8fde\u7684\u70b9\u5bf9\u70b9\u7f51\u8def\u7cfb\u7edf\u3002")),(0,n.kt)("p",null,"\u7f51\u7edc\u4e0a\u5176\u5b83\u4e00\u4e9b\u5b9a\u4e49\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u533a\u5757\u94fe\u662f\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u3001\u53ef\u5171\u4eab\u7684\u3001\u9632\u7be1\u6539\u7684\u5206\u5e03\u5f0f\u8d26\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u533a\u5757\u94fe\u6280\u672f\u662f\u4e00\u79cd\u9ad8\u7ea7\u6570\u636e\u5e93\u673a\u5236\uff0c\u5141\u8bb8\u5728\u4f01\u4e1a\u7f51\u7edc\u4e2d\u900f\u660e\u7684\u5171\u4eab\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u533a\u5757\u94fe\u662f\u4e00\u4e2a\u5171\u4eab\u7684\u3001\u4e0d\u53ef\u7be1\u6539\u7684\u8d26\u672c\uff0c\u65e8\u5728\u4fc3\u8fdb\u4e1a\u52a1\u7f51\u7edc\u4e2d\u7684\u4ea4\u6613\u8bb0\u5f55\u548c\u8d44\u4ea7\u8ddf\u8e2a\u6d41\u7a0b\u3002")),(0,n.kt)("p",null,"\u603b\u7ed3\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4ece\u529f\u80fd\u4e0a\u8bf4\uff0c\u533a\u5757\u94fe\u7cfb\u7edf\u662f\u4e00\u4e2a\u53bb\u4e2d\u5fc3\u5316\u7684\u3001\u53ef\u5171\u4eab\u7684\u3001\u4e0d\u53ef\u7be1\u6539\u7684\u5206\u5e03\u5f0f\u8d26\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4ece\u4f7f\u7528\u6280\u672f\u4e0a\u8bf4\uff0c\u533a\u5757\u94fe\u7cfb\u7edf\u662f\u7531\u5bc6\u7801\u5b66\u3001\u5171\u8bc6\u673a\u5236\u3001p2p\u7b49\u6280\u672f\u5efa\u7acb\u7684\u8f6f\u4ef6\u7cfb\u7edf\u3002")),(0,n.kt)("h3",{id:"12-\u6bd4\u7279\u5e01\u548c\u533a\u5757\u94fe\u7684\u5173\u7cfb"},"1.2 \u6bd4\u7279\u5e01\u548c\u533a\u5757\u94fe\u7684\u5173\u7cfb"),(0,n.kt)("p",null,"\u6bd4\u7279\u5e01\u7684\u51fa\u73b0\u6807\u5fd7\u7740\u533a\u5757\u94fe\u6280\u672f\u7684\u4ea7\u751f\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u6bd4\u7279\u5e01\u7cfb\u7edf\u7684\u4e3b\u8981\u6280\u672f\u5c31\u662f\u533a\u5757\u94fe\u6280\u672f\u3002\n\u6bd4\u7279\u5e01\u662f\u7b2c\u4e00\u4e2a\u533a\u5757\u94fe\u7cfb\u7edf\uff0c\u4e2d\u672c\u806a\u53ef\u4ee5\u8bf4\u662f\u533a\u5757\u94fe\u6280\u672f\u7684\u59cb\u7956\u3002"),(0,n.kt)("h3",{id:"13-\u533a\u5757\u94fe\u6280\u672f\u7684\u6f14\u8fdb"},"1.3 \u533a\u5757\u94fe\u6280\u672f\u7684\u6f14\u8fdb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2008\u5e74\uff0c\u4e2d\u672c\u806a\u5728\u7f51\u4e0a\u53d1\u5e03\u4e86\u4e00\u7bc7\u540d\u4e3a\u300aBitcoin: A Peer-to-Peer Electronic Cash System\u300b\u3002"),(0,n.kt)("li",{parentName:"ul"},"2008\u5e7411\u670816\u65e5\uff0c\u4e2d\u672c\u806a\u516c\u5e03\u4e86\u6bd4\u7279\u5e01\u7cfb\u7edf\u7684\u6e90\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ul"},"2009\u5e741\u67083\u65e5\uff08\u6bd4\u7279\u5e01\u7684\u521b\u4e16\u65f6\u523b\uff09\uff0c\u4e2d\u672c\u806a\u5728\u4e92\u8054\u7f51\u4e0a\u4e0a\u7ebf\u4e86\u6bd4\u7279\u5e01\u7f51\u7edc\u3002\u6bd4\u7279\u5e01\u7684\u4ea7\u751f\u6807\u5fd7\u7740\u533a\u5757\u94fe\u8fdb\u51651.0\u65f6\u4ee3\u3002"),(0,n.kt)("li",{parentName:"ul"},"2013\u5e74\uff0cV\u795e\u63d0\u51fa\uff1a\u56fe\u7075\u5b8c\u5907\u3001\u53ef\u7f16\u7a0b\u7684\u533a\u5757\u94fe\u3002\u4ece\u6b64\u4e4b\u540e\u533a\u5757\u94fe\u6709\u4e86\u667a\u80fd\u5408\u7ea6\u3002\u4ee5\u592a\u574a\u7684\u4ea7\u751f\u6807\u5fd7\u7740\u533a\u5757\u94fe\u8fdb\u51652.0\u65f6\u4ee3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4ece\u4ee5\u592a\u574a\u4e4b\u540e\uff0c\u4e0d\u65ad\u6709\u65b0\u7684\u533a\u5757\u94fe\u6280\u672f\u51fa\u73b0\uff0c\u50cf",(0,n.kt)("inlineCode",{parentName:"li"},"Solana"),"\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"Polkadot"),"\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"Comos"),"\u3001",(0,n.kt)("inlineCode",{parentName:"li"},"Near"),"\u7b49\u7b49\u3002")),(0,n.kt)("h2",{id:"2-\u4ece\u4f7f\u7528\u8005\u7684\u89d2\u5ea6\u770b\u533a\u5757\u94fe\u662f\u600e\u6837\u8fd0\u884c\u7684"},"2 \u4ece\u4f7f\u7528\u8005\u7684\u89d2\u5ea6\u770b\uff0c\u533a\u5757\u94fe\u662f\u600e\u6837\u8fd0\u884c\u7684\uff1f"),(0,n.kt)("p",null,"\u4e0b\u9762\u4e3b\u8981\u4ee5\u6bd4\u7279\u5e01\u4e3a\u4f8b\uff0c\u770b\u770b\u533a\u5757\u94fe\u7cfb\u7edf\u662f\u600e\u4e48\u8fd0\u884c\u7684\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u660e\u786e\u4e00\u4e0b\u6bd4\u7279\u5e01\u7684\u529f\u80fd\u3002\u6bd4\u7279\u5e01\u7cfb\u7edf\u662f\u4e00\u4e2a\u8f6f\u4ef6\u7cfb\u7edf\uff0c\u8fd9\u4e2a\u8f6f\u4ef6\u7cfb\u7edf\u7684\u4e3b\u8981\u529f\u80fd\u5b9e\u9645\u5c31\u662f\u8bb0\u8d26\uff0c\u8bb0\u5f55\u7684\u5185\u5bb9\u5c31\u662f\u8c01\u6709\u591a\u5c11\u4e2a\u6bd4\u7279\u5e01\uff0c\u4f8b\u5982\u201c\u5c0f\u660e\u67093\u4e2a\u6bd4\u7279\u5e01\u201d\u3002\u5f53\u7136\u6bd4\u7279\u5e01\u771f\u6b63\u7684\u8bb0\u8d26\u4e0d\u4f1a\u8fd9\u4e48\u7b80\u5355\uff0c\u56e0\u4e3a\u5b83\u5b9e\u9645\u4e0a\u662f\u4ee5\u4e00\u79cd\u53eb\u505a",(0,n.kt)("inlineCode",{parentName:"p"},"UTXO"),"\u7684\u7ed3\u6784\u5728\u8bb0\u8d26\uff0c\u4f46\u662f\u6b64\u5904\u5e0c\u671b\u5927\u5bb6\u660e\u767d\u7684\u662f\u5b83\u4e3b\u8981\u7684\u529f\u80fd\u5c31\u662f\u8bb0\u8d26\u3002"),(0,n.kt)("h3",{id:"21-\u6bd4\u7279\u5e01\u7684\u8fd0\u884c"},"2.1 \u6bd4\u7279\u5e01\u7684\u8fd0\u884c"),(0,n.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c31\u4ece\u5c0f\u660e\u548c\u5c0f\u7ea2\u4e4b\u95f4\u7684\u8f6c\u8d26\u8fc7\u7a0b\u6765\u770b\u770b\u533a\u5757\u94fe\u7cfb\u7edf\u662f\u600e\u4e48\u6837\u8fd0\u884c\u7684\u3002\ns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5047\u5b9a\u5f00\u59cb\u65f6\uff1a\u5c0f\u660e\u5df2\u7ecf\u6709\u4e863\u4e2a\u6bd4\u7279\u5e01\uff0c\u5c0f\u7ea2\u6ca1\u6709\u6bd4\u7279\u5e01\uff0c\u6b64\u65f6\u5728\u6bd4\u7279\u5e01\u7cfb\u7edf\u4e2d\u5c31\u4f1a\u7c7b\u4f3c\u8bb0\u5f55\u201c\u5c0f\u660e\uff0c 3\u4e2a\u6bd4\u7279\u5e01\u201d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u5c0f\u660e\u901a\u8fc7\u6bd4\u7279\u5e01\u7cfb\u7edf\u8f6c\u7ed9\u5c0f\u7ea21\u4e2a\u6bd4\u7279\u5e01\u540e\uff0c\u6bd4\u7279\u5e01\u7cfb\u7edf\u4e2d\u7684\u8bb0\u5f55\u5c31\u4f1a\u53d8\u6210\u201c\u5c0f\u660e\uff0c2\u4e2a\u6bd4\u7279\u5e01\uff1b\u5c0f\u7ea2\uff0c1\u4e2a\u6bd4\u7279\u5e01\u201d\u3002\n\u7279\u522b\u8bf4\u660e\uff1a\u6bd4\u7279\u5e01\u662f\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"UTXO"),"\u7684\u65b9\u5f0f\u8bb0\u8d26\uff0c\u6b64\u5904\u4e3a\u4e86\u65b9\u4fbf\u6f14\u793a\u533a\u5757\u94fe\u7cfb\u7edf\u8fd0\u884c\u7684\u8fc7\u7a0b\uff0c\u6240\u4ee5\u5bf9\u8bb0\u8d26\u4ee5\u8d26\u6237\u7c7b\u578b\u65b9\u5f0f\u505a\u66ff\u4ee3\uff0c\u5982\u9700\u4e86\u89e3\u6bd4\u7279\u5e01\u6b63\u5728\u7684\u8bb0\u8d26\u65b9\u5f0f\u8bf7\u67e5\u9605",(0,n.kt)("inlineCode",{parentName:"li"},"UTXO"),"\u76f8\u5173\u8d44\u6599\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(59753).Z,width:"1177",height:"661"})),(0,n.kt)("p",null,"\u5f53\u201c\u5c0f\u660e\u8f6c\u7ed9\u5c0f\u7ea21\u4e2a\u6bd4\u7279\u5e01\u201d\u65f6\uff0c\u5176\u53d1\u751f\u7684\u8fc7\u7a0b\u4e3b\u8981\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c0f\u660e\u901a\u8fc7\u7ec8\u7aef\uff08\u624b\u673a\u6216\u8005\u7535\u8111\uff09\u5c06\u4ea4\u6613\u53d1\u7ed9\u6bd4\u7279\u5e01\u7cfb\u7edf\u7684\u67d0\u4e2a\u8282\u70b9\uff08\u4f8b\u5982\u4e0a\u56fe\u4e2d\u7684\u8ba1\u7b97\u673a1\uff09\uff0c\u8fd9\u4e2a\u4ea4\u6613\u8bb0\u5f55\u7684\u4e3b\u8981\u4fe1\u606f\u5c31\u662f\u201c\u5c0f\u660e\u8f6c\u7ed9\u5c0f\u7ea21\u4e2a\u6bd4\u7279\u5e01\u201d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8ba1\u7b97\u673a1\u4e0a\u7684\u6bd4\u7279\u5e01\u7a0b\u5e8f\u5c31\u4f1a\u505a\u5982\u4e0b\u51e0\u4ef6\u4e8b\u60c5\uff1a"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u4ea4\u6613\u5e7f\u64ad\u7ed9\u5176\u5b83\u76f8\u8fde\u7684\u8282\u70b9\uff08\u8ba1\u7b97\u673a\u4e0a\u7684\u6bd4\u7279\u5e01\u7a0b\u5e8f\u5b9e\u9645\u4e0a\u5c31\u662f\u6bd4\u7279\u5e01\u7f51\u7edc\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9\uff0c\u540e\u9762\u6211\u4eec\u90fd\u79f0\u4e3a\u8282\u70b9\uff09\u3002")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u5176\u5b83\u8282\u70b9\u901a\u8fc7\u7f51\u7edc\u6536\u5230\u8fd9\u4e2a\u4ea4\u6613\u540e\uff0c\u4e5f\u90fd\u4f1a\u505a\u5982\u4e0b\u7684\u4e8b\u60c5\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4ea4\u6613\u7684\u5408\u6cd5\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e7f\u64ad\u7ed9\u5176\u5b83\u76f8\u8fde\u7684\u8282\u70b9\u3002")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u9664\u4e86\u4e0a\u8ff0\u7684\u4e0a\u8ff0\u7684\u52a8\u4f5c\u5916\uff0c\u6bcf\u4e2a\u8282\u70b9\u8fd8\u4f1a\u6301\u7eed\u8fdb\u884c\u6316\u77ff\u7684\u64cd\u4f5c\uff08\u8fd9\u91cc\u5047\u5b9a\u7cfb\u7edf\u4e2d\u6240\u6709\u7684\u8282\u70b9\u90fd\u662f\u5168\u8282\u70b9\uff0c\u4fbf\u4e8e\u8bf4\u660e\u539f\u7406\uff09\uff0c\u5177\u4f53\u884c\u4e3a\u4e3a\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u6536\u5230\u7684\u4ea4\u6613\u8fdb\u884c\u6253\u5305\uff0c\u6253\u5305\u4e4b\u540e\u7684\u7ed3\u6784\u53eb\u505a\u533a\u5757\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u533a\u5757\u7684\u533a\u5757\u5934\u91cc\u9762\u8981\u586b\u5145\u4e00\u4e9b\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u5305\u62ec\u524d\u4e00\u4e2a\u533a\u5757\u5934\u7684\u54c8\u5e0c\uff0c\u533a\u5757\u94fe\u4e2d\u6240\u6709\u4ea4\u6613\u54c8\u5e0c\u7684\u9ed8\u514b\u5c14\u6811\u7684\u6811\u6839\uff0c\u8fd8\u6709\u89e3\u4e00\u4e2a\u96be\u9898\u7684\u96be\u5ea6\u503c\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u6253\u5305\u597d\u7684\u533a\u5757\u5e7f\u64ad\u7ed9\u7f51\u7edc\u4e2d\u7684\u5176\u5b83\u8282\u70b9\u3002")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8282\u70b9\u6536\u5230\u533a\u5757\u540e\uff08\u6bcf\u4e2a\u8282\u70b9\u81ea\u5df1\u6253\u5305\u533a\u5757\uff0c\u540c\u65f6\u4e5f\u4f1a\u4ece\u7f51\u7edc\u4e2d\u6536\u5230\u5176\u5b83\u7684\u533a\u5757\uff09\uff0c\u4f1a\u8fdb\u884c\u5982\u4e0b\u5904\u7406\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u6536\u5230\u7684\u533a\u5757\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7136\u540e\u5c06\u65b0\u6536\u5230\u7684\u533a\u5757\u8fdb\u884c\u5b58\u50a8\uff0c\u8fd9\u6837\u6bcf\u4e2a\u8282\u70b9\u4e0a\u5c31\u4f1a\u6709\u4e00\u4e2a\u533a\u5757\u7ec4\u6210\u7684\u94fe\u6761\u5f62\u5f0f\u7684\u8d26\u672c\uff08\u56e0\u4e3a\u6bcf\u4e2a\u533a\u5757\u5934\u91cc\u9762\u6709\u524d\u4e00\u4e2a\u533a\u5757\u5934\u7684\u4fe1\u606f\uff09\u3002")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u201c\u5c0f\u660e\u8f6c\u7ed9\u5c0f\u7ea21\u4e2a\u6bd4\u7279\u5e01\u201d\u8fd9\u4e2a\u4ea4\u6613\u4fe1\u606f\u6700\u7ec8\u5c31\u88ab\u8bb0\u5f55\u5728\u67d0\u4e2a\u533a\u5757\u4e2d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u4e2a\u4fe1\u606f\u5df2\u7ecf\u88ab\u8bb0\u5f55\u5728\u6bd4\u7279\u5e01\u7cfb\u7edf\u4e2d\u4e86\uff0c\u5176\u5bf9\u5e94\u7684\u6548\u679c\u5c31\u7c7b\u4f3c\u4e8e\u8bb0\u5f55\u201c\u5c0f\u660e\uff0c2\u4e2a\u6bd4\u7279\u5e01\uff1b\u5c0f\u7ea2\uff0c1\u4e2a\u6bd4\u7279\u5e01\u201d\u3002")),(0,n.kt)("h3",{id:"22-\u51e0\u4e2a\u91cd\u8981\u7684\u95ee\u9898"},"2.2 \u51e0\u4e2a\u91cd\u8981\u7684\u95ee\u9898"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5982\u4f55\u9a8c\u8bc1\u4ea4\u6613\u7684\u5408\u6cd5\u6027\uff1f")),(0,n.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u6536\u5230\u4ea4\u6613\u540e\u5982\u4f55\u9a8c\u8bc1\u4ea4\u6613\u7684\u5408\u6cd5\u6027\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u5c31\u662f\u600e\u4e48\u77e5\u9053\u201c\u5c0f\u660e\u53ef\u4ee5\u7ed9\u5c0f\u7ea2\u8f6c1\u4e2a\u6bd4\u7279\u5e01\u201d\u3002\u8fd9\u662f\u56e0\u4e3a\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u4fdd\u5b58\u6709\u533a\u5757\u94fe\u7684\u8d26\u672c\uff08\u4e00\u4e2a\u533a\u5757\u8fde\u7740\u4e00\u4e2a\u533a\u5757\uff09\uff0c\u5728\u6536\u5230\u4ea4\u6613\u540e\uff0c\u5b83\u4f1a\u67e5\u81ea\u5df1\u8d26\u672c\u4e2d\u5bf9\u5e94\u7684\u60c5\u51b5\uff0c\u770b\u5c0f\u660e\u662f\u4e0d\u662f\u67093\u4e2a\u6bd4\u7279\u5e01\u3002"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5982\u4f55\u4fdd\u8bc1\u6316\u77ff\u7684\u8282\u70b9\u771f\u5b9e\u7684\u6253\u5305\u533a\u5757\uff1f")),(0,n.kt)("p",null,"\u4e0a\u9762\u7684\u4ea4\u6613\u76f8\u5bf9\u6765\u8bf4\u597d\u9a8c\u8bc1\uff0c\u4f46\u662f\u5982\u679c\u67d0\u4e2a\u8282\u70b9\u6253\u5305\u65f6\uff0c\u81ea\u5df1\u79c1\u81ea\u5199\u4e00\u4e2a\u4ea4\u6613\u6216\u8005\u7be1\u6539\u4e00\u4e2a\u4ea4\u6613\u5230\u533a\u5757\u4e2d\uff0c\u5176\u5b83\u533a\u5757\u600e\u4e48\u9a8c\u8bc1\uff0c\u5982\u679c\u65e0\u6cd5\u9a8c\u8bc1\u7684\u8bdd\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8d26\u672c\u7684\u53ef\u4fe1\u5ea6\u5c82\u4e0d\u662f\u65e0\u6cd5\u4fdd\u8bc1\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u5c31\u6d89\u53ca\u5230\u6bcf\u4e2a\u8282\u70b9\u6316\u77ff\u65f6\u90fd\u9700\u8981\u89e3\u51b3\u4e00\u4e2a\u96be\u9898\uff0c\u800c\u8fd9\u4e2a\u96be\u9898\u7684\u8ba1\u7b97\u9700\u8981\u4e00\u5b9a\u7684\u4ee3\u4ef7\uff08\u9700\u8981\u4e0d\u65ad\u7684\u8ba1\u7b97\uff0c\u82b1\u8d39\u7535\u8d39\uff09\uff0c\u5f53\u5b83\u6253\u5305\u7684\u533a\u5757\u88ab\u5927\u90e8\u5206\u8282\u70b9\u90fd\u52a0\u5165\u5230\u533a\u5757\u94fe\u6761\u4e2d\u540e\uff0c\u4f1a\u5f97\u5230\u76f8\u5e94\u7684\u5956\u52b1\u3002\u5f53\u5176\u5b83\u8282\u70b9\u6536\u5230\u522b\u7684\u8282\u70b9\u6253\u5305\u7684\u533a\u5757\u65f6\uff0c\u4f1a\u8fdb\u884c\u4e0b\u9762\u7684\u9a8c\u8bc1\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u8fd9\u4e2a\u96be\u9898\u7684\u7b54\u6848\u662f\u4e0d\u662f\u6b63\u786e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u662f\u4e0d\u662f\u533a\u5757\u94fe\u91cc\u9762\u7684\u6bcf\u7b14\u4ea4\u6613\u662f\u4e0d\u662f\u6b63\u786e\uff08\u4f1a\u6839\u636e\u81ea\u5df1\u672c\u5730\u7684\u8d26\u672c\u9a8c\u8bc1\u4ea4\u6613\u662f\u4e0d\u662f\u6b63\u786e\uff09\u3002")),(0,n.kt)("p",null,"\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u4f5c\u6076\u7684\u8282\u70b9\uff0c\u5f53\u5b83\u82b1\u8d39\u4e00\u5b9a\u7684\u7535\u91cf\u6253\u5305\u4e86\u4e00\u4e2a\u533a\u5757\uff0c\u800c\u6b64\u533a\u5757\u4e2d\u6709\u4e00\u7b14\u6216\u8005\u591a\u7b14\u7be1\u6539\u7684\u4ea4\u6613\uff1b\u5f53\u5176\u5b83\u8282\u70b9\u6536\u5230\u8be5\u533a\u5757\u540e\uff0c\u6839\u636e\u4e0a\u9762\u7684\u7b2c\u4e8c\u70b9\u9a8c\u8bc1\u65f6\uff0c\u9a8c\u8bc1\u4e0d\u8fc7\uff0c\u90a3\u4e48\u5c31\u4f1a\u629b\u5f03\u6b64\u533a\u5757\u3002\u6b64\u65f6\u4f5c\u6076\u8282\u70b9\u5c31\u5f97\u4e0d\u5230\u6316\u77ff\u7684\u5956\u52b1\uff0c\u4f46\u662f\u5b83\u6316\u77ff\u65f6\u662f\u82b1\u8d39\u4e86\u6210\u672c\u7684\uff0c\u8fd9\u5bf9\u5b83\u6765\u8bf4\u5e76\u4e0d\u5212\u7b97\uff0c\u6240\u4ee5\u6b63\u5e38\u6765\u8bf4\uff0c\u6316\u77ff\u7684\u8282\u70b9\u4e0d\u4f1a\u505a\u8fd9\u79cd\u5403\u529b\u4e0d\u8ba8\u597d\u7684\u4e8b\u60c5\u3002\u5373\u4f7f\u6709\u4e2a\u522b\u7684\u8282\u70b9\u505a\u8fd9\u6837\u7684\u4e8b\u60c5\uff0c\u4e5f\u4e0d\u4f1a\u5bf9\u6700\u7ec8\u7684\u7ed3\u679c\u4ea7\u751f\u5f71\u54cd\u3002"),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u591a\u4e2a\u8282\u70b9\u90fd\u5728\u6253\u5305\u533a\u5757\uff0c\u90a3\u4e48\u5f53\u5176\u5b83\u8282\u70b9\u6536\u5230\u533a\u5757\u540e\uff0c\u5fc5\u7136\u4f1a\u51fa\u73b0\u4e00\u4e2a\u9ad8\u5ea6\u6709\u591a\u4e2a\u533a\u5757\u7684\u60c5\u51b5\uff08\u5373\u6bcf\u4e2a\u533a\u5757\u7684\u524d\u4e00\u4e2a\u533a\u5757\u5934\u4fe1\u606f\u90fd\u4e00\u6837\uff09\uff0c\u90a3\u4e48\u5b58\u50a8\u65f6\u4ee5\u90a3\u4e2a\u533a\u5757\u4e2d\u7684\u4fe1\u606f\u4e3a\u51c6\uff1f")),(0,n.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u63cf\u8ff0\u662f\u4e0b\u9762\u8fd9\u79cd\u60c5\u5f62\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(37874).Z,width:"1280",height:"462"})),(0,n.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0c\u5f53\u8282\u70b95\u6536\u5230\u591a\u4e2a\u9ad8\u5ea6\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"n+1"),"\u7684\u533a\u5757\uff0c\u5b83\u7684\u533a\u5757\u94fe\u94fe\u6761\u8be5\u9009\u62e9\u90a3\u4e2a\u533a\u5757\u5462\uff1f\u5728\u6bd4\u7279\u5e01\u4e2d\uff0c\u9009\u62e9\u94fe\u6761\u6700\u957f\u7684\u4f5c\u4e3a\u6700\u7ec8\u7684\u8d26\u672c\uff0c\u5176\u5b83\u5206\u53c9\u4e0a\u7684\u533a\u5757\u5c31\u4f1a\u65e0\u6548\u3002\u6bcf\u4e2a\u77ff\u5de5\u8282\u70b9\u5728\u6316\u77ff\u65f6\uff0c\u90fd\u4f1a\u57fa\u4e8e\u81ea\u5df1\u770b\u5230\u7684\u6700\u957f\u7684\u94fe\u6761\u4e0a\u7684\u6700\u65b0\u533a\u5757\u8fdb\u884c\u6253\u5305\uff08\u4f8b\u5982\u63a5\u4e0b\u6765\u8282\u70b95\u8981\u6253\u5305\u7b2c",(0,n.kt)("inlineCode",{parentName:"p"},"n+3"),"\u4e2a\u533a\u5757\uff0c\u5b83\u5c31\u4f1a\u9009\u62e9\u5728\u4e2d\u95f4\u90a3\u4e2a\u94fe\u6761\u4e0ablock ",(0,n.kt)("inlineCode",{parentName:"p"},"n+2"),"\u4f5c\u4e3a\u7236\u533a\u5757\u6316\u77ff\u3002\uff09\uff0c\u5f53\u6240\u6709\u8282\u70b9\u90fd\u5982\u6b64\u9009\u62e9\u65f6\uff0c\u5728\u6240\u6709\u8282\u70b9\u4e0a\u7684\u94fe\u6761\u6700\u7ec8\u4f1a\u4e00\u81f4\uff08\u5c31\u662f\u90a3\u6761\u6700\u957f\u7684\u94fe\u6761\uff09\u3002"),(0,n.kt)("p",null,"\u5c0f\u7ed3\uff1a"),(0,n.kt)("p",null,"\u4e0a\u9762\u7684\u7b2c2\u548c\u7b2c3\u4e2a\u95ee\u9898\u5b9e\u9645\u4e0a\u53ef\u4ee5\u5408\u6210\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u5982\u4f55\u4fdd\u8bc1\u6240\u6709\u8282\u70b9\u4e0a\u7684\u8d26\u672c\u4e00\u81f4\uff1f\u800c\u5728\u533a\u5757\u94fe\u7cfb\u7edf\u4e2d\u89e3\u51b3\u8fd9\u90e8\u5206\u95ee\u9898\u7684\u673a\u5236\u5c31\u53eb\u505a\u5171\u8bc6\u673a\u5236\u3002"),(0,n.kt)("h2",{id:"3-\u4ece\u5b9e\u73b0\u7684\u89d2\u5ea6\u770b\u770b\u533a\u5757\u94fe\u7684\u67b6\u6784"},"3 \u4ece\u5b9e\u73b0\u7684\u89d2\u5ea6\u770b\uff0c\u770b\u533a\u5757\u94fe\u7684\u67b6\u6784"),(0,n.kt)("h3",{id:"31-\u6bd4\u7279\u5e01\u7cfb\u7edf\u67b6\u6784"},"3.1 \u6bd4\u7279\u5e01\u7cfb\u7edf\u67b6\u6784"),(0,n.kt)("p",null,"\u6839\u636e\u4e0a\u4e00\u8282\u6bd4\u7279\u5e01\u7cfb\u7edf\u7684\u8fd0\u884c\uff0c\u6211\u4eec\u5927\u81f4\u53ef\u4ee5\u77e5\u9053\u6bd4\u7279\u5e01\u7cfb\u7edf\uff08\u533a\u5757\u94fe\u7cfb\u7edf\u7c7b\u4f3c\uff09\u7684\u67b6\u6784\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u53d1\u9001\u4ea4\u6613\u5230\u6bd4\u7279\u5e01\u7cfb\u7edf\uff0c\u6240\u4ee5\u6bd4\u7279\u5e01\u7cfb\u7edf\u4e2d\u6709",(0,n.kt)("inlineCode",{parentName:"li"},"Rpc server"),"\u6216\u8005\u662f",(0,n.kt)("inlineCode",{parentName:"li"},"http server"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4e4b\u95f4\u53ef\u4ee5\u901a\u4fe1\uff0c\u4e14\u8282\u70b9\u4e4b\u95f4\u7684\u5730\u4f4d\u5bf9\u7b49\uff0c\u90a3\u4e48\u9700\u8981",(0,n.kt)("inlineCode",{parentName:"li"},"P2P"),"\u7f51\u7edc\u90e8\u5206\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u6536\u5230\u4ea4\u6613\u540e\uff0c\u9996\u5148\u662f\u5c06\u4ea4\u6613\u653e\u5728\u4ea4\u6613\u6c60\u4e2d\uff0c\u6316\u77ff\u65f6\u662f\u4ece\u4ea4\u6613\u6c60\u53d6\u51fa\u4ea4\u6613\u8fdb\u884c\u6253\u5305\uff0c\u6240\u4ee5\u9700\u8981\u4ea4\u6613\u6c60\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u4fdd\u8bc1\u6240\u6709\u8282\u70b9\u4e0a\u7684\u8d26\u672c\u4e00\u81f4\uff0c\u6240\u4ee5\u9700\u8981\u5171\u8bc6\u6a21\u5757\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u533a\u5757\u5f62\u6210\u7684\u94fe\u6761\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90fd\u662f\u6301\u4e45\u5316\u5b58\u50a8\u7684\uff0c\u6240\u4ee5\u9700\u8981\u6570\u636e\u5e93\u7528\u4e8e\u8282\u70b9\u4e0a\u6570\u636e\u7684\u6301\u4e45\u5316\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5171\u8bc6\u91cc\u9762\u6d89\u53ca\u5230\u7684\u533a\u5757\u94fe\u6761\u3001\u533a\u5757\u3001\u4ea4\u6613\u7b49\u7ed3\u6784\u7684\u4e00\u4e9b\u5b9a\u4e49\u548c\u7ec4\u7ec7\u5f62\u5f0f\uff0c\u6240\u4ee5\u9700\u8981\u8d26\u672c\u6a21\u5757\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u5b83\u8fd8\u6d89\u53ca\u5230\u4e00\u4e9b\u5b89\u5168\u3001\u52a0\u5bc6\u76f8\u5173\u7684\u6a21\u5757\u3002")),(0,n.kt)("p",null,"\u6839\u636e\u8fd9\u4e9b\u63a8\u65ad\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u6bd4\u7279\u5e01\u7684\u5927\u81f4\u67b6\u6784\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(23855).Z,width:"612",height:"447"})),(0,n.kt)("h3",{id:"32-\u4ee5\u592a\u574a\u7cfb\u7edf\u67b6\u6784"},"3.2 \u4ee5\u592a\u574a\u7cfb\u7edf\u67b6\u6784"),(0,n.kt)("p",null,"\u4e0b\u56fe\u662f\u4ece\u7f51\u7edc\u4e2d\u627e\u5230\u7684\u4ee5\u592a\u574a\u7684\u67b6\u6784\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:l(20502).Z,width:"1144",height:"874"})),(0,n.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u548c\u6bd4\u7279\u5e01\u7684\u67b6\u6784\u56fe\u5927\u4f53\u4e0a\u5dee\u4e0d\u591a\uff0c\u4e3b\u8981\u662f\u591a\u4e86\u667a\u80fd\u5408\u7ea6\u76f8\u5173\u7684\u5185\u5bb9\u3002"),(0,n.kt)("h2",{id:"3-\u901a\u5e38\u7684\u533a\u5757\u94fe\u7cfb\u7edf\u67b6\u6784"},"3. \u901a\u5e38\u7684\u533a\u5757\u94fe\u7cfb\u7edf\u67b6\u6784"),(0,n.kt)("p",null,"\u5176\u5b9e\u4ece\u524d\u9762\u7684\u6bd4\u7279\u5e01\u548c\u4ee5\u592a\u574a\u67b6\u6784\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u63a8\u65ad\u51fa\u6765\uff0c\u5927\u90e8\u5206\u533a\u5757\u94fe\u7cfb\u7edf\u7684\u67b6\u6784\u90fd\u5dee\u4e0d\u592a\u591a\uff0c\u5c24\u5176\u662f\u73b0\u5728\u5e38\u89c1\u7684\u533a\u5757\u94fe\u7cfb\u7edf\uff0c\u5176\u67b6\u6784\u90fd\u7c7b\u4f3c\u4e8e\u4ee5\u592a\u574a\u7684\u67b6\u6784\u3002\u6709\u5dee\u522b\u7684\u4e3b\u8981\u5728\u4e8e\u5171\u8bc6\u6a21\u5757\u3001\u5206\u5e03\u5f0f\u8d26\u672c\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,n.kt)("h2",{id:"4-solana\u7684\u539f\u7406"},"4 solana\u7684\u539f\u7406"),(0,n.kt)("p",null,"\u524d\u9762\u4e3b\u8981\u4ecb\u7ecd\u4e86\u533a\u5757\u94fe\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u518d\u8bb2\u8bb2",(0,n.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u76f8\u5173\u539f\u7406\u3002\u5177\u4f53\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://web3caff.com/zh/archives/14903"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u3002"),(0,n.kt)("h2",{id:"5-\u63a8\u8350\u8d44\u6599"},"5 \u63a8\u8350\u8d44\u6599"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u300a\u7cbe\u901a\u6bd4\u7279\u5e01\u300b")),(0,n.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599\ud83d\udcbe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.xinbaoku.com/blockchain/"},"https://www.xinbaoku.com/blockchain/"))))}s.isMDXComponent=!0},23855:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/bitcoin-arc-a41ce54471db66a8670d01b03b601924.png"},37874:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/blocks-0675451b5abdf0bbe82a45c32861423b.png"},20502:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/eth-arc-d56c0f42956a42331f45ee7b56256017.png"},59753:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/temps-2026880475362866b4bad3f38a5da414.png"}}]);