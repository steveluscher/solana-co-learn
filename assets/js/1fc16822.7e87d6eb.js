"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),k=l,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},92312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={sidebar_position:13,sidebar_class_name:"green",sidebar_label:"\u4eceSolana \ud83e\udd13 \u533a\u5757\u94fe\u4e2d\u8bfb\u53d6\u6570\u636e",tags:["client-side-development","solana","rpc"]},o="\u4ece Solana \ud83e\udd13 \u533a\u5757\u94fe\u8bfb\u53d6\u6570\u636e",i={unversionedId:"module1/client-side-development/read-data-from-the-solana-network/README",id:"module1/client-side-development/read-data-from-the-solana-network/README",title:"\u4ece Solana \ud83e\udd13 \u533a\u5757\u94fe\u8bfb\u53d6\u6570\u636e",description:"\u4f5c\u4e3aSolana\u5f00\u53d1\u8005\uff0c\u8fd9\u6b63\u662f\u4f60\u5b66\u4e60\u4e4b\u65c5\u7684\u8d77\u70b9\u3002\u6211\u4eec\u5c06\u4ece\u57fa\u7840\u5f00\u59cb\u2014\u2014\u4ece\u533a\u5757\u94fe\u4e2d\u8bfb\u53d6\u6570\u636e\u3002",source:"@site/docs/Solana-Co-Learn/module1/client-side-development/read-data-from-the-solana-network/README.md",sourceDirName:"module1/client-side-development/read-data-from-the-solana-network",slug:"/module1/client-side-development/read-data-from-the-solana-network/",permalink:"/solana-co-learn/Solana-Co-Learn/module1/client-side-development/read-data-from-the-solana-network/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module1/client-side-development/read-data-from-the-solana-network/README.md",tags:[{label:"client-side-development",permalink:"/solana-co-learn/Solana-Co-Learn/tags/client-side-development"},{label:"solana",permalink:"/solana-co-learn/Solana-Co-Learn/tags/solana"},{label:"rpc",permalink:"/solana-co-learn/Solana-Co-Learn/tags/rpc"}],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1725959650,formattedLastUpdatedAt:"Sep 10, 2024",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_class_name:"green",sidebar_label:"\u4eceSolana \ud83e\udd13 \u533a\u5757\u94fe\u4e2d\u8bfb\u53d6\u6570\u636e",tags:["client-side-development","solana","rpc"]},sidebar:"tutorialSidebar",previous:{title:"\u5ba2\u6237\u7aef\u5f00\u53d1",permalink:"/solana-co-learn/Solana-Co-Learn/module1/client-side-development/"},next:{title:"\u270d\u5c06\u6570\u636e\u5199\u5165\u533a\u5757\u94fe",permalink:"/solana-co-learn/Solana-Co-Learn/module1/client-side-development/write-data-to-the-blockchain/"}},p={},s=[{value:"\ud83d\udc5c Solana\u4e0a\u7684\u8d26\u6237",id:"-solana\u4e0a\u7684\u8d26\u6237",level:2},{value:"\ud83d\udceb \u4ece\u7f51\u7edc\u4e2d\u8bfb\u53d6",id:"-\u4ece\u7f51\u7edc\u4e2d\u8bfb\u53d6",level:2},{value:"\ud83e\udd11 \u6784\u5efa\u4e00\u4e2a\u4f59\u989d\u83b7\u53d6\u5668",id:"-\u6784\u5efa\u4e00\u4e2a\u4f59\u989d\u83b7\u53d6\u5668",level:2},{value:"\ud83d\udea2 \u6311\u6218",id:"-\u6311\u6218",level:2},{value:"\ud83d\udcda \u66f4\u591a\u5173\u4e8e\u8d26\u6237\u76f8\u5173\u7684\u8d44\u6e90",id:"-\u66f4\u591a\u5173\u4e8e\u8d26\u6237\u76f8\u5173\u7684\u8d44\u6e90",level:2}],d={toc:s},m="wrapper";function c(e){let{components:n,...r}=e;return(0,l.kt)(m,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ece-solana--\u533a\u5757\u94fe\u8bfb\u53d6\u6570\u636e"},"\u4ece Solana \ud83e\udd13 \u533a\u5757\u94fe\u8bfb\u53d6\u6570\u636e"),(0,l.kt)("p",null,"\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5f00\u53d1\u8005\uff0c\u8fd9\u6b63\u662f\u4f60\u5b66\u4e60\u4e4b\u65c5\u7684\u8d77\u70b9\u3002\u6211\u4eec\u5c06\u4ece\u57fa\u7840\u5f00\u59cb\u2014\u2014\u4ece\u533a\u5757\u94fe\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"-solana\u4e0a\u7684\u8d26\u6237"},"\ud83d\udc5c Solana\u4e0a\u7684\u8d26\u6237"),(0,l.kt)("p",null,"\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u5b57\u6bcd\u8868\u5f00\u59cb\uff0c\u6211\u4eec\u6709A\u4ee3\u8868\u8d26\u6237\u3002\u6211\u4eec\u4ece\u8d26\u6237\u5f00\u59cb\uff0c\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u7684\u667a\u80fd\u5408\u7ea6\uff08\u4e5f\u79f0\u4e3a\u201c\u7a0b\u5e8f\u201d\uff09\u662f\u65e0\u72b6\u6001\u7684\u2014\u2014\u9664\u4e86\u4ee3\u7801\u4e4b\u5916\uff0c\u5b83\u4eec\u4e0d\u5b58\u50a8\u4efb\u4f55\u4fe1\u606f\u3002\u4e00\u5207\u90fd\u5b58\u50a8\u5728\u8d26\u6237\u4e2d\uff0c\u6240\u4ee5\u8d26\u6237\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u6765\u8bf4\u81f3\u5173\u91cd\u8981\u3002\u5b83\u4eec\u8d1f\u8d23\u5b58\u50a8\u3001\u5408\u7ea6\u548c\u672c\u5730\u533a\u5757\u94fe\u7a0b\u5e8f\u7684\u7ba1\u7406\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Solana")," \u4e0a\u6709\u4e09\u79cd\u7c7b\u578b\u7684\u8d26\u6237\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6570\u636e\u5e10\u6237")," - \u5c31\u662f\u7528\u6765\u5b58\u50a8\u6570\u636e\u7684\uff01"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7a0b\u5e8f\u5e10\u6237")," - \u5b58\u50a8\u53ef\u6267\u884c\u7a0b\u5e8f\uff08\u53c8\u79f0\u667a\u80fd\u5408\u7ea6\uff09\u7684\u5730\u65b9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u539f\u751f\u8d26\u6237")," - \u7528\u4e8e\u6838\u5fc3\u533a\u5757\u94fe\u529f\u80fd\uff0c\u4f8b\u5982\u6743\u76ca\u548c\u6295\u7968\u7684\u8d26\u6237")),(0,l.kt)("p",null,"\u81f3\u4e8e\u539f\u751f\u8d26\u6237\uff0c\u662f\u533a\u5757\u94fe\u8fd0\u884c\u6240\u5fc5\u9700\u7684\uff0c\u6211\u4eec\u7a0d\u540e\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002\u76ee\u524d\uff0c\u6211\u4eec\u53ea\u5173\u6ce8\u6570\u636e\u548c\u7a0b\u5e8f\u8d26\u6237\u3002"),(0,l.kt)("p",null,"\u5728\u6570\u636e\u8d26\u6237\u65b9\u9762\uff0c\u8fd8\u6709\u4e24\u79cd\u8fdb\u4e00\u6b65\u7684\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7cfb\u7edf\u62e5\u6709\u7684\u5e10\u6237")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"PDA"),"\uff08\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff09\u5e10\u6237"))),(0,l.kt)("p",null,"\u6211\u4eec\u5f88\u5feb\u4f1a\u4ecb\u7ecd\u8fd9\u4e9b\u5177\u4f53\u662f\u4ec0\u4e48\uff0c\u73b0\u5728\u8bf7\u8ddf\u7740\u4e00\u8d77\u5b66\u4e60\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8d26\u6237\u90fd\u6709\u4e00\u4e9b\u4f60\u5e94\u8be5\u4e86\u89e3\u7684\u5b57\u6bb5\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lamports")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u6237\u62e5\u6709\u7684lamports\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"owner")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u6237\u7684\u6240\u6709\u8005\u7a0b\u5e8f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"executable")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u6237\u662f\u5426\u53ef\u4ee5\u5904\u7406\u6307\u4ee4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d26\u6237\u5b58\u50a8\u7684\u6570\u636e\u7684\u5b57\u8282\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rent_epoch")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u4e00\u4e2a\u9700\u8981\u4ed8\u79df\u91d1\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"epoch"),"\uff08\u5468\u671f\uff09")))),(0,l.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u53ea\u5173\u6ce8\u6211\u4eec\u9700\u8981\u4e86\u89e3\u7684\u90e8\u5206\uff0c\u6240\u4ee5\u5373\u4f7f\u6709\u4e9b\u5185\u5bb9\u4e0d\u90a3\u4e48\u6e05\u6670\uff0c\u4e5f\u8bf7\u52c7\u5f80\u76f4\u524d - \u6211\u4eec\u5c06\u5728\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u586b\u8865\u8fd9\u4e9b\u7a7a\u767d\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Lamport"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u7c7b\u4f3c\u4e8e\u4ee5\u592a\u574a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Gwei"),"\u3002\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Lamport"),"\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"0.000000001 SOL"),"\uff0c\u6240\u4ee5\u8fd9\u4e2a\u5b57\u6bb5\u544a\u8bc9\u6211\u4eec\u8d26\u6237\u62e5\u6709\u591a\u5c11",(0,l.kt)("inlineCode",{parentName:"p"},"SOL"),"\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8d26\u6237\u90fd\u6709\u4e00\u4e2a\u516c\u94a5\uff0c\u5c31\u50cf\u8d26\u6237\u7684\u5730\u5740\u4e00\u6837\u3002\u4f60\u77e5\u9053\u4f60\u7684\u94b1\u5305\u6709\u4e00\u4e2a\u5730\u5740\u6765\u63a5\u6536\u90a3\u4e9b\u70ab\u9177\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NFT"),"\u5417\uff1f\u8fd9\u5c31\u662f\u540c\u6837\u7684\u539f\u7406\uff01",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u5730\u5740\u53ea\u662f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"base58"),"\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"executable")," \u662f\u4e00\u4e2a\u5e03\u5c14\u5b57\u6bb5\uff0c\u8868\u793a\u8be5\u5e10\u6237\u662f\u5426\u5305\u542b\u53ef\u6267\u884c\u6570\u636e\u3002\u81f3\u4e8e\u6570\u636e\uff0c\u5c31\u662f\u5b58\u50a8\u5728\u5e10\u6237\u4e2d\u7684\u5185\u5bb9\uff0c\u81f3\u4e8e\u79df\u91d1\uff0c\u6211\u4eec\u7a0d\u540e\u4f1a\u8c08\u5230\uff01"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u4ece\u7b80\u5355\u7684\u4e8b\u60c5\u5f00\u59cb\u5b66\u4e60\u5427 :)"),(0,l.kt)("h2",{id:"-\u4ece\u7f51\u7edc\u4e2d\u8bfb\u53d6"},"\ud83d\udceb \u4ece\u7f51\u7edc\u4e2d\u8bfb\u53d6"),(0,l.kt)("p",null,"\u597d\u7684\uff0c\u6211\u4eec\u73b0\u5728\u660e\u767d\u4e86\u4ec0\u4e48\u662f\u8d26\u6237\uff0c\u90a3\u4e48\u5982\u4f55\u8bfb\u53d6\u5b83\u4eec\u5462\uff1f\u6211\u4eec\u5c06\u501f\u52a9\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON RPC")," \u7ec8\u7aef\u70b9\u7684\u5de5\u5177\uff01\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u56fe\u4e86\u89e3\uff0c\u4f60\u5c06\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Solana")," \u7f51\u7edc\u4e2d\u5145\u5f53\u5ba2\u6237\u7aef\u89d2\u8272\uff0c\u5c1d\u8bd5\u83b7\u53d6\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(94145).Z,width:"1600",height:"1035"})),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON RPC")," \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"API"),"\u6765\u83b7\u53d6\u6240\u9700\u7684\u5185\u5bb9\uff0c\u5b83\u4f1a\u4e0e\u7f51\u7edc\u6c9f\u901a\u5e76\u8fd4\u56de\u4f60\u6240\u9700\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u8981\u67e5\u8be2\u8d26\u6237\u7684\u4f59\u989d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"API"),"\u8c03\u7528\u5c06\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function getBalanceUsingJSONRPC(address: string): Promise<number> {\n    const url = clusterApiUrl('devnet')\n    console.log(url);\n    return fetch(url, {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({\n            \"jsonrpc\": \"2.0\",\n            \"id\": 1,\n            \"method\": \"getBalance\",\n            \"params\": [\n                address\n            ]\n        })\n    }).then(response => response.json())\n    .then(json => {\n        if (json.error) {\n            throw json.error\n        }\n\n        return json['result']['value'] as number;\n    })\n    .catch(error => {\n        throw error\n    })\n}\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6d89\u53ca\u4e86\u5f88\u591a\u6b65\u9aa4\u3002\u6211\u4eec\u6b63\u5728\u8fdb\u884c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"POST"),"\u8bf7\u6c42\uff0c\u8bf7\u6c42\u4f53\u4e2d\u5305\u542b\u7279\u5b9a\u7684\u53c2\u6570\u6765\u6307\u5bfc",(0,l.kt)("inlineCode",{parentName:"p"},"RPC"),"\u6267\u884c\u4ec0\u4e48\u64cd\u4f5c\u3002\u6211\u4eec\u8981\u6307\u5b9aRPC\u7684\u7248\u672c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u3001\u65b9\u6cd5\uff08\u672c\u4f8b\u4e2d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"getBalance"),"\uff09\uff0c\u4ee5\u53ca\u8be5\u65b9\u6cd5\u6240\u9700\u7684\u53c2\u6570\uff08\u672c\u4f8b\u4e2d\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"address"),"\uff09\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u5bf9\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u65b9\u6cd5\u6709\u5927\u91cf\u7684\u6837\u677f\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Web3.js SDK"),"\u3002\u4ee5\u4e0b\u662f\u6240\u9700\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {\n    const connection = new Connection(clusterApiUrl('devnet'));\n    return connection.getBalance(address);\n}\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"Solana RPC API")," \u5173\u4e8e\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"getBalance"),"\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getbalance"},"\u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"\u662f\u4e0d\u662f\u5f88\u7f8e\u89c2\uff1f\u6211\u4eec\u4ec5\u7528\u4e09\u884c\u4ee3\u7801\u5c31\u80fd\u83b7\u53d6\u67d0\u4eba\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4f59\u989d\u3002\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5982\u679c\u83b7\u53d6\u4efb\u4f55\u4eba\u7684\u94f6\u884c\u4f59\u989d\u4e5f\u80fd\u5982\u6b64\u7b80\u5355\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u5982\u4f55\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u8d26\u6237\u4e2d\u8bfb\u53d6\u6570\u636e\uff01\u867d\u7136\u8fd9\u770b\u8d77\u6765\u53ef\u80fd\u5f88\u7b80\u5355\uff0c\u4f46\u53ea\u8981\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u4f60\u5c31\u80fd\u67e5\u8be2",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u4efb\u4f55\u8d26\u6237\u7684\u4f59\u989d\u3002\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5982\u679c\u4f60\u80fd\u83b7\u53d6\u5730\u7403\u4e0a\u4efb\u4f55\u94f6\u884c\u8d26\u6237\u7684\u4f59\u989d\uff0c\u8fd9\u5c06\u662f\u591a\u4e48\u5f3a\u5927\u7684\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"-\u6784\u5efa\u4e00\u4e2a\u4f59\u989d\u83b7\u53d6\u5668"},"\ud83e\udd11 \u6784\u5efa\u4e00\u4e2a\u4f59\u989d\u83b7\u53d6\u5668"),(0,l.kt)("p",null,"\u73b0\u5728\u662f\u65f6\u5019\u6784\u5efa\u4e00\u4e2a\u901a\u7528\u7684\u4f59\u989d\u67e5\u8be2\u5668\u4e86\uff08\u5047\u8bbe\u6574\u4e2a\u5b87\u5b99\u90fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u8fd0\u884c\uff09\u3002\u8fd9\u5c06\u662f\u4e00\u4e2a\u7b80\u6d01\u800c\u5f3a\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u80fd\u67e5\u8be2",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u4efb\u4f55\u8d26\u6237\u7684\u4f59\u989d\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5728\u4f60\u7684\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u6bd4\u5982\u653e\u5728\u684c\u9762\u4e0a\u3002",(0,l.kt)("a",{parentName:"p",href:"https://github.com/all-in-one-solana/solana-intro-frontend"},"\u514b\u9686\u8d77\u59cb\u5e93"),"\u5e76\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8bbe\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/all-in-one-solana/solana-intro-frontend\ncd solana-intro-frontend\ngit checkout starter\nnpm i\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Next.js"),"\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b89\u88c5\u4e86\u6240\u6709\u4f9d\u8d56\u9879\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run dev")," \u547d\u4ee4\u542f\u52a8\u5b83\u3002\u4f60\u5e94\u8be5\u80fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"localhost\u4e0a"),"\u770b\u5230\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(19667).Z,width:"1157",height:"516"})),(0,l.kt)("p",null,"\u6211\u4eec\u4e3a\u4f60\u51c6\u5907\u4e86\u4e00\u4e2a\u57fa\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Next.js"),"\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u6dfb\u52a0\u4e86\u4e00\u4e9b\u6837\u5f0f\u3002\u5982\u679c\u4f60\u5728\u5730\u5740\u680f\u4e2d\u8f93\u5165\u5e76\u70b9\u51fb\u201c\u68c0\u67e5",(0,l.kt)("inlineCode",{parentName:"p"},"SOL"),"\u4f59\u989d\u201d\u6309\u94ae\uff0c\u4f60\u5c06\u770b\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"1,000 SOL"),"\u7684\u4f59\u989d\u663e\u793a\u3002\u73b0\u5728\u662f\u65f6\u5019\u8ba9\u5b83\u771f\u6b63\u8d77\u4f5c\u7528\u4e86\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"Solana/web3.js"),"\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @solana/web3.js\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u975e\u5e38\u7b80\u6d01\u7684\u51fd\u6570\u6765\u67e5\u8be2\u4f59\u989d\u3002\u8f6c\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u5e76\u5c06\u5176\u5bfc\u5165\u5230\u9876\u90e8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import * as web3 from '@solana/web3.js'\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u5f00\u59cb\u5904\u7406 ",(0,l.kt)("inlineCode",{parentName:"p"},"addressSubmittedHandler")," \u51fd\u6570\u3002\u9996\u5148\uff0c\u6211\u4eec\u8981\u5c06\u5730\u5740\u4ece\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u516c\u94a5\u3002\u8bb0\u4f4f\uff0c\u5730\u5740\u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u662f\u5728JS\u4e2d\u7528\u5b57\u7b26\u4e32\u8868\u793a\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const addressSubmittedHandler = (address: string) => {\n    const key = new web3.PublicKey(address);\n    setAddress(address)\n    setBalance(1000)\n}\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u9a8c\u8bc1\u4f60\u8f93\u5165\u7684\u5185\u5bb9\u662f\u5426\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5730\u5740\u3002\u73b0\u5728\uff0c\u5982\u679c\u4f60\u5728\u5730\u5740\u680f\u4e2d\u8f93\u5165\u7684\u5185\u5bb9\u4e0d\u662f\u4e00\u4e2a\u5bc6\u94a5\uff0c\u5e94\u7528\u7a0b\u5e8f\u4f1a\u5d29\u6e83\u3002\u5f88\u597d\uff01"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u8981\u4f7f\u7528\u8fd9\u4e2a\u5bc6\u94a5\u5efa\u7acb\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"JSON RPC"),"\u3002\u901a\u8fc7\u8fd9\u4e2a\u8fde\u63a5\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"getBalance")," \u51fd\u6570\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"setBalance")," \u8bbe\u7f6e\u7ed3\u679c\uff01\u4e0b\u9762\u662f\u5b8c\u6574\u7684\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const addressSubmittedHandler = (address: string) => {\n   const key = new web3.PublicKey(address);\n   setAddress(key.toBase58())\n\n   const connection = new web3.Connection(web3.clusterApiUrl('devnet'))\n\n   connection.getBalance(key).then(balance => {\n     setBalance(balance / web3.LAMPORTS_PER_SOL)\n   })\n}\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e9b\u65b0\u5143\u7d20\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u6b63\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"key.toBase58")," \u6765\u8bbe\u7f6e\u5730\u5740\uff0c\u8fd9\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"Solana"),"\u5730\u5740\u7684\u5b57\u7b26\u4e32\u7f16\u7801\u65b9\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u6b63\u5728\u8fde\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"devnet")," \u7f51\u7edc\uff0c\u6709\u4e09\u4e2a\u7f51\u7edc\u53ef\u4f9b\u9009\u62e9\uff1a\u4e3b\u7f51\u3001\u6d4b\u8bd5\u7f51\u548c\u5f00\u53d1\u7f51\u3002\u6211\u4eec\u5c06\u5728\u5f00\u53d1\u7f51\u4e0a\u8fdb\u884c\u6240\u6709\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u6b63\u5728\u5c06\u4f59\u989d\u4ece",(0,l.kt)("inlineCode",{parentName:"li"},"Lamports"),"\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"SOL"),"\uff0c\u56e0\u4e3a\u4f59\u989d\u662f\u4ee5",(0,l.kt)("inlineCode",{parentName:"li"},"Lamports"),"\u8fd4\u56de\u7684\uff0c\u800c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"SOL"),"\u3002")),(0,l.kt)("p",null,"\u6211\u4eec\u505a\u5b8c\u4e86\uff01\u5982\u679c\u4f60\u5728\u8fd9\u91cc\u7c98\u8d34\u4e00\u4e2a\u5730\u5740\uff0c\u4f60\u4f1a\u770b\u5230\u4f59\u989d\u663e\u793a\u3002\u786e\u4fdd\u4f60\u7684\u8d26\u6237\u6709\u5f00\u53d1\u7f51\u7edc\u4e0a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"SOL"),"\uff01\u5982\u679c\u6ca1\u6709\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6211\u7684\u8d26\u6237\u6765\u6d4b\u8bd5\u5e94\u7528 - ",(0,l.kt)("inlineCode",{parentName:"p"},"B1aLAAe4vW8nSQCetXnYqJfRxzTjnbooczwkUJAr7yMS"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6848\u4e0d\u9519\uff0c\u4f46\u5982\u679c\u5730\u5740\u8f93\u5165\u9519\u8bef\uff0c\u5c31\u4f1a\u51fa\u73b0\u4e00\u4e2a\u5f88\u96be\u5904\u7406\u7684\u9519\u8bef\u3002\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e9b\u9519\u8bef\u5904\u7406\u673a\u5236\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const addressSubmittedHandler = (address: string) => {\n  try {\n    setAddress(address)\n    const key = new web3.PublicKey(address)\n    const connection = new web3.Connection(web3.clusterApiUrl('devnet'))\n    connection.getBalance(key).then(balance => {\n      setBalance(balance / web3.LAMPORTS_PER_SOL)\n    })\n  } catch (error) {\n    setAddress('')\n    setBalance(0)\n    alert(error)\n  }\n}\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u4f60\u5c06\u4f1a\u6536\u5230\u4e00\u4e2a\u63d0\u793a\u4fe1\u606f\u4e86 :D"),(0,l.kt)("p",null,"\u54c7\u585e\uff0c\u4f60\u521a\u521a\u6210\u529f\u53d1\u5e03\u4e86\u81ea\u5df1\u7684\u7b2c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Solana"),"\u5e94\u7528\u3002\u771f\u68d2\uff01\u7ee7\u7eed\u52a0\u6cb9\uff01"),(0,l.kt)("h2",{id:"-\u6311\u6218"},"\ud83d\udea2 \u6311\u6218"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u5c0f\u6311\u6218\u6765\u8003\u9a8c\u4e00\u4e0b\u4f60\u6240\u5b66\u7684\u77e5\u8bc6\u3002\u4ece\u4f60\u521a\u521a\u5b8c\u6210\u7684\u5e94\u7528\u51fa\u53d1\uff0c\u4f60\u9700\u8981\u5728\u7528\u6237\u754c\u9762\u4e2d\u6dfb\u52a0\u4e00\u9879\u529f\u80fd\uff0c\u663e\u793a\u8f93\u5165\u7684\u5730\u5740\u662f\u5426\u4e3a\u53ef\u6267\u884c\u8d26\u6237\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(44656).Z,width:"1159",height:"635"})),(0,l.kt)("p",null,"\u8981\u5224\u65ad\u4e00\u4e2a\u8d26\u6237\u662f\u5426\u53ef\u6267\u884c\uff0c\u4f60\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"li"},"getAccountInfo")," \u6765\u83b7\u53d6\u5305\u542b\u8d26\u6237\u4fe1\u606f\u7684JSON\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u8be5\u5bf9\u8c61\u7684\u5c5e\u6027\u4ee5\u786e\u5b9a\u5176\u662f\u5426\u53ef\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"useState")," \u4e2d\u6dfb\u52a0\u53e6\u4e00\u4e2a\u8c03\u7528\uff0c\u5141\u8bb8\u4f60\u4ece\u8d26\u6237\u4fe1\u606f\u4e2d\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"executable")," \u5c5e\u6027\u503c\uff0c\u5e76\u5728\u7528\u6237\u754c\u9762\u4e2d\u5c55\u793a\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u53ef\u4f9b\u6d4b\u8bd5\u7684\u8d26\u6237\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"ComputeBudget111111111111111111111111111111"),"\u3002"),(0,l.kt)("p",null,"\u8bf7\u5c3d\u91cf\u81ea\u5df1\u5c1d\u8bd5\u89e3\u51b3\uff0c\u4e0d\u8981\u63d0\u524d\u67e5\u770b\u7b54\u6848\uff01\u76f8\u4fe1\u4f60\u4f1a\u53d1\u73b0\u6311\u6218\u5176\u5b9e\u5e76\u4e0d\u590d\u6742\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/all-in-one-solana/solana-intro-frontend/tree/challenge-solution"},"\u8fd9\u91cc"),"\u67e5\u770b\u6311\u6218\u89e3\u51b3\u65b9\u6848\u7684\u53c2\u8003\u4ee3\u7801\u3002"),(0,l.kt)("h2",{id:"-\u66f4\u591a\u5173\u4e8e\u8d26\u6237\u76f8\u5173\u7684\u8d44\u6e90"},"\ud83d\udcda \u66f4\u591a\u5173\u4e8e\u8d26\u6237\u76f8\u5173\u7684\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://solanacookbook.com/core-concepts/accounts.html#facts"},"Solana Cookbook Account")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/CreatorsDAO/all-in-one-solana/discussions/12"},"[Question] \u53ea\u6709\u6570\u636e\u8d26\u6237\u7684\u6240\u6709\u8005\u624d\u80fd\u4fee\u6539\u5176\u6570\u636e\u548c\u6263\u9664lamports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/accounts"},"Solana Docs - Accounts"))))}c.isMDXComponent=!0},44656:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/intro-frontend-challenge-7197c9f88c0d9a740868cc79d78eea74.png"},19667:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/intro-frontend-demo-33f88294945837b38d5c03a869c1a612.png"},94145:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/json-rpc-illustration-59d18581baf636ba674cb7cf65b7e850.png"}}]);