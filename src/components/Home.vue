<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-menu
          class="el-menu-vertical-demo"
          @select="handleSelect"
          @close="handleClose"
          :default-active="$route.path"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统权限管理sys</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index>权限管理</el-menu-item>
              <el-menu-item index="/Sys/UserManager">普通用户管理</el-menu-item>
              <el-menu-item index="1-3">管理员管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span>资源配置Res</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">项目配置</el-menu-item>
              <el-menu-item index="2-2">症状类型</el-menu-item>
              <el-menu-item index="2-3">提示语</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>训练管理训练tra</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">训练记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>客户管理Cus</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">客户信息</el-menu-item>
              <el-menu-item index="4-2">新建咨询表</el-menu-item>
              <el-menu-item index="4-3">咨询表</el-menu-item>
              <el-menu-item index="4-4">诊断表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-loading"></i>
              <span>店面动态Sto</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">店面动态</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>消息中心new</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">充值通知</el-menu-item>
              <el-menu-item index="6-2">课程通知</el-menu-item>
              <el-menu-item index="6-3">训练通知</el-menu-item>
              <el-menu-item index="6-4">系统公告</el-menu-item>
              <el-menu-item index="6-5">系统通知</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-money"></i>
              <span>充值管理充值Rec</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">充值记录</el-menu-item>
              <el-menu-item index="7-2">充值类型</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-phone"></i>
              <span>预约ppo</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="8-1">医师管理</el-menu-item>
              <el-menu-item index="8-2">预约管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>专家远程诊断管理exp</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="9-1">专家管理</el-menu-item>
              <el-menu-item index="9-2">诊断信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-download"></i>
              <span>远程下载处方pre</span>
            </template>
          </el-submenu>
          <el-submenu index="11">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">广告模块</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath) {
        this.$router.push({ name: key, params: keyPath });
      } else {
        this.$router.push({ name: key });
      }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
