"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[455],{1888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(6302),o=n(217),r=(n(7503),n(9538)),i=["components"],s={},p="Custom Components",l={unversionedId:"guides/custom-components",id:"guides/custom-components",title:"Custom Components",description:"Use the components prop to replace some of the internal components used by DayPicker with a custom implementation.",source:"@site/docs/guides/custom-components.md",sourceDirName:"guides",slug:"/guides/custom-components",permalink:"/guides/custom-components",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/main/website/docs/guides/custom-components.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Formatters",permalink:"/guides/formatters"},next:{title:"Input Fields",permalink:"/guides/input-fields"}},c={},u=[{value:"DayPicker hooks",id:"daypicker-hooks",level:2},{value:"Examples",id:"examples",level:2},{value:"Custom Caption",id:"custom-caption",level:3},{value:"Wrapping the day",id:"wrapping-the-day",level:3},{value:"Range selections with Shift key",id:"range-selections-with-shift-key",level:3},{value:"Disable rows in the past",id:"disable-rows-in-the-past",level:3}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-components"},"Custom Components"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," prop to replace some of the internal components used by DayPicker with a custom implementation."),(0,r.kt)("p",null,"Components that can be changed are described in the ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/CustomComponents"},"CustomComponents interface"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Custom components are an advanced feature. Look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/tree/main/src/components"},(0,r.kt)("strong",{parentName:"a"},"components source"))," to understand how the internal components are built.")),(0,r.kt)("h2",{id:"daypicker-hooks"},"DayPicker hooks"),(0,r.kt)("p",null,"When creating custom components, you will find useful the DayPicker hooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/functions/useDayPicker"},"useDayPicker")," - to get the props passed to DayPicker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/functions/useNavigation"},"useNavigation")," - to navigate between months and years."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/functions/useDayRender"},"useDayRender")," - useful to render the day cell from a custom ",(0,r.kt)("inlineCode",{parentName:"li"},"Day")," component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/functions/useFocusContext"},"useFocusContext")," - handle the focus between elements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/functions/useActiveModifiers"},"useActiveModifiers")," - to get the modifiers applied to a day.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"custom-caption"},"Custom Caption"),(0,r.kt)("p",null,"Implement a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Caption")," component with next/previous buttons. Note the use of the ",(0,r.kt)("a",{parentName:"p",href:"/api/functions/useNavigation"},"useNavigation hook")," to navigate between months."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"custom-caption\n")),(0,r.kt)("h3",{id:"wrapping-the-day"},"Wrapping the day"),(0,r.kt)("p",null,"Implement a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"DayContent")," component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"custom-day\n")),(0,r.kt)("h3",{id:"range-selections-with-shift-key"},"Range selections with Shift key"),(0,r.kt)("p",null,"Implement a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Day")," component to select ranges while pressing the ",(0,r.kt)("kbd",null,"Shift")," key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"range-shift-key\n")),(0,r.kt)("h3",{id:"disable-rows-in-the-past"},"Disable rows in the past"),(0,r.kt)("p",null,"Implement a custom component to hide the rows of past weeks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"custom-disable-row\n")))}f.isMDXComponent=!0},9538:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7503);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=920538cc.369c51dc.js.map