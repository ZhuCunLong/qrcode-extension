<template>
  <div class="layout-container">
    <nav class="layout-nav">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        :default-active="route.fullPath"
      >
        <el-menu-item v-for="item in routes" :key="item.path" :index="item.path">
          <router-link :to="item.path">
            {{ item.meta.title }}
          </router-link>
        </el-menu-item>
      </el-menu>
    </nav>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const route = useRoute()

const routes = router.getRoutes()

</script>

<style scoped lang="less">
@menu-width: 200px;

:deep(.el-menu){
  border-right: none;
}
:deep(.el-menu-item) {
  a {
    width: 100%;
  }
}
.layout-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: @menu-width;
  height: 100vh;
  overflow: auto;
  background-color: #545c64;
  border-right: 1px solid var(--el-menu-border-color);
}
.main-container {
  margin-left: @menu-width;
  padding: 12px;
}
</style>