<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/" >
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>概览</span>
      </template>
    </el-menu-item>

    <el-menu-item index="/nav/2">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>
        Navigator Two
      </template>
    </el-menu-item>

    <el-menu-item index="3" disabled>
      <el-icon>
        <Document />
      </el-icon>
      <template #title>
        Navigator Three
      </template>
    </el-menu-item>
    
    <el-menu-item index="/nav/4">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>
        Navigator Four
      </template>
    </el-menu-item>
  </el-menu>
</template>
