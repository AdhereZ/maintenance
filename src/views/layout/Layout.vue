<template>
  <el-container class="home-container">
    <el-header>
      <div class="systemTitle">
        <div>城市轨道交通智慧工务维保系统</div>
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="menuCollapse"></i>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '75px' : '200px'">
        <el-menu background-color="#001529" text-color="#fff" :collapse="isCollapse" :unique-opened="true" :collapse-transition="false" :default-active="activePath" :router="true">
          <template v-for="item in menuList">
            <el-menu-item :index="item.path" v-if="!item.children" class="singleMenu" :key="item.id">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
            <el-submenu :index="item.id + ''" class="clearfix" :key="item.id" v-else>
              <template slot="title"
                ><i :class="item.icon"></i>
                <span v-if="!isCollapse">{{ item.name }}</span>
              </template>
              <el-menu-item :index="item1.path" v-for="item1 in item.children" :key="item1.id">
                <i :class="item1.icon"></i>
                <span>{{ item1.name }}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      isCollapse: false,
      activePath: 'home',
      menuList: [
        { name: '主页', id: 99, icon: 'el-icon-s-home', path: 'home' },
        {
          name: '用户管理',
          id: 100,
          icon: 'el-icon-user',
          children: [
            {
              name: '用户列表',
              id: 101,
              icon: 'el-icon-menu',
              path: 'userList'
            },
            {
              name: '移除的用户',
              id: 102,
              icon: 'el-icon-menu',
              path: 'removeUser'
            },
            {
              name: '登录日志',
              id: 103,
              icon: 'el-icon-menu',
              path: 'loginLog'
            }
          ]
        },
        {
          name: '管理员管理',
          id: 200,
          icon: 'el-icon-c-scale-to-original',
          children: [
            {
              name: '角色管理',
              id: 201,
              icon: 'el-icon-menu',
              path: 'roleManage'
            },
            {
              name: '权限管理',
              id: 202,
              icon: 'el-icon-menu',
              path: 'authManage'
            },
            {
              name: '管理员列表',
              id: 203,
              icon: 'el-icon-menu',
              path: 'adminList'
            }
          ]
        },
        {
          name: '系统管理',
          id: 300,
          icon: 'el-icon-setting',
          children: [
            {
              name: '系统设置',
              id: 301,
              icon: 'el-icon-menu',
              path: 'systemSetting'
            },
            {
              name: '系统日志',
              id: 302,
              icon: 'el-icon-menu',
              path: 'systemLog'
            }
          ]
        }
      ]
    }
  },
  methods: {
    menuCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.singleMenu {
  position: relative;
  i {
    left: 32px;
    top: 22px;
    position: absolute;
  }
}
.el-submenu__title {
  position: relative;
  i {
    left: 30px;
    top: 22px;
    position: absolute;
  }
}
.el-submenu {
  .el-menu-item {
    i {
      float: left;
      margin-top: 17px;
      margin-right: 15px;
    }
    span {
      float: left;
    }
  }
}

.el-header {
  background-color: #001529;
  color: #fff;
  line-height: 60px;
}
.systemTitle {
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  div {
    margin-right: 10px;
  }
  i {
    font-size: 22px;
  }
}
.el-aside {
  background-color: #001529;
  color: #333;
  text-align: center;
  line-height: 200px;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
