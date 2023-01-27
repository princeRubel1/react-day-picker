"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6488],{2020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=r(9657),a=r(2896),o=(r(7427),r(9553)),i=["components"],p={id:"RowProps",title:"Interface: RowProps",sidebar_label:"RowProps",sidebar_position:0,custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/RowProps",id:"api/interfaces/RowProps",title:"Interface: RowProps",description:"The props for the Row component.",source:"@site/docs/api/interfaces/RowProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/RowProps",permalink:"/api/interfaces/RowProps",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RowProps",title:"Interface: RowProps",sidebar_label:"RowProps",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"NavigationContextValue",permalink:"/api/interfaces/NavigationContextValue"},next:{title:"SelectMultipleContextValue",permalink:"/api/interfaces/SelectMultipleContextValue"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"dates",id:"dates",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"displayMonth",id:"displaymonth",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"weekNumber",id:"weeknumber",level:3},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The props for the ",(0,o.kt)("a",{parentName:"p",href:"/api/functions/Row"},"Row")," component."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"dates"},"dates"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"dates"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Date"),"[]"),(0,o.kt)("p",null,"The days contained in the week."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/61a11e466/packages/react-day-picker/src/components/Row/Row.tsx#L18"},"packages/react-day-picker/src/components/Row/Row.tsx:18")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"displaymonth"},"displayMonth"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"displayMonth"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")),(0,o.kt)("p",null,"The month where the row is displayed."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/61a11e466/packages/react-day-picker/src/components/Row/Row.tsx#L14"},"packages/react-day-picker/src/components/Row/Row.tsx:14")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"weeknumber"},"weekNumber"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"weekNumber"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"The number of the week to render."),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/gpbl/react-day-picker/blob/61a11e466/packages/react-day-picker/src/components/Row/Row.tsx#L16"},"packages/react-day-picker/src/components/Row/Row.tsx:16")))}f.isMDXComponent=!0},9553:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7427);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=049ac7a7.4c2a8226.js.map