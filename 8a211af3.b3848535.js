(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(11),o=(a(0),a(241)),c={id:"slack-intro",title:"Your First Slack App",sidebar_label:"Your First Slack App"},l={id:"slack-apps/slack-intro",isDocsHomePage:!1,title:"Your First Slack App",description:"Building Slack apps in Dark is a quick and easy process. This page will cover",source:"@site/docs/slack-apps/slack-intro.md",permalink:"/slack-apps/slack-intro",sidebar_label:"Your First Slack App",sidebar:"Slack",next:{title:"Setting Up OAuth",permalink:"/slack-apps/slack-oauth"}},i=[{value:"Slack Configuration",id:"slack-configuration",children:[]},{value:"Building in Dark",id:"building-in-dark",children:[]}],p={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Building Slack apps in Dark is a quick and easy process. This page will cover\nthe basics, but more specific examples are covered in the tutorials."),Object(o.b)("h2",{id:"slack-configuration"},"Slack Configuration"),Object(o.b)("p",null,"Start by creating an app in Slack. You can do so quickly by clicking\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.slack.com/apps?new_app=1"}),"here"),". Note that you will need to have\nthe ability to add apps to at least one Slack group in order to create an app."),Object(o.b)("p",null,"Once you've created your app, you will see a page with quite a few options:\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/appspage.png",alt:"appspage.png"}))),Object(o.b)("p",null,"You're going to need to configure at least one of these options before you can\ninstall the app to your workspace. The quickest option is to use a slash\ncommand. When you create the command, you will be asked for a Request URL. This\nshould be pointed at your Dark canvas and look something like\n",Object(o.b)("inlineCode",{parentName:"p"},"https://username-canvas.builtwithdark.com/my-command"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/slashcommand.png",alt:"slashcommand.png"}))),Object(o.b)("p",null,"Once you have your slash command, you will be able to install your app to your\nSlack community via the Basic Information page."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/installslack.png",alt:"installslack.png"}))),Object(o.b)("p",null,"Once you have your app installed, you will be able to see your slash command in\nyour Slack app:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/command.png",alt:"command.png"}))),Object(o.b)("h2",{id:"building-in-dark"},"Building in Dark"),Object(o.b)("p",null,"Try calling your slash command. You will get an error that looks like this:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/commanderror.png",alt:"commanderror.png"}))),Object(o.b)("p",null,"Navigate to the Dark canvas you used in the Request URL and check the 404s\nsection - you will see an entry with the same name you used above."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/404.png",alt:"404.png"}))),Object(o.b)("p",null,"Click to create your handler, and then add a string to the return value:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/hello.png",alt:"hello.png"}))),Object(o.b)("p",null,"Return to Slack and try out your Slack command again. You should now see a\nresponse:"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/slack-apps/hello.png",alt:"hello.png"}))),Object(o.b)("p",null,"Congratulations - you've built your first Slack app!"))}s.isMDXComponent=!0},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);