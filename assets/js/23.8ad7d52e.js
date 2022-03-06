(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{195:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844903887330099208",target:"_blank",rel:"noopener noreferrer"}},[t._v("底层构建"),e("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("小程序的渲染层和逻辑层分别由2个线程管理：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("页面渲染的具体流程是：在渲染层，宿主环境会把WXML转化成对应的JS对象，在逻辑层数据发生变更的时候，我们需要通过宿主环境提供的setData方法把数据层传递到渲染层，再经过对比前后差异，把差异应用到原来的Dom树上，渲染出正确的UI界面")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("小程序中所有节点树相关操作都依赖于Exparser，包括WXML到页面最终节点树的构建CreateSelectorQuery调用和自定义组件特性等")]),t._v(" "),e("p",[t._v("小程序也支持自定义组件，用法和组件通信类似vue")]),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("在内置组件中有些组件并不完全在Exparser的渲染体系下，而是由客户端原生参与组件的渲染，比如：Map组件，它的渲染的层级比在webview层渲染的普通组件要高")]),t._v(" "),e("p",[t._v("引入原生组件的优点是：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("4.1、启动")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("4.2、销毁\n只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正销毁。")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("开发者再后台发布新版本后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后的24小时之内下发新版本信息到用户。")]),t._v(" "),e("p",[t._v("小程序每次冷启动都会检查是否更新版本，如果发现新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本需要等待下一次冷启动才会应用上。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),e("p",[t._v("微信小程序是从微信中的webView和JS_SDK进化到现在这个形态")]),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("根据微信小程序官方文档，IOS，Android和小程序开发者工具这三大运行环境是有区别的：")]),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("所以微信小程序介于web端和APP之间，能够丰富调用功能接口，同时又跨平台")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("生命周期回调函数：")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),e("p",[t._v("页面事件处理函数：")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"小程序面试总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序面试总结"}},[this._v("#")]),this._v(" 小程序面试总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"小程序原生的底层架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序原生的底层架构"}},[this._v("#")]),this._v(" 小程序原生的底层架构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1、双线程模式")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("渲染层：界面渲染相关的任务全都在webview线程里执行。一个小程序存在多个界面，所以渲染层存在多个webview线程")]),this._v(" "),s("li",[this._v("逻辑层：采用JsCore线程运行js脚本")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("视图层和逻辑层通过系统层的"),s("code",[this._v("WeixinJsBridage")]),this._v("进行通信：逻辑层把数据变化通知到视图层，触发视图层页面更新，视图层把触发的事件通知到逻辑层进行业务处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("双线程模型是小程序框架和web前端框架不同之处，基于这个模型，可以更好地管控以及提供更安全的环境，缺点是带来了无处不在的异步问题（任何数据传递都是线程间的通信，也就是都会有一定的延时，不过小程序再框架爱层面已经封装好了一步带来的时序问题）\n"),s("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/%E4%B8%8B%E8%BD%BD.png",alt:"An image"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2、组件系统")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("小程序的组件是基于"),e("code",[t._v("Exparser")]),t._v("框架，"),e("code",[t._v("Exparser")]),t._v("基于"),e("code",[t._v("WebComponents")]),t._v("的"),e("code",[t._v("ShadowDOM")]),t._v("模型，但是不依赖浏览器的原生支持，而且可在纯js的环境中运行。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("3、原生组件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("扩展web的能力")]),this._v(" "),s("li",[this._v("体验更好，减轻webview的渲染工作")]),this._v(" "),s("li",[this._v("绕过setData、数据通信和重渲染流程，性能更好")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("4、运行机制")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("热启动：假如用户已经打开过小程序，在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；")]),this._v(" "),s("li",[this._v("冷启动：用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/7/11/16bdf4d5c858dbe0~tplv-t2oaga2asx-watermark.awebp",alt:"An image"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("5、更新机制")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果想让用户使用最新版本的小程序，可以用"),s("code",[this._v("wx.getUpdateManager")]),this._v("做个检查更新的功能")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkNewVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" updateManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    updateManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCheckForUpdate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hasUpdate'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasUpdate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求完新版本信息的回调")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasUpdate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        updateManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUpdateReady")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hasNewVersion")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"小程序与h5的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序与h5的区别"}},[this._v("#")]),this._v(" 小程序与h5的区别")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("运行环境：小程序基于浏览器内核重构的内置解析器，而h5的宿主环境是浏览器，所以小程序没有DOM和BOM的相关API，jquery和一些npm都不能再小程序上使用")]),this._v(" "),s("li",[this._v("系统权限：小程序能获取更多的系统权限如网络通信状态，数据缓存能力等，（HTML5+API Reference 通过plus.webview可获取应用界面管理对象。）")]),this._v(" "),s("li",[this._v("渲染机制：小程序的逻辑层和渲染层是分开的，而h5页面UI渲染跟js的脚本执行都在一个单线程中，互斥，所以h5页面中长时间的脚本运行可能会导致页面失去响应")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("运行环境")]),t._v(" "),e("th",[t._v("逻辑层")]),t._v(" "),e("th",[t._v("渲染层")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("IOS")]),t._v(" "),e("td",[t._v("JavaScriptCore")]),t._v(" "),e("td",[t._v("WKWebView")])]),t._v(" "),e("tr",[e("td",[t._v("Android")]),t._v(" "),e("td",[t._v("X5 JSCore")]),t._v(" "),e("td",[t._v("X5浏览器")])]),t._v(" "),e("tr",[e("td",[t._v("开发工具")]),t._v(" "),e("td",[t._v("NWJS")]),t._v(" "),e("td",[t._v("Chrome WebView")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"小程序生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序生命周期"}},[this._v("#")]),this._v(" 小程序生命周期")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onLaunch")]),this._v("：监听小程序初始化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onLoad")]),this._v("：监听页面加载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onShow")]),this._v("：监听页面显示（进入前台）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onReady")]),this._v("：监听页面初次渲染完成")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onHide")]),this._v("：监听页面隐藏（进入后台）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onUnLoad")]),this._v("：监听页面卸载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onPullDownRefresh")]),this._v("：监听用户下拉动作 需要app.josn中配置enablePullDownRefresh")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onReachBottom")]),this._v("：监听页面上拉触底事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onShareAppMessage")]),this._v("：用户点击右上角转发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onShareTimeline")]),this._v("：用户监听右上角转发朋友圈")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onPageScroll")]),this._v("：页面滚动触发事件 请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onResize")]),this._v("：页面尺寸变化事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onTabItemTap")]),this._v("：当前是tab页，点击tab时触发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("onSaveExitState")]),this._v("：页面销毁前保留状态回调")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"小程序层级10级处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序层级10级处理"}},[this._v("#")]),this._v(" 小程序层级10级处理")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("封装跳转方法，使用"),e("code",[t._v("getCurrentPages().length")]),t._v("获取当前路由层级数"),e("br"),t._v("\n1、小于10层，使用"),e("code",[t._v("navigateTo")]),t._v("，否则使用"),e("code",[t._v("redirectTo")]),e("br"),t._v("\n2、跳转一定层级，使用"),e("code",[t._v("reLaunch")]),t._v("删除所有页面栈，继续跳转"),e("br"),t._v("\n根据实际业务场景确定")])}],!1,null,null,null);s.default=a.exports}}]);