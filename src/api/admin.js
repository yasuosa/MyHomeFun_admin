import request from '@/router/axios';


export const getDic = (type) => request({
    url: '/admin/getDic',
    method: 'get',
    data: {
        type
    }
})