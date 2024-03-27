"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[80920],{40502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var i=t(85893),a=t(11151);const o={title:"Introducing Static API",author:"Satyajit Sahoo",author_url:"https://twitter.com/satya164",author_title:"Core Team",author_image_url:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4",tags:["announcement"]},r=void 0,s={permalink:"/blog/2024/03/25/introducing-static-api",source:"@site/blog/2024-03-25-introducing-static-api.md",title:"Introducing Static API",description:"Two of the major pain points of using React Navigation have been TypeScript and deep linking configuration. Due to the dynamic nature of the navigators, it is necessary to manually maintain the TypeScript and deep linking configuration to match the navigation structure. This can be error-prone and time-consuming.",date:"2024-03-25T00:00:00.000Z",formattedDate:"March 25, 2024",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:4.455,hasTruncateMarker:!0,authors:[{name:"Satyajit Sahoo",title:"Core Team",url:"https://twitter.com/satya164",imageURL:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4"}],frontMatter:{title:"Introducing Static API",author:"Satyajit Sahoo",author_url:"https://twitter.com/satya164",author_title:"Core Team",author_image_url:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4",tags:["announcement"]},unlisted:!1,nextItem:{title:"React Navigation 6.0",permalink:"/blog/2021/08/14/react-navigation-6.0"}},c={authorsImageUrls:[void 0]},h=[{value:"Overview",id:"overview",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Deep Linking",id:"deep-linking",level:2},{value:"Authentication Flow",id:"authentication-flow",level:2},{value:"Interoperability",id:"interoperability",level:2},{value:"Help us test",id:"help-us-test",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Two of the major pain points of using React Navigation have been TypeScript and deep linking configuration. Due to the dynamic nature of the navigators, it is necessary to manually maintain the TypeScript and deep linking configuration to match the navigation structure. This can be error-prone and time-consuming."}),"\n",(0,i.jsx)(n.p,{children:"To solve this, we\u2019re adding a new static API to React Navigation 7. It\u2019s not the same API as React Navigation 4, but it\u2019s similar. Many apps don\u2019t need the features that the dynamic API provides, and they can use the simpler static API instead to simplify their codebase."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The static API it\u2019s an additional optional API. The dynamic API isn\u2019t going away and will remain a first class API of React Navigation. In fact, the static API is written entirely on top of the dynamic API."})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["With the dynamic API, first we import a function such as ",(0,i.jsx)(n.code,{children:"createStackNavigator"}),", then we use it to define screens - each screen has a ",(0,i.jsx)(n.code,{children:"name"})," and a ",(0,i.jsx)(n.code,{children:"component"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const Stack = createStackNavigator();\n\nfunction RootStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The static API follows the same principles. Here we are specifying screens in a property called ",(0,i.jsx)(n.code,{children:"screens"}),", the name of the screen is a key in the configuration object and the value contains the component to render:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const RootStack = createStackNavigator({\n  screens: {\n    Home: {\n      screen: Home,\n    },\n    Profile: {\n      screen: Profile,\n    },\n    Settings: {\n      screen: Settings,\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then after writing our navigation config, we call ",(0,i.jsx)(n.code,{children:"createStaticNavigation"})," and render the returned the component:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const Navigation = createStaticNavigation(RootStack);\n\nfunction App() {\n  return <Navigation />;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This component is similar to ",(0,i.jsx)(n.code,{children:"NavigationContainer"})," and accepts most of the props accepted by ",(0,i.jsx)(n.code,{children:"NavigationContainer"}),". So this is the place where you can do things like track for screen changes, persist navigation state etc."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/7.x/static-configuration?config=static",children:"Static API reference"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,i.jsxs)(n.p,{children:["The typescript types can be inferred from the root navigator with the ",(0,i.jsx)(n.code,{children:"StaticParamList"})," type and then they will be available anywhere you use ",(0,i.jsx)(n.code,{children:"useNavigation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The only additional code we need to add is the code for the ",(0,i.jsx)(n.code,{children:"RootParamList"})," interface:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"declare global {\n  namespace ReactNavigation {\n    // highlight-next-line\n    interface RootParamList extends StaticParamList<typeof RootStack> {}\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/7.x/typescript?config=static",children:"Type checking with TypeScript"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"deep-linking",children:"Deep Linking"}),"\n",(0,i.jsx)(n.p,{children:"There are 2 improvements to deep linking API:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The linking configuration is now a part of the navigation configuration and can be specified next to the screen. This makes it easier to keep the linking configuration in sync with the navigation structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const RootStack = createStackNavigator({\n  screens: {\n    Profile: {\n      screen: Profile,\n      // highlight-start\n      linking: {\n        path: 'user/:id',\n      },\n      // highlight-end\n    },\n    Settings: {\n      screen: Settings,\n      // highlight-start\n      linking: {\n        path: 'settings',\n      },\n      // highlight-end\n    },\n  },\n});\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Paths can be generated automatically from the screen names by specifying ",(0,i.jsx)(n.code,{children:"enabled: 'auto'"}),". This avoids the need to specify a path for every screen manually:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const RootStack = createStackNavigator({\n  screens: {\n    Home: {\n      screen: Home, // Generated path: ''\n    },\n    Profile: {\n      screen: Profile, // Generated path: 'profile'\n    },\n    NewsFeed: {\n      screen: Settings, // Generated path: 'news-feed'\n    },\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nfunction App() {\n  return (\n    <Navigation\n      linking={{\n        prefix: ['https://mychat.com', 'mychat://'],\n        // highlight-next-line\n        enabled: 'auto',\n      }}\n    >\n      <Navigation />\n    </Navigation>\n  );\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/7.x/configuring-links?config=static",children:"Configuring links"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"authentication-flow",children:"Authentication Flow"}),"\n",(0,i.jsx)(n.p,{children:"One of the nice things about the dynamic APIs is declarative authentication flow. You declaratively define which screens are available for logged in and guest users, and React Navigation would handle showing the appropriate screens automatically. To keep a similar experience, we added some dynamism to the new static API with the if property:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const RootStack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      if: useIsSignedIn,\n      screen: HomeScreen,\n    },\n    SignIn: {\n      if: useIsSignedOut,\n      screen: SignInScreen,\n    },\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"The if property takes a hook that returns a boolean. When the hook returns true, the screen will be included in the navigation tree, and when it returns false, it won\u2019t be included."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/7.x/auth-flow?config=static",children:"Authentication flows"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"interoperability",children:"Interoperability"}),"\n",(0,i.jsx)(n.p,{children:"Since we have 2 different APIs in the same library, it's important that they both work together. This way you could start an app with the static API, but if you need flexibility for a specific navigator, you could use the dynamic API for that part. Or you may want to migrate to the static API to reduce the complexity, and with the interoperability, you can do that incrementally."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/7.x/combine-static-with-dynamic",children:"Combining static and dynamic APIs"})," for more details."]}),"\n",(0,i.jsx)(n.h2,{id:"help-us-test",children:"Help us test"}),"\n",(0,i.jsxs)(n.p,{children:["The Static API is currently available in React Navigation 7 alpha. You can try it out by installing the ",(0,i.jsx)(n.code,{children:"next"})," tag of the React Navigation packages:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn add @react-navigation/native@next @react-navigation/native-stack@next\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the static API, React Navigation 7 also includes a lot of other improvements and new features. Make sure to go through the ",(0,i.jsx)(n.a,{href:"/docs/7.x/upgrading-from-6.x",children:"upgrade guide"})," to see all the changes."]}),"\n",(0,i.jsxs)(n.p,{children:["We would love to get feedback from the community on how it works for you and catch any issues before the stable release. If you have any feedback or suggestions, please let us know on our ",(0,i.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/discussions",children:"GitHub Discussions forum"}),". Or if you find any issues, please report them on our ",(0,i.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/issues",children:"GitHub issues"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);