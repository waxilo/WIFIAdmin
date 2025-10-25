<template>
  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="simple-card"> <label>SIM卡状态</label> </el-card>
    <el-card shadow="hover" class="simple-card"> <label>网络状态</label> </el-card>
    <el-card shadow="hover" class="simple-card"> <label>运行状态</label> </el-card>
    <el-card shadow="hover" class="simple-card"> <label>WIFI名称</label> </el-card>
  </div>

  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="mid-card">
      <label> 设备信息 </label>
      <hr width="90%" />
      <div>
        <div v-for="item in deviceInfo">
          <label class='mid-card-titile'>{{ item.label }}</label>
          <label> {{ item.value }} </label>
        </div>
      </div>
    </el-card>
    <el-card shadow="hover" class="mid-card">
      <label> 网络信息 </label>
      <hr width="90%" />
    </el-card>
    <el-card shadow="hover" class="mid-card"><label> WIFI信息 </label>
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

.mid-card-titile {}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const deviceInfo = ref<{ label: string; value: string }[]>([])



onMounted(() => {
  flushData()
})

const flushData = () => {
  deviceInfo.value.push({ label: '设备名称', value: 'FM20' })
  deviceInfo.value.push({ label: '软件版本', value: 'TEST' })

}


</script>
