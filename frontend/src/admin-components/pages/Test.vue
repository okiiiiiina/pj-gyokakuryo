<script setup lang="ts">
import { ref } from 'vue'

import CAccordion from '../../admin-components/general/CAccordion.vue'
import ATable from '../../admin-components/general/ATable.vue'
import ACheckboxes from '../../admin-components/general/ACheckboxes.vue'
import MChatchReportRow from '../../admin-components/pages/catch-reports/parts/MChatchReportRow.vue'

interface CatchReport {
  id: number
  name: string
  catch: number
  test: string
}

interface StatusType {
  value: number | string
  label: string
  disabled: boolean
}

const optionsOfCheckbox = ref<Array<StatusType>>([
  { value: 1, label: 'aaa', disabled: false },
  { value: 2, label: 'ddd', disabled: false },
  { value: 3, label: 'ccc', disabled: false },
])

const optionsOfDropdown = ref<Array<StatusType>>([
  { value: 1, label: 'ddd', disabled: false },
  { value: 2, label: 'eee', disabled: false },
  { value: 3, label: 'fff', disabled: false },
])

const tBodyData = ref<Array<CatchReport>>([
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
  { id: 1, name: 'aaa', catch: 100, test: 'data' },
])

const selectedIds = ref<number[]>([1])
// const handleUpdateModelValue = (value: number[]) => {
//   // @update:modelValue イベントのハンドラ
//   selectedIds.value = value
// }
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

    <ACheckboxes v-model="selectedIds" :options="optionsOfCheckbox" />
    <!-- @update:modelValue="selectedIds = $event" -->

    <CAccordion />

    <div class="body">
      <div class="pagination"></div>
      <ATable>
        <template #thead>
          <tr class="tr">
            <th>ID</th>
            <th>名前</th>
            <th>名前</th>
            <th>名前</th>
          </tr>
        </template>
        <template #tbody>
          <MChatchReportRow
            v-for="(test, index) in tBodyData"
            :key="index"
            :row-data="test"
            :options="optionsOfDropdown"
          ></MChatchReportRow>
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
