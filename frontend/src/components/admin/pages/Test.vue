<script setup lang="ts">
import { ref } from 'vue'

import { HeaderItem } from '@/types/admin/general.ts'

import ATable from '@/components/admin/general/ATable.vue'
import ACheckboxes from '@/components/admin/general/ACheckboxes.vue'
import ADropdown from '@/components/admin/general/ADropdown.vue'
import CAccordion from '@/components/admin/general/CAccordion.vue'
import MChatchReportTableRow from '@/components/admin/pages/catch-reports/parts/MChatchReportTableRow.vue'

// interface CatchReport {
//   id: number
//   name: string
//   catch: number
//   test: string
// }

interface RowData {
  name: string
  text: string
  dropdown: number | null
  number: number
}

interface StatusType {
  value: number | string
  label: string
  disabled: boolean
}

const optionsOfCheckbox = ref<StatusType[]>([
  { value: 1, label: 'aaa', disabled: false },
  { value: 2, label: 'ddd', disabled: false },
  { value: 3, label: 'ccc', disabled: false },
])

const optionsOfDropdown = ref<StatusType[]>([
  { value: 1, label: 'ddd', disabled: false },
  { value: 2, label: 'eee', disabled: false },
  { value: 3, label: 'fff', disabled: false },
])

const tBodyData = ref<RowData[]>([
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 2, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 3, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: null, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
  { name: 'aaa', text: 'tet', dropdown: 1, number: 100 },
])

const tHeadData = ref<HeaderItem[]>([
  { name: '名前', key: 'name', sortable: true },
  { name: 'テキスト', key: 'text', sortable: true },
  { name: 'ドロップダウン', key: 'dropdown', sortable: true },
  { name: '数字', key: 'number', sortable: true },
])

const selectedIds = ref<number[]>([1])
const selectedId = ref<string | number | null>(null)

const clickTh = (event: string) => {
  console.log('このkeyがクリックされた', event)
}
</script>

<template>
  <div class="page-test">
    <div class="header">
      <div class="header__right">
        <div class="title">テスト</div>
      </div>
      <div class="header__left">
        <!-- ヘッダー ユーザアイコン -->
      </div>
    </div>
    <ADropdown v-model="selectedId" :options="optionsOfDropdown"></ADropdown>

    <ACheckboxes v-model="selectedIds" :options="optionsOfCheckbox" />
    <!-- @update:modelValue="selectedIds = $event" -->

    <CAccordion />

    <div class="body">
      <div class="pagination"></div>
      <ATable :theadData="tHeadData" @click-th="clickTh">
        <template #tbody>
          <MChatchReportTableRow
            v-for="(data, index) in tBodyData"
            :key="index"
            :row-data="data"
            :options="optionsOfDropdown"
          ></MChatchReportTableRow>
        </template>
      </ATable>
      <div class="pagination"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-test {
  padding: 50px;

  .body {
    padding: 50px 0;
  }
}
</style>
