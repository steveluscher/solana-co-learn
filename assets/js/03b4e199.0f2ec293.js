"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[3366],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=l,b=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return t?n.createElement(b,s(s({ref:a},p),{},{components:t})):n.createElement(b,s({ref:a},p))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45579:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=t(87462),l=(t(67294),t(3905)),r=t(74866),s=t(85162);const o={title:"\u5b89\u88c5",sidebar_position:2,tags:["solana-cook-book","web3.js"]},i="\u5b89\u88c5",u={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"\u5b89\u88c5",description:"\u5b89\u88c5Web3.js",source:"@site/docs/cookbook-zh/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/solana-co-learn/cookbook-zh/getting-started/installation",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/getting-started/installation.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"web3.js",permalink:"/solana-co-learn/cookbook-zh/tags/web-3-js"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1698134215,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5",sidebar_position:2,tags:["solana-cook-book","web3.js"]},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb",permalink:"/solana-co-learn/cookbook-zh/getting-started/"},next:{title:"\u8d21\u732e",permalink:"/solana-co-learn/cookbook-zh/getting-started/contributing"}},p={},c=[{value:"\u5b89\u88c5Web3.js",id:"\u5b89\u88c5web3js",level:2},{value:"Web3.js",id:"web3js",level:3},{value:"SPL\u4ee3\u5e01\uff08SPL-Token\uff09",id:"spl\u4ee3\u5e01spl-token",level:3},{value:"\u94b1\u5305\u9002\u914d\u5668\uff08Wallet-Adapter\uff09",id:"\u94b1\u5305\u9002\u914d\u5668wallet-adapter",level:3},{value:"\u5b89\u88c5Rust",id:"\u5b89\u88c5rust",level:2},{value:"\u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177",id:"\u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177",level:2},{value:"macOS &amp; Linux",id:"macos--linux",level:3},{value:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6 \uff08linux\uff09",id:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6-linux",level:4},{value:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6 \uff08macOS\uff09",id:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6-macos",level:4},{value:"Windows",id:"windows",level:3},{value:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6",level:4},{value:"\u4ece\u6e90\u7801\u7f16\u8bd1",id:"\u4ece\u6e90\u7801\u7f16\u8bd1",level:3}],m={toc:c},d="wrapper";function b(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h2",{id:"\u5b89\u88c5web3js"},"\u5b89\u88c5Web3.js"),(0,l.kt)("p",null,"\u7528JavaScript\u6216\u8005TypeScript\u8fdb\u884cSolana\u7f16\u7a0b\u65f6\uff0c\u4f60\u4f1a\u7528\u5230\u4e0b\u9762\u7684\u51e0\u4e2a\u5e93\u3002",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"web3js"},"Web3.js"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/"},(0,l.kt)("inlineCode",{parentName:"a"},"@solana/web3.js")),"\n\u8fd9\u4e2a\u5e93\u63d0\u4f9b\u4e86\u5f88\u591a\u7528\u4e8e\u4e0eSolana\u4ea4\u4e92\uff0c\u53d1\u9001\u4ea4\u6613\uff0c\u4ece\u533a\u5757\u94fe\u4e0a\u8bfb\u53d6\u6570\u636e\u7b49\u64cd\u4f5c\u7684\u57fa\u7840\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @solana/web3.js\n"))),(0,l.kt)(s.Z,{value:"NPM",label:"Npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @solana/web3.js\n"))),(0,l.kt)(s.Z,{value:"browser",label:"browser",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Development (un-minified) --\x3e\n<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.js"><\/script>\n\n\x3c!-- Production (minified) --\x3e\n<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"><\/script>\n')))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"spl\u4ee3\u5e01spl-token"},"SPL\u4ee3\u5e01\uff08SPL-Token\uff09"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@solana/spl-token")," \u8fd9\u4e2a\u5e93\u63d0\u4f9b\u4e86\u5f88\u591a\u7528\u4e8e\u4e0eSPL\u4ee3\u5e01\uff08SPL tokens\uff09\u4ea4\u4e92\u6240\u9700\u7684JavaScript/TypeScript\u7ed1\u5b9a\u51fd\u6570\u3002\n\u53ef\u4ee5\u7528\u8fd9\u4e2a\u5e93\u6765\u94f8\u9020\u65b0\u7684SPL\u4ee3\u5e01\uff0c\u8fdb\u884c\u8f6c\u8d26\uff0c\u4ee5\u53ca\u5176\u4ed6\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"YARN",label:"YARN",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @solana/spl-token\n"))),(0,l.kt)(s.Z,{value:"NPM",label:"NPM",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @solana/spl-token\n"))),(0,l.kt)(s.Z,{value:"BROWSER",label:"BROWSER",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Development (un-minified) --\x3e\n<script src="https://unpkg.com/@solana/spl-token@latest/lib/index.iife.js"><\/script>\n\n\x3c!-- Production (minified) --\x3e\n<script src="https://unpkg.com/@solana/spl-token@latest/lib/index.iife.min.js"><\/script>\n')))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u94b1\u5305\u9002\u914d\u5668wallet-adapter"},"\u94b1\u5305\u9002\u914d\u5668\uff08Wallet-Adapter\uff09"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u7ec4\u7528\u4e8e\u8fde\u63a5Solana\u516c\u94fe\u94b1\u5305\u7684\u5e93\uff0c\u79f0\u4e3a\u94b1\u5305\u9002\u914d\u5668\u3002\n\u76ee\u524d\u8fd9\u4e9b\u8f6f\u4ef6\u5305\u652f\u6301Angular\uff0cVue.js\uff0c\u4ee5\u53caReact\u3002\u94b1\u5305\u9002\u914d\u5668\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7684dApp\u5f88\u5feb\u7684\u4e0e\u8bf8\u5982",(0,l.kt)("a",{parentName:"p",href:"https://phantom.app/"},"Phantom"),"\uff0c\n",(0,l.kt)("a",{parentName:"p",href:"https://solflare.com/"},"Solflare"),"\u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u94b1\u5305\u8fdb\u884c\u6574\u5408\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"YARN",label:"YARN",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @solana/wallet-adapter-wallets \\\n    @solana/wallet-adapter-base\n"))),(0,l.kt)(s.Z,{value:"NPM",label:"NPM",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @solana/wallet-adapter-wallets \\\n    @solana/wallet-adapter-base\n")))),(0,l.kt)("h2",{id:"\u5b89\u88c5rust"},"\u5b89\u88c5Rust"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"MACOS",label:"MACOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,l.kt)(s.Z,{value:"LINUX",label:"LINUX",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")))),(0,l.kt)("p",null,"Windows\u7528\u6237\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust\u5b89\u88c5\u6307\u5f15"),"."),(0,l.kt)("h2",{id:"\u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177"},"\u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("h3",{id:"macos--linux"},"macOS & Linux"),(0,l.kt)("p",null,"\u6253\u5f00Terminal\u3002"),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"LATEST_RELEASE")," \u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u7684\u7248\u672c\uff0c\u7528\u4ee5\u4e0b\u811a\u672c\u5728\u4f60\u7684\u7cfb\u7edf\u4e0a\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases"},"\u6700\u65b0\u7248\u672cSolana"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl -sSfL https://release.solana.com/LATEST_RELEASE/install)"\n')),(0,l.kt)("p",null,"\u53ef\u4ee5\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"LATEST_RELEASE"),"\u66ff\u6362\u6210\u4f60\u60f3\u8981\u7684\u53d1\u5e03\u7248\u672c\uff0c\u6216\u8005\u7528\u4e09\u4e2a\u522b\u540d\u7248\u672c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"stable"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"beta"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"edge"),"\u3002\n\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases"},"\u8fd9\u91cc"),"\u67e5\u770b\u53ef\u7528\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff0c\u8bf4\u660e\u66f4\u65b0\u6210\u529f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"downloading LATEST_RELEASE installer\nConfiguration: /home/solana/.config/solana/install/config.yml\nActive release directory: /home/solana/.local/share/solana/install/active_release\n* Release version: LATEST_RELEASE\n* Release URL: https://github.com/solana-labs/solana/releases/download/LATEST_RELEASE/solana-release-x86_64-unknown-linux-gnu.tar.bz2\nUpdate successful\n")),(0,l.kt)("p",null,"\u6839\u636e\u4e0d\u540c\u7684\u7cfb\u7edf\uff0c\u5b89\u88c5\u5305\u53ef\u80fd\u63d0\u793a\u60a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Please update your PATH environment variable to include the solana programs:\n")),(0,l.kt)("p",null,"\u5982\u679c\u770b\u5230\u4ee5\u4e0a\u63d0\u793a\u4fe1\u606f\uff0c\u590d\u5236\u8fd9\u4e0b\u9762\u8f93\u51fa\u7684\u547d\u4ee4\u5e76\u7c98\u8d34\u5230\u7cfb\u7edf\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),"\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("p",null,"\u7528\u4ee5\u4e0b\u547d\u4ee4\u786e\u8ba4\u4f60\u5df2\u7ecf\u5b89\u88c5\u597d\u6307\u5b9a\u7248\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"solana"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana --version\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"solana-install update"),"\u547d\u4ee4\uff0c\u968f\u65f6\u5c06Solana\u8f6f\u4ef6\u66f4\u65b0\u5230\u65b0\u7248\u672c\u3002"),(0,l.kt)("h4",{id:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6-linux"},"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6 \uff08linux\uff09"),(0,l.kt)("p",null,"\u9664\u4e86\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"solana-install"),"\u5b89\u88c5\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e8c\u8fdb\u5236\u6587\u4ef6\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases/latest"},"https://github.com/solana-labs/solana/releases/latest"),",\n\u4e0b\u8f7d ",(0,l.kt)("strong",{parentName:"p"},"solana-release-x86_64-unknown-linux-msvc.tar.bz2"),"\uff0c\u5e76\u89e3\u538b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar jxf solana-release-x86_64-unknown-linux-gnu.tar.bz2\ncd solana-release/\nexport PATH=$PWD/bin:$PATH\n")),(0,l.kt)("h4",{id:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6-macos"},"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6 \uff08macOS\uff09"),(0,l.kt)("p",null,"\u9664\u4e86\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"solana-install"),"\u5b89\u88c5\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e8c\u8fdb\u5236\u6587\u4ef6\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases/latest"},"https://github.com/solana-labs/solana/releases/latest"),",\n\u4e0b\u8f7d ",(0,l.kt)("strong",{parentName:"p"},"solana-release-x86_64-apple-darwin.tar.bz2"),"\uff0c\u5e76\u89e3\u538b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar jxf solana-release-x86_64-apple-darwin.tar.bz2\ncd solana-release/\nexport PATH=$PWD/bin:$PATH\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,"\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"cmd.exe"),"\uff09\u3002"),(0,l.kt)("p",null,'\u5728Windows\u641c\u7d22\u680f\u4e2d\u641c\u7d22"\u547d\u4ee4\u63d0\u793a\u7b26"\uff0c\u5728\u663e\u793a\u51fa\u6765\u7684\u547d\u4ee4\u63d0\u793a\u7b26\u5e94\u7528\u4e0a\u70b9\u51fb\u53f3\u952e\uff0c\u9009\u62e9"\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c"\u3002\n\u5f53\u5f39\u51fa\u5bf9\u8bdd\u6846\u8be2\u95ee"\u4f60\u8981\u5141\u8bb8\u6b64\u5e94\u7528\u5bf9\u4f60\u7684\u8bbe\u5907\u8fdb\u884c\u66f4\u6539\u5417\uff1f"\uff0c\u70b9\u51fb"\u662f"\u3002'),(0,l.kt)("p",null,"\u590d\u5236\u5e76\u7c98\u8d34\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6309\u56de\u8f66\u952e\uff0c\u5c06Solana\u5b89\u88c5\u5305\u4e0b\u8f7d\u5230\u4e34\u65f6\u6587\u4ef6\u5939\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://release.solana.com/v1.8.5/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\\solana-install-tmp\\solana-install-init.exe --create-dirs\n")),(0,l.kt)("p",null,"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"v1.8.5"),"\u4e0d\u662f\u4f60\u60f3\u8981\u7684\u7248\u672c\uff0c\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases"},"\u8fd9\u91cc"),"\u53ef\u4ee5\u627e\u5230\u6700\u65b0\u7684\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u590d\u5236\u5e76\u7c98\u8d34\u4ee5\u4e0b\u547d\u4ee4\uff0c\u7136\u540e\u6309\u56de\u8f66\u952e\uff0c\u5b89\u88c5\u6700\u65b0\u7248\u7684Solana\u3002\u5f53\u7cfb\u7edf\u5f39\u51fa\u5b89\u5168\u5bf9\u8bdd\u6846\u65f6\uff0c\u9009\u62e9\u5141\u8bb8\u7a0b\u5e8f\u8fd0\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\solana-install-tmp\\solana-install-init.exe v1.8.5\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u5305\u5b89\u88c5\u5b8c\u6210\u65f6\uff0c\u6309\u56de\u8f66\u952e\u3002"),(0,l.kt)("p",null,"\u5173\u6389\u547d\u4ee4\u63d0\u793a\u7b26\u7a97\u53e3\u3002\u91cd\u65b0\u4ee5\u666e\u901a\u7528\u6237\u6743\u9650\u6253\u5f00\u4e00\u4e2a\u547d\u4ee4\u63d0\u793a\u7b26\u7a97\u53e3\u3002"),(0,l.kt)("p",null,'\u5728Windows\u641c\u7d22\u680f\u4e2d\u641c\u7d22"\u547d\u4ee4\u63d0\u793a\u7b26"\uff0c\u5728\u663e\u793a\u51fa\u6765\u7684\u547d\u4ee4\u63d0\u793a\u7b26\u5e94\u7528\u4e0a\u70b9\u51fb\u5de6\u952e\uff08\u8fd9\u6b21\u4e0d\u9700\u8981\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\uff09\u3002'),(0,l.kt)("p",null,"\u7528\u4ee5\u4e0b\u547d\u4ee4\u786e\u8ba4\u5df2\u7ecf\u5b89\u88c5\u597d\u6307\u5b9a\u7248\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"solana"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana --version\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"solana-install update"),"\u547d\u4ee4\uff0c\u968f\u65f6\u5c06Solana\u8f6f\u4ef6\u66f4\u65b0\u5230\u65b0\u7248\u672c\u3002"),(0,l.kt)("h4",{id:"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u4e0b\u8f7d\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,l.kt)("p",null,"\u9664\u4e86\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"solana-install"),"\u5b89\u88c5\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e8c\u8fdb\u5236\u6587\u4ef6\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases/latest"},"https://github.com/solana-labs/solana/releases/latest"),",\n\u4e0b\u8f7d ",(0,l.kt)("strong",{parentName:"p"},"solana-release-x86_64-pc-windows-msvc.tar.bz2"),"\u5e76\u89e3\u538b\u3002"),(0,l.kt)("p",null,"\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\u5e76\u5207\u6362\u76ee\u5f55\u81f3\u521a\u624d\u89e3\u538b\u7684\u4f4d\u7f6e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd solana-release/\nset PATH=%cd%/bin;%PATH%\n")),(0,l.kt)("h3",{id:"\u4ece\u6e90\u7801\u7f16\u8bd1"},"\u4ece\u6e90\u7801\u7f16\u8bd1"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u80fd\u4f7f\u7528\u9884\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u6216\u8005\u5e0c\u671b\u81ea\u5df1\u4ece\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\uff0c\u53ef\u4ee5\u8bbf\u95ee\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/releases/latest"},"https://github.com/solana-labs/solana/releases/latest"),"\uff0c\n\u4e0b\u8f7d",(0,l.kt)("strong",{parentName:"p"},"Source Code"),"\u538b\u7f29\u5305\u3002\u89e3\u538b\u4ee3\u7801\uff0c\u7528\u4ee5\u4e0b\u547d\u4ee4\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/cargo-install-all.sh .\nexport PATH=$PWD/bin:$PATH\n")),(0,l.kt)("p",null,"\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u53ef\u4ee5\u548c\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6\u83b7\u5f97\u4e00\u6837\u7684\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-install init\n")))}b.isMDXComponent=!0},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(87462),l=t(67294),r=t(86010),s=t(12466),o=t(16550),i=t(91980),u=t(67392),p=t(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function m(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function k(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=m(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[i,u]=b({queryString:t,groupId:n}),[c,k]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,p.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),h=(()=>{const e=i??c;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var h=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:o,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==o&&(c(a),i(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(f,(0,n.Z)({},e,a)),l.createElement(v,(0,n.Z)({},e,a)))}function y(e){const a=(0,h.Z)();return l.createElement(N,(0,n.Z)({key:String(a)},e))}}}]);