"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[6305],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>k});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=o.createContext({}),u=function(n){var e=o.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return o.createElement(p.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,p=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),c=u(t),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?o.createElement(k,i(i({ref:e},s),{},{components:t})):o.createElement(k,i({ref:e},s))}));function k(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l[c]="string"==typeof n?n:a,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63625:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const r={sidebar_position:103,sidebar_label:"\u4f7f\u7528Switchboard\u8fdb\u884c\u968f\u673a\u5316\u6218\u5229\u54c1",sidebar_class_name:"green"},i="\u4f7f\u7528Switchboard\u8fdb\u884c\u968f\u673a\u5316\u6218\u5229\u54c1",l={unversionedId:"module6/randomness/randomising-loot-with-switchborar/README",id:"module6/randomness/randomising-loot-with-switchborar/README",title:"\u4f7f\u7528Switchboard\u8fdb\u884c\u968f\u673a\u5316\u6218\u5229\u54c1",description:"\u73b0\u5728\u6211\u4eec\u5c06\u6df1\u5165\u63a2\u8ba8\u7b80\u5355\u6218\u5229\u54c1\u7bb1\u7684\u5b9e\u73b0\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7a0b\u5e8f\uff0c\u7528\u4e8e\u521b\u5efa\u6218\u5229\u54c1\u7bb1\u5e76\u4ece\u4e2d\u83b7\u53d6\u7269\u54c1\u3002",source:"@site/docs/Solana-Co-Learn/module6/randomness/randomising-loot-with-switchborar/README.md",sourceDirName:"module6/randomness/randomising-loot-with-switchborar",slug:"/module6/randomness/randomising-loot-with-switchborar/",permalink:"/solana-co-learn/Solana-Co-Learn/module6/randomness/randomising-loot-with-switchborar/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module6/randomness/randomising-loot-with-switchborar/README.md",tags:[],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1698134215,formattedLastUpdatedAt:"Oct 24, 2023",sidebarPosition:103,frontMatter:{sidebar_position:103,sidebar_label:"\u4f7f\u7528Switchboard\u8fdb\u884c\u968f\u673a\u5316\u6218\u5229\u54c1",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\u968f\u673a\u6027",permalink:"/solana-co-learn/Solana-Co-Learn/module6/randomness/"},next:{title:"\ud83d\udc41\u200d\ud83d\udde8 \u6784\u5efa\u4e00\u4e2a\u968f\u673a\u5668",permalink:"/solana-co-learn/Solana-Co-Learn/module6/randomness/build-a-randomiser/"}},p={},u=[{value:"\u5229\u7528Switchboard\u7684\u9a8c\u8bc1\u529f\u80fd\u6765\u968f\u673a\u5206\u914d\u6218\u5229\u54c1\ud83d\udd00",id:"\u5229\u7528switchboard\u7684\u9a8c\u8bc1\u529f\u80fd\u6765\u968f\u673a\u5206\u914d\u6218\u5229\u54c1",level:2},{value:"\u4efb\u52a1",id:"\u4efb\u52a1",level:3},{value:"\u6587\u6863",id:"\u6587\u6863",level:3}],s={toc:u},c="wrapper";function m(n){let{components:e,...t}=n;return(0,a.kt)(c,(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528switchboard\u8fdb\u884c\u968f\u673a\u5316\u6218\u5229\u54c1"},"\u4f7f\u7528Switchboard\u8fdb\u884c\u968f\u673a\u5316\u6218\u5229\u54c1"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c06\u6df1\u5165\u63a2\u8ba8\u7b80\u5355\u6218\u5229\u54c1\u7bb1\u7684\u5b9e\u73b0\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7a0b\u5e8f\uff0c\u7528\u4e8e\u521b\u5efa\u6218\u5229\u54c1\u7bb1\u5e76\u4ece\u4e2d\u83b7\u53d6\u7269\u54c1\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u5ba1\u67e5\u7684\u89e3\u51b3\u65b9\u6848\u4ee3\u7801\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Anchor NFT Staking"),"\u5b58\u50a8\u5e93\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"solution-naive-loot-boxes"),"\u5206\u652f\u4e4b\u4e00\u3002"),(0,a.kt)("p",null,"\u6211\u518d\u6b21\u5f3a\u8c03\uff0c\u5efa\u8bae\u4f60\u81ea\u884c\u5c1d\u8bd5\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u89e3\u51b3\u65b9\u6848\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5728programs\u76ee\u5f55\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"anchor new <program-name>"),"\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7a0b\u5e8f\uff0c\u6211\u4eec\u5c06\u5176\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"lootbox-program"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4ed4\u7ec6\u89c2\u5bdf\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Anchor.toml"),"\u6587\u4ef6\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"nft-staking"),"\u7a0b\u5e8f\u7684ID\u5df2\u7ecf\u53d8\u5316\u4e86\uff0c\u6211\u4eec\u8fd8\u65b0\u589e\u4e86\u4e00\u4e2aloot box\u7a0b\u5e8f\u7684ID\u3002\u4f60\u9700\u8981\u5728\u81ea\u5df1\u7684\u7aef\u66f4\u65b0\u8fd9\u4e24\u4e2aID\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u5bf9",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/anchor-nft-staking-program/blob/solution-naive-loot-boxes/programs/anchor-nft-staking/src/lib.rs?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u539f\u59cb\u8d28\u62bc\u8ba1\u5212"),"\u6240\u4f5c\u7684\u4fee\u6539\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5411\u4e0b\u6eda\u52a8\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"UserStakeInfo"),"\u5bf9\u8c61\uff0c\u4f60\u4f1a\u53d1\u73b0\u6211\u4eec\u6dfb\u52a0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"total_earned"),"\u5b57\u6bb5\u3002\u5b83\u4f1a\u8ddf\u8e2a\u7528\u6237\u7684\u8d28\u62bc\u65c5\u7a0b\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u4ed6\u4eec\u5c06\u8d5a\u53d6\u66f4\u591a\u7684\u5956\u52b1\uff0c\u5e76\u4e14\u5728\u8fbe\u5230\u65b0\u7684\u91cc\u7a0b\u7891\u65f6\uff0c\u5c06\u83b7\u5f97\u66f4\u591a\u7684\u6218\u5229\u54c1\u7bb1\u7269\u54c1\u3002"),(0,a.kt)("p",null,"\u540c\u6837\u76f8\u5173\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"redeem_amount"),"\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u6709\u4e9b\u6ce8\u91ca\u88ab\u6ce8\u91ca\u6389\u4e86\uff0c\u8fd9\u4ec5\u662f\u4e3a\u4e86\u786e\u4fdd\u6211\u4eec\u6709\u8db3\u591f\u7684\u4ee4\u724c\u8fdb\u884c\u6d4b\u8bd5\u3002\u5728\u6d4b\u8bd5\u65f6\uff0c\u8bf7\u786e\u4fdd\u6b63\u786e\u5730\u6ce8\u91ca/\u53d6\u6d88\u6ce8\u91ca\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5f80\u4e0b\u6eda\u52a8\u4e00\u70b9\uff0c\u4f60\u4f1a\u770b\u5230\u8fd9\u4e00\u884c\u65b0\u6dfb\u52a0\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"ctx.accounts.stake_state.total_earned += redeem_amount as u64;\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u79cd\u8ddf\u8e2a\u603b\u6536\u76ca\u7684\u65b9\u6cd5\uff0c\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u5f00\u59cb\uff0c\u7136\u540e\u4f60\u6dfb\u52a0\u5df2\u5151\u6362\u7684\u91d1\u989d\uff0c\u8fd9\u5c06\u6210\u4e3a\u65b0\u7684\u603b\u6536\u76ca\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u89e3\u9664\u8d28\u62bc\u529f\u80fd\u4e2d\uff0c\u4f60\u8fd8\u4f1a\u53d1\u73b0\u6d4b\u8bd5\u8bf4\u660e\u548c\u8d4e\u56de\u91d1\u989d\u90fd\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u8fd8\u6709\u4e00\u4e2a\u6700\u540e\u7684\u66f4\u6539\u3002\u5982\u679c\u4f60\u7684\u7a0b\u5e8f\u4e0e\u6211\u7684\u5b8c\u5168\u76f8\u540c\uff0c\u5f53\u6211\u4eec\u8fd0\u884c\u5b83\u65f6\uff0c\u7531\u4e8e\u6dfb\u52a0\u4e86\u8fd9\u4e2a\u65b0\u5b57\u6bb5\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5728\u5806\u6808\u4e2d\u8017\u5c3d\u7a7a\u95f4\u3002\u6211\u9009\u62e9\u4e86\u4e00\u4e2a\u968f\u673a\u8d26\u6237\uff0c\u5e76\u5728\u5176\u5468\u56f4\u653e\u7f6e\u4e86\u4e00\u4e2a\u76d2\u5b50\uff0c\u786e\u4fdd\u5b83\u88ab\u5206\u914d\u5230\u5806\u4e2d\u800c\u4e0d\u662f\u6808\u4e2d\uff0c\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u7a7a\u95f4\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u5728\u7528\u6237\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"stake ATA"),"\u4e0a\u8fdb\u884c\u64cd\u4f5c\uff0c\u6216\u8005\u9009\u62e9\u4efb\u4f55\u5176\u4ed6\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub user_stake_ata: Box<Account<'info, TokenAccount>>,\n")),(0,a.kt)("p",null,"\u597d\u7684\uff0c\u8ba9\u6211\u4eec\u8fdb\u5165\u65b0\u7684\u6218\u5229\u54c1\u7bb1\u8ba1\u5212\u7684\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u4e2d\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u6211\u4eec\u4e3a\u6211\u4eec\u539f\u59cb\u7684\u951a\u5b9aNFT\u8d28\u62bc\u7a0b\u5e8f\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nanchor-lang = { version="0.25.0", features=["init-if-needed"] }\nanchor-spl = "0.25.0"\nanchor-nft-staking = { path = "../anchor-nft-staking", features = ["cpi"] }\n')),(0,a.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u8fdb\u5165\u4e3b\u8981\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/anchor-nft-staking-program/blob/solution-naive-loot-boxes/programs/lootbox-program/src/lib.rs?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u6218\u5229\u54c1\u7bb1\u7a0b\u5e8f\u6587\u4ef6"),"\u3002"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u8bed\u53e5\u4e2d\uff0c\u4f60\u4f1a\u6ce8\u610f\u5230\u6211\u4eec\u73b0\u5728\u5bfc\u5165\u4e86\u951a\u5b9aNFT\u8d28\u62bc\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u68c0\u67e5\u603b\u6536\u76ca\u5b57\u6bb5\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use anchor_lang::prelude::*;\nuse anchor_nft_staking::UserStakeInfo;\nuse anchor_spl::token;\nuse anchor_spl::{\n    associated_token::AssociatedToken,\n    token::{Burn, Mint, MintTo, Token, TokenAccount},\n};\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u53ea\u6709\u4e24\u4e2a\u6307\u4ee4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"open_lootbox"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"retrieve_item_from_lootbox"),"\u3002\u6709\u4e24\u4e2a\u6307\u4ee4\u7684\u539f\u56e0\u662f\uff0c\u5f53\u4f60\u8bf7\u6c42\u201c\u7ed9\u6211\u4e00\u4e2a\u968f\u673a\u7684\u6218\u5229\u54c1\u201d\u65f6\uff0c\u7a0b\u5e8f\u5fc5\u987b\u51b3\u5b9a\u8981\u94f8\u9020\u548c\u8d60\u9001\u7684\u6240\u6709\u53ef\u80fd\u7269\u54c1\uff0c\u5ba2\u6237\u7aef\u5fc5\u987b\u4f20\u5165\u6240\u6709\u53ef\u80fd\u7684\u94f8\u9020\u8d26\u6237\u3002\u8fd9\u4f7f\u7a0b\u5e8f\u53d8\u5f97\u4e0d\u90a3\u4e48\u7075\u6d3b\uff0c\u5e76\u589e\u52a0\u4e86\u68c0\u67e5\u4e00\u5806\u4e0d\u540c\u8d26\u6237\u4ee5\u786e\u4fdd\u6709\u9009\u9879\u7684\u5f00\u9500\uff0c\u5bf9\u5ba2\u6237\u7aef\u6765\u8bf4\u4e5f\u975e\u5e38\u9ebb\u70e6\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u7528\u4e8e\u6253\u5f00\u6218\u5229\u54c1\u7bb1\u7684\u6307\u4ee4\uff0c\u57fa\u672c\u4e0a\u662f\u5728\u6240\u6709\u53ef\u80fd\u7684\u94f8\u9020\u9009\u9879\u4e2d\u7ed9\u6211\u4e00\u4e2a\u3002\u6211\u4eec\u8fd8\u9009\u62e9\u4e86\u8fd9\u4e2a\u5730\u65b9\u4f5c\u4e3a\u652f\u4ed8\u7684\u5730\u65b9\uff0c\u8fd9\u662f\u6211\u4eec\u5c06\u70e7\u6bc1",(0,a.kt)("inlineCode",{parentName:"p"},"BLD"),"\u4ee3\u5e01\u7684\u5730\u65b9\u3002\u81f3\u4e8e\u7b2c\u4e8c\u4e2a\u6307\u4ee4\uff0c\u5728\u8fd9\u4e00\u70b9\u4e0a\uff0c\u5ba2\u6237\u7aef\u77e5\u9053\u4ed6\u4eec\u5c06\u83b7\u5f97\u54ea\u4e2a\u94f8\u9020\u7269\u54c1\uff0c\u5e76\u53ef\u4ee5\u4f20\u5165\u8be5\u4fe1\u606f\uff0c\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u4ece\u4e2d\u94f8\u9020\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u6253\u5f00\u6218\u5229\u54c1\u7bb1\uff0c\u770b\u770b\u6211\u4eec\u9700\u8981\u7684\u8d26\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct OpenLootbox<'info> {\n    #[account(mut)]\n    pub user: Signer<'info>,\n    #[account(\n        init_if_needed,\n        payer = user,\n        space = std::mem::size_of::<LootboxPointer>() + 8,\n        seeds=[\"lootbox\".as_bytes(), user.key().as_ref()],\n        bump\n    )]\n    pub lootbox_pointer: Account<'info, LootboxPointer>,\n    pub system_program: Program<'info, System>,\n    pub token_program: Program<'info, Token>,\n    // Swap the next two lines out between prod/testing\n    // #[account(mut)]\n    #[account(\n        mut,\n        address=\"6YR1nuLqkk8VC1v42xJaPKvE9X9pnuqVAvthFUSDsMUL\".parse::<Pubkey>().unwrap()\n    )]\n    pub stake_mint: Account<'info, Mint>,\n    #[account(\n        mut,\n        associated_token::mint=stake_mint,\n        associated_token::authority=user\n    )]\n    pub stake_mint_ata: Account<'info, TokenAccount>,\n    pub associated_token_program: Program<'info, AssociatedToken>,\n    #[account(\n        constraint=stake_state.user_pubkey==user.key(),\n    )]\n    pub stake_state: Account<'info, UserStakeInfo>,\n}\n")),(0,a.kt)("p",null,"\u4f60\u4f1a\u53d1\u73b0\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"lootbox_pointer"),"\u7684\u65b0\u5143\u7d20\uff0c\u8fd9\u662f\u4e00\u79cd\u5168\u65b0\u7684\u7c7b\u578b\u3002\u5b83\u5305\u62ec\u4e00\u4e2a\u8584\u8377\u5c5e\u6027\u3001\u4e00\u4e2a\u5e03\u5c14\u503c\u7528\u6765\u8868\u793a\u662f\u5426\u5df2\u88ab\u9886\u53d6\uff0c\u4ee5\u53ca\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"is_initialized"),"\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4e0e\u7528\u6237\u5173\u8054\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"PDA\uff08Program-derived address\uff09"),"\uff0c\u56e0\u6b64\u5176\u79cd\u5b50\u662f\u201c\u6218\u5229\u54c1\u7bb1\u201d\u548c\u7528\u6237\u3002\u901a\u8fc7\u8fd9\u6837\u505a\uff0c\u5f53\u6211\u4eec\u9009\u4e2d\u4e00\u4e2a\u8584\u8377\u65f6\uff0c\u6211\u4eec\u4e0d\u5c06\u6570\u636e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff0c\u800c\u662f\u5b58\u50a8\u5728\u67d0\u4e2a\u8d26\u6237\u4e2d\u3002\u56e0\u6b64\uff0c\u8fd9\u662f\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u67e5\u8be2\u5e76\u68c0\u7d22\u7269\u54c1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"PDA"),"\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u67d0\u884c\u4ee3\u7801\u7684\u5f00\u5934\u6709\u4e00\u4e2a\u201c",(0,a.kt)("inlineCode",{parentName:"p"},"Swap"),"\u201d\u6ce8\u91ca\u884c\u3002\u4e3a\u4e86\u4f7f\u6d4b\u8bd5\u6b63\u5e38\u8fd0\u884c\uff0c\u9700\u8981\u53d6\u6d88\u8fd9\u4e9b\u884c\u7684\u6ce8\u91ca\uff0c\u5e76\u6ce8\u91ca\u6389\u5176\u4ed6\u5305\u542b\u5fc3\u667a\u5730\u5740\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"stake_mint"),"\u5c5e\u6027\u884c\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Rust"),"\u4ee3\u7801\u5c55\u793a\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"LootboxPointer"),"\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[account]\npub struct LootboxPointer {\n    mint: Pubkey,\n    claimed: bool,\n    is_initialized: bool,\n}\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6765\u8be6\u7ec6\u4e86\u89e3\u8fd9\u4e2a\u529f\u80fd\u3002\u9996\u5148\uff0c\u6211\u4eec\u8981\u9a8c\u8bc1\u5b83\u662f\u5426\u662f\u4e00\u4e2a\u6709\u6548\u7684\u6218\u5229\u54c1\u7bb1\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u8f93\u5165\u4e00\u4e2a\u76d2\u5b50\u53f7\u7801\uff0c\u7136\u540e\u7a0b\u5e8f\u4f1a\u8fd0\u884c\u4e00\u4e2a\u65e0\u9650\u5faa\u73af\u3002\u5728\u6bcf\u6b21\u8fed\u4ee3\u4e2d\uff0c\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"BLD"),"\u4ee4\u724c\u7684\u6570\u91cf\u8fc7\u4f4e\uff0c\u6211\u4eec\u4f1a\u8fd4\u56de\u9519\u8bef\u3002\u5176\u4ed6\u4e24\u79cd\u53ef\u80fd\u7684\u8def\u5f84\u662f\uff1a\u8981\u4e48\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"loot_box"),"\u53f7\u7801\u52a0\u500d\uff0c\u8981\u4e48\u5982\u679c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"loot_box"),"\u53f7\u7801\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"box_number"),"\u4e4b\u95f4\u627e\u5230\u5339\u914d\uff0c\u6211\u4eec\u8981\u6c42",(0,a.kt)("inlineCode",{parentName:"p"},"stake_state")," ",(0,a.kt)("inlineCode",{parentName:"p"},"PDAs"),"\u7684\u603b\u6536\u76ca\u4e0d\u5c11\u4e8e\u4f20\u5165\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"box_number"),"\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u4f60\u5fc5\u987b\u8d5a\u5f97\u6bd4\u76d2\u5b50\u53f7\u7801\u66f4\u591a\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u6253\u5f00\u6218\u5229\u54c1\u7bb1\u7684\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn open_lootbox(ctx: Context<OpenLootbox>, box_number: u64) -> Result<()> {\n    let mut loot_box = 10;\n    loop {\n        if loot_box > box_number {\n            return err!(LootboxError::InvalidLootbox);\n        }\n\n        if loot_box == box_number {\n            require!(\n                ctx.accounts.stake_state.total_earned >= box_number,\n                LootboxError::InvalidLootbox\n            );\n            break;\n        } else {\n            loot_box = loot_box * 2;\n        }\n    }\n\n    require!(\n        !ctx.accounts.lootbox_pointer.is_initialized || ctx.accounts.lootbox_pointer.claimed,\n        LootboxError::InvalidLootbox\n    );\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u7ee7\u7eed\u8fdb\u884c\u4ee3\u5e01\u9500\u6bc1\uff0c\u9500\u6bc1\u4e0e\u76d2\u5b50\u7f16\u53f7\u6240\u9700\u6570\u91cf\u76f8\u5bf9\u5e94\u7684\u4ee3\u5e01\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"token::burn(\n    CpiContext::new(\n        ctx.accounts.token_program.to_account_info(),\n        Burn {\n            mint: ctx.accounts.stake_mint.to_account_info(),\n            from: ctx.accounts.stake_mint_ata.to_account_info(),\n            authority: ctx.accounts.user.to_account_info(),\n        },\n    ),\n    box_number * u64::pow(10, 2),\n)?;\n")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u8fd8\u6d89\u53ca\u4ee3\u5e01\u9500\u6bc1\u64cd\u4f5c\uff0c\u5373\u9500\u6bc1\u4e0e\u76d2\u5b50\u7f16\u53f7\u6240\u9700\u6570\u91cf\u76f8\u5339\u914d\u7684\u4ee3\u5e01\u3002\u4e4b\u540e\uff0c\u6211\u4eec\u5c06\u63cf\u8ff0\u53ef\u7528\u88c5\u5907\u3002\u5f53\u524d\u662f\u786c\u7f16\u7801\u7684\uff0c\u8fd9\u662f\u5ba2\u6237\u7aef\u4ee3\u7801\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"cache.json"),"\u6587\u4ef6\u7684\u6570\u636e\uff0c\u4f46\u6709\u66f4\u7075\u6d3b\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let available_gear: Vec<Pubkey> = vec![\n        "DQmrQJkErmfe6a1fD2hPwdLSnawzkdyrKfSUmd6vkC89"\n            .parse::<Pubkey>()\n            .unwrap(),\n        "A26dg2NBfGgU6gpFPfsiLpxwsV13ZKiD58zgjeQvuad"\n            .parse::<Pubkey>()\n            .unwrap(),\n        "GxR5UVvQDRwB19bCsB1wJh6RtLRZUbEAigtgeAsm6J7N"\n            .parse::<Pubkey>()\n            .unwrap(),\n        "3rL2p6LsGyHVn3iwQQYV9bBmchxMHYPice6ntp7Qw8Pa"\n            .parse::<Pubkey>()\n            .unwrap(),\n        "73JnegAtAWHmBYL7pipcSTpQkkAx77pqCQaEys2Qmrb2"\n            .parse::<Pubkey>()\n            .unwrap(),\n    ];\n')),(0,a.kt)("p",null,"\u968f\u540e\u7684\u4ee3\u7801\u7247\u6bb5\u5c55\u793a\u4e86\u4e00\u79cd\u975e\u5b89\u5168\u7684\u4f2a\u968f\u673a\u65b9\u6cd5\uff0c\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u7136\u540e\u5bf95\u53d6\u6a21\uff0c\u4ee5\u786e\u5b9a\u6211\u4eec\u5e94\u8be5\u9009\u62e9\u8fd9",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"\u4e2a\u7269\u54c1\u4e2d\u7684\u54ea\u4e00\u4e2a\u3002\u4e00\u65e6\u9009\u62e9\uff0c\u6211\u4eec\u5c06\u5176\u5206\u914d\u7ed9\u6218\u5229\u54c1\u76d2\u6307\u9488\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let clock = Clock::get()?;\n    let i: usize = (clock.unix_timestamp % 5).try_into().unwrap();\n    // Add in randomness later for selecting mint\n    let mint = available_gear[i];\n    ctx.accounts.lootbox_pointer.mint = mint;\n    ctx.accounts.lootbox_pointer.claimed = false;\n    ctx.accounts.lootbox_pointer.is_initialized = true;\n\n    Ok(())\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u5904\u7406\u771f\u6b63\u7684\u968f\u673a\u6027\uff0c\u4f46\u76ee\u524d\u8fd9\u4e2a\u7248\u672c\u5df2\u7ecf\u8db3\u591f\u3002\u6211\u4eec\u8fd8\u5c06\u6dfb\u52a0\u4e00\u4e2a\u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd\u7528\u6237\u4e0d\u80fd\u53cd\u590d\u6253\u5f00\u6218\u5229\u54c1\u7bb1\uff0c\u4ee5\u83b7\u53d6\u4ed6\u4eec\u60f3\u8981\u7684\u7269\u54c1\u3002\u73b0\u5728\uff0c\u53ea\u8981\u7528\u6237\u6253\u5f00\u6218\u5229\u54c1\u7bb1\uff0c\u4ed6\u4eec\u5c31\u53ef\u4ee5\u770b\u5230\u5176\u4e2d\u7684\u7269\u54c1\u3002\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u6218\u5229\u54c1\u7bb1\u6307\u9488\u662f\u5426\u5df2\u521d\u59cb\u5316\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5219\u65e0\u95ee\u9898\uff0c\u53ef\u4ee5\u7ee7\u7eed\u8fdb\u884c\u3002\u867d\u7136\u6bcf\u6b21\u5c1d\u8bd5\u90fd\u9700\u8981\u4ed8\u8d39\uff0c\u4f46\u662f\u5426\u5c06\u5176\u4f5c\u4e3a\u529f\u80fd\u7531\u4f60\u51b3\u5b9a\u3002"),(0,a.kt)("p",null,"\u597d\u4e86\uff0c\u73b0\u5728\u8ba9\u6211\u4eec\u8f6c\u5230\u68c0\u7d22\u6307\u4ee4\u5e76\u67e5\u770b\u6240\u9700\u7684\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct RetrieveItem<'info> {\n    #[account(mut)]\n    pub user: Signer<'info>,\n    #[account(\n        seeds=[\"lootbox\".as_bytes(), user.key().as_ref()],\n        bump,\n        constraint=lootbox_pointer.is_initialized\n    )]\n    pub lootbox_pointer: Account<'info, LootboxPointer>,\n    #[account(\n        mut,\n        constraint=lootbox_pointer.mint==mint.key()\n    )]\n    pub mint: Account<'info, Mint>,\n    #[account(\n        init_if_needed,\n        payer=user,\n        associated_token::mint=mint,\n        associated_token::authority=user\n    )]\n    pub user_gear_ata: Account<'info, TokenAccount>,\n    /// CHECK: Mint authority - not used as account\n    #[account(\n        seeds=[\"mint\".as_bytes()],\n        bump\n    )]\n    pub mint_authority: UncheckedAccount<'info>,\n    pub token_program: Program<'info, Token>,\n    pub associated_token_program: Program<'info, AssociatedToken>,\n    pub system_program: Program<'info, System>,\n    pub rent: Sysvar<'info, Rent>,\n}\n")),(0,a.kt)("p",null,'\u6709\u51e0\u4ef6\u4e8b\u60c5\u6211\u4eec\u9700\u8981\u660e\u786e\u3002"',(0,a.kt)("inlineCode",{parentName:"p"},"mint account"),'" \u53ef\u4ee5\u7406\u89e3\u4e3a\u4ed6\u4eec\u6240\u8981\u6c42\u7684\u88c5\u5907\u7684\u5b58\u50a8\u8d26\u6237\u3002"',(0,a.kt)("inlineCode",{parentName:"p"},"mint authority"),'" \u662f\u6211\u4eec\u5728\u5ba2\u6237\u7aef\u811a\u672c\u4e2d\u5206\u914d\u7684\u7528\u4e8e\u63a7\u5236\u94f8\u5e01\u7684\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff08',(0,a.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff09\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u8fd9\u90e8\u5206\u7684\u903b\u8f91\uff0c\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u786e\u4fdd\u6218\u5229\u54c1\u7bb1\u6307\u9488\u8fd8\u672a\u88ab\u8ba4\u9886\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn retrieve_item_from_lootbox(ctx: Context<RetrieveItem>) -> Result<()> {\n    require!(\n        !ctx.accounts.lootbox_pointer.claimed,\n        LootboxError::AlreadyClaimed\n    );\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u6218\u5229\u54c1\u94f8\u9020\u7ed9\u4f60\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'token::mint_to(\n       CpiContext::new_with_signer(\n           ctx.accounts.token_program.to_account_info(),\n           MintTo {\n               mint: ctx.accounts.mint.to_account_info(),\n               to: ctx.accounts.user_gear_ata.to_account_info(),\n               authority: ctx.accounts.mint_authority.to_account_info(),\n           },\n           &[&[\n               b"mint".as_ref(),\n               &[*ctx.bumps.get("mint_authority").unwrap()],\n           ]],\n       ),\n       1,\n   )?;\n')),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5c06\u8ba4\u9886\u6807\u8bb0\u8bbe\u4e3a\u771f\u5b9e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    ctx.accounts.lootbox_pointer.claimed = true;\n\n   Ok(())\n}\n")),(0,a.kt)("p",null,"\u522b\u5fd8\u4e86\u67e5\u770b\u6211\u4eec\u5728\u6587\u4ef6\u5e95\u90e8\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u9519\u8bef\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[error_code]\nenum LootboxError {\n    #[msg("Mint already claimed")]\n    AlreadyClaimed,\n\n    #[msg("Haven\'t staked long enough for this loot box or invalid loot box number")]\n    InvalidLootbox,\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4fbf\u662f\u6d41\u7a0b\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u5c1d\u8bd5\u5b9e\u65bd\u8fd9\u4e2a\uff0c\u90a3\u4e48\u5c1d\u8bd5\u4e00\u4e0b\uff0c\u5e76\u8fdb\u884c\u4e00\u4e9b\u6d4b\u8bd5\u3002\u5c3d\u91cf\u81ea\u5df1\u72ec\u7acb\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/anchor-nft-staking-program/blob/solution-naive-loot-boxes/tests/anchor-nft-staking.ts?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u6587\u4ef6"),"\u4e2d\uff0c\u4f60\u53ef\u4ee5\u627e\u5230\u76f8\u5173\u6d4b\u8bd5\u3002\u4f60\u4f1a\u6ce8\u610f\u5230\u6211\u4eec\u6dfb\u52a0\u4e86\u4e24\u4e2a\u6d4b\u8bd5\uff0c\u5206\u522b\u662f\u201c\u968f\u673a\u9009\u62e9\u4e00\u79cd\u94f8\u5e01\u53e3\u5473\u201d\u548c\u201c\u5236\u9020\u6240\u9009\u88c5\u5907\u201d\u3002\u8bf7\u6ce8\u610f\u5728\u6211\u4eec\u6807\u6ce8\u201c",(0,a.kt)("inlineCode",{parentName:"p"},"Swap"),"\u201d\u7684\u5730\u65b9\uff0c\u66f4\u6539\u4ee3\u7801\u884c\u4ee5\u4f7f\u6d4b\u8bd5\u6b63\u5e38\u5de5\u4f5c\u3002\u7136\u540e\u8fd0\u884c\u6d4b\u8bd5\uff0c\u5b83\u4eec\u5e94\u8be5\u90fd\u4f1a\u6309\u9884\u671f\u8fd0\u884c\u3002"),(0,a.kt)("h2",{id:"\u5229\u7528switchboard\u7684\u9a8c\u8bc1\u529f\u80fd\u6765\u968f\u673a\u5206\u914d\u6218\u5229\u54c1"},"\u5229\u7528Switchboard\u7684\u9a8c\u8bc1\u529f\u80fd\u6765\u968f\u673a\u5206\u914d\u6218\u5229\u54c1\ud83d\udd00"),(0,a.kt)("h3",{id:"\u4efb\u52a1"},"\u4efb\u52a1"),(0,a.kt)("p",null,"\u65e2\u7136\u4f60\u5df2\u7ecf\u6210\u529f\u5b9e\u73b0\u4e86\u7b80\u5355\u7684\u6218\u5229\u54c1\u7bb1\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u901a\u8fc7`Switchboard`````````````````````\u6765\u589e\u5f3a\u968f\u673a\u6027\u7684\u771f\u5b9e\u6027\uff08\u867d\u7136\u4ece\u6280\u672f\u4e0a\u8bf4\u4ecd\u662f\u4f2a\u968f\u673a\uff0c\u4f46\u6bd4\u4e4b\u524d\u7684\u968f\u673a\u6027\u8981\u597d\u51e0\u4e2a\u6570\u91cf\u7ea7\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u662f\u5efa\u7acb\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u7684\u5206\u6563\u5f0f\u9884\u8a00\u673a\u7f51\u7edc\u3002\u9884\u8a00\u673a\u662f\u533a\u5757\u94fe\u4e0e\u73b0\u5b9e\u4e16\u754c\u4e4b\u95f4\u7684\u8fde\u63a5\u6865\u6881\uff0c\u63d0\u4f9b\u4e86\u5728\u591a\u4e2a\u6765\u6e90\u4e2d\u6570\u636e\u8fbe\u6210\u5171\u8bc6\u7684\u673a\u5236\u3002\u5728\u968f\u673a\u6027\u65b9\u9762\uff0c\u8fd9\u610f\u5473\u7740\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u9a8c\u8bc1\u7684\u4f2a\u968f\u673a\u7ed3\u679c\uff0c\u6ca1\u6709\u9884\u8a00\u673a\u5219\u65e0\u6cd5\u83b7\u5f97\u3002\u8fd9\u5bf9\u4e8e\u5b9e\u73b0\u4e0d\u80fd\u201c\u4f5c\u5f0a\u201d\u7684\u6218\u5229\u54c1\u7bb1\u81f3\u5173\u91cd\u8981\u3002"),(0,a.kt)("p",null,"\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"Oracle"),"\u4ea4\u4e92\u662f\u4e00\u9879\u6db5\u76d6\u6211\u4eec\u5728\u6574\u4e2a\u8bfe\u7a0b\u4e2d\u6240\u5b66\u7684\u6240\u6709\u5185\u5bb9\u7684\u7efc\u5408\u7ec3\u4e60\u3002\u901a\u5e38\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"Oracle"),"\u7a0b\u5e8f\u8fdb\u884c\u5ba2\u6237\u7aef\u8bbe\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u7a0b\u5e8f\u521d\u59cb\u5316\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"Oracle"),"\u7279\u5b9a\u7684\u8d26\u6237\uff08\u901a\u5e38\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"PDAs"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u7684\u7a0b\u5e8f\u5411",(0,a.kt)("inlineCode",{parentName:"li"},"Oracle"),"\u7a0b\u5e8f\u53d1\u51fa",(0,a.kt)("inlineCode",{parentName:"li"},"CPI"),"\u8c03\u7528\uff0c\u8bf7\u6c42\u7279\u5b9a\u6570\u636e\uff0c\u4f8b\u5982\uff0c\u53ef\u9a8c\u8bc1\u7684\u968f\u673a\u7f13\u51b2\u533a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Oracle"),"\u53ef\u4ee5\u8c03\u7528\u4f60\u7684\u7a0b\u5e8f\u4ee5\u63d0\u4f9b\u6240\u8bf7\u6c42\u4fe1\u606f\u7684\u6307\u4ee4"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u4f60\u7684\u7a0b\u5e8f\u5bf9\u6240\u8bf7\u6c42\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\u7684\u6307\u4ee4")),(0,a.kt)("h3",{id:"\u6587\u6863"},"\u6587\u6863"),(0,a.kt)("p",null,"\u9996\u5148\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u7684\u6587\u6863\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Web3"),"\u4e0a\u4ecd\u7136\u76f8\u5bf9\u7a00\u7f3a\uff0c\u4f46\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://switchboard.xyz/"},"\u6b64\u5904"),"\u9605\u8bfb\u5173\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u53ef\u9a8c\u8bc1\u968f\u673a\u6027\u7684\u7b80\u8981\u6982\u8ff0\u3002\u7136\u540e\u4f60\u5e94\u8be5\u6df1\u5165\u4ed6\u4eec\u7684\u96c6\u6210\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u8fd8\u4f1a\u6709\u5f88\u591a\u7591\u95ee\u3002\u8fd9\u6ca1\u5173\u7cfb\uff0c\u4e0d\u8981\u611f\u5230\u6c14\u9981\u3002\u8fd9\u662f\u4e00\u4e2a\u57f9\u517b\u81ea\u4e3b\u89e3\u51b3\u95ee\u9898\u80fd\u529b\u7684\u597d\u673a\u4f1a\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u67e5\u770b\u4ed6\u4eec\u7684\u9010\u6b65\u6307\u5357\uff0c\u4e86\u89e3\u83b7\u53d6\u968f\u673a\u6027\u7684\u8fc7\u7a0b\u3002\u8fd9\u4f1a\u5f15\u5bfc\u4f60\u4e86\u89e3\u5982\u4f55\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u73af\u5883\u3001\u521d\u59cb\u5316\u8bf7\u6c42\u5ba2\u6237\u7aef\u3001\u53d1\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"CPI"),"\u6307\u4ee4\u3001\u5728\u4f60\u7684\u7a0b\u5e8f\u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u53ef\u4ee5\u8c03\u7528\u7684\u6307\u4ee4\u6765\u63d0\u4f9b\u968f\u673a\u6027\u7b49\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6700\u540e\u7684\u5907\u6ce8")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4efb\u52a1\u53ef\u80fd\u5177\u6709\u6311\u6218\u6027\u3002\u8fd9\u662f\u6545\u610f\u8bbe\u8ba1\u7684\uff0c\u662f\u5bf9\u8fc7\u53bb\u516d\u5468\u52aa\u529b\u7406\u89e3",(0,a.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u5de5\u4f5c\u7684\u603b\u7ed3\u3002\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5173\u4e8e\u5982\u4f55\u5728\u6218\u5229\u54c1\u7bb1\u8ba1\u5212\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u7684\u89c6\u9891\u6982\u89c8\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u968f\u65f6\u89c2\u770b\u8fd9\u4e9b\u89c6\u9891\u3002\u901a\u5e38\uff0c\u6211\u4f1a\u5efa\u8bae\u4f60\u5148\u5b8c\u6210\u4e00\u4e9b\u72ec\u7acb\u5de5\u4f5c\uff0c\u4f46\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Switchboard"),"\u7684\u6587\u6863\u76f8\u5bf9\u7a00\u7f3a\uff0c\u6240\u4ee5\u5c3d\u65e9\u67e5\u770b\u6b65\u9aa4\u8bf4\u660e\u53ef\u80fd\u4f1a\u6709\u6240\u5e2e\u52a9\u3002\u7136\u800c\uff0c\u6211\u60f3\u63d0\u9192\u4f60\uff0c\u4e0d\u8981\u4ec5\u4ec5\u590d\u5236\u7c98\u8d34\u6211\u7684\u89e3\u51b3\u65b9\u6848\u3002\u76f8\u53cd\uff0c\u89c2\u770b\u6b65\u9aa4\u8bf4\u660e\u540e\uff0c\u5c3d\u91cf\u81ea\u5df1\u91cd\u65b0\u521b\u5efa\u7c7b\u4f3c\u7684\u5185\u5bb9\u3002\u5982\u679c\u4f60\u51c6\u5907\u5728\u6211\u4eec\u53d1\u5e03\u6b65\u9aa4\u8bf4\u660e\u4e4b\u524d\u53c2\u8003\u89e3\u51b3\u65b9\u6848\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u968f\u65f6\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/anchor-nft-staking-program/tree/solution-randomize-loot?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u8fd9\u91cc"),"\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"solution-randomize-loot branch"),"\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u9700\u8981\u8d85\u8fc7\u672c\u5468\u7ed3\u675f\u524d\u7684\u65f6\u95f4\u6765\u5b8c\u6210\u8fd9\u9879\u4efb\u52a1\u3002\u8fd9\u662f\u6b63\u5e38\u7684\uff0c\u4e5f\u53ef\u80fd\u9700\u8981\u66f4\u591a\u7684\u65f6\u95f4\u6765\u89e3\u51b3\u95ee\u9898\u3002\u6ca1\u6709\u5173\u7cfb"))}m.isMDXComponent=!0}}]);