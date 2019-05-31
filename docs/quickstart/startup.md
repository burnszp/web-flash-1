# 启动项目

## 启动flash-api
- 右键直接运行cn.enilu.flash.api.ApiApplication 类即可已启动flash-api
- 启动成功后访问http://localhost:8082/swagger-ui.html
![api](../img/flash-api.jpg)
## 启动flash-vue-admin
- 进入flash-vue-admin目录
    - 命令行窗口运行 npm install --registry=https://registry.npm.taobao.org
    - 运行  npm run dev
    - 启动成功后访问 http://localhost:9528,登录，用户名密码:admin/admin 
 ![vue](../vuejs.gif)

## 启动flash-vue-h5
- 启动步骤和flash-vue-admin类似，这里不再赘述
 ![h5](../img/h5.jpg)

so，是不是很简单!


##
-
gyp verb `which` succeeded python C:\Users\Administrator\AppData\Local\Programs\Python\Python37-32\python.EXE
gyp ERR! configure error
gyp ERR! stack Error: Command failed: C:\Users\Administrator\AppData\Local\Programs\Python\Python37-32\python.EXE -c import sys;
 print "%s.%s.%s" % sys.version_info[:3];
gyp ERR! stack   File "<string>", line 1
gyp ERR! stack     import sys; print "%s.%s.%s" % sys.version_info[:3];
gyp ERR! stack                                ^
gyp ERR! stack SyntaxError: invalid syntax
gyp ERR! stack
gyp ERR! stack     at ChildProcess.exithandler (child_process.js:275:12)
gyp ERR! stack     at emitTwo (events.js:126:13)
gyp ERR! stack     at ChildProcess.emit (events.js:214:7)
gyp ERR! stack     at maybeClose (internal/child_process.js:925:16)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
gyp ERR! System Windows_NT 10.0.17763
gyp ERR! command "D:\\Program Files\\nodejs\\node.exe" "C:\\Users\\Administrator\\git\\web-flash-1\\flash-vue-admin\\node_module
s\\node-gyp\\bin\\node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_librar
y="
gyp ERR! cwd C:\Users\Administrator\git\web-flash-1\flash-vue-admin\node_modules\node-sass
gyp ERR! node -v v8.9.4
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
Build failed with error code: 1
npm WARN script-ext-html-webpack-plugin@2.0.1 requires a peer of html-webpack-plugin@^3.0.0 but none is installed. You must inst
all peer dependencies yourself.
npm WARN web-flash-vue-admin@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (curr
ent: {"os":"win32","arch":"x64"})

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-sass@4.12.0 postinstall: `node scripts/build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@4.12.0 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2019-05-31T01_31_24_756Z-debug.log
-
