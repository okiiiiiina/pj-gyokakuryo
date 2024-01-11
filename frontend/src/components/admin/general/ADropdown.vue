<script setup lang="ts">
import { defineModel } from 'vue'

import { Dropdown } from '@/types/admin/general.ts'

const emits = defineEmits([])
const props = defineProps<{
  options: Dropdown[]
}>()
const modelValue = defineModel<number[]>()
</script>

<template>
  <div class="comp-checkboxes">
    <div v-for="option in props.options" :key="option.value" class="checkbox">
      <label :for="`${option.value}`">
        <input
          v-model="modelValue"
          :id="`${option.value}`"
          :name="`xxx`"
          type="checkbox"
          :disabled="option.disabled"
          :value="option.value"
        />
        <span class="box"></span>
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
