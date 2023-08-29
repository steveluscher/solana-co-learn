"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2357],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),k=r,d=p["".concat(i,".").concat(k)]||p[k]||m[k]||o;return t?a.createElement(d,c(c({ref:n},u),{},{components:t})):a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:92,sidebar_label:"\ud83d\udcb8 \u4f7f\u7528Anchor\u8d4e\u56de",sidebar_class_name:"green"},c="\ud83d\udcb8 \u4f7f\u7528Anchor\u8d4e\u56de",s={unversionedId:"module5/a-full-stack-anchor-app/redeeming-with-anchor/README",id:"module5/a-full-stack-anchor-app/redeeming-with-anchor/README",title:"\ud83d\udcb8 \u4f7f\u7528Anchor\u8d4e\u56de",description:"\u5728lib.rs\u6587\u4ef6\u4e2d\u627e\u5230Redeem\u7ed3\u6784\u4f53\u3002\u7531\u4e8e\u5b83\u4e0eStake\u975e\u5e38\u76f8\u4f3c\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7c98\u8d34\u8be5\u4ee3\u7801\uff0c\u5e76\u6839\u636e\u9700\u8981\u8fdb\u884c\u8c03\u6574\u3002",source:"@site/docs/Solana-Co-Learn/module5/a-full-stack-anchor-app/redeeming-with-anchor/README.md",sourceDirName:"module5/a-full-stack-anchor-app/redeeming-with-anchor",slug:"/module5/a-full-stack-anchor-app/redeeming-with-anchor/",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/a-full-stack-anchor-app/redeeming-with-anchor/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Co-Learn/module5/a-full-stack-anchor-app/redeeming-with-anchor/README.md",tags:[],version:"current",sidebarPosition:92,frontMatter:{sidebar_position:92,sidebar_label:"\ud83d\udcb8 \u4f7f\u7528Anchor\u8d4e\u56de",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd69 \u4f7f\u7528Anchor\u8fdb\u884cNFT\u7684\u8d28\u62bc",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/a-full-stack-anchor-app/staking-with-anchor/"},next:{title:"\ud83c\udf56 \u89e3\u9664\u4e0eAnchor\u7684\u8d28\u62bc",permalink:"/all-in-one-solana/Solana-Co-Learn/module5/a-full-stack-anchor-app/unstaking-with-anchor/"}},i={},l=[],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u4f7f\u7528anchor\u8d4e\u56de"},"\ud83d\udcb8 \u4f7f\u7528Anchor\u8d4e\u56de"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs"),"\u6587\u4ef6\u4e2d\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Redeem"),"\u7ed3\u6784\u4f53\u3002\u7531\u4e8e\u5b83\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"Stake"),"\u975e\u5e38\u76f8\u4f3c\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u7c98\u8d34\u8be5\u4ee3\u7801\uff0c\u5e76\u6839\u636e\u9700\u8981\u8fdb\u884c\u8c03\u6574\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4e0d\u9700\u8981\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"nft_mint"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nft_edition"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"program_authority"),"\u3002\u6211\u4eec\u8981\u66f4\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"nft_token_account"),"\u7684\u7ea6\u675f\u6761\u4ef6\uff0c\u5c06\u4ee4\u724c\u6388\u6743\u6539\u4e3a'",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"'\uff0c\u56e0\u4e3a\u6211\u4eec\u5e76\u6ca1\u6709\u4f20\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"mint"),"\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"stake_state"),"\u8d26\u6237\uff0c\u7531\u4e8e\u4e0d\u518d\u9700\u8981\u521d\u59cb\u5316\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u8981\u8bbe\u5b9a\u79cd\u5b50\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"bump"),"\uff0c\u5e76\u4f7f\u5176\u53ef\u53d8\u5316\u3002\u6211\u4eec\u8fd8\u53ef\u4ee5\u4e3a\u5176\u589e\u52a0\u4e00\u4e9b\u624b\u52a8\u7ea6\u675f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"constraint = *user.key == stake_state.user_pubkey,\nconstraint = nft_token_account.key() == stake_state.token_account\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8981\u6dfb\u52a0\u51e0\u4e2a\u8d26\u6237\u3002\u5176\u4e2d\u4e00\u4e2a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"stake_mint"),"\uff0c\u5b83\u9700\u8981\u53ef\u53d8\u3002\u8fd9\u662f\u5956\u52b1\u94f8\u5e01\u7684\u8d26\u6237\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[account(mut)]\npub stake_mint: Account<'info, Mint>,\n")),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"stake_authority"),"\uff0c\u5b83\u5c06\u662f\u53e6\u4e00\u4e2a\u672a\u7ecf\u68c0\u67e5\u7684\u8d26\u6237\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6dfb\u52a0\u8fd9\u4e2a\u68c0\u67e5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[account(seeds = ["mint".as_bytes().as_ref()], bump)]\n')),(0,r.kt)("p",null,"\u7528\u6237\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"user_stake_ata"),"\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"TokenAccount"),"\uff0c\u5177\u6709\u4ee5\u4e0b\u9650\u5236\u6761\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[account(\n        init_if_needed,\n        payer=user,\n        associated_token::mint=stake_mint,\n        associated_token::authority=user\n    )]\npub user_stake_ata: Account<'info, TokenAccount>,\n")),(0,r.kt)("p",null,"\u5173\u8054\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"associated_token_program")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"AssociatedToken"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub associated_token_program: Program<'info, AssociatedToken>,\n")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"metadata_program"),"\u66ff\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"rent"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub rent: Sysvar<'info, Rent>,\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u6211\u4eec\u7684\u8d26\u6237\u603b\u6570\u589e\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"10"),"\u4e2a\u3002\u4ee5\u4e0b\u662f\u6240\u6709\u4ee3\u7801\u7684\u7247\u6bb5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct Redeem<'info> {\n    #[account(mut)]\n    pub user: Signer<'info>,\n    #[account(\n        mut,\n        token::authority=user\n    )]\n    pub nft_token_account: Account<'info, TokenAccount>,\n    #[account(\n        mut,\n        seeds = [user.key().as_ref(), nft_token_account.key().as_ref()],\n        bump,\n        constraint = *user.key == stake_state.user_pubkey,\n        constraint = nft_token_account.key() == stake_state.token_account\n    )]\n    pub stake_state: Account<'info, UserStakeInfo>,\n    #[account(mut)]\n    pub stake_mint: Account<'info, Mint>,\n    /// CHECK: manual check\n    #[account(seeds = [\"mint\".as_bytes().as_ref()], bump)]\n    pub stake_authority: UncheckedAccount<'info>,\n    #[account(\n        init_if_needed,\n        payer=user,\n        associated_token::mint=stake_mint,\n        associated_token::authority=user\n    )]\n    pub user_stake_ata: Account<'info, TokenAccount>,\n    pub token_program: Program<'info, Token>,\n    pub associated_token_program: Program<'info, AssociatedToken>,\n    pub system_program: Program<'info, System>,\n    pub rent: Sysvar<'info, Rent>,\n}\n")),(0,r.kt)("p",null,"\u56de\u5230\u6d4b\u8bd5\u6587\u4ef6\u4e2d\uff0c\u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u4ee5\u786e\u4fdd\u51fd\u6570\u88ab\u89e6\u53d1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'it("Redeems", async () => {\n    await program.methods\n      .redeem()\n      .accounts({\n        nftTokenAccount: nft.tokenAddress,\n        stakeMint: mint,\n        userStakeAta: tokenAddress,\n      })\n      .rpc()\n')),(0,r.kt)("p",null,"...\u7136\u540e\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"anchor test")," \uff0c\u5982\u679c\u4e00\u5207\u6b63\u5e38\u5e76\u4e14\u4e24\u4e2a\u6d4b\u8bd5\u901a\u8fc7\uff0c\u6211\u4eec\u5c31\u8fdb\u5165\u51fd\u6570\u5e76\u7f16\u5199\u8d4e\u56de\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u68c0\u67e5\uff0c\u786e\u8ba4\u5b83\u662f\u5426\u5df2\u521d\u59cb\u5316\uff0c\u4ee5\u53ca\u786e\u4fdd\u5b83\u5df2\u7ecf\u62b5\u62bc\u3002\u6211\u4eec\u9700\u8981\u5728\u6587\u4ef6\u5e95\u90e8\u4e3a\u8fd9\u4e24\u79cd\u60c5\u51b5\u589e\u52a0\u81ea\u5b9a\u4e49\u9519\u8bef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'require!(\n    ctx.accounts.stake_state.is_initialized,\n    StakeError::UninitializedAccount\n);\n\nrequire!(\n    ctx.accounts.stake_state.stake_state == StakeState::Staked,\n    StakeError::InvalidStakeState\n);\n\n...\n\n#[msg("State account is uninitialized")]\nUninitializedAccount,\n\n#[msg("Stake state is invalid")]\nInvalidStakeState,\n')),(0,r.kt)("p",null,"\u4e4b\u540e\uff0c\u8ba9\u6211\u4eec\u83b7\u53d6\u65f6\u949f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let clock = Clock::get()?;\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e9b\u6d88\u606f\u6765\u8ddf\u8e2a\u4e8b\u7269\u7684\u8fdb\u5c55\uff0c\u5e76\u58f0\u660e\u6211\u4eec\u7684\u65f6\u95f4\u548c\u5151\u6362\u91d1\u989d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'msg!(\n    "Stake last redeem: {:?}",\n    ctx.accounts.stake_state.last_stake_redeem\n);\n\nmsg!("Current time: {:?}", clock.unix_timestamp);\nlet unix_time = clock.unix_timestamp - ctx.accounts.stake_state.last_stake_redeem;\nmsg!("Seconds since last redeem: {}", unix_time);\nlet redeem_amount = (10 * i64::pow(10, 2) * unix_time) / (24 * 60 * 60);\nmsg!("Elligible redeem amount: {}", redeem_amount);\n')),(0,r.kt)("p",null,"\u597d\u4e86\uff0c\u73b0\u5728\u6211\u4eec\u5c06\u5b9e\u9645\u94f8\u9020\u5956\u52b1\u3002\u9996\u5148\uff0c\u6211\u4eec\u8981\u4f7f\u7528\u6211\u4eec\u7684\u7a0b\u5e8f\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"CpiContext"),"\uff0c\u7136\u540e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"MintTo"),"\u5bf9\u8c61\u4e2d\u4f20\u9012\u8d26\u6237\u4fe1\u606f\u3002\u6700\u540e\uff0c\u6dfb\u52a0\u79cd\u5b50\u548c\u91d1\u989d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'msg!("Minting staking rewards");\ntoken::mint_to(\n    CpiContext::new_with_signer(\n        ctx.accounts.token_program.to_account_info(),\n        MintTo {\n            mint: ctx.accounts.stake_mint.to_account_info(),\n            to: ctx.accounts.user_stake_ata.to_account_info(),\n            authority: ctx.accounts.stake_authority.to_account_info(),\n        },\n        &[&[\n            b"mint".as_ref(),\n            &[*ctx.bumps.get("stake_authority").unwrap()],\n        ]],\n    ),\n    redeem_amount.try_into().unwrap(),\n)?;\n')),(0,r.kt)("p",null,"\u4e00\u5207\u51c6\u5907\u5c31\u7eea\u540e\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u6700\u540e\u7684\u8d4e\u56de\u65f6\u95f4\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u83b7\u5f97\u6bd4\u5b9e\u9645\u5e94\u5f97\u7684\u66f4\u591a\u5956\u52b1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'ctx.accounts.stake_state.last_stake_redeem = clock.unix_timestamp;\nmsg!(\n    "Updated last stake redeem time: {:?}",\n    ctx.accounts.stake_state.last_stake_redeem\n);\n')),(0,r.kt)("p",null,"\u91cd\u65b0\u8fdb\u5165\u5151\u6362\u6d4b\u8bd5\uff0c\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const account = await program.account.userStakeInfo.fetch(stakeStatePda)\nexpect(account.stakeState === "Unstaked")\nconst tokenAccount = await getAccount(provider.connection, tokenAddress)\n')),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0\u66f4\u591a\u7684\u6d4b\u8bd5\u6765\u786e\u4fdd\u5176\u7a33\u5b9a\u6027\u3002\u76ee\u524d\u6211\u4eec\u53ea\u60f3\u5148\u786e\u4fdd\u57fa\u672c\u529f\u80fd\u7684\u5b9e\u73b0\u548c\u6d4b\u8bd5\u3002\u5047\u5982\u4e00\u5207\u987a\u5229\uff0c\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u8fdb\u884c\u89e3\u9664\u8d28\u62bc\u7684\u6307\u4ee4\u3002"))}m.isMDXComponent=!0}}]);