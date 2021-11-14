import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* const Home = () => import('views/Back-stage/home/Home')
const Layout = () => import('views/Back-stage/layout/Layout')

const UserList = () => import('views/Back-stage/users/UserList')
const RemoveUser = () => import('views/Back-stage/users/RemoveUser')
const LoginLog = () => import('views/Back-stage/users/LoginLog')

const RoleManage = () => import('views/Back-stage/admin/RoleManage')
const AuthManage = () => import('views/Back-stage/admin/AuthManage')
const AdminList = () => import('views/Back-stage/admin/AdminList')

const SystemSetting = () => import('views/Back-stage/system/SystemSetting')
const SystemLog = () => import('views/Back-stage/system/SystemLog')

const Feedback = () => import('views/Back-stage/feedback/Feedback')

const VRSystem = () => import('views/Back-stage/moduleManage/VRSystem')
const MRSystem = () => import('views/Back-stage/moduleManage/MRSystem')
const QuestionManage = () => import('views/Back-stage/moduleManage/QuestionManage') */

const Home = () => import('views/home/Home')
const Layout = () => import('views/layout/Layout')

const UserList = () => import('views/users/UserList')
const RemoveUser = () => import('views/users/RemoveUser')
const LoginLog = () => import('views/users/LoginLog')

const RoleManage = () => import('views/admin/RoleManage')
const AuthManage = () => import('views/admin/AuthManage')
const AdminList = () => import('views/admin/AdminList')

const SystemSetting = () => import('views/system/SystemSetting')
const SystemLog = () => import('views/system/SystemLog')

const Feedback = () => import('views/feedback/Feedback')

const VRSystem = () => import('views/moduleManage/VRSystem')
const MRSystem = () => import('views/moduleManage/MRSystem')
const QuestionManage = () => import('views/moduleManage/QuestionManage')

const Login = () => import('views/login/Login')
const BackLogin = () => import('views/login/BackLogin')
const Register = () => import('views/register/Register')
const FindPassword = () => import('views/findPassword/FindPassword')

const User = () => import('views/User/User')
const Index = () => import('views/User/index/Index')
const QuestionBank = () => import('views/User/questionBank/QuestionBank')

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/back-login',
    name: 'BackLogin',
    component: BackLogin
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
    children: [{
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
      {
        path: '/feedback',
        name: 'Feedback',
        component: Feedback,
      },
      {
        path: '/vr',
        name: 'VRSystem',
        component: VRSystem,
      },
      {
        path: '/mr',
        name: 'MRSystem',
        component: MRSystem,
      },
      {
        path: '/questionManage',
        name: 'QuestionManage',
        component: QuestionManage,
      },
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [{
      path: '',
      redirect: 'index'
    }, {
      path: 'index',
      name: 'Index',
      component: Index,
    }, {
      path: 'questionBank',
      name: 'QuestionBank',
      component: QuestionBank,
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router