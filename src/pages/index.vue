<template>
  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="simple-card"> SIM卡状态 </el-card>
    <el-card shadow="hover" class="simple-card"> 网络状态 </el-card>
    <el-card shadow="hover" class="simple-card"> 设备温度 </el-card>
    <el-card shadow="hover" class="simple-card"> 信号强度 </el-card>
  </div>

  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="mid-card"> 设备信息 </el-card>
    <el-card shadow="hover" class="mid-card"> 网络信息 </el-card>
    <el-card shadow="hover" class="mid-card"> 温度监控 </el-card>
  </div>
</template>

<style lang="scss" scoped>
.simple-card {
  flex: 1;
  min-width: 0;
  height: 100px;
  border-radius: 10px;
}

.simple-card-group {
  width: calc(100% - 2rem);
  margin: 0rem 1rem 1rem 1rem;
  box-sizing: border-box;
}

.mid-card {
  flex: 1;
  min-width: 0;
  height: 400px;
  border-radius: 10px;
}
</style>
