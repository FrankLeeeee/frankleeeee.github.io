(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{836:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return r(8202)}])},2910:function(e,t,r){"use strict";var n=r(5893);t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"animate-fade animate-once animate-duration-500 animate-ease-in",children:t})}},85:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),o=r(6897),a=r(9005),l=r(7624),u=r(1664),s=r.n(u);function i(){return(0,n.jsx)(o.p,{as:"nav",className:"bg-black shadow",children:e=>{let{open:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8",children:(0,n.jsxs)("div",{className:"flex h-16 justify-between",children:[(0,n.jsx)("div",{className:"flex px-2 lg:px-0",children:(0,n.jsxs)("div",{className:"flex flex-shrink-0 items-center",children:[(0,n.jsx)("img",{className:"block h-16 w-auto md:hidden",src:"/assets/logo.png",alt:"Your Company"}),(0,n.jsx)("img",{className:"hidden h-16 w-auto md:block",src:"/assets/logo.png",alt:"Your Company"})]})}),(0,n.jsxs)("div",{className:"hidden items-center md:ml-6 md:space-x-8 md:flex md:flex-1  md:justify-end",children:[(0,n.jsx)(s(),{href:"/",className:"inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-200",children:"Home"}),(0,n.jsx)(s(),{href:"/about",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-200",children:"About"}),(0,n.jsx)(s(),{href:"/blogs",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-200 ",children:"Blogs"})]}),(0,n.jsx)("div",{className:"flex items-center md:hidden",children:(0,n.jsxs)(o.p.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?(0,n.jsx)(a.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,n.jsx)(l.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,n.jsx)(o.p.Panel,{className:"md:hidden",children:(0,n.jsxs)("div",{className:"space-y-1 pt-2 pb-3",children:[(0,n.jsx)(o.p.Button,{as:s(),href:"/",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-slate-200 hover:bg-white hover:text-black",children:"Home"}),(0,n.jsx)(o.p.Button,{as:s(),href:"/about",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-slate-200 hover:bg-white hover:text-black",children:"About"}),(0,n.jsx)(o.p.Button,{as:s(),href:"/blogs",className:"block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-slate-200 hover:bg-white hover:text-black",children:"Blogs"})]})})]})}})}function d(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)("div",{className:"container mx-auto mt-8 px-8 md:px-16 md:pt-12 lg:px-36",children:t})]})}},7645:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){let{title:t,children:r}=e;return(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsx)("h1",{className:"text-slate-200 text-4xl pb-4",children:(0,n.jsxs)("strong",{className:"purple",children:[t," "]})}),r]})}},8875:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(5039).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6208:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n.actionAsyncStorage}});let n=r(8875);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5039:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return a}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let o=globalThis.AsyncLocalStorage;function a(){return o?new o:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},827:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return s.ReadonlyURLSearchParams},RedirectType:function(){return s.RedirectType},ServerInsertedHTMLContext:function(){return i.ServerInsertedHTMLContext},notFound:function(){return s.notFound},permanentRedirect:function(){return s.permanentRedirect},redirect:function(){return s.redirect},useParams:function(){return p},usePathname:function(){return c},useRouter:function(){return f},useSearchParams:function(){return d},useSelectedLayoutSegment:function(){return x},useSelectedLayoutSegments:function(){return m},useServerInsertedHTML:function(){return i.useServerInsertedHTML}});let n=r(7294),o=r(5320),a=r(1083),l=r(5363),u=r(4722),s=r(4138),i=r(3617);function d(){let e=(0,n.useContext)(a.SearchParamsContext);return(0,n.useMemo)(()=>e?new s.ReadonlyURLSearchParams(e):null,[e])}function c(){return(0,n.useContext)(a.PathnameContext)}function f(){let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function p(){return(0,n.useContext)(a.PathParamsContext)}function m(e){void 0===e&&(e="children");let t=(0,n.useContext)(o.LayoutRouterContext);return t?function e(t,r,n,o){let a;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)a=t[1][r];else{var s;let e=t[1];a=null!=(s=e.children)?s:Object.values(e)[0]}if(!a)return o;let i=a[0],d=(0,l.getSegmentValue)(i);return!d||d.startsWith(u.PAGE_SEGMENT_KEY)?o:(o.push(d),e(a,r,!1,o))}(t.tree,e):null}function x(e){void 0===e&&(e="children");let t=m(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===u.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4138:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return l},RedirectType:function(){return n.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(2830),o=r(9399);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class l extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9399:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8074:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),(n=r||(r={}))[n.SeeOther=303]="SeeOther",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2830:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return x},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return p},isRedirectError:function(){return f},permanentRedirect:function(){return c},redirect:function(){return d}});let a=r(7218),l=r(6208),u=r(8074),s="NEXT_REDIRECT";function i(e,t,r){void 0===r&&(r=u.RedirectStatusCode.TemporaryRedirect);let n=Error(s);n.digest=s+";"+t+";"+e+";"+r+";";let o=a.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function d(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw i(e,t,(null==r?void 0:r.isAction)?u.RedirectStatusCode.SeeOther:u.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw i(e,t,(null==r?void 0:r.isAction)?u.RedirectStatusCode.SeeOther:u.RedirectStatusCode.PermanentRedirect)}function f(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),a=Number(o);return t===s&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(a)&&a in u.RedirectStatusCode}function p(e){return f(e)?e.digest.split(";",3)[2]:null}function m(e){if(!f(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function x(e){if(!f(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6718:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(5039).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7218:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getExpectedRequestStore:function(){return o},requestAsyncStorage:function(){return n.requestAsyncStorage}});let n=r(6718);function o(e){let t=n.requestAsyncStorage.getStore();if(t)return t;throw Error("`"+e+"` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5363:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3617:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return a}});let n=r(1757)._(r(7294)),o=n.default.createContext(null);function a(e){let t=(0,n.useContext)(o);t&&t(e)}},8202:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return b}});var n=r(5893),o=r(7294),a=r(9332),l=r(1664),u=r.n(l),s=e=>{let{blog:t}=e;return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"col-span-1 flex rounded-md shadow-sm",children:[(0,n.jsx)("div",{className:"flex flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-slate-100",children:(0,n.jsx)("img",{src:t.ogImage.url,alt:"blog",lazy:"loading",className:"h-20 w-20 object-cover"})}),(0,n.jsx)("div",{className:"flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white h-20",children:(0,n.jsxs)("div",{className:"flex-1 truncate px-4 py-2 text-sm",children:[(0,n.jsx)(u(),{as:"/blogs/".concat(t.slug),href:"/blogs/[slug]",className:"font-medium text-gray-900 hover:text-gray-600",children:t.title}),(0,n.jsx)("p",{className:"text-gray-500 line-clamp-1 truncate",children:t.description}),(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)("p",{children:t.timeReading.text}),(0,n.jsx)("p",{children:"•"}),(0,n.jsx)("p",{children:t.date})]})]})})]})})},i=r(85),d=e=>{let{children:t}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:t})})})},c=r(7645),f=r(2910);let p=o.forwardRef(function(e,t){let{title:r,titleId:n,...a}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},a),r?o.createElement("title",{id:n},r):null,o.createElement("path",{fillRule:"evenodd",d:"M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z",clipRule:"evenodd"}))}),m=o.forwardRef(function(e,t){let{title:r,titleId:n,...a}=e;return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},a),r?o.createElement("title",{id:n},r):null,o.createElement("path",{fillRule:"evenodd",d:"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z",clipRule:"evenodd"}))});function x(e){let{currentPage:t,NumPages:r,siblingCount:o,goToPageByIndex:a}=e,l=[];for(let e=Math.max(1,t-o);e<=Math.min(r,t+o);e++)l.push(e);return(0,n.jsxs)("nav",{className:"flex items-center justify-between border-t border-gray-200 px-4 sm:px-0",children:[(0,n.jsx)("div",{className:"-mt-px flex w-0 flex-1",children:(0,n.jsxs)("button",{onClick:e=>{e.preventDefault(),a(Math.max(1,t-1))},className:"inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:[(0,n.jsx)(p,{className:"mr-3 h-5 w-5 text-gray-400","aria-hidden":"true"}),"Previous"]})}),(0,n.jsx)("div",{className:"hidden md:-mt-px md:flex",children:l.map(e=>(0,n.jsx)("a",{href:"?page=".concat(e),className:"".concat(e===t?"text-blue-400":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"," inline-flex items-center px-4 pt-4 text-sm font-medium"),children:e},e))}),(0,n.jsx)("div",{className:"-mt-px flex w-0 flex-1 justify-end",children:(0,n.jsxs)("button",{onClick:e=>{e.preventDefault(),a(Math.min(r,t+1))},className:"inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",children:["Next",(0,n.jsx)(m,{className:"ml-3 h-5 w-5 text-gray-400","aria-hidden":"true"})]})})]})}var h=!0,b=e=>{let{blogs:t,blogsPerPage:r,NumPages:o}=e,l=(0,a.useSearchParams)(),u=(0,a.useRouter)(),p=parseInt(l.get("page"))||1,m=t.slice((p-1)*r,p*r);return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(c.Z,{title:"My Blogs",children:(0,n.jsx)(d,{children:m.map(e=>(0,n.jsx)(f.Z,{children:(0,n.jsx)(s,{blog:e})},e.slug))})}),(0,n.jsx)(x,{currentPage:p,NumPages:o,goToPageByIndex:e=>{u.push("/blogs?page="+e)},siblingCount:5})]})}},9332:function(e,t,r){e.exports=r(827)}},function(e){e.O(0,[72,888,774,179],function(){return e(e.s=836)}),_N_E=e.O()}]);