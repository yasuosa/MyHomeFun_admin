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
    path: "https://avue.top",
    parentId: 1
}]
const first = [{
    label: "标签操作",
    path: '/tags',
    component: 'views/tags',
    icon: 'icon-canshu',
    children: []
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