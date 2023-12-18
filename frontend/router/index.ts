
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// ページ
import CatchReportList from "../src/admin-components/pages/catch-reports/List.vue"
import CatchReportCreate from "../src/admin-components/pages/catch-reports/Create.vue"
import CatchReportDetail from "../src/admin-components/pages/catch-reports/Detail.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: CatchReportList,
    name: "catchReportList",
    meta: {}
  },
  /* 漁獲量報告 */
  {
    path: "/catch-report",
    children: [
      {
        path: "list",
        component: CatchReportList,
        name: "catchReportList",
        meta: {}
      },
      {
        path: "detail/:id",
        component: CatchReportDetail,
        name: "catchReportDetail",
        meta: {}
      },
      {
        path: "create",
        component: CatchReportCreate,
        name: "catchReportCreate",
        meta: {}
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;