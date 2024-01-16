<script setup lang="ts">
// import { defineProps } from 'vue'
import { Dropdown } from '@/types/admin/general.ts'

import AButton from '@/components/admin/general/AButton.vue'
import ADropdown from '@/components/admin/general/ADropdown.vue'

interface RowData {
  name: string
  text: string
  dropdown: number | null
  number: number
}

export interface Props {
  options: Dropdown[]
  rowData: RowData
}

const props = defineProps<Props>()

const clickBtn = () => {
  // ここにメソッドの処理を記述
  console.log('ボタンがクリックされました。')
}
</script>

<template>
  <tr>
    <td class="td-name">{{ props.rowData.name }}</td>
    <td class="td-text">
      <div class="ellipsis">
        {{ props.rowData.text }}
      </div>
    </td>
    <td>
      <ADropdown v-model="props.rowData.dropdown" :options="props.options" @change=""></ADropdown>
    </td>
    <td class="td-button">
      <div class="btn">
        <AButton color-scheme="gray" width="100px" @click="clickBtn()">テスト</AButton>
      </div>
    </td>
  </tr>
</template>

<style scoped lang="scss">
td {
  &.td-name {
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &.td-text .ellipsis {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-align: center;
    text-align: left;
  }

  &.td-button .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
