<script setup lang="ts">
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="main-container flex">
      <!-- <BaseSide /> -->
      <div w="full" py="4" class="router-view-container">
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 4px);
}

.router-view-container {
  background-color: #f5f5f5;
}
</style>
