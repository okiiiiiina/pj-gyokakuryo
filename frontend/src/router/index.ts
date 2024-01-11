import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// ページ
import Test from '@/components/admin/pages/Test.vue'
import CatchReportTable from '@/components/admin/pages/catch-reports/Table.vue'
import CatchReportCreate from '@/components/admin/pages/catch-reports/Create.vue'
import CatchReportDetail from '@/components/admin/pages/catch-reports/Detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Test,
    name: 'Test',
    meta: {},
  },
  /* 漁獲量報告 */
  {
    path: '/catch-report',
    children: [
      {
        path: 'table',
        component: CatchReportTable,
        name: 'catchReportTable',
        meta: {},
      },
      {
        path: 'detail/:id',
        component: CatchReportDetail,
        name: 'catchReportDetail',
        meta: {},
      },
      {
        path: 'create',
        component: CatchReportCreate,
        name: 'catchReportCreate',
        meta: {},
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
