(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"定时任务管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定时任务管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 定时任务管理")]),t._v(" "),n("p",[t._v("这两年做的项目和产品几乎多有定时任务管理的需求。\n常用的场景有：")]),t._v(" "),n("ul",[n("li",[t._v("定时给用户发送一些消息")]),t._v(" "),n("li",[t._v("定时进行一些报表的计算")]),t._v(" "),n("li",[t._v("定时去指定的接口get一些数据")]),t._v(" "),n("li",[t._v("定时降一些报表发送到指定的邮箱")])]),t._v(" "),n("p",[t._v("当然还有很多，没有必要一一列举")]),t._v(" "),n("h2",{attrs:{id:"需求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),n("p",[t._v("定时任务的需求通常是这样的")]),t._v(" "),n("ul",[n("li",[t._v("1 需要添加一个定时任务，做一些事情。但是什么时候做要我自己配置，而且还想配置一些参数进去，比如我想定时给指定的email发送邮件.")]),t._v(" "),n("li",[t._v("2 可以临时禁用一个任务。")]),t._v(" "),n("li",[t._v("3 看定时任务执行的历史日志。")])]),t._v(" "),n("h2",{attrs:{id:"具体用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#具体用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体用法")]),t._v(" "),n("p",[t._v("web-flash对定时任务管理功能的实现如下。")]),t._v(" "),n("h2",{attrs:{id:"表结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 表结构")]),t._v(" "),n("p",[t._v("web-flash提供了两个表：t_sys_task（任务）和t_sys_task_log(任务执行日志)")]),t._v(" "),n("ul",[n("li",[t._v("t_sys_task")])]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_sys_task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'自增主键'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'任务名'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("job_group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'任务组'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("job_class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行类'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("note"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'任务说明'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("cron"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定时规则'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("text")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行参数'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("exec_at"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行时间'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("exec_result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("text")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行结果'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否禁用'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("createtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("creator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否允许并发'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),n("ul",[n("li",[t._v("t_sys_task_log")])]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_sys_task_log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'自增主键'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'任务名'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("exec_at"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行时间'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("exec_success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行结果（成功:1、失败:0)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("job_exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'抛出异常'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id_task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),n("h3",{attrs:{id:"创建一个定时任务类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建一个定时任务类","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个定时任务类")]),t._v(" "),n("p",[t._v("比如我创建一个测试任务类")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enilu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enilu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobExecuter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fastjson")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JSON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloJob")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobExecuter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" dataMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"输出配置参数如下 :"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("JSON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJSONString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这里可以编写任意其他业务逻辑"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"页面配置一个定时任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面配置一个定时任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面配置一个定时任务")]),t._v(" "),n("p",[t._v("在任务管理页面可以增上改查一个定时任务，还可以禁用、启用定时任务")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("添加定时任务\n"),n("img",{attrs:{src:a(57),alt:"task-add"}})])]),t._v(" "),n("li",[n("p",[t._v("定时任务列表\n"),n("img",{attrs:{src:a(58),alt:"task-list"}})])]),t._v(" "),n("li",[n("p",[t._v("查看定时任务执行历史日志\n"),n("img",{attrs:{src:a(59),alt:"task-log"}})])])])])}],e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=r.exports},57:function(t,s,a){t.exports=a.p+"assets/img/task_add.7fee488a.png"},58:function(t,s,a){t.exports=a.p+"assets/img/task_list.15d3d69d.png"},59:function(t,s,a){t.exports=a.p+"assets/img/task_log.7d7f5435.png"}}]);