<template>
  <el-container>
    <el-header style="text-align: left; font-size: 30px">
      <span>菜鸟裹裹</span>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/list">库存列表</router-link></span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/order">预约</router-link></span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
}
</script>

<style scoped>
  .el-header{
    background-color: #FFFFFF;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
