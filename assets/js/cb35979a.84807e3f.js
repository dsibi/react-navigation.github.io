"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[84387],{18078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var s=t(85893),o=t(11151),a=t(74866),r=t(85162);const c={id:"use-focus-effect",title:"useFocusEffect",sidebar_label:"useFocusEffect"},i=void 0,u={id:"use-focus-effect",title:"useFocusEffect",description:"Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using focus and blur events, it's not very ergonomic.",source:"@site/versioned_docs/version-7.x/use-focus-effect.md",sourceDirName:".",slug:"/use-focus-effect",permalink:"/docs/7.x/use-focus-effect",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-focus-effect.md",tags:[],version:"7.x",frontMatter:{id:"use-focus-effect",title:"useFocusEffect",sidebar_label:"useFocusEffect"},sidebar:"docs",previous:{title:"useNavigationState",permalink:"/docs/7.x/use-navigation-state"},next:{title:"useIsFocused",permalink:"/docs/7.x/use-is-focused"}},l={},d=[{value:"Running asynchronous effects",id:"running-asynchronous-effects",level:2},{value:"Delaying effect until transition finishes",id:"delaying-effect-until-transition-finishes",level:2},{value:"How is <code>useFocusEffect</code> different from adding a listener for <code>focus</code> event",id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event",level:2},{value:"When to use <code>focus</code> and <code>blur</code> events instead",id:"when-to-use-focus-and-blur-events-instead",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using ",(0,s.jsx)(n.code,{children:"focus"})," and ",(0,s.jsx)(n.code,{children:"blur"})," events, it's not very ergonomic."]}),"\n",(0,s.jsxs)(n.p,{children:["To make this easier, the library exports a ",(0,s.jsx)(n.code,{children:"useFocusEffect"})," hook:"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"config",queryString:"config",children:[(0,s.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,s.jsx)(n.pre,{"data-name":"useFocusEffect hook","data-snack":"true",children:(0,s.jsx)(n.code,{className:"language-js",metastring:'name="useFocusEffect hook" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n// codeblock-focus-start\nimport { useFocusEffect } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n      };\n    }, [])\n  );\n\n  return <View />;\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return <View />;\n}\n\nconst Tab = createBottomTabNavigator({\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(Tab);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,s.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,s.jsx)(n.pre,{"data-name":"useFocusEffect hook","data-snack":"true",children:(0,s.jsx)(n.code,{className:"language-js",metastring:'name="useFocusEffect hook" snack',children:"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\n// codeblock-focus-start\nimport { useFocusEffect } from '@react-navigation/native';\n\nfunction ProfileScreen() {\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n      };\n    }, [])\n  );\n\n  return <View />;\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return <View />;\n}\n\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name=\"Home\" component={HomeScreen} />\n        <Tab.Screen name=\"Profile\" component={ProfileScreen} />\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["To avoid the running the effect too often, it's important to wrap the callback in ",(0,s.jsx)(n.code,{children:"useCallback"})," before passing it to ",(0,s.jsx)(n.code,{children:"useFocusEffect"})," as shown in the example."]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useFocusEffect"})," is analogous to React's ",(0,s.jsx)(n.code,{children:"useEffect"})," hook. The only difference is that it only runs if the screen is currently focused."]}),"\n",(0,s.jsxs)(n.p,{children:["The effect will run whenever the dependencies passed to ",(0,s.jsx)(n.code,{children:"React.useCallback"})," change, i.e. it'll run on initial render (if the screen is focused) as well as on subsequent renders if the dependencies have changed. If you don't wrap your effect in ",(0,s.jsx)(n.code,{children:"React.useCallback"}),", the effect will run every render if the screen is focused."]}),"\n",(0,s.jsx)(n.p,{children:"The cleanup function runs when the previous effect needs to be cleaned up, i.e. when dependencies change and a new effect is scheduled and when the screen unmounts or blurs."}),"\n",(0,s.jsx)(n.h2,{id:"running-asynchronous-effects",children:"Running asynchronous effects"}),"\n",(0,s.jsxs)(n.p,{children:["When running asynchronous effects such as fetching data from server, it's important to make sure that you cancel the request in the cleanup function (similar to ",(0,s.jsx)(n.code,{children:"React.useEffect"}),"). If you're using an API that doesn't provide a cancellation mechanism, make sure to ignore the state updates:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"useFocusEffect(\n  React.useCallback(() => {\n    let isActive = true;\n\n    const fetchUser = async () => {\n      try {\n        const user = await API.fetch({ userId });\n\n        if (isActive) {\n          setUser(user);\n        }\n      } catch (e) {\n        // Handle error\n      }\n    };\n\n    fetchUser();\n\n    return () => {\n      isActive = false;\n    };\n  }, [userId])\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you don't ignore the result, then you might end up with inconsistent data due to race conditions in your API calls."}),"\n",(0,s.jsx)(n.h2,{id:"delaying-effect-until-transition-finishes",children:"Delaying effect until transition finishes"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useFocusEffect"})," hook runs the effect as soon as the screen comes into focus. This often means that if there is an animation for the screen change, it might not have finished yet."]}),"\n",(0,s.jsxs)(n.p,{children:["React Navigation runs its animations in native thread, so it's not a problem in many cases. But if the effect updates the UI or renders something expensive, then it can affect the animation performance. In such cases, we can use ",(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/interactionmanager",children:(0,s.jsx)(n.code,{children:"InteractionManager"})})," to defer our work until the animations or gestures have finished:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"useFocusEffect(\n  React.useCallback(() => {\n    const task = InteractionManager.runAfterInteractions(() => {\n      // Expensive task\n    });\n\n    return () => task.cancel();\n  }, [])\n);\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event",children:["How is ",(0,s.jsx)(n.code,{children:"useFocusEffect"})," different from adding a listener for ",(0,s.jsx)(n.code,{children:"focus"})," event"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"focus"})," event fires when a screen comes into focus. Since it's an event, your listener won't be called if the screen was already focused when you subscribed to the event. This also doesn't provide a way to perform a cleanup function when the screen becomes unfocused. You can subscribe to the ",(0,s.jsx)(n.code,{children:"blur"})," event and handle it manually, but it can get messy. You will usually need to handle ",(0,s.jsx)(n.code,{children:"componentDidMount"})," and ",(0,s.jsx)(n.code,{children:"componentWillUnmount"})," as well in addition to these events, which complicates it even more."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useFocusEffect"})," allows you to run an effect on focus and clean it up when the screen becomes unfocused. It also handles cleanup on unmount. It re-runs the effect when dependencies change, so you don't need to worry about stale values in your listener."]}),"\n",(0,s.jsxs)(n.h2,{id:"when-to-use-focus-and-blur-events-instead",children:["When to use ",(0,s.jsx)(n.code,{children:"focus"})," and ",(0,s.jsx)(n.code,{children:"blur"})," events instead"]}),"\n",(0,s.jsxs)(n.p,{children:["Like ",(0,s.jsx)(n.code,{children:"useEffect"}),", a cleanup function can be returned from the effect in ",(0,s.jsx)(n.code,{children:"useFocusEffect"}),". The cleanup function is intended to cleanup the effect - e.g. abort an asynchronous task, unsubscribe from an event listener, etc. It's not intended to be used to do something on ",(0,s.jsx)(n.code,{children:"blur"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.strong,{children:"don't do the following"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"useFocusEffect(\n  React.useCallback(() => {\n    return () => {\n      // Do something that should run on blur\n    };\n  }, [])\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The cleanup function runs whenever the effect needs to cleanup, i.e. on ",(0,s.jsx)(n.code,{children:"blur"}),", unmount, dependency change etc. It's not a good place to update the state or do something that should happen on ",(0,s.jsx)(n.code,{children:"blur"}),". You should use listen to the ",(0,s.jsx)(n.code,{children:"blur"})," event instead:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('blur', () => {\n    // Do something when the screen blurs\n  });\n\n  return unsubscribe;\n}, [navigation]);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Similarly, if you want to do something when the screen receives focus (e.g. track screen focus) and it doesn't need cleanup or need to be re-run on dependency changes, then you should use the ",(0,s.jsx)(n.code,{children:"focus"})," event instead:"]}),"\n",(0,s.jsx)(n.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,s.jsx)(n.p,{children:"You can make a component for your effect and use it in your class component:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function FetchUserData({ userId, onUpdate }) {\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, onUpdate);\n\n      return () => unsubscribe();\n    }, [userId, onUpdate])\n  );\n\n  return null;\n}\n\n// ...\n\nclass Profile extends React.Component {\n  _handleUpdate = (user) => {\n    // Do something with user object\n  };\n\n  render() {\n    return (\n      <>\n        <FetchUserData\n          userId={this.props.userId}\n          onUpdate={this._handleUpdate}\n        />\n        {/* rest of your code */}\n      </>\n    );\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var s=t(86010);const o={tabItem:"tabItem_Ymn6"};var a=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(67294),o=t(86010),a=t(12466),r=t(16550),c=t(20469),i=t(91980),u=t(67392),l=t(50012);function d(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=f(e),[r,i]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=s.find((e=>e.default)))?n:s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:o}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,a]=(0,l.Nk)(t);return[o,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),b=(()=>{const e=null!=u?u:p;return h({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),l=e=>{const n=e.currentTarget,t=i.indexOf(n),o=c[t].value;o!==s&&(u(n),r(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var s;const n=i.indexOf(e.currentTarget)+1;t=null!=(s=i[n])?s:i[0];break}case"ArrowLeft":{var o;const n=i.indexOf(e.currentTarget)-1;t=null!=(o=i[n])?o:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:l,...a,className:(0,o.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,v.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);