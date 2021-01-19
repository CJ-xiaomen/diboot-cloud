// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页', hiddenHeaderContent: true },
    redirect: '/dashboard',
    children: [
      // 工作台
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/index',
        component: PageView,
        hideChildrenInMenu: true,
        meta: { title: '我的工作台', keepAlive: true, icon: 'dashboard' },
        children: [{
          path: '/dashboard/index',
          name: 'DashboardIndex',
          hidden: true,
          component: () => import('@/views/dashboard/Index'),
          meta: { title: '我的工作台', keepAlive: true }
        }]
      },
      // 组织架构管理
      {
        path: '/orgStructure',
        redirect: '/orgStructure/org-tree-list',
        component: RouteView,
        meta: { title: '组织管理', icon: 'team', keepAlive: false, permission: ['IamOrg', 'IamPosition', 'IamUser'] },
        children: [
          {
            path: '/orgStructure/org',
            name: 'OrgIndex',
            component: () => import('@/views/orgStructure/org/Index'),
            meta: { title: '组织机构管理', keepAlive: false, permission: ['IamOrg'] }
          },
          {
            path: '/orgStructure/position',
            name: 'PositionIndex',
            component: () => import('@/views/orgStructure/position/list'),
            meta: { title: '岗位管理', keepAlive: false, permission: ['IamPosition'] }
          },
          {
            path: '/orgStructure/orgUser',
            name: 'OrgUserIndex',
            component: () => import('@/views/orgStructure/orgUser/Index'),
            meta: { title: '组织人员管理', keepAlive: false, permission: ['IamUser'] }
          }
        ]
      },
      // 系统管理
      {
        path: '/system',
        redirect: '/system/dictionary/list',
        component: PageView,
        meta: { title: '系统管理', icon: 'setting', permission: ['Dictionary', 'IamUser', 'IamRole', 'IamResourcePermission', 'IamLoginTrace', 'IamOperationLog'] },
        children: [
          {
            path: '/system/dictionary/index',
            name: 'DictIndex',
            component: () => import('@/views/system/dictionary/Index'),
            meta: { title: '数据字典管理', keepAlive: true, permission: ['Dictionary'] }
          },
          {
            path: '/system/iamUser/index',
            name: 'IamUserIndex',
            component: () => import('@/views/system/iamUser/Index'),
            meta: { title: '系统用户管理', keepAlive: true, permission: ['IamUser'] }
          },
          {
            path: '/system/iamRole/list',
            name: 'IamRoleList',
            component: () => import('@/views/system/iamRole/list'),
            meta: { title: '角色资源管理', keepAlive: true, permission: ['IamRole'] }
          },
          {
            path: '/system/iamResourcePermission/list',
            name: 'IamResourcePermission',
            component: () => import('@/views/system/iamResourcePermission/list'),
            meta: { title: '资源权限管理', keepAlive: true, permission: ['IamResourcePermission'] }
          },
          {
            path: '/system/scheduleJob/list',
            name: 'ScheduleJobIndex',
            component: () => import('@/views/system/scheduleJob/list'),
            meta: { title: '定时任务管理', keepAlive: true, permission: ['ScheduleJob'] }
          },
          {
            path: '/system/iamOperationLog/index',
            name: 'IamOperationLogIndex',
            component: () => import('@/views/system/iamOperationLog/Index'),
            meta: { title: '操作日志查看', keepAlive: true, permission: ['IamOperationLog'] }
          },
          {
            path: '/system/iamLoginTrace/list',
            name: 'IamLoginTraceList',
            component: () => import('@/views/system/iamLoginTrace/list'),
            meta: { title: '登录日志查看', keepAlive: true, permission: ['IamLoginTrace'] }
          }
        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/settings',
        name: 'account',
        meta: { title: '个人中心', icon: 'user', keepAlive: true },
        children: [
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true }
              },
              {
                path: '/account/settings/changePwd',
                name: 'ChangePwdSettings',
                component: () => import('@/views/account/settings/ChangePwd'),
                meta: { title: '更改密码', hidden: true, keepAlive: true }
              }
            ]
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        hidden: true,
        meta: { title: '异常页', icon: 'warning' },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403' }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404' }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500' }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
