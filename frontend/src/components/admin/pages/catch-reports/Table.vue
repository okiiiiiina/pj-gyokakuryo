<script setup lang="ts">
import CAccordion from '@/components/admin/general/CAccordion.vue'
</script>

<template>
  <div>
    <div class="header">
      <div class="header__right">
        <div class="title">漁獲量一覧</div>
      </div>
      <div class="header__left">
        <!-- ヘッダー ユーザアイコン -->
      </div>
    </div>

    <CAccordion />

    <div class="body">
      <div class="pagination"></div>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <tb></tb>
            <tb></tb>
            <tb></tb>
            <tb></tb>
          </tr>
        </tbody>
      </table>
      <div class="pagination"></div>
    </div>
  </div>
</template>

<style scoped></style>
