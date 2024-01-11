<script setup lang="ts"></script>

<template>
  <div>
    <table class="table">
      <thead>
        <slot name="thead"></slot>
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
  // color: $white;
  background-color: $paleGray;
  z-index: 1;

  /* slotの中にcssを当てる */
  :slotted(tr) {
    border: solid 1px $lightGray;
    th {
      padding: 4px 0;
      z-index: 1;
    }
    th::after {
      // stickyにてtheadを固定するとborderが消えてしまうため、特殊対応
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30px;
      border: solid 1px $lightGray;
    }
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
