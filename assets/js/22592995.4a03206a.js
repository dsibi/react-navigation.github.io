"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[65799],{41021:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(85893),i=t(11151),o=t(74866),r=t(85162);const s={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigation Ref"},c=void 0,l={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",description:"Sometimes you need to trigger a navigation action from places where you do not have access to the navigation object, such as a Redux middleware. For such cases, you can dispatch navigation actions use a ref on the navigation container.",source:"@site/versioned_docs/version-7.x/navigating-without-navigation-prop.md",sourceDirName:".",slug:"/navigating-without-navigation-prop",permalink:"/docs/7.x/navigating-without-navigation-prop",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigating-without-navigation-prop.md",tags:[],version:"7.x",frontMatter:{id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigation Ref"},sidebar:"docs",previous:{title:"Call a function on focus",permalink:"/docs/7.x/function-after-focusing-screen"},next:{title:"Deep linking",permalink:"/docs/7.x/deep-linking"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Handling initialization",id:"handling-initialization",level:2}];function g(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Sometimes you need to trigger a navigation action from places where you do not have access to the ",(0,a.jsx)(e.code,{children:"navigation"})," object, such as a Redux middleware. For such cases, you can dispatch navigation actions use a ",(0,a.jsxs)(e.a,{href:"/docs/7.x/navigation-container#ref",children:[(0,a.jsx)(e.code,{children:"ref"})," on the navigation container"]}),"."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Do not"})," use the ",(0,a.jsx)(e.code,{children:"ref"})," if:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["You need to navigate from inside a component without needing to pass the ",(0,a.jsx)(e.code,{children:"navigation"})," prop down, see ",(0,a.jsx)(e.a,{href:"/docs/7.x/use-navigation",children:(0,a.jsx)(e.code,{children:"useNavigation"})})," instead. The ",(0,a.jsx)(e.code,{children:"ref"})," behaves differently, and many helper methods specific to screens aren't available."]}),"\n",(0,a.jsxs)(e.li,{children:["You need to handle deep links or universal links. Doing this with the ",(0,a.jsx)(e.code,{children:"ref"})," has many edge cases. See ",(0,a.jsx)(e.a,{href:"/docs/7.x/configuring-links",children:"configuring links"})," for more information on handling deep linking."]}),"\n",(0,a.jsxs)(e.li,{children:["You need to integrate with third party libraries, such as push notifications, branch etc. See ",(0,a.jsx)(e.a,{href:"/docs/7.x/deep-linking#third-party-integrations",children:"third party integrations for deep linking"})," instead."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Do"})," use the ",(0,a.jsx)(e.code,{children:"ref"})," if:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"You use a state management library such as Redux, where you need to dispatch navigation actions from a middleware."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Note that it's usually better to trigger navigation from user actions such as button presses, rather than from a Redux middleware. Navigating on user action makes the app feel more responsive and provides better UX. So consider this before using the ",(0,a.jsx)(e.code,{children:"ref"})," for navigation. The ",(0,a.jsx)(e.code,{children:"ref"})," is an escape hatch for scenarios that can't be handled with the existing APIs and should only be used in rare situations."]}),"\n",(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(e.p,{children:["You can get access to the root navigation object through a ",(0,a.jsx)(e.code,{children:"ref"})," and pass it to the ",(0,a.jsx)(e.code,{children:"RootNavigation"})," which we will later use to navigate."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { createStaticNavigation } from '@react-navigation/native';\nimport { navigationRef } from './RootNavigation';\n\n/* ... */\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation ref={navigationRef} />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { NavigationContainer } from '@react-navigation/native';\nimport { navigationRef } from './RootNavigation';\n\nexport default function App() {\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["In the next step, we define ",(0,a.jsx)(e.code,{children:"RootNavigation"}),", which is a simple module with functions that dispatch user-defined navigation actions."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// RootNavigation.js\n\nimport { createNavigationContainerRef } from '@react-navigation/native';\n\nexport const navigationRef = createNavigationContainerRef();\n\nexport function navigate(name, params) {\n  if (navigationRef.isReady()) {\n    navigationRef.navigate(name, params);\n  }\n}\n\n// add other navigation functions that you need and export them\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Then, in any of your javascript modules, import the ",(0,a.jsx)(e.code,{children:"RootNavigation"})," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works as well when used from within them."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Using navigate in any js module","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Using navigate in any js module" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport {\n  createStaticNavigation,\n  createNavigationContainerRef,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nconst navigationRef = createNavigationContainerRef();\n\n// codeblock-focus-start\nfunction navigate(name, params) {\n  if (navigationRef.isReady()) {\n    navigationRef.navigate(name, params);\n  }\n}\n\n// Example of usage in any of js modules\n//import * as RootNavigation from './path/to/RootNavigation.js';\n\n// ...\n\n// RootNavigation.navigate('ChatScreen', { userName: 'Lucy' });\n\nfunction Home() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigate('Settings', { userName: 'Lucy' })}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction Settings({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Hello {route.params.userName}</Text>\n      <Button onPress={() => navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: Home,\n    Settings: Settings,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation ref={navigationRef} />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Using navigate in any js module","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Using navigate in any js module" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport {\n  NavigationContainer,\n  createNavigationContainerRef,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nconst navigationRef = createNavigationContainerRef();\n\n// codeblock-focus-start\nfunction navigate(name, params) {\n  if (navigationRef.isReady()) {\n    navigationRef.navigate(name, params);\n  }\n}\n\n// Example of usage in any of js modules\n//import * as RootNavigation from './path/to/RootNavigation.js';\n\n// ...\n\n// RootNavigation.navigate('ChatScreen', { userName: 'Lucy' });\n\nfunction Home() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigate('Settings', { userName: 'Lucy' })}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nfunction Settings({ route }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Hello {route.params.userName}</Text>\n      <Button onPress={() => navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer ref={navigationRef}>\n      <RootStack.Navigator>\n        <RootStack.Screen name=\"Home\" component={Home} />\n        <RootStack.Screen name=\"Settings\" component={Settings} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["Apart from ",(0,a.jsx)(e.code,{children:"navigate"}),", you can add other navigation actions:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\n// ...\n\nexport function push(...args) {\n  if (navigationRef.isReady()) {\n    navigationRef.dispatch(StackActions.push(...args));\n  }\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Note that a stack navigators needs to be rendered to handle this action. You may want to check the ",(0,a.jsx)(e.a,{href:"/docs/7.x/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator",children:"docs for nesting"})," for more details."]}),"\n",(0,a.jsx)(e.p,{children:"When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called with the correct parameters."}),"\n",(0,a.jsx)(e.h2,{id:"handling-initialization",children:"Handling initialization"}),"\n",(0,a.jsx)(e.p,{children:"When using this pattern, you need to keep few things in mind to avoid navigation from failing in your app."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["The ",(0,a.jsx)(e.code,{children:"ref"})," is set only after the navigation container renders, this can be async when handling deep links"]}),"\n",(0,a.jsxs)(e.li,{children:["A navigator needs to be rendered to be able to handle actions, the ",(0,a.jsx)(e.code,{children:"ref"})," won't be ready without a navigator"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"If you try to navigate without rendering a navigator or before the navigator finishes mounting, it will print an error and do nothing. So you'll need to add an additional check to decide what to do until your app mounts."}),"\n",(0,a.jsxs)(e.p,{children:["For an example, consider the following scenario, you have a screen somewhere in the app, and that screen dispatches a redux action on ",(0,a.jsx)(e.code,{children:"useEffect"}),"/",(0,a.jsx)(e.code,{children:"componentDidMount"}),". You are listening for this action in your middleware and try to perform navigation when you get it. This will throw an error, because by this time, the parent navigator hasn't finished mounting and isn't ready. Parent's ",(0,a.jsx)(e.code,{children:"useEffect"}),"/",(0,a.jsx)(e.code,{children:"componentDidMount"})," is always called ",(0,a.jsx)(e.strong,{children:"after"})," child's ",(0,a.jsx)(e.code,{children:"useEffect"}),"/",(0,a.jsx)(e.code,{children:"componentDidMount"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["To avoid this, you can use the ",(0,a.jsx)(e.code,{children:"isReady()"})," method available on the ref as shown in the above examples."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(e.pre,{"data-name":"Handling navigation init","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Handling navigation init" snack',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport {\n  createStaticNavigation,\n  createNavigationContainerRef,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\n// codeblock-focus-start\nconst navigationRef = createNavigationContainerRef();\n\nfunction navigate(name, params) {\n  if (navigationRef.isReady()) {\n    // Perform navigation if the react navigation is ready to handle actions\n    navigationRef.navigate(name, params);\n  } else {\n    // You can decide what to do if react navigation is not ready\n    // You can ignore this, or add these actions to a queue you can call later\n  }\n}\n// codeblock-focus-end\n\nfunction Home() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home</Text>\n      <Button onPress={() => navigate('Profile')}>Go to Profile</Button>\n    </View>\n  );\n}\n\nfunction Profile() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile</Text>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: Home,\n    Profile: Profile,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation ref={navigationRef} />;\n}\n"})})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(e.pre,{"data-name":"Handling navigation init","data-snack":"true",children:(0,a.jsx)(e.code,{className:"language-js",metastring:'name="Handling navigation init" snack',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport {\n  NavigationContainer,\n  createNavigationContainerRef,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { Button } from '@react-navigation/elements';\n\nconst Stack = createNativeStackNavigator();\n// codeblock-focus-start\nconst navigationRef = createNavigationContainerRef();\n\nfunction navigate(name, params) {\n  if (navigationRef.isReady()) {\n    // Perform navigation if the react navigation is ready to handle actions\n    navigationRef.navigate(name, params);\n  } else {\n    // You can decide what to do if react navigation is not ready\n    // You can ignore this, or add these actions to a queue you can call later\n  }\n}\n// codeblock-focus-end\n\nfunction Home() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home</Text>\n      <Button onPress={() => navigate('Profile')}>Go to Profile</Button>\n    </View>\n  );\n}\n\nfunction Profile() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile</Text>\n    </View>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer ref={navigationRef}>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={Home} />\n        <Stack.Screen name=\"Profile\" component={Profile} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["If you're unsure if a navigator is rendered, you can call ",(0,a.jsx)(e.code,{children:"navigationRef.current.getRootState()"}),", and it'll return a valid state object if any navigators are rendered, otherwise it will return ",(0,a.jsx)(e.code,{children:"undefined"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(g,{...n})}):g(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>r});t(67294);var a=t(86010);const i={tabItem:"tabItem_Ymn6"};var o=t(85893);function r(n){let{children:e,hidden:t,className:r}=n;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>w});var a=t(67294),i=t(86010),o=t(12466),r=t(16550),s=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(n){var e,t;return null!=(e=null==(t=a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}function g(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=null!=e?e:function(n){return d(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:i}}=n;return{value:e,label:t,attributes:a,default:i}}))}(t);return function(n){const e=(0,l.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((n=>n.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function f(n){let{queryString:e=!1,groupId:t}=n;const i=(0,r.k6)(),o=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((n=>{if(!o)return;const e=new URLSearchParams(i.location.search);e.set(o,n),i.replace({...i.location,search:e.toString()})}),[o,i])]}function v(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,o=g(n),[r,c]=(0,a.useState)((()=>function(n){var e;let{defaultValue:t,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((n=>n.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(e=a.find((n=>n.default)))?e:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:o}))),[l,d]=f({queryString:t,groupId:i}),[v,m]=function(n){let{groupId:e}=n;const t=function(n){return n?"docusaurus.tab."+n:null}(e),[i,o]=(0,u.Nk)(t);return[i,(0,a.useCallback)((n=>{t&&o.set(n)}),[t,o])]}({groupId:i}),p=(()=>{const n=null!=l?l:v;return h({value:n,tabValues:o})?n:null})();(0,s.Z)((()=>{p&&c(p)}),[p]);return{selectedValue:r,selectValue:(0,a.useCallback)((n=>{if(!h({value:n,tabValues:o}))throw new Error("Can't select invalid tab value="+n);c(n),d(n),m(n)}),[d,m,o]),tabValues:o}}var m=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(n){let{className:e,block:t,selectedValue:a,selectValue:r,tabValues:s}=n;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=n=>{const e=n.currentTarget,t=c.indexOf(e),i=s[t].value;i!==a&&(l(e),r(i))},d=n=>{var e;let t=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":{var a;const e=c.indexOf(n.currentTarget)+1;t=null!=(a=c[e])?a:c[0];break}case"ArrowLeft":{var i;const e=c.indexOf(n.currentTarget)-1;t=null!=(i=c[e])?i:c[c.length-1];break}}null==(e=t)||e.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:s.map((n=>{let{value:e,label:t,attributes:o}=n;return(0,x.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>c.push(n),onKeyDown:d,onClick:u,...o,className:(0,i.Z)("tabs__item",p.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===e}),children:null!=t?t:e},e)}))})}function y(n){let{lazy:e,children:t,selectedValue:i}=n;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=o.find((n=>n.props.value===i));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function b(n){const e=v(n);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",p.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function w(n){const e=(0,m.Z)();return(0,x.jsx)(b,{...n,children:d(n.children)},String(e))}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);