<template>
  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="simple-card"> SIM卡状态 </el-card>
    <el-card shadow="hover" class="simple-card"> 网络状态 </el-card>
    <el-card shadow="hover" class="simple-card"> 运行状态 </el-card>
    <el-card shadow="hover" class="simple-card"> WIFI名称 </el-card>
  </div>

  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="mid-card">
      <label> 设备信息 </label>
      <hr width="90%" />
      <div>
        <div>
          <label class='mid-card-titile'>软件版本</label>
          <label> 小米10 </label>
        </div>
      </div>
    </el-card>
    <el-card shadow="hover" class="mid-card">
      <label> 网络信息 </label>
      <hr width="90%" />
    </el-card>
    <el-card shadow="hover" class="mid-card"
      ><label> WIFI信息 </label>
      <hr width="90%" />
    </el-card>
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
.mid-card-titile{

}
</style>
