import http from "./http";
import http8080 from "./http8080";

export async function getInfo() {
  const request = {
    keys: [
      "device_software_version",
      "device_product_name",
      "device_imei",
      "device_sn",
      "mnet_wnw_dlch",
      "mnet_wnw_band",
      "mnet_wnw_pci",
      "mnet_wnw_bandwidth",
      "mnet_sysmode",
      "mnet_sim_iccid",
      "statistics_current_month_used",
      "statistics_day_data_used",
      "device_battery_level_percent",
      "device_battery_temperature",
      "mnet_operator_name",
      "wifi_work_status",
      "mnet_sim_status",
    ],
  };
  const response = await http.post("/action/get_mgdb_params", request);
  return response.data
}

// 电池信息
export async function getBatteryInfo() {
  const response = await http8080.get("/api/get/sysinfo");
  return response.data
}

// 签约信息
export async function getSignInfo() {
  const response = await http8080.get("/api/get/network");
  return response.data.Data.Cgeqosrdp
}

// 基站小区信息
export async function getBaseStationInfo() {
  const response = await http8080.get("/api/get/network");
  return response.data.Data.Network
}

