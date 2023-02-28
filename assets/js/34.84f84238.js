(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{207:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903941713428487",target:"_blank",rel:"noopener noreferrer"}},[t._v("作者：william_li21790"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("1、ssr")]),t._v(" "),s("p",[t._v("想到白屏问题，首先想到的解决方案一般都是服务端渲染，在服务端将渲染逻辑处理好，然后将处理好的HTML直接返回给前端展示，这样就可以解决白屏的问题，也可以解决seo的问题，因为不需要动态获取数据了，但是，这和我早期的写后端时的开发模式很像，前端和后端关联在了一起，不利于维护，同时，对于前端工程师来说，要求变高来，需要了解一定的后端知识，虽然有类似Nuxt.js这类的SSR框架帮我们简化了服务端的部分，但是在要做定制或是解决bug时还是无法避免要对服务端部分进行调试、维护，成本颇高，还有需要考虑的服务端渲染会增加服务器压力，要处理并发、运行速度问题等等")]),t._v(" "),s("p",[t._v("2、预渲染")]),t._v(" "),s("p",[t._v("这个方案是相对简单直接的一个解决办法，尝试成本也比较低，这里介绍如何用prerender-spa-plugin做预渲染，这样就可以在浏览器进行渲染，而不需要将Vue或者React代码部署到服务器上，以vue-cli3的官方demo为例做配置，看具体的配置文件：")]),t._v(" "),t._m(2),s("p",[t._v("上面代码是常用prerender-spa-plugin的配置，staticDir预渲染输出的文件地址，routes要做预渲染的路由，minify压缩相关的配置，renderer渲染引擎相关的配置，可以传入自定以的渲染引擎或者直接使用默认的PuppeteerRenderer，renderAfterDocumentEvent是渲染引擎配置中的一个属性，指当某个事件触发时才执行预渲染，这里 有关于渲染引擎的完整属性介绍，这很重要，尤其是对一些特定场景的下的需求，当然简单场景下完全可以不配置renderer渲染引擎选项，直接用默认选项。")]),t._v(" "),s("p",[t._v("以往在没有使用预渲染插件时app节点里面是空的没有内容，从加载index.html文件开始到js文件解析完成之前，由于app节点里面是空的，因此页面会处于白屏状态，但是预渲染插件在编译阶段就将对应的路由编译好插入到app节点，这样就能在js文件解析过程中有内容展示，js解析完成后，Vue会将app节点内的内容替换成Vue渲染好的内容，来看看chrome调试下渲染有什么区别：")]),t._v(" "),s("p",[t._v("常规渲染：")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("预渲染：")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("利用chrome浏览器的加载截屏功能可以看出常规渲染时会有明显的白屏时间，而预渲染则不会产生白屏，\n那么预渲染有什么缺点呢？")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("3、骨架屏")]),t._v(" "),s("p",[t._v("骨架屏的实现原理和预加载类似，都是利用了Puppeteer爬取页面的功能，Puppeteer是chrome出的一个headlessChromenode库，提供了API可以抓取SPA并生成预渲染内容，和预加载不太一样的是骨架屏技术会在Puppeteer生成内容后，利用算法将生成的内容进行替换，生成骨架页面，page-skeleton-webpack-plugin是一个用来生成骨架屏的webpack插件")])])}),[function(){var t=this._self._c;return t("h3",{attrs:{id:"项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[this._v("#")]),this._v(" 项目")])},function(){var t=this._self._c;return t("h4",{attrs:{id:"首屏白屏处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首屏白屏处理"}},[this._v("#")]),this._v(" 首屏白屏处理")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PrerenderSPAPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prerender-spa-plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Renderer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PrerenderSPAPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PuppeteerRenderer\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" plugins "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrerenderSPAPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("staticDir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("minify")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("collapseBooleanAttributes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("collapseWhitespace")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("decodeEntities")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("keepClosingSlash")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sortAttributes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("renderer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Renderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("renderAfterDocumentEvent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom-render-trigger'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("plugins\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/14/16d2eca24314d8e3~tplv-t2oaga2asx-watermark.awebp",alt:"An image"}})])},function(){var t=this._self._c;return t("p",[t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/14/16d2ecb99cd449f3~tplv-t2oaga2asx-watermark.awebp",alt:"An image"}})])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("动态数据无法展示，不同的用户看到的都是同样的页面")]),this._v(" "),t("li",[this._v("路由很多时，代码构建时间太长")]),this._v(" "),t("li",[this._v("用户容易误操作，由于预渲染时js还没有加载，因此展示出来的内容没有js的交互逻辑，比如按钮点击，在js加载完成之前用户点击是没有反应的")]),this._v(" "),t("li",[this._v("预加载内容很少，当页面有内容是依赖动态数据加载时，在编译时是无法加载出动态数据的，因此会导致这部分内容编译不出来")])])}],!1,null,null,null);s.default=e.exports}}]);