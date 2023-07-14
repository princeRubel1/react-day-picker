"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1793],{1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var l=n(6302),a=n(217),i=(n(7503),n(9538)),r=["components"],o={},s="Selecting Days",p={unversionedId:"basics/selecting-days",id:"basics/selecting-days",title:"Selecting Days",description:"DayPicker supports 3 built-in selection modes to display days as selected. Enable a selection mode by setting the mode prop.",source:"@site/docs/basics/selecting-days.md",sourceDirName:"basics",slug:"/basics/selecting-days",permalink:"/basics/selecting-days",draft:!1,editUrl:"https://github.com/gpbl/react-day-picker/edit/main/website/docs/basics/selecting-days.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Customization",permalink:"/basics/customization"},next:{title:"Modifiers",permalink:"/basics/modifiers"}},c={},m=[{value:"Single Selections",id:"single-selections",level:2},{value:"Making a selection required",id:"making-a-selection-required",level:3},{value:"Selecting Multiple Days",id:"selecting-multiple-days",level:2},{value:"Limiting the selectable days",id:"limiting-the-selectable-days",level:3},{value:"Selecting a Range of days",id:"selecting-a-range-of-days",level:2},{value:"Limiting the range size",id:"limiting-the-range-size",level:3},{value:"Custom Selections",id:"custom-selections",level:2},{value:"Example: custom multiple select",id:"example-custom-multiple-select",level:3}],d={toc:m},u="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(u,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"selecting-days"},"Selecting Days"),(0,i.kt)("p",null,"DayPicker supports ",(0,i.kt)("strong",{parentName:"p"},"3 built-in selection modes")," to display days as selected. Enable a selection mode by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," prop."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Single mode")," ",(0,i.kt)("inlineCode",{parentName:"li"},'mode="single"'),": only a single day can be selected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multiple mode")," ",(0,i.kt)("inlineCode",{parentName:"li"},'mode="multiple"'),": allow selection of multiple days"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Range mode")," ",(0,i.kt)("inlineCode",{parentName:"li"},'mode="range"'),": allow the selection of range of days")),(0,i.kt)("h2",{id:"single-selections"},"Single Selections"),(0,i.kt)("p",null,"To enable single day selection, set ",(0,i.kt)("inlineCode",{parentName:"p"},'mode="single"')," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"onSelect")," to get the selected day."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"single\n")),(0,i.kt)("h3",{id:"making-a-selection-required"},"Making a selection required"),(0,i.kt)("p",null,"To make a selection required, use ",(0,i.kt)("inlineCode",{parentName:"p"},"defautSelected")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"required"),"."),(0,i.kt)("p",null,"For example, to set the default selected date to today:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"single-required\n")),(0,i.kt)("h2",{id:"selecting-multiple-days"},"Selecting Multiple Days"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},'mode="multiple"')," to allow the selection of multiple days:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"multiple\n")),(0,i.kt)("h3",{id:"limiting-the-selectable-days"},"Limiting the selectable days"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," props to limit the amount of days that can be selected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"multiple-min-max\n")),(0,i.kt)("h2",{id:"selecting-a-range-of-days"},"Selecting a Range of days"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},'mode="range"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onSelect")," to allow the selection of multiple days."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"range\n")),(0,i.kt)("h3",{id:"limiting-the-range-size"},"Limiting the range size"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," props to limit the amount of days in the range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"range-min-max\n")),(0,i.kt)("h2",{id:"custom-selections"},"Custom Selections"),(0,i.kt)("p",null,"If the built-in selection modes are not enough for your app\u2019s requirements, you can control the selection behavior using ",(0,i.kt)("inlineCode",{parentName:"p"},"onDayClick"),"."),(0,i.kt)("p",null,'For example, to implement the "single selection" behavior (like when ',(0,i.kt)("inlineCode",{parentName:"p"},'mode="single"'),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"custom-single\n")),(0,i.kt)("h3",{id:"example-custom-multiple-select"},"Example: custom multiple select"),(0,i.kt)("p",null,"The case of a multi-days select is a bit more complex as it deals with an array. The following example replicates the ",(0,i.kt)("inlineCode",{parentName:"p"},'mode="multiple"'),"\nselection mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-include-example"},"custom-multiple\n")))}g.isMDXComponent=!0},9538:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var l=n(7503);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?l.createElement(g,r(r({ref:t},c),{},{components:n})):l.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=3a8af087.14e84849.js.map