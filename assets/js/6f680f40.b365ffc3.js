"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[96536],{27350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=t(85893),o=t(11151),i=t(74866),r=t(85162);const c={id:"navigation-context",title:"NavigationContext",sidebar_label:"NavigationContext"},s=void 0,l={id:"navigation-context",title:"NavigationContext",description:"NavigationContext provides the navigation object (same object as the navigation prop). In fact, useNavigation uses this context to get the navigation prop.",source:"@site/versioned_docs/version-7.x/navigation-context.md",sourceDirName:".",slug:"/navigation-context",permalink:"/docs/7.x/navigation-context",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigation-context.md",tags:[],version:"7.x",frontMatter:{id:"navigation-context",title:"NavigationContext",sidebar_label:"NavigationContext"},sidebar:"docs",previous:{title:"Navigation object",permalink:"/docs/7.x/navigation-object"},next:{title:"Navigation events",permalink:"/docs/7.x/navigation-events"}},u={},d=[];function v(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NavigationContext"})," provides the ",(0,a.jsx)(n.code,{children:"navigation"})," object (same object as the ",(0,a.jsx)(n.a,{href:"/docs/7.x/navigation-object",children:"navigation"})," prop). In fact, ",(0,a.jsx)(n.a,{href:"/docs/7.x/use-navigation",children:"useNavigation"})," uses this context to get the ",(0,a.jsx)(n.code,{children:"navigation"})," prop."]}),"\n",(0,a.jsxs)(n.p,{children:["Most of the time, you won't use ",(0,a.jsx)(n.code,{children:"NavigationContext"})," directly, as the provided ",(0,a.jsx)(n.code,{children:"useNavigation"})," covers most use cases. But just in case you have something else in mind, ",(0,a.jsx)(n.code,{children:"NavigationContext"})," is available for you to use."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Navigation context","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Navigation context" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\n// codeblock-focus-start\nimport { NavigationContext } from '@react-navigation/native';\n// codeblock-focus-end\nimport {\n  useNavigation,\n  createStaticNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return <SomeComponent />;\n}\n\n// codeblock-focus-start\n\nfunction SomeComponent() {\n  // We can access navigation object via context\n  const navigation = React.useContext(NavigationContext);\n  // codeblock-focus-end\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Some component inside HomeScreen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.goBack()}>Go back</Button>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Stack);\n\nfunction App() {\n  return <Navigation />;\n}\n\nexport default App;\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Navigation context","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Navigation context" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\n// codeblock-focus-start\nimport { NavigationContext } from '@react-navigation/native';\n// codeblock-focus-end\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return <SomeComponent />;\n}\n\n// codeblock-focus-start\n\nfunction SomeComponent() {\n  // We can access navigation object via context\n  const navigation = React.useContext(NavigationContext);\n  // codeblock-focus-end\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Some component inside HomeScreen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const navigation = React.useContext(NavigationContext);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.goBack()}>Go back</Button>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName=\"Home\">\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nexport default App;\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(67294),o=t(86010),i=t(12466),r=t(16550),c=t(20469),s=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function v(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=v(e),[r,s]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=a.find((e=>e.default)))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[l,d]=g({queryString:t,groupId:o}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,i]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),x=(()=>{const e=null!=l?l:f;return m({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),p(e)}),[d,p,i]),tabValues:i}}var p=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function h(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),o=c[t].value;o!==a&&(l(n),r(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=s.indexOf(e.currentTarget)+1;t=null!=(a=s[n])?a:s[0];break}case"ArrowLeft":{var o;const n=s.indexOf(e.currentTarget)-1;t=null!=(o=s[n])?o:s[s.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,o.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function N(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(h,{...e,...n}),(0,b.jsx)(N,{...e,...n})]})}function j(e){const n=(0,p.Z)();return(0,b.jsx)(k,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);