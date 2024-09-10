"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[5408],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>h});var o=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=o.createContext({}),i=function(e){var n=o.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=i(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(a),m=t,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return a?o.createElement(h,l(l({ref:n},s),{},{components:a})):o.createElement(h,l({ref:n},s))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:t,l[1]=p;for(var i=2;i<r;i++)l[i]=a[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90636:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var o=a(87462),t=(a(67294),a(3905));const r={sidebar_position:9,sidebar_label:"Anchor \u5408\u7ea6\u6846\u67b6\u5b9e\u73b0 - hello, World \ud83c\udf0d With PDA",sidebar_class_name:"green",tags:["anchor-program-hello","solana","program"]},l="Anchor \u5408\u7ea6\u6846\u67b6\u5b9e\u73b0 - hello, World \ud83c\udf0d With PDA",p={unversionedId:"module1/local_program_development/anchor_program_hello",id:"module1/local_program_development/anchor_program_hello",title:"Anchor \u5408\u7ea6\u6846\u67b6\u5b9e\u73b0 - hello, World \ud83c\udf0d With PDA",description:"\u8ba9\u6211\u4eec\u901a\u8fc7\u6784\u5efa\u548c\u90e8\u7f72 Hello World! \u7a0b\u5e8f\u6765\u8fdb\u884c\u7ec3\u4e60\u3002",source:"@site/docs/Solana-Co-Learn/module1/local_program_development/anchor_program_hello.md",sourceDirName:"module1/local_program_development",slug:"/module1/local_program_development/anchor_program_hello",permalink:"/solana-co-learn/Solana-Co-Learn/module1/local_program_development/anchor_program_hello",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module1/local_program_development/anchor_program_hello.md",tags:[{label:"anchor-program-hello",permalink:"/solana-co-learn/Solana-Co-Learn/tags/anchor-program-hello"},{label:"solana",permalink:"/solana-co-learn/Solana-Co-Learn/tags/solana"},{label:"program",permalink:"/solana-co-learn/Solana-Co-Learn/tags/program"}],version:"current",lastUpdatedBy:"v1xingyue",lastUpdatedAt:1725959650,formattedLastUpdatedAt:"Sep 10, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Anchor \u5408\u7ea6\u6846\u67b6\u5b9e\u73b0 - hello, World \ud83c\udf0d With PDA",sidebar_class_name:"green",tags:["anchor-program-hello","solana","program"]},sidebar:"tutorialSidebar",previous:{title:"Native Solana\u5408\u7ea6\u5b9e\u73b0 - hello, World",permalink:"/solana-co-learn/Solana-Co-Learn/module1/local_program_development/native_program_hello"},next:{title:"Solang solidity\u5408\u7ea6\u5b9e\u73b0 - hello, World",permalink:"/solana-co-learn/Solana-Co-Learn/module1/local_program_development/solang_program_hello"}},c={},i=[{value:"0. Anchor \u5b89\u88c5",id:"0-anchor-\u5b89\u88c5",level:2},{value:"1. \u521b\u5efa\u4e00\u4e2a\u65b0\u7684Rust\u9879\u76ee",id:"1-\u521b\u5efa\u4e00\u4e2a\u65b0\u7684rust\u9879\u76ee",level:2},{value:"2. \u7f16\u5199\u4f60\u7684\u7a0b\u5e8f",id:"2-\u7f16\u5199\u4f60\u7684\u7a0b\u5e8f",level:2},{value:"3. \u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668",id:"3-\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668",level:2},{value:"4. \u6784\u5efa\u548c\u90e8\u7f72",id:"4-\u6784\u5efa\u548c\u90e8\u7f72",level:2},{value:"5. \u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7",id:"5-\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7",level:2}],s={toc:i},d="wrapper";function u(e){let{components:n,...a}=e;return(0,t.kt)(d,(0,o.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"anchor-\u5408\u7ea6\u6846\u67b6\u5b9e\u73b0---hello-world--with-pda"},"Anchor \u5408\u7ea6\u6846\u67b6\u5b9e\u73b0 - hello, World \ud83c\udf0d With PDA"),(0,t.kt)("p",null,"\u8ba9\u6211\u4eec\u901a\u8fc7\u6784\u5efa\u548c\u90e8\u7f72 ",(0,t.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u7a0b\u5e8f\u6765\u8fdb\u884c\u7ec3\u4e60\u3002"),(0,t.kt)("p",null,"\u6211\u4eec\u5c06\u5728\u672c\u5730\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\uff0c\u5305\u62ec\u90e8\u7f72\u5230\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u548c",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003\u6982\u8ff0\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,t.kt)("h2",{id:"0-anchor-\u5b89\u88c5"},"0. Anchor \u5b89\u88c5"),(0,t.kt)("p",null,"\u8fd9\u91cc\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u7684",(0,t.kt)("a",{parentName:"p",href:"https://www.anchor-lang.com/docs/installation"},"\u5b89\u88c5\u5b98\u65b9\u6307\u5357"),"."),(0,t.kt)("p",null,"\u9700\u8981\u4f60\u6309\u7167\u6b65\u9aa4\u5b89\u88c5\u597d ",(0,t.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u3002"),(0,t.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4,\u68c0\u6d4b ",(0,t.kt)("inlineCode",{parentName:"p"},"Anchor")," \u662f\u5426\u5b89\u88c5\u5b8c\u6210\u2705\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"anchor --version\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"anchor --version\nanchor-cli 0.28.0\n")),(0,t.kt)("h2",{id:"1-\u521b\u5efa\u4e00\u4e2a\u65b0\u7684rust\u9879\u76ee"},"1. \u521b\u5efa\u4e00\u4e2a\u65b0\u7684Rust\u9879\u76ee"),(0,t.kt)("p",null,"\u8ba9\u6211\u4eec\u4ece\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u9879\u76ee\u5f00\u59cb\u3002\u8fd0\u884c\u4e0b\u9762\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"anchor init <you-project-name>"),"\u547d\u4ee4\u3002\u968f\u610f\u7528\u4f60\u81ea\u5df1\u7684\u76ee\u5f55\u540d\u66ff\u6362\u5b83\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"anchor init hello_world\n")),(0,t.kt)("h2",{id:"2-\u7f16\u5199\u4f60\u7684\u7a0b\u5e8f"},"2. \u7f16\u5199\u4f60\u7684\u7a0b\u5e8f"),(0,t.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u4e0b\u9762\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Hello World!"),"\u7a0b\u5e8f\u66f4\u65b0",(0,t.kt)("inlineCode",{parentName:"p"},"hello_world/program/src/lib.rs"),"\u3002\u5f53\u7a0b\u5e8f\u88ab\u8c03\u7528\u65f6\uff0c\u8be5\u7a0b\u5e8f\u4f1a\u5c06\u4f20\u5165\u7684\u6570\u636e\u4fdd\u5b58\u5230\u6570\u636e\u5b58\u50a8\u8d26\u6237\u4e2d\u53bb\u4e5f\u5c31\u662f\u4e0b\u9762\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"HelloWorld"),"\u8d26\u6237\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\n\ndeclare_id!("22sSSi7GtQgwXFcjJmGNNKSCLEsiJxyYLFfP3CMWeMLj");\n\n#[program]\npub mod hello_world {\n    use super::*;\n\n    pub fn initialize(ctx: Context<Initialize>, data: String) -> Result<()> {\n\n        msg!("{}", data);\n\n        *ctx.accounts.hello_world = HelloWorld {\n            authority: *ctx.accounts.authority.key,\n            data,\n        };\n\n        Ok(())\n    }\n\n    pub fn update(ctx: Context<UpdateHelloWorld>, data: String) -> Result<()> {\n        ctx.accounts.hello_world.data = data;\n        msg!("{}", ctx.accounts.hello_world.data);\n        Ok(())\n    }\n}\n\n#[derive(Accounts)]\npub struct Initialize<\'info> {\n    #[account(\n        init,\n        payer = authority,\n        space = 8 + HelloWorld::INIT_SPACE,\n        seeds = [b"hello-world"],\n        bump\n    )]\n    pub hello_world: Account<\'info, HelloWorld>,\n    #[account(mut)]\n    pub authority: Signer<\'info>,\n    pub system_program: Program<\'info, System>,\n}\n\n#[derive(Accounts)]\npub struct UpdateHelloWorld<\'info> {\n    #[account(\n            mut,\n            seeds = [b"hello-world"],\n            bump\n    )]\n    pub hello_world: Account<\'info, HelloWorld>,\n    #[account(mut)]\n    pub authority: Signer<\'info>,\n}\n\n#[account]\n#[derive(InitSpace)]\npub struct HelloWorld {\n    pub authority: Pubkey,\n    #[max_len(100)]\n    pub data: String,\n}\n\n#[error_code]\npub enum ErrorCode {\n    #[msg("You are not authorized to perform this action.")]\n    Unauthorized,\n    #[msg("Cannot get the bump.")]\n    CannotGetBump,\n}\n')),(0,t.kt)("p",null,"\u4e0b\u9762\u8fd9\u662f\u4e00\u4e2a\u672c\u5730\u7684\u6d4b\u8bd5\u811a\u672c\u6587\u4ef6\uff0c\u7528\u6765\u8c03\u7528\u4e0a\u9762\u7684\u5408\u7ea6\u7a0b\u5e8f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'import * as anchor from "@coral-xyz/anchor";\nimport { Program } from "@coral-xyz/anchor";\nimport { HelloWorld } from "../target/types/hello_world";\n\ndescribe("hello-world", () => {\n  let provider = anchor.AnchorProvider.env();\n  // Configure the client to use the local cluster.\n  anchor.setProvider(provider);\n\n  const program = anchor.workspace.HelloWorld as Program<HelloWorld>;\n\n  const authority = provider.wallet.publicKey;\n\n  let [helloWorld] = anchor.web3.PublicKey.findProgramAddressSync(\n    [Buffer.from("hello-world")],\n    program.programId\n  );\n\n  it("Is initialized!", async () => {\n    // Add your test here.\n    const tx = await program.methods.initialize("Hello World!").accounts({\n      helloWorld,\n      authority,\n      systemProgram: anchor.web3.SystemProgram.programId,\n    }).rpc();\n\n    console.log("tx signature: ", tx);\n\n    // Fetch the state struct from the network.\n    const accountState = await program.account.helloWorld.fetch(helloWorld);\n    console.log("account state: ", accountState);\n\n  });\n\n  it("get hello world!", async () => {\n\n    // Add your test here.\n    const tx = await program.methods.update("Davirain").accounts({\n      helloWorld,\n    }).rpc();\n\n    console.log("tx signature: ", tx);\n\n\n    // Fetch the state struct from the network.\n    const accountState = await program.account.helloWorld.fetch(helloWorld);\n    console.log("account state: ", accountState);\n  });\n\n\n  it("read account name", async () => {\n\n    // Fetch the state struct from the network.\n    const accountState = await program.account.helloWorld.fetch(helloWorld);\n    console.log("account state: ", accountState);\n  });\n});\n')),(0,t.kt)("h2",{id:"3-\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668"},"3. \u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668"),(0,t.kt)("p",null,"\u5728\u7f16\u5199\u597d\u4f60\u7684\u7a0b\u5e8f\u4e4b\u540e\uff0c\u8ba9\u6211\u4eec\u786e\u4fdd\u6211\u4eec\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u914d\u7f6e\u6307\u5411\u672c\u5730\u4e3b\u673a\uff0c\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config set --url"),"\u547d\u4ee4\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url localhost\n")),(0,t.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"solana config get"),"\u547d\u4ee4\u68c0\u67e5",(0,t.kt)("inlineCode",{parentName:"p"},"Solana CLI"),"\u914d\u7f6e\u662f\u5426\u5df2\u66f4\u65b0\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana config get\n")),(0,t.kt)("p",null,"\u6700\u540e\uff0c\u8fd0\u884c\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u3002\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u7ec8\u7aef\u7a97\u53e3\u4e2d\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u547d\u4ee4\u3002\u53ea\u6709\u5f53\u6211\u4eec\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"RPC URL"),"\u8bbe\u7f6e\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"localhost"),"\u65f6\u624d\u9700\u8981\u8fd9\u6837\u505a\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator\n")),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4e00\u5b9a\u8981\u6ce8\u610f\u26a0\ufe0f\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"solana-test-validator")," \u8fd9\u4e2a\u547d\u4ee4\u542f\u52a8\u7684\u662fsolana\u7684\u672c\u5730\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u3002")),(0,t.kt)("h2",{id:"4-\u6784\u5efa\u548c\u90e8\u7f72"},"4. \u6784\u5efa\u548c\u90e8\u7f72"),(0,t.kt)("p",null,"\u6211\u4eec\u73b0\u5728\u51c6\u5907\u597d\u6784\u5efa\u548c\u90e8\u7f72\u6211\u4eec\u7684\u7a0b\u5e8f\u4e86\u3002\u901a\u8fc7\u8fd0\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"anchor build")," \u547d\u4ee4\u6765\u6784\u5efa\u7a0b\u5e8f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"anchor build\n")),(0,t.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u90e8\u7f72\u6211\u4eec\u7684\u7a0b\u5e8f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"anchor deploy\n")),(0,t.kt)("p",null,"Solana\u7a0b\u5e8f\u90e8\u7f72\u5c06\u8f93\u51fa\u4f60\u7684\u7a0b\u5e8f\u7684\u7a0b\u5e8f",(0,t.kt)("inlineCode",{parentName:"p"},"ID"),"\u3002\u4f60\u73b0\u5728\u53ef\u4ee5\u5728",(0,t.kt)("a",{parentName:"p",href:"https://explorer.solana.com/?cluster=custom"},"Solana Explorer"),"\u4e0a\u67e5\u627e\u5df2\u90e8\u7f72\u7684\u7a0b\u5e8f\uff08\u5bf9\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"localhost"),"\uff0c\u8bf7\u9009\u62e9\u201c\u81ea\u5b9a\u4e49",(0,t.kt)("inlineCode",{parentName:"p"},"RPC URL"),"\u201d\u4f5c\u4e3a\u96c6\u7fa4\uff09\u3002"),(0,t.kt)("h2",{id:"5-\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7"},"5. \u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7"),(0,t.kt)("p",null,"\u5728\u6211\u4eec\u8c03\u7528\u7a0b\u5e8f\u4e4b\u524d\uff0c\u6253\u5f00\u4e00\u4e2a\u5355\u72ec\u7684\u7ec8\u7aef\u5e76\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana logs"),"\u547d\u4ee4\u3002\u8fd9\u5c06\u5141\u8bb8\u6211\u4eec\u5728\u7ec8\u7aef\u4e2d\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"solana logs <PROGRAM_ID>\n")),(0,t.kt)("p",null,"\u6216\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,t.kt)("a",{parentName:"p",href:"https://explorer.solana.com/?cluster=custom"},"Solana Exporer"),"\uff0c\u67e5\u770b\u4ea7\u751f\u7684\u65e5\u5fd7\ud83d\udcd4\u3002"),(0,t.kt)("p",null,"\u5728\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u4ecd\u5728\u8fd0\u884c\u65f6\uff0c\u5c1d\u8bd5\u4f7f\u7528",(0,t.kt)("a",{parentName:"p",href:"https://github.com/all-in-one-solana/hello-world-with-pda/tree/main/app"},"\u6b64\u5904"),"\u7684\u5ba2\u6237\u7aef\u811a\u672c\u8c03\u7528\u4f60\u7684\u7a0b\u5e8f\u3002"),(0,t.kt)("p",null,"\u8fd9\u5c06\u8fd4\u56de\u4e00\u4e2a",(0,t.kt)("a",{parentName:"p",href:"https://explorer.solana.com"},"Solana Explorer"),"\u7684URL(",(0,t.kt)("inlineCode",{parentName:"p"},"Transaction https://explorer.solana.com/tx/${transactionSignature}?cluster=custom"),")\u3002\u5c06URL\u590d\u5236\u5230\u6d4f\u89c8\u5668\u4e2d\uff0c\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"Solana Explorer"),"\u4e0a\u67e5\u627e\u8be5\u4ea4\u6613\uff0c\u5e76\u68c0\u67e5\u7a0b\u5e8f\u65e5\u5fd7\u4e2d\u662f\u5426\u6253\u5370\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"Hello, world!"),"\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c",(0,t.kt)("inlineCode",{parentName:"p"},"solana logs"),"\u547d\u4ee4\u7684\u7ec8\u7aef\u4e2d\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7\u3002"),(0,t.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01\u4f60\u521a\u521a\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u521b\u5efa\u5e76\u90e8\u7f72\u4e86\u4f60\u7684\u7b2c\u4e00\u4e2a\u7a0b\u5e8f\u3002"))}u.isMDXComponent=!0}}]);