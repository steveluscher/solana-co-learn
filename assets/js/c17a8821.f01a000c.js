"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6303],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:43,sidebar_label:"\ud83c\udfa8 \u521b\u5efa\u94f8\u5e01\u7528\u6237\u754c\u9762",sidebar_class_name:"green"},l="\ud83c\udfa8 \u521b\u5efa\u94f8\u5e01\u7528\u6237\u754c\u9762",i={unversionedId:"Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui/README",id:"Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui/README",title:"\ud83c\udfa8 \u521b\u5efa\u94f8\u5e01\u7528\u6237\u754c\u9762",description:"\u73b0\u5728\u6211\u4eec\u6210\u529f\u521b\u5efa\u4e86\u4ee3\u5e01\u548c\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff08NFT\uff09\uff0c\u8ba9\u6211\u4eec\u7ee7\u7eed\u7740\u624b\u6784\u5efa\u6211\u4eec\u7684\u94f8\u5e01\u7528\u6237\u754c\u9762\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u5c31\u80fd\u76f4\u89c2\u5730\u4e0e\u667a\u80fd\u5408\u7ea6\u4e92\u52a8\uff0c\u5e76\u5141\u8bb8\u4ed6\u4eba\u5728\u6211\u4eec\u7684\u6d4f\u89c8\u5668\u4e0a\u94f8\u9020\u6211\u4eec\u7684NFT\u3002\u662f\u4e0d\u662f\u975e\u5e38\u9177\uff1f\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u4f60\u7684\u7f51\u7ad9\u4e0a\u73b0\u6709\u4e00\u4e2a\u540d\u4e3a minting \u7684\u6309\u94ae\uff0c\u4f46\u5b83\u76ee\u524d\u5c1a\u672a\u5b9e\u73b0\u4efb\u4f55\u529f\u80fd\u3002\u8ba9\u6211\u4eec\u4ece\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u5f00\u59cb\uff0c\u7136\u540e\u6dfb\u52a0\u903b\u8f91\u6765\u5141\u8bb8\u6211\u4eec\u94f8\u9020NFT\u3002\u5982\u679c\u4f60\u6ca1\u6709\u8d77\u59cb\u4ee3\u7801\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u514b\u9686\u3002",source:"@site/docs/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui/README.md",sourceDirName:"Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui",slug:"/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui/",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-the-minting-ui/README.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"\ud83c\udfa8 \u521b\u5efa\u94f8\u5e01\u7528\u6237\u754c\u9762",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf6c \u521b\u9020\u7cd6\u679c\u673a",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/create-candy-machine/"},next:{title:"Solana Native \u5f00\u53d1",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module3/"}},s={},c=[{value:"\ud83d\udee0\ufe0f\u5c0f\u4fee\u590d",id:"\ufe0f\u5c0f\u4fee\u590d",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(m,(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u521b\u5efa\u94f8\u5e01\u7528\u6237\u754c\u9762"},"\ud83c\udfa8 \u521b\u5efa\u94f8\u5e01\u7528\u6237\u754c\u9762"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6210\u529f\u521b\u5efa\u4e86\u4ee3\u5e01\u548c\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff09\uff0c\u8ba9\u6211\u4eec\u7ee7\u7eed\u7740\u624b\u6784\u5efa\u6211\u4eec\u7684\u94f8\u5e01\u7528\u6237\u754c\u9762\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u5c31\u80fd\u76f4\u89c2\u5730\u4e0e\u667a\u80fd\u5408\u7ea6\u4e92\u52a8\uff0c\u5e76\u5141\u8bb8\u4ed6\u4eba\u5728\u6211\u4eec\u7684\u6d4f\u89c8\u5668\u4e0a\u94f8\u9020\u6211\u4eec\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u662f\u4e0d\u662f\u975e\u5e38\u9177\uff1f\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u4f60\u7684\u7f51\u7ad9\u4e0a\u73b0\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"minting")," \u7684\u6309\u94ae\uff0c\u4f46\u5b83\u76ee\u524d\u5c1a\u672a\u5b9e\u73b0\u4efb\u4f55\u529f\u80fd\u3002\u8ba9\u6211\u4eec\u4ece\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u5f00\u59cb\uff0c\u7136\u540e\u6dfb\u52a0\u903b\u8f91\u6765\u5141\u8bb8\u6211\u4eec\u94f8\u9020",(0,r.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u5982\u679c\u4f60\u6ca1\u6709\u8d77\u59cb\u4ee3\u7801\uff0c\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildspace/buildoors/tree/solution-core-2-candy-machine"},"\u8fd9\u91cc"),"\u514b\u9686\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"newMint.tsx")," \u6587\u4ef6\u4e2d\u3002\u6ce8\u610f\uff1a\u4e0d\u8981\u76f2\u76ee\u5730\u590d\u5236\u7c98\u8d34\u4ee3\u7801\u3002\u6211\u53ea\u63d0\u4f9b\u4e86\u5fc5\u8981\u7684\u90e8\u5206\uff0c\u4f60\u9700\u8981\u660e\u767d\u8fd9\u4e9b\u4ee3\u7801\u5e94\u653e\u5728\u4f55\u5904\u3002\u63d0\u793a\uff1a\u5e94\u8be5\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Container")," \u5143\u7d20\u4e0b\u65b9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// \u4f60\u7684\u5176\u4f59\u4ee3\u7801\nimport { Button, Text, HStack } from "@chakra-ui/react";\nimport { MouseEventHandler, useCallback } from "react";\nimport { ArrowForwardIcon } from "@chakra-ui/icons";\n\nconst Home: NextPage = () => {\n  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(\n    async (event) => {},\n    []\n  );\n\n  return (\n    <MainLayout>\n      {/* \u4f60\u7684\u5176\u4f59\u4ee3\u7801 */}\n      <Image src="" alt="" />\n      <Button\n        bgColor="accent"\n        color="white"\n        maxWidth="380px"\n        onClick={handleClick}\n      >\n        <HStack>\n          <Text>stake my buildoor</Text>\n          <ArrowForwardIcon />\n        </HStack>\n      </Button>\n    </MainLayout>\n  );\n};\n')),(0,r.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Connected.tsx")," \u5e76\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"handleClick")," \u51fd\u6570\u4e0a\u65b9\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"const router = useRouter()"),"\u3002\u8bb0\u5f97\u5728\u6587\u4ef6\u9876\u90e8\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouter")," \u51fd\u6570\u3002\u7136\u540e\uff0c\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"handleClick")," \u51fd\u6570\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'router.push("/newMint")'),"\u3002\u73b0\u5728\u5b83\u5e94\u8be5\u662f\u8fd9\u4e2a\u6837\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(\n  async (event) => {\n    if (event.defaultPrevented) return;\n       if (!walletAdapter.connected || !candyMachine) return;\n\n       try {\n         setIsMinting(true);\n         const nft = await metaplex\n           .candyMachinesV2()\n           .mint({ candyMachine });\n\n         console.log(nft);\n         router.push(`/newMint?mint=${nft.nft.address.toBase58()}`);\n       } catch (error) {\n         alert(error);\n       } finally {\n         setIsMinting(false);\n       }\n  },\n  [metaplex, walletAdapter, candyMachine]\n);\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5f53\u4f60\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"stake my buildoor")," \u6309\u94ae\u65f6\uff0c\u5c06\u63d0\u793a\u4f60\u4ece\u5e7d\u7075\u94b1\u5305\u6279\u51c6\u4ea4\u6613\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u4e00\u65e6\u6210\u529f\u6279\u51c6\u4ea4\u6613\uff0c\u9875\u9762\u4f1a\u5237\u65b0\u5e76\u5bfc\u81f4\u4f60\u7684\u94b1\u5305\u88ab\u767b\u51fa\u3002\u522b\u62c5\u5fc3\uff0c\u4e0b\u4e00\u90e8\u5206\u6211\u4eec\u5c06\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8bf7\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"p"},"newMint.tsx"),"\u3002\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u63a5\u53e3\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5c06\u6b64\u4ee3\u7801\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," \u51fd\u6570\u4e4b\u4e0a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { PublicKey } from "@solana/web3.js";\n\ninterface NewMintProps {\n  mint: PublicKey;\n}\n')),(0,r.kt)("p",null,"\u4e00\u65e6\u5b8c\u6210\uff0c\u4f60\u5e94\u8be5\u770b\u5230\u4ee5\u4e0b\u4ee3\u7801\u7ed3\u6784\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// \u4f60\u7684\u5176\u4f59\u4ee3\u7801\nimport { PublicKey } from "@solana/web3.js";\nimport { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";\n\ninterface NewMintProps {\n  mint: PublicKey;\n}\n\nconst Home: NextPage<NewMintProps> = ({ mint }) => {\n  const [metadata, setMetadata] = useState<any>()\n   const { connection } = useConnection()\n   const walletAdapter = useWallet()\n   const metaplex = useMemo(() => {\n       return Metaplex.make(connection).use(walletAdapterIdentity(walletAdapter))\n   }, [connection, walletAdapter])\n\n   useEffect(() => {\n       // What this does is to allow us to find the NFT object\n       // based on the given mint address\n       metaplex.nfts().findByMint({ mintAddress: new PublicKey(mint) })\n           .then((nft) => {\n               // We then fetch the NFT uri to fetch the NFT metadata\n               fetch(nft.uri)\n                   .then((res) => res.json())\n                   .then((metadata) => {\n                       setMetadata(metadata)\n                   })\n           })\n   }, [mint, metaplex, walletAdapter])\n};\n\n')),(0,r.kt)("p",null,"\u6ce8\u610f\u5230\u6211\u4eec\u662f\u5982\u4f55\u5728\u4e0a\u8ff0\u51fd\u6570\u4e2d\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"setMetadata(metadata)")," \u7684\u5417\uff1f\u8fd9\u662f\u4e3a\u4e86\u8ba9\u6211\u4eec\u80fd\u591f\u5c06\u5143\u6570\u636e\u5bf9\u8c61\u8bbe\u7f6e\u4e3a\u72b6\u6001\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u6765\u6e32\u67d3\u56fe\u50cf\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," \u5143\u7d20\u4e2d\u4f7f\u7528\u6b64\u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'<Image src={metadata?.image ?? ""} alt="" />\n')),(0,r.kt)("p",null,"\u6211\u4eec\u5feb\u5b8c\u6210\u4e86\u3002\u5982\u679c\u4f60\u73b0\u5728\u5c1d\u8bd5\u94f8\u9020\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff0c\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u7f51\u7ad9\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u8bf4\u5b83\u65e0\u6cd5\u8bfb\u53d6\u672a\u5b9a\u4e49\u7684\u5c5e\u6027\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728\u5e95\u90e8\u6dfb\u52a0\u4ee5\u4e0b\u51e0\u884c\u4ee3\u7801\u6765\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'NewMint.getInitialProps = async ({ query }) => {\n  const { mint } = query;\n  if (!mint) throw { error: "No mint" };\n\n  try {\n    const mintPubkey = new PublicKey(mint);\n    return { mint: mintPubkey };\n  } catch {\n    throws({ error: "Invalid mint" });\n  }\n};\n\n')),(0,r.kt)("p",null,"\u592a\u68d2\u4e86\uff01\u73b0\u5728\u4f60\u5df2\u7ecf\u6dfb\u52a0\u4e86\u6240\u6709\u5fc5\u8981\u7684\u4ee3\u7801\uff0c\u4f60\u5e94\u8be5\u53ef\u4ee5\u94f8\u9020\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff0c\u5e76\u770b\u5230\u8be5\u56fe\u50cf\u3002\u8fd9\u5c31\u662f\u6211\u770b\u5230\u7684\u6837\u5b50\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1672).Z,width:"611",height:"554"})),(0,r.kt)("h2",{id:"\ufe0f\u5c0f\u4fee\u590d"},"\ud83d\udee0\ufe0f\u5c0f\u4fee\u590d"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\u7f51\u7ad9\u672a\u80fd\u51c6\u786e\u663e\u793a\u5185\u5bb9\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"p"},"WalletContextProvider.tsx")," \u5e76\u4fee\u6539\u4e00\u4e9b\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u6539\u53d8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const phantom = new PhantomWalletAdapter();\n")),(0,r.kt)("p",null,"to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const phantom = useMemo(() => new PhantomWalletAdapter(), []);\n")),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u7ed9\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"autoConnect")," \u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\u3002\u5c31\u50cf\u8fd9\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"<WalletProvider wallets={[phantom]} autoConnect={true}>\n  <WalletModalProvider>{children}</WalletModalProvider>\n</WalletProvider>\n")),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," \u7684\u539f\u56e0\u662f\u4e3a\u4e86\u9632\u6b62\u94b1\u5305\u9002\u914d\u5668\u88ab\u591a\u6b21\u6784\u5efa\u3002\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usememo?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u8fd9\u91cc"),"\u4e86\u89e3\u66f4\u591a\u5173\u4e8euseMemo\u7684\u4fe1\u606f\u3002"))}u.isMDXComponent=!0},1672:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/mint-nft-displayt-33954807227ec79f4bc440dfe8a94591.png"}}]);