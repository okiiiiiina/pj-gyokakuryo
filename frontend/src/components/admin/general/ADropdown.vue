<script setup lang="ts">
import { defineModel } from 'vue'

import { Dropdown } from '@/types/admin/general.ts'

export interface Props {
  options: Dropdown[]
  placeholder?: string
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '選択してください',
})
const emits = defineEmits([])

const modelValue = defineModel<string | number | null>()
</script>

<template>
  <div class="comp-dropdown">
    <select v-model="modelValue" class="dropdown-list">
      <option v-if="!modelValue" :value="null" disabled selected class="dropdown-item">
        {{ props.placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        class="dropdown-item"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
