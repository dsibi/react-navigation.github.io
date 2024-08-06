"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[61998],{3090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),o=t(74866),s=t(85162);const i={id:"use-is-focused",title:"useIsFocused",sidebar_label:"useIsFocused"},c=void 0,u={id:"use-is-focused",title:"useIsFocused",description:"We might want to render different content based on the current focus state of the screen. The library exports a useIsFocused hook to make this easier:",source:"@site/versioned_docs/version-7.x/use-is-focused.md",sourceDirName:".",slug:"/use-is-focused",permalink:"/docs/7.x/use-is-focused",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-is-focused.md",tags:[],version:"7.x",frontMatter:{id:"use-is-focused",title:"useIsFocused",sidebar_label:"useIsFocused"},sidebar:"docs",previous:{title:"useFocusEffect",permalink:"/docs/7.x/use-focus-effect"},next:{title:"usePreventRemove",permalink:"/docs/7.x/use-prevent-remove"}},l={},d=[{value:"Using with class component",id:"using-with-class-component",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["We might want to render different content based on the current focus state of the screen. The library exports a ",(0,r.jsx)(n.code,{children:"useIsFocused"})," hook to make this easier:"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{"data-name":"useIsFocused hook","data-snack":"true",children:(0,r.jsx)(n.code,{className:"language-js",metastring:'name="useIsFocused hook" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n// codeblock-focus-start\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  // highlight-next-line\n  const isFocused = useIsFocused();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return <View />;\n}\n\nconst Tab = createMaterialTopTabNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Tab);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,r.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{"data-name":"useIsFocused hook","data-snack":"true",children:(0,r.jsx)(n.code,{className:"language-js",metastring:'name="useIsFocused hook" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n// codeblock-focus-start\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  // highlight-next-line\n  const isFocused = useIsFocused();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return <View />;\n}\n\nconst Tab = createMaterialTopTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Note that using this hook triggers a re-render for the component when the screen it's in changes focus. This might cause lags during the animation if your component is heavy. You might want to extract the expensive parts to separate components and use ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactmemo",children:(0,r.jsx)(n.code,{children:"React.memo"})})," or ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactpurecomponent",children:(0,r.jsx)(n.code,{children:"React.PureComponent"})})," to minimize re-renders for them."]}),"\n",(0,r.jsx)(n.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,r.jsx)(n.p,{children:"You can wrap your class component in a function component to use the hook:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class Profile extends React.Component {\n  render() {\n    // Get it from props\n    const { isFocused } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function (props) {\n  const isFocused = useIsFocused();\n\n  return <Profile {...props} isFocused={isFocused} />;\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(67294),a=t(86010),o=t(12466),s=t(16550),i=t(20469),c=t(91980),u=t(67392),l=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=f(e),[s,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,d]=h({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,o]=(0,l.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=null!=u?u:p;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(u(n),s(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var a;const n=c.indexOf(e.currentTarget)-1;t=null!=(a=c[n])?a:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:l,...o,className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(w,{...e,...n})]})}function T(e){const n=(0,v.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);