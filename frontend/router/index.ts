
import { RouteRecordRaw } from "vue-router";

// ページ
import CatchReportCreate from "../src/admin-components/pages/catch-reports/Create.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: CatchReportCreate,
    name: "catchReportCreate",
    meta: {}
  }
]


