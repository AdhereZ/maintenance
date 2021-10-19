import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Layout = () => import('views/layout/Layout')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')
const FindPassword = () => import('views/findPassword/FindPassword')

const UserList = () => import('views/users/UserList')
const RemoveUser = () => import('views/users/RemoveUser')
const LoginLog = () => import('views/users/LoginLog')

const RoleManage = () => import('views/admin/RoleManage')
const AuthManage = () => import('views/admin/AuthManage')
const AdminList = () => import('views/admin/AdminList')

const SystemSetting = () => import('views/system/SystemSetting')
const SystemLog = () => import('views/system/SystemLog')

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/findPassword',
    name: 'FindPassword',
    component: FindPassword
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
     {
      path: '/home',
      name: 'Home',
      component: Home,
     },
     {
      path: '/userList',
      name: 'UserList',
      component: UserList,
     },
     {
      path: '/removeUser',
      name: 'RemoveUser',
      component: RemoveUser,
     },
     {
      path: '/loginLog',
      name: 'LoginLog',
      component: LoginLog,
     },
     {
      path: '/roleManage',
      name: 'RoleManage',
      component: RoleManage,
     },
     {
      path: '/authManage',
      name: 'AuthManage',
      component: AuthManage,
     },
     {
      path: '/adminList',
      name: 'AdminList',
      component: AdminList,
     },
     {
      path: '/systemSetting',
      name: 'SystemSetting',
      component: SystemSetting,
     },
     {
      path: '/systemLog',
      name: 'SystemLog',
      component: SystemLog,
     },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
