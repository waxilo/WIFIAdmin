<template>
  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="simple-card"> <label>中国移动</label> </el-card>
    <el-card shadow="hover" class="simple-card"> <label>运行时间</label> </el-card>
    <el-card shadow="hover" class="simple-card"> <label>电量</label> </el-card>
    <el-card shadow="hover" class="simple-card"> <label>CPU温度</label> </el-card>


  </div>

  <div class="flex flex-wrap gap-4 simple-card-group">
    <el-card shadow="hover" class="mid-card">
      <div class="mid-card-title">
        <label>设备信息</label>
      </div>
      <el-table class="user-select-none" :data="deviceInfo" style="width: 100%" @row-click='rowSingeClick'
        @row-dblclick="rowDoubleClick">
        <el-table-column prop="label" />
        <el-table-column prop="value" align="right" />
      </el-table>
    </el-card>
    <el-card shadow="hover" class="mid-card">
      <div class="mid-card-title">
        <label>设备信息</label>
      </div>
      <el-table class="user-select-none" :data="deviceInfo" style="width: 100%">
        <el-table-column prop="label" />
        <el-table-column prop="value" align="right" />
      </el-table>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.simple-card {
  flex: 1;
  min-width: 0;
  height: 100px;
  border-radius: 10px;
  user-select: none;
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

.user-select-none {
  user-select: none;
}

.mid-card-title {
  user-select: none;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as commonHttp from '~/utils/common-http';
import { ElMessage } from 'element-plus'
import { fa } from 'element-plus/es/locales.mjs';



const deviceInfo = ref<{ label: string; value: string }[]>([])

const wifiInfo = ref<{ label: string; value: string }[]>([])

let isDoubleCount = 0

onMounted(() => {
  flushData()
})

async function rowSingeClick(row: { label: string; value: string }) {
  const tmpCount = isDoubleCount
  await sleep(200)
  if (tmpCount !== isDoubleCount) {
    return
  }
  navigator.clipboard.writeText(row.value)
  ElMessage({
    message: '已复制'
  })
}

function rowDoubleClick(row: { label: string; value: string }) {
  isDoubleCount++
   ElMessage({
    message: '11',
    grouping: true,
  })
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function flushData() {
  commonHttp.getSignInfo().then(res => {
    console.log(res);
    deviceInfo.value.push({ label: '设备名称', value: 'M20' })
    deviceInfo.value.push({ label: '软件版本', value: 'M20_MF09L_V2.3_Build_20241129' })

    deviceInfo.value.push({ label: 'QCI', value: res.Qci })
    deviceInfo.value.push({ label: '下载限制', value: res.DL })
    deviceInfo.value.push({ label: '上传限制', value: res.UL })
    deviceInfo.value.push({ label: 'IMEI', value: '867222079692648' })
    deviceInfo.value.push({ label: 'ICCID', value: '89860488192470278063' })

    wifiInfo.value.push({ label: 'WIFI类型', value: '5G' })
    wifiInfo.value.push({ label: 'WIFI名称', value: 'Waxilo-FM-5G' })
    wifiInfo.value.push({ label: '安全类型', value: 'WPA2-PSK' })
    wifiInfo.value.push({ label: 'WIFI密码', value: '12356789' })
    wifiInfo.value.push({ label: '休眠时间', value: '永不' })
    wifiInfo.value.push({ label: '最大连接数', value: '8' })




  })
}

</script>
