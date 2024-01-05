<script setup lang="ts">
import MAccordion from '../../admin-components/general/MAccordion.vue'


</script>

<template>
  <div>
    <div class="header">
      <div class="header__right">
        <div class="title">テスト</div>
      </div>
      <div class="header__left">
        <!-- ヘッダー ユーザアイコン -->
      </div>
    </div>

    <MAccordion />

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
