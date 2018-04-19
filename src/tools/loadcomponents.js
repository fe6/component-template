/*
 * 模块加载器
 * cpt string must 需要加载的模块
 * type string maybe 是视图模块还是组件模块
 * holder string maybe 所处的文件夹
 */
export default {
  load: (cpt, type = 'components', holder = '') => () => ({
    // 需要加载的组件. 应当是一个 Promise
    component: import(`@/${type}${holder}/${cpt}`),
    // loading 时应当渲染的组件
    // loading: LoadingComp,
    // 出错时渲染的组件
    // error: ErrorComp,
    // 渲染 loading 组件前的等待时间。默认：50ms.
    delay: 50,
    // 最长等待时间。超出此时间( 5s )则渲染 error 组件。默认：Infinity
    timeout: 5000,
  }),
};
