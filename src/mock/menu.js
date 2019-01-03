import Mock from 'mockjs'
const top = [{
    label: "首页",
    path: "/wel/index",
    icon: 'el-icon-menu',
    parentId: 0
},
{
    label: "官网",
    icon: 'el-icon-document',
    path: "https://avuex.avue.top",
    parentId: 1
}]
const first = [{
    label: "标签",
    path: '/tags',
    component: 'views/util/tags',
    icon: 'icon-canshu',
    children: []
}, {
    label: "存储",
    path: '/store',
    component: 'views/util/store',
    icon: 'icon-canshu',
    children: []
}, {
    label: "全局函数",
    path: 'https://avuex.avue.top/$/doc/api',
    icon: 'icon-canshu',
    children: []
}, {
    label: "日志监控",
    path: '/logs',
    component: 'views/util/logs',
    icon: 'icon-canshu',
    children: []
}, {
    label: "异常页",
    path: '/error',
    icon: 'icon-canshu',
    children: [{
        label: "403",
        path: '/error',
        component: 'components/error-page/403',
        icon: 'icon-canshu',
        children: []
    }, {
        label: "404",
        path: '/404',
        component: 'components/error-page/404',
        icon: 'icon-canshu',
        children: []
    }, {
        label: "500",
        path: '/500',
        component: 'components/error-page/500',
        icon: 'icon-canshu',
        children: []
    }]
}]
const second = []
export default ({ mock }) => {
    if (!mock) return;
    let menu = [first, second];
    Mock.mock('/user/getMenu', 'get', (res) => {
        let body = JSON.parse(res.body);
        return {
            data: menu[body.type] || []
        }
    })
    Mock.mock('/user/getTopMenu', 'get', () => {
        return {
            data: top
        }
    })

}