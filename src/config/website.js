/**
 * 全局配置文件
 */
export default {
    title: "Avuex",
    logo: "A",
    key: 'avuex',//配置主键,目前用于存储
    indexTitle: 'avue-cli By smallwei',
    lockPage: '/lock',
    tokenTime: 6000,
    infoTitle: '通用管理系统快速开发框架',
    //http的status默认放行不才用统一处理的,
    statusWhiteList: [400],
    //配置首页不可关闭
    isFirstPage: false,
    fistPage: {
        label: "首页",
        value: "/wel/index",
        params: {},
        query: {},
        group: [],
        close: false
    },
    //配置菜单的属性
    menu: {
        props: {
            label: 'label',
            path: 'path',
            icon: 'icon',
            children: 'children'
        }
    }
}