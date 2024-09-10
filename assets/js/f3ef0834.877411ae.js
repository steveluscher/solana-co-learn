"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[5464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),d=l,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905)),r=n(74866),o=n(85162);const c={title:"\u672c\u5730\u5f00\u53d1",sidebar_position:15,tags:["solana-cook-book","local-development"]},s="\u672c\u5730\u5f00\u53d1",i={unversionedId:"references/local-development",id:"references/local-development",title:"\u672c\u5730\u5f00\u53d1",description:"\u5f00\u542f\u672c\u5730\u9a8c\u8bc1\u5668",source:"@site/docs/cookbook-zh/references/local-development.md",sourceDirName:"references",slug:"/references/local-development",permalink:"/solana-co-learn/cookbook-zh/references/local-development",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/references/local-development.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"local-development",permalink:"/solana-co-learn/cookbook-zh/tags/local-development"}],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1725959650,formattedLastUpdatedAt:"Sep 10, 2024",sidebarPosition:15,frontMatter:{title:"\u672c\u5730\u5f00\u53d1",sidebar_position:15,tags:["solana-cook-book","local-development"]},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u8003",permalink:"/solana-co-learn/cookbook-zh/references/"},next:{title:"\u5bc6\u94a5\u5bf9\u548c\u94b1\u5305",permalink:"/solana-co-learn/cookbook-zh/references/keypairs-and-wallets"}},u={},p=[{value:"\u5f00\u542f\u672c\u5730\u9a8c\u8bc1\u5668",id:"\u5f00\u542f\u672c\u5730\u9a8c\u8bc1\u5668",level:2},{value:"\u8fde\u63a5\u5230\u4e0d\u540c\u73af\u5883",id:"\u8fde\u63a5\u5230\u4e0d\u540c\u73af\u5883",level:2},{value:"\u8ba2\u9605\u4e8b\u4ef6",id:"\u8ba2\u9605\u4e8b\u4ef6",level:2},{value:"\u83b7\u53d6\u6d4b\u8bd5\u7528\u7684SOL",id:"\u83b7\u53d6\u6d4b\u8bd5\u7528\u7684sol",level:2},{value:"\u4f7f\u7528\u4e3b\u7f51 \uff08Mainnet) \u8d26\u6237\u548c\u7a0b\u5e8f",id:"\u4f7f\u7528\u4e3b\u7f51-mainnet-\u8d26\u6237\u548c\u7a0b\u5e8f",level:2},{value:"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u8d26\u6237",id:"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u8d26\u6237",level:3},{value:"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u7a0b\u5e8f",id:"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u7a0b\u5e8f",level:3}],m={toc:p},d="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,l.kt)("h2",{id:"\u5f00\u542f\u672c\u5730\u9a8c\u8bc1\u5668"},"\u5f00\u542f\u672c\u5730\u9a8c\u8bc1\u5668"),(0,l.kt)("p",null,"\u5728\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u6bd4\u5728\u5f00\u53d1\u7f51\u7edc(devnet)\u4e0a\u8fdb\u884c\u6d4b\u8bd5\u66f4\u53ef\u9760\uff0c\u5e76\u4e14\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728\u5f00\u53d1\u7f51\u7edc\u4e0a\u8fd0\u884c\u4e4b\u524d\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"/solana-co-learn/cookbook-zh/getting-started/installation#install-cli"},"solana\u5de5\u5177\u5957\u4ef6"),"\n\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u8bbe\u7f6e\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u7684\u597d\u5904\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0RPC\u901f\u7387\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u7a7a\u6295\u9650\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5728\u94fe\u4e0a\u90e8\u7f72\u7a0b\u5e8f\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"--bpf-program ..."),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u516c\u5171\u96c6\u7fa4\u514b\u9686\u8d26\u6237\uff0c\u5305\u62ec\u7a0b\u5e8f\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"--clone ..."),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u7684\u4e8b\u52a1\u5386\u53f2\u4fdd\u7559\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"--limit-ledger-size ..."),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u7684\u7eaa\u5143\u957f\u5ea6\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"--slots-per-epoch ..."),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u8df3\u8f6c\u5230\u4efb\u610f\u69fd\u4f4d\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"--warp-slot ..."),"\uff09")),(0,l.kt)("h2",{id:"\u8fde\u63a5\u5230\u4e0d\u540c\u73af\u5883"},"\u8fde\u63a5\u5230\u4e0d\u540c\u73af\u5883"),(0,l.kt)("p",null,"\u5f53\u4f60\u8fdb\u884cSolana\u5f00\u53d1\u65f6\uff0c\u4f60\u9700\u8981\u8fde\u63a5\u5230\u7279\u5b9a\u7684RPC API\u7aef\u70b9\u3002Solana\u6709\u4e09\u4e2a\u516c\u5171\u7684\u5f00\u53d1\u73af\u5883\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mainnet-beta ",(0,l.kt)("a",{parentName:"li",href:"https://api.mainnet-beta.solana.com"},"https://api.mainnet-beta.solana.com")),(0,l.kt)("li",{parentName:"ul"},"devnet ",(0,l.kt)("a",{parentName:"li",href:"https://api.devnet.solana.com"},"https://api.devnet.solana.com")),(0,l.kt)("li",{parentName:"ul"},"testnet ",(0,l.kt)("a",{parentName:"li",href:"https://api.testnet.solana.com"},"https://api.testnet.solana.com"))),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");\n'))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'client = Client("https://api.mainnet-beta.solana.com")\n'))),(0,l.kt)(o.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'Connection connection("https://api.mainnet-beta.solana.com");\n'))),(0,l.kt)(o.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let rpc_url = String::from("https://api.mainnet-beta.solana.com");\nlet client = RpcClient::new_with_commitment(rpc_url, CommitmentConfig::confirmed());\n'))),(0,l.kt)(o.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url https://api.mainnet-beta.solana.com\n")))),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8fde\u63a5\u5230\u79c1\u6709\u96c6\u7fa4\uff0c\u65e0\u8bba\u662f\u672c\u5730\u7684\u8fd8\u662f\u8fdc\u7a0b\u8fd0\u884c\u7684\uff0c\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff1a"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const connection = new Connection("http://127.0.0.1:8899", "confirmed");\n'))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'client = Client("http://127.0.0.1:8899")\n'))),(0,l.kt)(o.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'Connection connection("http://127.0.0.1:8899");\n'))),(0,l.kt)(o.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let rpc_url = String::from("http://127.0.0.1:8899");\nlet client = RpcClient::new_with_commitment(rpc_url, CommitmentConfig::confirmed());\n'))),(0,l.kt)(o.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url http://privaterpc.com\n")))),(0,l.kt)("h2",{id:"\u8ba2\u9605\u4e8b\u4ef6"},"\u8ba2\u9605\u4e8b\u4ef6"),(0,l.kt)("p",null,"Websockets\u63d0\u4f9b\u4e86\u4e00\u79cd\u53d1\u5e03/\u8ba2\u9605\u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u76d1\u542c\u7279\u5b9a\u7684\u4e8b\u4ef6\u3002\u4e0e\u5728\u56fa\u5b9a\u65f6\u95f4\u95f4\u9694\u5185\u5bf9\u5178\u578b\u7684HTTP\u7aef\u70b9\u8fdb\u884c\u8f6e\u8be2\u4ee5\u83b7\u53d6\u9891\u7e41\u7684\u66f4\u65b0\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u4ec5\u5728\u4e8b\u4ef6\u53d1\u751f\u65f6\u624d\u63a5\u6536\u8fd9\u4e9b\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"Solana\u7684web3",(0,l.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html"},(0,l.kt)("inlineCode",{parentName:"a"},"\u8fde\u63a5"))," \u5728\u5e95\u5c42\u751f\u6210\u4e00\u4e2awebsocket\u7aef\u70b9\uff0c\u5e76\u5728\u521b\u5efa\u65b0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Connection"),"\u5b9e\u4f8b\u65f6\u6ce8\u518c\u4e00\u4e2awebsocket\u5ba2\u6237\u7aef\uff08\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-web3.js/blob/45923ca00e4cc1ed079d8e55ecbee83e5b4dc174/src/connection.ts#L2100"},"\u6b64\u5904"),") \u7684\u6e90\u4ee3\u7801\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Connection"),"\u7c7b\u63d0\u4f9b\u4e86\u53d1\u5e03/\u8ba2\u9605\u65b9\u6cd5\uff0c\u5b83\u4eec\u90fd\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"on"),"\u5f00\u5934\uff0c\u7c7b\u4f3c\u4e8e\u4e8b\u4ef6\u53d1\u5c04\u5668\u3002\u5f53\u60a8\u8c03\u7528\u8fd9\u4e9b\u76d1\u542c\u5668\u65b9\u6cd5\u65f6\uff0c\u5b83\u4f1a\u5728\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"Connection"),"\u5b9e\u4f8b\u7684websocket\u5ba2\u6237\u7aef\u4e2d\u6ce8\u518c\u4e00\u4e2a\u65b0\u7684\u8ba2\u9605\u3002\u4e0b\u9762\u6211\u4eec\u4f7f\u7528\u7684\u793a\u4f8b\u53d1\u5e03/\u8ba2\u9605\u65b9\u6cd5\u662f",(0,l.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#onAccountChange"},(0,l.kt)("inlineCode",{parentName:"a"},"onAccountChange")),"\u3002 \u56de\u8c03\u51fd\u6570\u5c06\u901a\u8fc7\u53c2\u6570\u63d0\u4f9b\u66f4\u65b0\u7684\u72b6\u6001\u6570\u636e\uff08\u4f8b\u5982\uff0c\u67e5\u770bA",(0,l.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/modules.html#AccountChangeCallback"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountChangeCallback"))," \u4f5c\u4e3a\u793a\u4f8b\uff09\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'// Establish new connect to devnet - websocket client connected to devnet will also be registered here\nconst connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n\n// Create a test wallet to listen to\nconst wallet = Keypair.generate();\n\n// Register a callback to listen to the wallet (ws subscription)\nconnection.onAccountChange(\n  wallet.publicKey(),\n  (updatedAccountInfo, context) =>\n    console.log("Updated account info: ", updatedAccountInfo),\n  "confirmed"\n);\n'))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'async with connect("wss://api.devnet.solana.com") as websocket:\n    # Create a Test Wallet\n    wallet = Keypair()\n    # Subscribe to the Test wallet to listen for events\n    await websocket.account_subscribe(wallet.pubkey())\n    # Capture response from account subscription\n    first_resp = await websocket.recv()\n    print("Subscription successful with id {}, listening for events \\n".format(first_resp.result))\n    updated_account_info = await websocket.recv()\n    print(updated_account_info)\n'))),(0,l.kt)(o.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'auto key_pair = Keypair::generate();\n\nint subscriptionId = connection.on_account_change(key_pair.public_key, [&](Result<Account> result) {\n    Account account = result.unwrap();\n    std::cout << "owner = " << account.owner.to_base58() << std::endl;\n    std::cout << "lamports = " << account.lamports << std::endl;\n    std::cout << "data = " << account.data << std::endl;\n    std::cout << "executable = " << (account.executable ? "true" : "false") << std::endl;\n});\n\nfor (int i = 0; i < 10; i++) {\n    connection.poll();\n    sleep(1);\n}\n\nconnection.remove_account_listener(subscriptionId);\n'))),(0,l.kt)(o.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let ws_url = String::from("wss://api.devnet.solana.com/");\nlet (mut client, receiver) = PubsubClient::account_subscribe(\n    &ws_url,\n    &pubkey,\n    Some(RpcAccountInfoConfig {\n        encoding: None,\n        data_slice: None,\n        commitment: Some(CommitmentConfig::confirmed()),\n    }),\n).unwrap();\nlet message = match receiver.recv().unwrap();\nprintln!("{:?}", message)\n')))),(0,l.kt)("h2",{id:"\u83b7\u53d6\u6d4b\u8bd5\u7528\u7684sol"},"\u83b7\u53d6\u6d4b\u8bd5\u7528\u7684SOL"),(0,l.kt)("p",null,"\u4f60\u5728\u672c\u5730\u5de5\u4f5c\u65f6\uff0c\u4e3a\u4e86\u53d1\u9001\u4ea4\u6613\uff0c\u4f60\u9700\u8981\u4e00\u4e9b SOL\u3002\u5728\u975e\u4e3b\u7f51\u73af\u5883\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5411\u4f60\u7684\u5730\u5740\u7a7a\u6295 SOL\uff0c\u83b7\u53d6SOL\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const airdropSignature = await connection.requestAirdrop(\n  keypair.publicKey,\n  LAMPORTS_PER_SOL\n);\n\nawait connection.confirmTransaction(airdropSignature);\n"))),(0,l.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"#Input Airdrop amount in LAMPORTS\nclient.request_airdrop(wallet.pubkey(), 1000000000)\n\n#Airdrops 1 SOL\n"))),(0,l.kt)(o.Z,{value:"cpp",label:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"connection.request_airdrop(key_pair.public_key).unwrap();\n"))),(0,l.kt)(o.Z,{value:"rust",label:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'match client.request_airdrop(&pubkey, LAMPORTS_PER_SOL) {\n    Ok(sig) => loop {\n        if let Ok(confirmed) = client.confirm_transaction(&sig) {\n            if confirmed {\n                println!("Transaction: {} Status: {}", sig, confirmed);\n                break;\n            }\n        }\n    },\n    Err(_) => println!("Error requesting airdrop"),\n};\n'))),(0,l.kt)(o.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# cli\nsolana airdrop 1\n")))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u4e3b\u7f51-mainnet-\u8d26\u6237\u548c\u7a0b\u5e8f"},"\u4f7f\u7528\u4e3b\u7f51 \uff08Mainnet) \u8d26\u6237\u548c\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u672c\u5730\u6d4b\u8bd5\u901a\u5e38\u4f9d\u8d56\u4e8e\u4ec5\u5728\u4e3b\u7f51\u4e0a\u53ef\u7528\u7684\u7a0b\u5e8f\u548c\u8d26\u6237\u3002Solana CLI \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u4e2a\u529f\u80fd\uff1a"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u4e0b\u8f7d\u7a0b\u5e8f\u548c\u8d26\u6237\n"),"\u5c06\u7a0b\u5e8f\u548c\u8d26\u6237\u52a0\u8f7d\u5230\u672c\u5730\u9a8c\u8bc1\u5668\u4e2d"),(0,l.kt)("h3",{id:"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u8d26\u6237"},"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u8d26\u6237"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5c06SRM\u4ee3\u5e01\u7684\u94f8\u9020(mint)\u8d26\u6237\u4e0b\u8f7d\u5230\u6587\u4ef6\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana account -u m --output json-compact --output-file SRM_token.json SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u901a\u8fc7\u5728\u542f\u52a8\u9a8c\u8bc1\u5668\u65f6\u4f20\u9012\u8be5\u8d26\u6237\u6587\u4ef6\u548c\u76ee\u6807\u5730\u5740\uff08\u5728\u672c\u5730\u96c6\u7fa4\u4e0a\uff09\u4f60\u53ef\u4ee5\u5c06\u5176\u52a0\u8f7d\u5230\u672c\u5730\u7f51\u7edc\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator --account SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt SRM_token.json --reset\n")),(0,l.kt)("h3",{id:"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u7a0b\u5e8f"},"\u5982\u4f55\u4ece\u4e3b\u7f51\u52a0\u8f7d\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u53ef\u4ee5\u4e0b\u8f7dSerum Dex v3\u7a0b\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana program dump -u m 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin serum_dex_v3.so\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5728\u542f\u52a8\u9a8c\u8bc1\u5668\u65f6\uff0c\u901a\u8fc7\u4f20\u9012\u7a0b\u5e8f\u7684\u6587\u4ef6\u548c\u76ee\u6807\u5730\u5740\uff08\u5728\u672c\u5730\u96c6\u7fa4\u4e0a\uff09\u6765\u5c06\u5176\u52a0\u8f7d\u5230\u672c\u5730\u7f51\u7edc\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator --bpf-program 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin serum_dex_v3.so --reset\n")))}b.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),l=n(67294),r=n(86010),o=n(12466),c=n(16550),s=n(91980),i=n(67392),u=n(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[o,c]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,i]=b({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),k(e)}),[i,k,r]),tabValues:r}}var f=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==c&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,r.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":c===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(g,(0,a.Z)({},e,t)),l.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return l.createElement(y,(0,a.Z)({key:String(t)},e))}}}]);