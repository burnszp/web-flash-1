(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"菜单管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#菜单管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 菜单管理")]),t._v(" "),n("p",[t._v("菜单管理包含两部分：一个是左侧菜单树的维护，一个是页面操作功能（主要是按钮）的维护。\n不管是左侧菜单还是按钮，都需要在角色中进行配置才能正常显示出来。")]),t._v(" "),n("p",[t._v("先看下菜单列表大致了解下菜单管理都维护哪些内容：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(54),alt:"menu"}})]),t._v(" "),n("h2",{attrs:{id:"左侧菜单维护"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#左侧菜单维护","aria-hidden":"true"}},[t._v("#")]),t._v(" 左侧菜单维护")]),t._v(" "),n("ul",[n("li",[t._v("菜单维护基本上采用了两级菜单形式：如上图所示：第一级菜单为“系统管理”，“系统管理”中包含了“用户管理”、“角色管理”等多个二级菜单。")]),t._v(" "),n("li",[t._v("其中“系统管理”为虚拟菜单，点击“系统管理”并不会跳转到真实的页面而是展开其子菜单列表；所以虚拟菜单的请求地址应配置为“#”。")]),t._v(" "),n("li",[t._v("“系统管理”下的子菜单，例如“业务日志”需要配置请求地址，比如配置为“/log”,点击“业务日志”会跳转到业务日志列表页面。")])]),t._v(" "),n("h2",{attrs:{id:"页面功能维护"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面功能维护","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面功能维护")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("菜单维护中的另外一种形式我功能（主要是操作按钮或者页面中的链接）的维护。点击按钮虽然不需要跳转到具体的页面但是也需要配置请求地址，因为代码中需要通过该地址来判断用户是否拥有操作权限。")])]),t._v(" "),n("li",[n("p",[t._v('例如“业务日志”菜单中有三个子菜单：“清空日志”的请求地址配置为："log/delLog",则页面进行控制权限的写法为：')]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v('@if(shiro.hasPermission("/log/delLog")){\n    '),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("#button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("清空日志"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa-minus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("clickFun")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("OptLog.delLog()"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("space")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n@}\n")])])])])]),t._v(" "),n("p",[t._v("菜单管理的其他维护参数不赘述，具体作用配置试用一下即可知晓。")])])}],e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=r.exports},54:function(t,a,s){t.exports=s.p+"assets/img/menu.8d176bdf.jpg"}}]);