/**
 * 全站路由配置
 *
 * meta参数说明
 * keepAlive是否缓冲页面
 * isTab是否加入到tag导航
 * isAuth是否需要授权
 */
import VueRouter from 'vue-router';
import PageRouter from './page/'
import ViewsRouter from './views/'
import AvueRouter from './avue-router';
import Vue from 'vue';
import i18n from '@/lang' // Internationalization
import Store from '../store/';

let Router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        const avueView = document.getElementById('avue-view');
        if (!avueView) {
            return {
                x: 0,
                y: 0
            }
        }
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = avueView.scrollTop
            } else {
                from.meta.savedPosition = 0;
            }
            avueView.scrollTop = to.meta.savedPosition

        }
    },
    routes: []
});
AvueRouter.install(Vue, Router, Store, i18n);
Router.$avueRouter.formatRoutes(Store.state.user.menu, true);
Router.addRoutes([...PageRouter, ...ViewsRouter]);
export default Router;