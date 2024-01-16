<script setup lang="ts">
import { HeaderItem } from '@/types/admin/general.ts'
import ASvg from '@/components/admin/general/ASvg.vue'

export interface Props {
  theadData: HeaderItem[]
}

const props = defineProps<Props>()
const emits = defineEmits(['click-th'])
</script>

<template>
  <div class="comp-table">
    <table>
      <thead>
        <tr>
          <th
            v-for="data in props.theadData"
            :class="{ 'can-sort': data.sortable }"
            @click="$emit('click-th', data.key)"
          >
            <div class="wrap-item">
              <div>{{ data.name }}</div>
              <ASvg v-if="data.sortable" name="sort-button"></ASvg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="tbody"></slot>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
table {
  width: 100%;
  font-size: $font-sm;
  table-layout: fixed;
}

thead {
  position: sticky;
  top: 0;
  height: 24px;
  background-color: $paleGray;
  z-index: 1;

  tr {
    border: solid 1px $lightGray;
    th {
      height: 30px; // ★高さ合わせる
      padding: 0 20px;
      font-size: $font-sm;
      z-index: 1;
      .wrap-item {
        display: flex;
        justify-content: space-between;
      }
    }

    th::after {
      // stickyにてtheadを固定するとborderが消えてしまうため、特殊対応
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30px; // ★高さ合わせる
      border: solid 1px $lightGray;
    }
  }
  .can-sort {
    cursor: pointer;
  }
}

tbody {
  /* slotの中にcssを当てる */
  :slotted(tr) {
    border: solid 1px $lightGray;
    td {
      padding: 8px 20px;
    }
  }
}
</style>
