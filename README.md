## Vite
 - 新型前端构建工具，能够显著提升前端开发体验

### 组成
1.  一个开发服务器 ---- 基于原生 ES模块 提供了丰富的内建功能（模块热更新 HMR）
2. 一套构建指令 ---- 它使用 rollup 打包代码

Vite 意在提供 开箱即用的配置，插件 API 和 JavaScript API 有高度的可扩展性

### 优势

- 改进了开发服务器启动时间
> 一开始将应用中的模块区分为 依赖 和 源码两类
1. 依赖
> 大多为在开发时不会变动的纯 javascript 文件
> Vite 将使用 esbuild 预构建依赖
2. 源码
> 通常包含一些并非直接是 javascript 文件，需要转换（jsx、css、vue等），时常会被编辑。同时，并不是所有的源码都需要同时被加载（基于路由拆分的代码模块）

Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。
![bundle](./img/bundle.png)
![esm](./img/esm.png)

- 缓慢的更新

1. 基于 bundle 打包器启动时，重建整个包的效率很低，更新速度也会随之下降
2. 出现动态模块热重载（HMR），但也会随着应用规模的增大而下降

**Vite：**
1. HMR 是在原生 ESM 上执行的。当编辑一个文件时，vite 只需要精确地是已编辑的模块与其最近的 HMR 边界之间的链 失活，使得无论应用大小，HMR 始终能保持快速更新
2. 同时利用 HTTP 头来加速整个页面的重新加载：
    1. 源码模块的请求： `304 Not Modified` 进行协商缓存
    2. 依赖模块的请求： `Cache-Control: max-age=3153600, immutable`  强缓存

esm 模块和 commonjs 模块的一个显著差异是，cjs 导出的是值得拷贝，esm 导出的是值的引用。当模块内部的值被修改时，cjs 获取不到被修改后的值，esm 可以获取到被修改后的值。