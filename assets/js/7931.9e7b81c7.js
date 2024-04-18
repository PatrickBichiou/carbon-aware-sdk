(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[7931],{7293:(e,t,n)=>{"use strict";n.d(t,{A:()=>L});var s=n(6540),o=n(4848);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,o.jsx)(o.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var a=n(8215),r=n(1312),i=n(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,a.A)(i.G.common.admonition,i.G.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:c,className:a}=e;return(0,o.jsxs)(d,{type:t,className:a,children:[(0,o.jsx)(u,{title:s,icon:n}),(0,o.jsx)(m,{children:c})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,o.jsx)(h,{...f,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function b(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,o.jsx)(b,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,o.jsx)(h,{...g,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function v(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(v,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,o.jsx)(h,{...N,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function k(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const A={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:x,tip:j,info:y,warning:function(e){return(0,o.jsx)(h,{...B,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...A,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(x,{title:"secondary",...e}),important:e=>(0,o.jsx)(y,{title:"important",...e}),success:e=>(0,o.jsx)(j,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function L(e){const t=c(e),n=(s=t.type,E[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),E.info));var s;return(0,o.jsx)(n,{...t})}},7931:(e,t,n)=>{"use strict";n.d(t,{A:()=>ue});var s=n(6540);const o={},c=s.createContext(o);function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:function(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}(e.components),s.createElement(c.Provider,{value:t},e.children)}var r=n(5260),i=n(2303),l=n(8215),d=n(5293),u=n(6342);function m(){const{prism:e}=(0,u.p)(),{colorMode:t}=(0,d.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var h=n(7559),p=n(8426),f=n.n(p);const x=/title=(?<quote>["'])(?<title>.*?)\1/,b=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},j={...g,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(g);function N(e,t){const n=e.map((e=>{const{start:n,end:s}=j[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function y(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=t;if(c&&b.test(c)){const e=c.match(b).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"],t);case"jsx":case"tsx":return N(["js","jsBlock","jsx"],t);case"html":return N(["js","jsBlock","html"],t);case"python":case"py":case"bash":return N(["bash"],t);case"markdown":case"md":return N(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return N(["tex"],t);case"lua":case"haskell":case"sql":return N(["lua"],t);case"wasm":return N(["wasm"],t);case"vb":case"vba":case"visual-basic":return N(["vb","rem"],t);case"vbnet":return N(["vbnet","rem"],t);case"batch":return N(["rem"],t);case"basic":return N(["rem","f90"],t);case"fsharp":return N(["js","ml"],t);case"ocaml":case"sml":return N(["ml"],t);case"fortran":return N(["f90"],t);case"cobol":return N(["cobol"],t);default:return N(v,t)}}(s,o),r=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<r.length;){const e=r[h].match(a);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${h},`:d[t]?i[d[t]].start=h:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${h-1},`),r.splice(h,1)}n=r.join("\n");const m={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const k={codeBlockContainer:"codeBlockContainer_Ckt0"};var B=n(4848);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const c=t[s];c&&"string"==typeof o&&(n[c]=o)})),n}(m());return(0,B.jsx)(t,{...n,style:s,className:(0,l.A)(n.className,k.codeBlockContainer,h.G.common.codeBlock)})}const A={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function w(e){let{children:t,className:n}=e;return(0,B.jsx)(C,{as:"pre",tabIndex:0,className:(0,l.A)(A.codeBlockStandalone,"thin-scrollbar",n),children:(0,B.jsx)("code",{className:A.codeBlockLines,children:t})})}var E=n(9532);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,t){const[n,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=L);const o=(0,E._q)(t),c=(0,E.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(4876);const S={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function M(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=o({line:t,className:(0,l.A)(n,s&&S.codeLine)}),r=t.map(((e,t)=>(0,B.jsx)("span",{...c({token:e,key:t})},t)));return(0,B.jsxs)("span",{...a,children:[s?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("span",{className:S.codeLineNumber}),(0,B.jsx)("span",{className:S.codeLineContent,children:r})]}):r,(0,B.jsx)("br",{})]})}var z=n(1312);function H(e){return(0,B.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,B.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function I(e){return(0,B.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,B.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const R={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function V(e){let{code:t,className:n}=e;const[o,c]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const c=document.getSelection(),a=c.rangeCount>0&&c.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}s.remove(),a&&(c.removeAllRanges(),c.addRange(a)),o&&o.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,B.jsx)("button",{type:"button","aria-label":o?(0,z.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,z.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,z.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",n,R.copyButton,o&&R.copyButtonCopied),onClick:r,children:(0,B.jsxs)("span",{className:R.copyButtonIcons,"aria-hidden":"true",children:[(0,B.jsx)(H,{className:R.copyButtonIcon}),(0,B.jsx)(I,{className:R.copyButtonSuccessIcon})]})})}function $(e){return(0,B.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,B.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function P(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,z.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,B.jsx)("button",{type:"button",onClick:n,className:(0,l.A)("clean-btn",t,s&&W.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,B.jsx)($,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function D(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:a,language:r}=e;const{prism:{defaultLanguage:i,magicComments:d}}=(0,u.p)(),h=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??i),p=m(),f=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return T(c,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),b=function(e){return e?.match(x)?.groups.title??""}(o)||c,{lineClassNames:g,code:j}=y(t,{metastring:o,language:h,magicComments:d}),v=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,B.jsxs)(C,{as:"div",className:(0,l.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[b&&(0,B.jsx)("div",{className:A.codeBlockTitle,children:b}),(0,B.jsxs)("div",{className:A.codeBlockContent,children:[(0,B.jsx)(_.f4,{theme:p,code:j,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:c}=e;return(0,B.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,l.A)(t,A.codeBlock,"thin-scrollbar"),style:n,children:(0,B.jsx)("code",{className:(0,l.A)(A.codeBlockLines,v&&A.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,B.jsx)(M,{line:e,getLineProps:o,getTokenProps:c,classNames:g[t],showLineNumbers:v},t)))})})}}),(0,B.jsxs)("div",{className:A.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,B.jsx)(P,{className:A.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,B.jsx)(V,{className:A.codeButton,code:j})]})]})]})}function O(e){let{children:t,...n}=e;const o=(0,i.A)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?D:w;return(0,B.jsx)(a,{...n,children:c},String(o))}function q(e){return(0,B.jsx)("code",{...e})}var G=n(8774);var F=n(5066),U=n(3427),J=n(1422);const Y={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function Z(e){return!!e&&("SUMMARY"===e.tagName||Z(e.parentElement))}function K(e,t){return!!e&&(e===t||K(e.parentElement,t))}function Q(e){let{summary:t,children:n,...o}=e;(0,U.A)().collectAnchor(o.id);const c=(0,i.A)(),a=(0,s.useRef)(null),{collapsed:r,setCollapsed:l}=(0,J.u)({initialState:!o.open}),[d,u]=(0,s.useState)(o.open),m=s.isValidElement(t)?t:(0,B.jsx)("summary",{children:t??"Details"});return(0,B.jsxs)("details",{...o,ref:a,open:d,"data-collapsed":r,className:(0,F.A)(Y.details,c&&Y.isBrowser,o.className),onMouseDown:e=>{Z(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Z(t)&&K(t,a.current)&&(e.preventDefault(),r?(l(!1),u(!0)):l(!0))},children:[m,(0,B.jsx)(J.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),u(!e)},children:(0,B.jsx)("div",{className:Y.collapsibleContent,children:n})})]})}const X={details:"details_b_Ee"},ee="alert alert--info";function te(e){let{...t}=e;return(0,B.jsx)(Q,{...t,className:(0,l.A)(ee,X.details,t.className)})}function ne(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,B.jsx)(B.Fragment,{children:t.filter((e=>e!==n))});return(0,B.jsx)(te,{...e,summary:n,children:o})}var se=n(1107);function oe(e){return(0,B.jsx)(se.A,{...e})}const ce={containsTaskList:"containsTaskList_mC6p"};function ae(e){if(void 0!==e)return(0,l.A)(e,e?.includes("contains-task-list")&&ce.containsTaskList)}const re={img:"img_ev3q"};var ie=n(7293),le=n(418);const de={Head:r.A,details:ne,Details:ne,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,B.jsx)(q,{...e}):(0,B.jsx)(O,{...e})},a:function(e){return(0,B.jsx)(G.A,{...e})},pre:function(e){return(0,B.jsx)(B.Fragment,{children:e.children})},ul:function(e){return(0,B.jsx)("ul",{...e,className:ae(e.className)})},li:function(e){return(0,U.A)().collectAnchor(e.id),(0,B.jsx)("li",{...e})},img:function(e){return(0,B.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,l.A)(t,re.img))});var t},h1:e=>(0,B.jsx)(oe,{as:"h1",...e}),h2:e=>(0,B.jsx)(oe,{as:"h2",...e}),h3:e=>(0,B.jsx)(oe,{as:"h3",...e}),h4:e=>(0,B.jsx)(oe,{as:"h4",...e}),h5:e=>(0,B.jsx)(oe,{as:"h5",...e}),h6:e=>(0,B.jsx)(oe,{as:"h6",...e}),admonition:ie.A,mermaid:le.A};function ue(e){let{children:t}=e;return(0,B.jsx)(a,{components:de,children:t})}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=t;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=s;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);