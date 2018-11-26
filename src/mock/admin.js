import Mock from 'mockjs'
import { DIC } from '@/const/dic'

export default ({ mock }) => {
    if (!mock) return;
    Mock.mock('/admin/getDic', 'get', (res) => {
        let body = JSON.parse(res.body);
        return {
            data: DIC[body.type]
        }
    })
}