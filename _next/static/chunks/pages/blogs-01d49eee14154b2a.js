(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{4653:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return s(9942)}])},1723:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var r=s(5893),n=s(3186),i=s(1415),a=s(3407),l=s(1664),o=s.n(l);function c(){return(0,r.jsx)(n.p,{as:"nav",className:"bg-black shadow",children:function(e){var t=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8",children:(0,r.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,r.jsx)("div",{className:"flex px-2 lg:px-0",children:(0,r.jsxs)("div",{className:"flex flex-shrink-0 items-center",children:[(0,r.jsx)("img",{className:"block h-16 w-auto md:hidden",src:"/assets/logo.png",alt:"Your Company"}),(0,r.jsx)("img",{className:"hidden h-16 w-auto md:block",src:"/assets/logo.png",alt:"Your Company"})]})}),(0,r.jsxs)("div",{className:"hidden items-center md:ml-6 md:space-x-8 md:flex md:flex-1 md:justify-end",children:[(0,r.jsx)(o(),{href:"/",className:"inline-flex items-center px-1 pt-1 text-sm font-medium text-white",children:"Home"}),(0,r.jsx)(o(),{href:"/about",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white",children:"About"}),(0,r.jsx)(o(),{href:"/publications ",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white ",children:"Publications"}),(0,r.jsx)(o(),{href:"/blogs",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white ",children:"Blogs"}),(0,r.jsx)(o(),{href:"https://github.com/FrankLeeeee?tab=repositories",target:"_blank",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white ",children:"Projects"})]}),(0,r.jsx)("div",{className:"flex items-center md:hidden",children:(0,r.jsxs)(n.p.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?(0,r.jsx)(i.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,r.jsx)(a.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,r.jsx)(n.p.Panel,{className:"md:hidden",children:(0,r.jsxs)("div",{className:"space-y-1 pt-2 pb-3",children:[(0,r.jsx)(n.p.Button,{as:o(),href:"/",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black",children:"Home"}),(0,r.jsx)(n.p.Button,{as:o(),href:"/about",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black",children:"About"}),(0,r.jsx)(n.p.Button,{as:o(),href:"/publications",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black",children:"Publications"}),(0,r.jsx)(n.p.Button,{as:o(),href:"/blogs",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black",children:"Blogs"}),(0,r.jsx)(n.p.Button,{as:o(),href:"https://github.com/FrankLeeeee?tab=repositories",target:"_blank",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black",children:"Projects"})]})})]})}})}function d(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),t]})}},9942:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var r=s(7568),n=s(603),i=s(655),a=s(5893),l=s(1723),o=s(7294),c=s(9669),d=s.n(c);function m(e){var t=e.title,s=e.categories,r=e.image,n=e.link,i=e.pubDate;return(0,a.jsx)("a",{className:"w-full flex bg-white rounded-md shadow-md",href:n,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)("div",{className:"w-full overflow-hidden shadow-lg",children:[(0,a.jsx)("img",{className:"w-full",src:r,alt:"Blog Thumbnail"}),(0,a.jsxs)("div",{className:"px-3 py-3",children:[(0,a.jsx)("div",{className:"font-bold text-xl mb-2",children:t}),(0,a.jsx)("span",{className:"text-gray-500",children:i})]}),(0,a.jsx)("div",{className:"px-3 py-2",children:s.map(function(e,t){return(0,a.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300",children:["#",e]},t)})})]})})}var h=s(6055),x=function(){var e=(0,n.Z)((0,o.useState)([]),2),t=e[0],s=e[1];return(0,o.useEffect)(function(){var e;(e=(0,r.Z)(function(){var e,t;return(0,i.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,d()("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@frankleeeee")];case 1:return"ok"!==(e=r.sent()).data.status?console.log(e.data):((t=e.data.items.map(function(e){return{title:e.title,categories:e.categories,link:e.link,pubDate:e.pubDate,thumbnail:e.thumbnail}})).length>10&&(t.length=10),console.log(t),s(t)),[3,3];case 2:return console.log(r.sent()),[3,3];case 3:return[2]}})}),function(){return e.apply(this,arguments)})()},[]),(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"container mx-auto pt-4 md:pt-12 md:px-12 lg:pt-24 lg:px-24",children:[(0,a.jsx)("h1",{className:"text-white text-4xl p-4",children:(0,a.jsx)("strong",{className:"purple",children:"My Recent Blogs"})}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",children:t.map(function(e,t){return(0,a.jsx)("div",{className:"p-8 md:p-6 lg:p-4",children:(0,a.jsx)(m,{title:e.title,categories:e.categories,image:e.thumbnail,link:e.link,pubDate:e.pubDate})},t)})})]}),(0,a.jsx)("div",{className:"flex w-full justify-center text-center text-white p-8",children:(0,a.jsxs)("a",{href:"https://frankleeeee.medium.com/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center rounded bg-transparent border-white text-white px-2 py-2 font-semibold ring-1 ring-inset ring-white",children:[(0,a.jsx)(h.Z,{className:"h-8 mr-2"}),(0,a.jsx)("span",{children:"View More on Medium"})]})})]})})}}},function(e){e.O(0,[354,310,774,888,179],function(){return e(e.s=4653)}),_N_E=e.O()}]);