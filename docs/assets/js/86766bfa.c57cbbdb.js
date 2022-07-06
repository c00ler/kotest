"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[5671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={id:"ktor",title:"Ktor",sidebar_label:"Ktor",slug:"ktor.html"},l=void 0,p={unversionedId:"extensions/ktor",id:"version-5.3/extensions/ktor",title:"Ktor",description:"The `kotest-assertions-ktor` module provides response matchers for a Ktor application. There are matchers",source:"@site/versioned_docs/version-5.3/extensions/ktor.md",sourceDirName:"extensions",slug:"/extensions/ktor.html",permalink:"/docs/extensions/ktor.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/extensions/ktor.md",tags:[],version:"5.3",frontMatter:{id:"ktor",title:"Ktor",sidebar_label:"Ktor",slug:"ktor.html"},sidebar:"extensions",previous:{title:"Spring",permalink:"/docs/extensions/spring.html"},next:{title:"System Extensions",permalink:"/docs/extensions/system_extensions.html"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"kotest-assertions-ktor")," module provides response matchers for a ",(0,s.kt)("a",{parentName:"p",href:"https://ktor.io"},"Ktor")," application. There are matchers\nfor both ",(0,s.kt)("inlineCode",{parentName:"p"},"TestApplicationResponse")," if you are using the server side test support, and for ",(0,s.kt)("inlineCode",{parentName:"p"},"HttpResponse")," if you are using the ktor\nHTTP client."),(0,s.kt)("p",null,"To add Ktor matchers, add the following dependency to your project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-groovy"},"io.kotest.extensions:kotest-assertions-ktor:${version}\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-assertions-ktor"},(0,s.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-assertions-ktor/"},(0,s.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20snapshot"}))),(0,s.kt)("p",null,"An example of using the matchers with the server side test support:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'withTestApplication({ module(testing = true) }) {\n   handleRequest(HttpMethod.Get, "/").apply {\n      response shouldHaveStatus HttpStatusCode.OK\n      response shouldNotHaveContent "failure"\n      response.shouldHaveHeader(name = "Authorization", value = "Bearer")\n      response.shouldNotHaveCookie(name = "Set-Cookie", cookieValue = "id=1234")\n   }\n}\n')),(0,s.kt)("p",null,"And an example of using the client support:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = HttpClient(CIO)\nval response = client.post("http://mydomain.com/foo")\nresponse.shouldHaveStatus(HttpStatusCode.OK)\nresponse.shouldHaveHeader(name = "Authorization", value = "Bearer")\n\n')))}d.isMDXComponent=!0}}]);