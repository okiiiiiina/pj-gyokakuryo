<script setup lang="ts">
// import { defineProps } from 'vue'
import AButton from '@/components/admin/general/AButton.vue'
import ADropdown from '@/components/admin/general/ADropdown.vue'

const clickBtn = () => {
  // ここにメソッドの処理を記述
  console.log('ボタンがクリックされました。')
}
</script>

<template>
  <tr>
    <td class="td-name">あああああああああああああああああああああ</td>
    <td class="td-text">
      <div class="ellipsis">
        ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </div>
    </td>
    <td><ADropdown></ADropdown></td>
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
