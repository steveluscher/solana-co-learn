"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[4911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),b=a,g=s["".concat(p,".").concat(b)]||s[b]||m[b]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},58575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={slug:"tubine",title:"Turbine Solana Block Propagation Protocol Solves the Scalability Trilemma",authors:["davirain"],tags:["blog","blockchain","solana","tubine"]},o=void 0,i={permalink:"/solana-co-learn/blog/tubine",editUrl:"https://creatorsdao.github.io/solana-co-learn/blog/blog/2023-09-28/tubine.md",source:"@site/blog/2023-09-28/tubine.md",title:"Turbine Solana Block Propagation Protocol Solves the Scalability Trilemma",description:"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8 Turbine\uff0c\u8fd9\u662f Solana \u7684\u533a\u5757\u4f20\u64ad\u534f\u8bae\uff08\u53d7 BitTorrent \u542f\u53d1\uff09\uff0c\u5b83\u89e3\u51b3\u4e86\u533a\u5757\u94fe\u53ef\u6269\u5c55\u6027\u7684\u96be\u9898\u3002",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"blog",permalink:"/solana-co-learn/blog/tags/blog"},{label:"blockchain",permalink:"/solana-co-learn/blog/tags/blockchain"},{label:"solana",permalink:"/solana-co-learn/blog/tags/solana"},{label:"tubine",permalink:"/solana-co-learn/blog/tags/tubine"}],readingTime:6.08,hasTruncateMarker:!1,authors:[{name:"Davirain",title:"Davirain Blog",url:"https://github.com/DaviRain-Su",imageURL:"https://github.com/DaviRain-Su.png",key:"davirain"}],frontMatter:{slug:"tubine",title:"Turbine Solana Block Propagation Protocol Solves the Scalability Trilemma",authors:["davirain"],tags:["blog","blockchain","solana","tubine"]},prevItem:{title:"Tower BFT Solana High Performance Implementation of PBFT",permalink:"/solana-co-learn/blog/tower-bft"},nextItem:{title:"\u4ec0\u4e48\u662fPhoenix\uff1f",permalink:"/solana-co-learn/blog/what-is-Phoenix"}},p={authorsImageUrls:[void 0]},c=[{value:"\u53ef\u6269\u5c55\u6027\u7684\u56f0\u5883",id:"\u53ef\u6269\u5c55\u6027\u7684\u56f0\u5883",level:2},{value:"Turbine \u6da1\u8f6e",id:"turbine-\u6da1\u8f6e",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8 Turbine\uff0c\u8fd9\u662f Solana \u7684\u533a\u5757\u4f20\u64ad\u534f\u8bae\uff08\u53d7 BitTorrent \u542f\u53d1\uff09\uff0c\u5b83\u89e3\u51b3\u4e86\u533a\u5757\u94fe\u53ef\u6269\u5c55\u6027\u7684\u96be\u9898\u3002"),(0,a.kt)("h2",{id:"\u53ef\u6269\u5c55\u6027\u7684\u56f0\u5883"},"\u53ef\u6269\u5c55\u6027\u7684\u56f0\u5883"),(0,a.kt)("p",null,"\u533a\u5757\u94fe\u6280\u672f\u4e2d\u7684\u53ef\u6269\u5c55\u6027\u4e09\u96be\u56f0\u5883\u90fd\u4e0e\u5e26\u5bbd\u6709\u5173\u3002\u5728\u5f53\u4eca\u7684\u5927\u591a\u6570\u533a\u5757\u94fe\u7f51\u7edc\u4e2d\uff0c\u7ed9\u5b9a\u6bcf\u4e2a\u8282\u70b9\u7684\u56fa\u5b9a\u5e26\u5bbd\u91cf\uff0c\u589e\u52a0\u8282\u70b9\u6570\u5c06\u589e\u52a0\u5c06\u6240\u6709\u6570\u636e\u4f20\u64ad\u5230\u6240\u6709\u8282\u70b9\u6240\u9700\u7684\u65f6\u95f4\u3002\u8fd9\u662f\u4e00\u4e2a\u5927\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u6709\u65e0\u6570\u7684\u673a\u4f1a\u6765\u4f18\u5316\u6570\u636e\u7684\u4f20\u64ad\u65b9\u5f0f\u3002\u6709\u8bb8\u591a\u65b0\u9896\u7684\u6570\u636e\u4f20\u64ad\u6280\u672f\uff0c\u6bcf\u79cd\u6280\u672f\u90fd\u9488\u5bf9\u7279\u5b9a\u5e94\u7528\u8fdb\u884c\u4e86\u4f18\u5316\u3002\u4f8b\u5982\uff0cBitTorrent \u7ecf\u8fc7\u4f18\u5316\uff0c\u53ef\u4f7f\u7528 TCP \u5411\u5927\u91cf\u4eba\u5458\u63d0\u4f9b\u5927\u578b\u6587\u4ef6\uff0c\u800c\u6211\u53c2\u4e0e\u7684\u9879\u76ee MediaFLO \u662f\u4e00\u79cd\u9488\u5bf9\u7269\u7406\u5c42\u6570\u636e\u4f20\u64ad\u8fdb\u884c\u4f18\u5316\u7684\u534f\u8bae\uff0c\u4ee5\u63d0\u9ad8\u65e0\u7ebf\u7f51\u7edc\u4e0a\u7684\u591a\u64ad\u6548\u7387\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\u80cc\u666f\u4e0b\uff0c\u8ba9\u6211\u4eec\u8fdb\u5165 Solana \u7684\u533a\u5757\u4f20\u64ad\u534f\u8bae Turbine\uff0c\u6765\u89e3\u91ca Solana \u7f51\u7edc\u5982\u4f55\u4f20\u64ad\u6570\u636e\u6765\u89e3\u51b3\u533a\u5757\u94fe\u53ef\u6269\u5c55\u6027\u4e09\u96be\u56f0\u5883\u3002"),(0,a.kt)("h2",{id:"turbine-\u6da1\u8f6e"},"Turbine \u6da1\u8f6e"),(0,a.kt)("p",null,"\u9ad8\u6027\u80fd\u533a\u5757\u94fe\u9762\u4e34\u7684\u6311\u6218\u4e4b\u4e00\u662f\u7f51\u7edc\u5982\u4f55\u5c06\u5927\u91cf\u6570\u636e\u4f20\u64ad\u5230\u5927\u91cf\u8282\u70b9\u3002\u4f8b\u5982\uff0c\u8ba9\u6211\u4eec\u8003\u8651\u4e00\u4e2a\u7531 20,000 \u4e2a\u9a8c\u8bc1\u8005\u7ec4\u6210\u7684\u7f51\u7edc\u3002\u9886\u5bfc\u8005\u9700\u8981\u5411\u6240\u6709 20,000 \u4e2a\u9a8c\u8bc1\u8005\u4f20\u8f93\u4e00\u4e2a 128 MB \u7684\u533a\u5757\uff08\u5927\u7ea6 500,000 \u4e2a\u4ea4\u6613 @ 250 \u5b57\u8282/\u4ea4\u6613\uff09\u3002\u7b80\u5355\u7684\u5b9e\u73b0\u5c06\u8981\u6c42\u9886\u5bfc\u8005\u4e0e\u6bcf\u4e2a\u9a8c\u8bc1\u8005\u5efa\u7acb\u552f\u4e00\u7684\u8fde\u63a5\uff0c\u5e76\u4f20\u8f93\u5b8c\u6574\u7684 128 MB 20,000 \u6b21\u3002\u6839\u672c\u6ca1\u6709\u8db3\u591f\u7684\u5e26\u5bbd\u6765\u5bb9\u7eb3\u8fd9\u4e48\u591a\u7684\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848 Turbine \u5927\u91cf\u501f\u9274\u4e86 BitTorrent\uff0c\u5c3d\u7ba1\u4e24\u8005\u5728\u4e00\u4e9b\u4e3b\u8981\u6280\u672f\u7ec6\u8282\u4e0a\u6709\u6240\u533a\u522b\u3002 Turbine \u9488\u5bf9\u6d41\u5f0f\u4f20\u8f93\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4ec5\u4f7f\u7528 UDP \u4f20\u8f93\u6570\u636e\uff0c\u5e76\u5728\u9886\u5bfc\u8005\uff08\u533a\u5757\u751f\u4ea7\u8005\uff09\u6d41\u5f0f\u4f20\u8f93\u6570\u636e\u65f6\u901a\u8fc7\u7f51\u7edc\u5b9e\u73b0\u6bcf\u4e2a\u6570\u636e\u5305\u7684\u968f\u673a\u8def\u5f84\u3002\u9886\u5bfc\u8005\u5c06\u5757\u5206\u6210\u5927\u5c0f\u6700\u5927\u4e3a 64KB \u7684\u6570\u636e\u5305\u3002\u5bf9\u4e8e 128MB \u7684\u5757\uff0c\u9886\u5bfc\u8005\u4f1a\u751f\u6210 2,000 \u4e2a 64KB \u6570\u636e\u5305\uff0c\u5e76\u5c06\u6bcf\u4e2a\u6570\u636e\u5305\u4f20\u8f93\u5230\u4e0d\u540c\u7684\u9a8c\u8bc1\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*IuaWcY17zIdSTB-g8Sd4TA.jpeg",alt:null})),(0,a.kt)("p",null,"\u53cd\u8fc7\u6765\uff0c\u6bcf\u4e2a\u9a8c\u8bc1\u5668\u5c06\u6570\u636e\u5305\u91cd\u65b0\u4f20\u8f93\u7ed9\u4e00\u7ec4\u6211\u4eec\u79f0\u4e3a\u90bb\u5c45\u7684\u5bf9\u7b49\u70b9\u3002\u60a8\u53ef\u4ee5\u5c06\u7f51\u7edc\u53ef\u89c6\u5316\u4e3a\u90bb\u57df\u6811\uff0c\u4ece\u800c\u4f7f\u7f51\u7edc\u80fd\u591f\u589e\u957f\u5230\u8fdc\u8fdc\u8d85\u8fc7 1,000 \u4e2a\u9a8c\u8bc1\u8005\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*pTDMBLbXEKQxfMmSgLEfHg.jpeg",alt:null})),(0,a.kt)("p",null,"\u6bcf\u4e2a\u90bb\u57df\u8d1f\u8d23\u5c06\u5176\u90e8\u5206\u6570\u636e\u4f20\u8f93\u5230\u5176\u4e0b\u9762\u7684\u6bcf\u4e2a\u90bb\u57df\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*vZYagCC7O6SJJcSgGuBfrQ.jpeg",alt:null})),(0,a.kt)("p",null,"\u5982\u679c\u6bcf\u4e2a\u90bb\u57df\u7531 200 \u4e2a\u8282\u70b9\u7ec4\u6210\uff0c\u5219\u4ece\u6839\u90e8\u7684\u5355\u4e2a\u9886\u5bfc\u8005\u5f00\u59cb\u7684 3 \u7ea7\u7f51\u7edc\u53ef\u4ee5\u5728 2 \u8df3\u5185\u8fbe\u5230 40,000 \u4e2a\u9a8c\u8bc1\u8005\u2014\u2014\u6216\u8005\u5047\u8bbe\u6bcf\u4e2a\u7f51\u7edc\u94fe\u8def\u5e73\u5747\u4e3a 100 \u6beb\u79d2\uff0c\u5927\u7ea6\u9700\u8981 200 \u6beb\u79d2\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u8fd9\u9879\u6280\u672f\u9762\u4e34\u7684\u6311\u6218\u662f\u5b89\u5168\u6027\u3002\u4f8b\u5982\uff1a\u654c\u5bf9\u8282\u70b9\u53ef\u4ee5\u9009\u62e9\u4e0d\u91cd\u64ad\u6570\u636e\uff0c\u6216\u8005\u91cd\u64ad\u4e0d\u6b63\u786e\u7684\u6570\u636e\u3002\u4e3a\u4e86\u5904\u7406\u5bf9\u6297\u6027\u8282\u70b9\uff0c\u9886\u5bfc\u8005\u751f\u6210\u91cc\u5fb7-\u6240\u7f57\u95e8\u64e6\u9664\u7801\u3002\u7ea0\u5220\u7801\u5141\u8bb8\u6bcf\u4e2a\u9a8c\u8bc1\u5668\u5728\u4e0d\u63a5\u6536\u6240\u6709\u6570\u636e\u5305\u7684\u60c5\u51b5\u4e0b\u91cd\u5efa\u6574\u4e2a\u5757\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2000/format:webp/1*lK2hV3_GFtiUlwA0mscdRA.jpeg",alt:null})),(0,a.kt)("p",null,"\u5982\u679c\u9886\u5bfc\u8005\u5c06\u5757\u7684 33% \u7684\u6570\u636e\u5305\u4f5c\u4e3a\u7ea0\u5220\u7801\u4f20\u8f93\uff0c\u90a3\u4e48\u7f51\u7edc\u53ef\u4ee5\u4e22\u5f03\u4efb\u610f 33% \u7684\u6570\u636e\u5305\u800c\u4e0d\u4f1a\u4e22\u5931\u8be5\u5757\u3002\u9886\u5bfc\u8005\u751a\u81f3\u53ef\u4ee5\u6839\u636e\u7f51\u7edc\u72b6\u51b5\u52a8\u6001\u8c03\u6574\u8fd9\u4e2a\u6570\u5b57\u3002\u8fd9\u4e9b\u51b3\u5b9a\u662f\u6839\u636e\u9886\u5bfc\u8005\u5728\u4e4b\u524d\u533a\u5757\u4e2d\u89c2\u5bdf\u5230\u7684\u6570\u636e\u5305\u4e22\u5931\u7387\u6765\u505a\u51fa\u7684\u3002"),(0,a.kt)("p",null,"\u5e76\u975e\u6240\u6709\u9a8c\u8bc1\u5668\u90fd\u662f\u751f\u800c\u5e73\u7b49\u7684\u3002\u6700\u91cd\u8981\u7684\u9a8c\u8bc1\u8005\u662f\u90a3\u4e9b\u62e5\u6709\u6700\u591a\u80a1\u4efd\u7684\u9a8c\u8bc1\u8005\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u76f8\u5e94\u5730\u4f18\u5148\u8003\u8651\u4f20\u64ad\u3002\u6743\u76ca\u52a0\u6743\u9009\u62e9\u7b97\u6cd5\u6784\u5efa\u6811\uff0c\u4f7f\u5f97\u8f83\u9ad8\u6743\u76ca\u7684\u9a8c\u8bc1\u8005\u4f4d\u4e8e\u66f4\u63a5\u8fd1\u9886\u5bfc\u8005\u7684\u90bb\u57df\u3002\u6bcf\u4e2a\u9a8c\u8bc1\u5668\u72ec\u7acb\u5730\u8ba1\u7b97\u540c\u4e00\u68f5\u6811\u3002\u867d\u7136\u7ea0\u5220\u7801\u53ef\u4ee5\u4fee\u590d\u6545\u969c\uff0c\u4f46\u654c\u5bf9\u8282\u70b9\u6709\u53ef\u80fd\u5c06\u81ea\u5df1\u5b9a\u4f4d\u5728\u6811\u4e2d\uff0c\u4ece\u800c\u5f15\u53d1\u9ad8\u4e8e\u5176\u7ec4\u5408\u6743\u76ca\u5927\u5c0f\u7684\u6545\u969c\uff0c\u5c24\u5176\u662f\u4e0e\u62d2\u7edd\u670d\u52a1\u653b\u51fb\u76f8\u7ed3\u5408\u65f6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u8be5\u5982\u4f55\u5e94\u5bf9\u8fd9\u79cd",(0,a.kt)("a",{parentName:"p",href:"https://www.radixdlt.com/blog/what-is-an-eclipse-attack"},"\u65e5\u98df\u653b\u51fb"),"\u5462\uff1f\u6211\u4eec\u7684\u6247\u51fa\u7b97\u6cd5\u4f7f\u7528\u57fa\u4e8e\u6570\u636e\u5305\u6570\u5b57\u7b7e\u540d\u7684\u968f\u673a\u6e90\u4e3a\u6bcf\u4e2a\u6570\u636e\u5305\u751f\u6210\u4e00\u4e2a\u6743\u76ca\u52a0\u6743\u6811\u3002\u7531\u4e8e\u6bcf\u4e2a\u6570\u636e\u5305\u91c7\u7528\u4e0d\u540c\u7684\u8def\u5f84\uff0c\u5e76\u4e14\u8def\u5f84\u4e8b\u5148\u672a\u77e5\uff0c\u56e0\u6b64\u90bb\u57df\u7ea7 Eclipse \u653b\u51fb\u5c06\u9700\u8981\u51e0\u4e4e\u5b8c\u5168\u63a7\u5236\u7f51\u7edc\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u7ea7\u522b\uff0c\u8be5\u6280\u672f\u53ef\u4ee5\u6269\u5c55\u5230 200 \u5230 1,000 \u4e2a\u8282\u70b9\u4e4b\u95f4\u3002\u652f\u6301 1 Gbps \u7684\u7f51\u5361\u6bcf\u79d2\u53ef\u4f20\u8f93\u4e00\u767e\u4e07\u4e2a\u6570\u636e\u5305\u3002\u5982\u679c\u7f51\u7edc\u8fde\u63a5\u5141\u8bb8\uff0c\u5355\u4e2a\u9a8c\u8bc1\u5668\u53ef\u4ee5\u5728\u4e00\u79d2\u949f\u5185\u5411 1,000 \u53f0\u673a\u5668\u53d1\u9001\u6700\u591a 64 KB \u7684\u6570\u636e\u5305\u3002"))}m.isMDXComponent=!0}}]);