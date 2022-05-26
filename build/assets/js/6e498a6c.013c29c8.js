"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[765],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:3},l="Start the server",c={unversionedId:"getting-started/start-the-server",id:"getting-started/start-the-server",title:"Start the server",description:"What is the Display Development Server?",source:"@site/docs/getting-started/start-the-server.md",sourceDirName:"getting-started",slug:"/getting-started/start-the-server",permalink:"/display-advertising-docs/docs/getting-started/start-the-server",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/start-the-server.md",tags:[],version:"current",lastUpdatedBy:"Alan",lastUpdatedAt:1653487930,formattedLastUpdatedAt:"5/25/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating a new project",permalink:"/display-advertising-docs/docs/getting-started/creating-a-new-project"},next:{title:"Generate a build",permalink:"/display-advertising-docs/docs/getting-started/generate-a-build"}},p={},d=[{value:"What is the Display Development Server?",id:"what-is-the-display-development-server",level:3},{value:"Running the DDS",id:"running-the-dds",level:3}],u={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"start-the-server"},"Start the server"),(0,i.kt)("h3",{id:"what-is-the-display-development-server"},"What is the Display Development Server?"),(0,i.kt)("p",null,"To explain this as fast as possible, the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"DDS"))," (display dev server) is a build and development server to\ndevelop and build display units as fast as possible."),(0,i.kt)("p",null,"It does this by setting up a ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," environment where ever it finds a ","[.richmediarc]","\nfile. Why? Because its faster to just use the same webpack and webpack.config for every display advertising unit, instead of\ncreating one for every single unit."),(0,i.kt)("h3",{id:"running-the-dds"},"Running the DDS"),(0,i.kt)("p",null,"To start the dev server, type the following command in your ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run dev\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u201cDev\u201d")," is actually a script which is found in ","[package.json]",", which in turn runs the command ",(0,i.kt)("inlineCode",{parentName:"p"},"rds-dev"),".\nAfter you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project."),(0,i.kt)("p",null,"You\u2019ll see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"i Searching for configs\n\u2714 Found 4 config(s)\n\u2714 Taking a look if it has Spreadsheets\n? Please select config(s) build: (Press <space> to select, <a> to toggle all, <i> to invert selection)\n>( ) all\n ( ) ./src/300x250/.richmediarc\n ( ) ./src/300x600/.richmediarc\n ( ) ./src/728x90/.richmediarc\n ( ) ./src/970x250/.richmediarc\n")),(0,i.kt)("p",null,"Here, you can select which units you wish to preview. Navigate with arrow keys and select (it\u2019s possible to select multiple values)\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"spacebar"),", then press ",(0,i.kt)("inlineCode",{parentName:"p"},"enter")," to confirm your selection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Do you want a browser to open to your dev location? (Y/N)\n")),(0,i.kt)("p",null,"You can select to open a new browser window or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Save this as a separate part command in package.json (Y/N)\n")),(0,i.kt)("p",null,"Use this option to save your selection as a separate command. If you select ",(0,i.kt)("strong",{parentName:"p"},"Y"),", you\u2019ll see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Please provide a name for your command. You will type something like npm run dev:__NAME__\n")),(0,i.kt)("p",null,"No special chars, spaces, dashes just a single word. You\u2019ll have to give it a unique name, for example \u201cselection\u201d."),(0,i.kt)("p",null,"Now you will be able to run a dev server with the same selection simply by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run dev:selection\n")),(0,i.kt)("p",null,"It will now compile the banners you selected and start a local server on port 8000. You can see the preview at\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If port 8000 is busy, it will automatically use the next available port, 8001, 8002, etc."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Important")," You don\u2019t have to restart the server if you make any changes to your banner\u2019s code. It will automatically recompile your units when it detects changes in the source code.."))),(0,i.kt)("p",null,"Make sure everything works by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run dev\n")),(0,i.kt)("p",null,"This will start the server. You\u2019ll see something like this."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot install dev server",src:n(7608).Z,width:"754",height:"724"})),(0,i.kt)("p",null,"Press ",(0,i.kt)("strong",{parentName:"p"},"N")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot install localhost",src:n(6263).Z,width:"588",height:"98"})),(0,i.kt)("p",null,"Your primary browser will launch, opening ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/")),(0,i.kt)("p",null,"In your terminal, you\u2019ll be able to see the output of webpack, compiling the source code."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scaffold5",src:n(2181).Z,width:"1077",height:"834"})),(0,i.kt)("p",null,"In your browser, the preview environment will load along with a preview of the compiled version of the banner you just\ncreated. The banner should display something like this."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scaffold6",src:n(3619).Z,width:"656",height:"565"})),(0,i.kt)("p",null,"If there are no javascript errors and everything works fine, that\u2019s it!"))}m.isMDXComponent=!0},6263:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_localhost8000-7fb4bfa85ac31e25c33da6434df9e311.png"},7608:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_run_dev_server-1e2abf4e39863e8c9b73d817da7f2275.png"},2181:function(e,t,n){t.Z=n.p+"assets/images/scaffold5-79d4e27c75efc891318f102e8a77d2ff.jpeg"},3619:function(e,t,n){t.Z=n.p+"assets/images/scaffold6-7677528be44bedee624c9a789ba7b452.jpeg"}}]);