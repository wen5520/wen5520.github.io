(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{212:function(t,s,a){"use strict";a.r(s);var r=a(0),n=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"jenkins-shell-构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-shell-构建"}},[t._v("#")]),t._v(" jenkins shell 构建")]),t._v(" "),a("h3",{attrs:{id:"正式环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正式环境配置"}},[t._v("#")]),t._v(" 正式环境配置")]),t._v(" "),a("p",[t._v("1、构建")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("echo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xiaofang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),t._v("\nnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\nnpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\n\nnpx browserslist@latest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("db\n\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set config'")]),t._v("\nnpm config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("laoyaojing"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xiaofang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xz"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run install'")]),t._v("\nnpm install\nnpm install pdfjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dist@"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".228")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run build'")]),t._v("\nnpm run build\n\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build dist'")]),t._v("\ncd dist\nrm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rf dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\ntar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zcvf dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])])]),a("p",[t._v("2、构建后")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\tSource files"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n    Remove prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("dist\n    Remote directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xiaofang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n    Exec command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xiaofang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n                mkdir dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n                mv dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n                cd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n                tar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zxvf dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n                cd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n                mv dist dist2  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mv dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak dist\n                rm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rf dist2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rf dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n")])])]),a("h4",{attrs:{id:"测试环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试环境配置"}},[t._v("#")]),t._v(" 测试环境配置")]),t._v(" "),a("p",[t._v("1、构建")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("echo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xiaofang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),t._v("\nnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\nnpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\n\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run install'")]),t._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run build'")]),t._v("\nnpm run build\n\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build dist'")]),t._v("\ncd dist\nrm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rf dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\ntar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zcvf dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])])]),a("p",[t._v("2、构建后")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\tSource files"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n    Remove prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("dist\n    Remote directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ceshixf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n    Exec command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ceshixf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n                mkdir dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n                mv dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n                cd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n                tar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zxvf dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n                cd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n                mv dist dist2  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mv dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak dist\n                rm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rf dist2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rf dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bak\n")])])]),a("p",[t._v("==================")]),t._v(" "),a("p",[t._v("echo [testjenkins] $PATH\nnode -v\nnpm -v")]),t._v(" "),a("p",[t._v("npx browserslist@latest --update-db")]),t._v(" "),a("p",[t._v("echo 'set config'\nnpm config set registery=https://e.coding.net/iskeys/testjenkins.git")]),t._v(" "),a("p",[t._v("dist/dist.tar.gz")]),t._v(" "),a("p",[t._v("dist")]),t._v(" "),a("p",[t._v("/data/project/test/dist")]),t._v(" "),a("p",[t._v("cd /data/project/test\nmkdir dist-bak\nmv dist/dist.tar.gz ./dist-bak\ncd ./dist-bak\ntar -zxvf dist.tar.gz\ncd ../\nmv dist dist2  && mv dist-bak dist\nrm -rf dist2 && rm -rf dist-bak")])])}],!1,null,null,null);s.default=n.exports}}]);