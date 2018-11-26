import Mock from 'mockjs'
const first = [{
    id: 33,
    label: "测试页",
    path: '/test',
    component: 'views/test',
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
            data: menu[body.type]
        }
    })
}