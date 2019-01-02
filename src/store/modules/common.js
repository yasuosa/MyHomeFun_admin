import {
    setStore,
    getStore,
    removeStore
} from '@/util/store'
import website from '@/config/website'
const common = {

    state: {
        isCollapse: false,
        isFullScren: false,
        isShade: false,
        screen: -1,
        isLock: getStore({ name: 'isLock' }) || false,
        showTag: true,
        showDebug: true,
        showCollapse: true,
        showSearch: true,
        showLock: true,
        showFullScren: true,
        showTheme: true,
        showColor: true,
        showMenu: true,
        theme: getStore({ name: 'theme' }) || '#409EFF',
        themeName: getStore({ name: 'themeName' }) || '',
        lockPasswd: getStore({ name: 'lockPasswd' }) || '',
        website: website,
    },
    mutations: {
        SET_SHADE: (state, active) => {
            state.isShade = active;
        },
        SET_COLLAPSE: (state) => {
            state.isCollapse = !state.isCollapse;
        },
        SET_FULLSCREN: (state) => {
            state.isFullScren = !state.isFullScren;
        },
        SET_LOCK: (state) => {
            state.isLock = true;
            setStore({
                name: 'isLock',
                content: state.isLock,
                type: 'session'
            })
        },
        SET_SCREEN: (state, screen) => {
            state.screen = screen;
        },
        SET_THEME: (state, color) => {
            state.theme = color;
            setStore({
                name: 'theme',
                content: state.theme,
            })
        },
        SET_THEME_NAME: (state, themeName) => {
            state.themeName = themeName;
            setStore({
                name: 'themeName',
                content: state.themeName,
            })
        },
        SET_LOCK_PASSWD: (state, lockPasswd) => {
            state.lockPasswd = lockPasswd;
            setStore({
                name: 'lockPasswd',
                content: state.lockPasswd,
                type: 'session'
            })
        },
        CLEAR_LOCK: (state) => {
            state.isLock = false;
            state.lockPasswd = '';
            removeStore({
                name: 'lockPasswd'
            });
            removeStore({
                name: 'isLock'
            });
        },
    }
}
export default common