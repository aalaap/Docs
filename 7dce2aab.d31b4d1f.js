(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{192:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t(2),l=t(11),c=(t(0),t(241)),o={id:"channel-check",title:"Check for New Channels",sidebar_label:"Check for New Channels"},r={id:"slack-apps/tutorials/channel-check",isDocsHomePage:!1,title:"Check for New Channels",description:"It can be hard to keep up with all of the changes in your Slack workspace! This",source:"@site/docs/slack-apps/tutorials/channel-check.md",permalink:"/slack-apps/tutorials/channel-check",sidebar_label:"Check for New Channels",sidebar:"Slack",previous:{title:"Slack Packages",permalink:"/slack-apps/slack-packages"},next:{title:"Create Asana Projects & Tasks",permalink:"/slack-apps/tutorials/asana-tutorial"}},i=[{value:"Slack Configuration",id:"slack-configuration",children:[]},{value:"Building in Dark",id:"building-in-dark",children:[]}],s={rightToc:i};function p(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"It can be hard to keep up with all of the changes in your Slack workspace! This\ntutorial will walk you through how to build a simple tool in Dark that posts all\nnew, public Slack channels created in your Slack workspace in the past 24 hours."),Object(c.b)("p",null,"A full sample canvas for this tutorial is available\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://darklang.com/a/sample-slackchannelcheck"}),"here"),"."),Object(c.b)("h2",{id:"slack-configuration"},"Slack Configuration"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.slack.com/apps"}),"Create a new app in Slack"),"."),Object(c.b)("li",{parentName:"ol"},"Navigate to ",Object(c.b)("strong",{parentName:"li"},"Features -> OAuth& Permissions"),", scroll down to scopes and add\nthe following bot token scopes: ",Object(c.b)("inlineCode",{parentName:"li"},"channels:manage"),", ",Object(c.b)("inlineCode",{parentName:"li"},"channels:read"),",\n",Object(c.b)("inlineCode",{parentName:"li"},"chat:write"),", and ",Object(c.b)("inlineCode",{parentName:"li"},"chat:write.public"),". This will allow our app to interact\nwith our the channels (also known as conversations) and post messages about\nthem.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/bottokenscopes.png",alt:"slack-apps/tutorials/channelcheck/bottokenscopes.png"}))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Install your app to the workspace (either via ",Object(c.b)("strong",{parentName:"li"},"Settings -> Basic\nInformation")," or ",Object(c.b)("strong",{parentName:"li"},"Settings -> Install App"),"). Since this app is being built\nfor your workspace specifically, we will not need to set up full OAuth, like\nwe would if we wanted to distribute this more publicly."),Object(c.b)("li",{parentName:"ol"},"Copy your bot user access token, which will now be available under ",Object(c.b)("strong",{parentName:"li"},"Settings\n-> Install")," app and save it as a function in your Dark canvas. Use this\nfunction wherever you see ",Object(c.b)("inlineCode",{parentName:"li"},"token")," in the code examples."),Object(c.b)("li",{parentName:"ol"},"If no new channels have been created in your Slack recently, create a new\npublic channel so we have some data to work with."),Object(c.b)("li",{parentName:"ol"},"You will need to choose a Slack channel to post your messages to. You can\nfind your Slack channel's id by navigating to the channel and looking for the\n11 character string that begins with a capital C - it will look something\nlike ",Object(c.b)("inlineCode",{parentName:"li"},"C1234567891"),". Add that to its own Dark function as well, and use it\nwherever you see ",Object(c.b)("inlineCode",{parentName:"li"},"channel")," in the code examples.")),Object(c.b)("h2",{id:"building-in-dark"},"Building in Dark"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Create a new daily Cron named ",Object(c.b)("inlineCode",{parentName:"li"},"checkForNewChannels")," by clicking the + in the\nsidebar next to Cron, and call the\n",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"../slack-packages#getnewconversations"}),Object(c.b)("inlineCode",{parentName:"a"},"getNewConversations")," Slack function"),"\n(it's a little confusing, but channels are referred to as conversations in\nthe Slack API). The ",Object(c.b)("inlineCode",{parentName:"li"},"getNewConversations")," function is built into Dark's\n",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./../../packages"}),"package manager"),", and it takes your token as well as an\namount of time to check in Epoch seconds. Here, we're asking it to check in\nthe past 24 hours, which is equivalent to 86400 seconds.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/checkfornewchannels.png",alt:"slack-apps/tutorials/channelcheck/checkfornewchannels.png"}))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Click the play button on the\n",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"../slack-packages#getnewconversations"}),Object(c.b)("inlineCode",{parentName:"a"},"getNewConversations")," function")," and\nthen place your carat in ",Object(c.b)("inlineCode",{parentName:"li"},"newChannels"),". You will see a list of information\nabout any new channels that have been created.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/checkfornewchannelslive.png",alt:"slack-apps/tutorials/channelcheck/checkfornewchannelslive.png"}))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Create a function called ",Object(c.b)("inlineCode",{parentName:"li"},"formatChannelList")," with a ",Object(c.b)("inlineCode",{parentName:"li"},"channelList")," parameter.\nThis is where we're going to build the format of the messages Slack will\nprint about your new channels, but for now, just return ",Object(c.b)("inlineCode",{parentName:"li"},"channelList"),". You'll\nnotice that an error is shown - this is because ",Object(c.b)("inlineCode",{parentName:"li"},"channelList")," has not yet\nbeen set.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/firstformatchannel.png",alt:"slack-apps/tutorials/channelcheck/firstformatchannel.png"}))),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Return to your ",Object(c.b)("inlineCode",{parentName:"li"},"checkForNewChannels")," Cron, and add a line to format the\n",Object(c.b)("inlineCode",{parentName:"li"},"newChannels")," list you previously generated. Press the play button.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/checkfornewchannelslist.png",alt:"slack-apps/tutorials/channelcheck/checkfornewchannelslist.png"}))),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"Return to your ",Object(c.b)("inlineCode",{parentName:"li"},"formatChannelList")," function and place your carat over the top\ndot (trace) on the left. You will see your ",Object(c.b)("inlineCode",{parentName:"li"},"channelList")," trace - now you can\nwork with that data in order to format your list.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/formatchannellist.png",alt:"slack-apps/tutorials/channelcheck/formatchannellist.png"}))),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"For our purposes, we're going to do a very simple amount of formatting -\nwe're going to add the markdown Slack needs to make channel names links, and\nadd information about the channel's purpose. However, lots of information\nabout Slack channels is available. Type ",Object(c.b)("inlineCode",{parentName:"li"},"val.")," and scroll through the\nautocomplete to see all of your options.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/formatchannellistlong.png",alt:"slack-apps/tutorials/channelcheck/formatchanellistlong.png"}))),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In your ",Object(c.b)("inlineCode",{parentName:"p"},"checkForNewChannels")," Cron, rerun ",Object(c.b)("inlineCode",{parentName:"p"},"formatChannelList")," to update the\nvalue of ",Object(c.b)("inlineCode",{parentName:"p"},"formattedList"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Add a check for the length of the list - we're going to print out something\ndifferent if there have been no new channels."))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/listlength.png",alt:"slack-apps/tutorials/channelcheck/listlength.png"}))),Object(c.b)("ol",{start:9},Object(c.b)("li",{parentName:"ol"},"The full code is going to look like this - if there are entries in the list,\nwe'll post an announcement message and then the list of new channels. You'll\nnotice that we also use the\n",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"../slack-packages#postmarkdownmessage"}),Object(c.b)("inlineCode",{parentName:"a"},"postMarkDownMessage")," Slack function"),"\nto simplify the posting of the message.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/fullcheckfornewchannels.png",alt:"slack-apps/tutorials/channelcheck/fullcheckfornewchannels.png"}))),Object(c.b)("ol",{start:10},Object(c.b)("li",{parentName:"ol"},"To make our code a little bit cleaner, we've pulled the logic of posting the\nlist of new channels out into a function. This function iterates through the\nlist it is given and posts a markdown message to Slack for each entry.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/postlist.png",alt:"slack-apps/tutorials/channelcheck/postlist.png"}))),Object(c.b)("ol",{start:11},Object(c.b)("li",{parentName:"ol"},"Once you've completed all of your code, run the Cron again. A message will\nappear in the channel you selected.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/slack-apps/tutorials/channelcheck/newchannelpost.png",alt:"slack-apps/tutorials/channelcheck/newchannelpost.png"}))),Object(c.b)("p",null,"Congratulations - you now have a Slack app that will post every 24 hours with\nany new channels created since it last posted."))}p.isMDXComponent=!0},241:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),p=function(e){var n=l.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},b=function(e){var n=p(e.components);return l.a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},u=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||h[u]||c;return t?l.a.createElement(m,r(r({ref:n},s),{},{components:t})):l.a.createElement(m,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<c;s++)o[s]=t[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);