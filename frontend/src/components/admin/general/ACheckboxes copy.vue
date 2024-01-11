<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps<{
  modelValue: number[]
  options: Array<{
    value: string | number
    label: string
    disabled: boolean
  }>
}>()

const selectedIds = ref<number[]>(props.modelValue || [])
</script>

<template>
  <div class="comp-checkboxes">
    選択：{{ modelValue }}
    <div v-for="option in props.options" :key="option.value" class="checkbox">
      <label :for="`${option.value}`">
        <input
          :id="`${option.value}`"
          v-model="selectedIds"
          :name="`xxx`"
          type="checkbox"
          :disabled="option.disabled"
          :value="option.value"
          @change="emits('update:modelValue', selectedIds)"
        />

        <span class="box"></span>
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<!-- ($event.target as HTMLInputElement)?.value -->
<style lang="scss" scoped>
// input[type='checkbox'] {
//   display: none;
// }

// input[type='checkbox'] + .box:before,
// input[type='checkbox'] + .box:after {
//   transition: all 0.2s;
// }

// input[type='checkbox'] + .box:after {
//   position: absolute;
//   left: 4px;
//   top: 6px;
//   margin-top: -5px;
//   margin-left: -4px;
//   display: inline-block;
//   content: ' ';
//   width: 20px;
//   height: 20px;
//   border: 2px solid #999;
//   border-radius: 2px;
//   background-color: #fff;
// }

// input[type='checkbox']:disabled + .box:after {
//   background-color: #e9ecef;
// }

// input[type='checkbox']:checked + .box:after {
//   background-color: $gray !important;
//   border-color: $gray !important;
// }

// input[type='checkbox']:checked + .box:before {
//   transform: rotate(45deg);
//   position: absolute;
//   left: 7px;
//   top: 3px;
//   width: 6px;
//   height: 13px;
//   border-width: 2px;
//   border-style: solid;
//   border-top: 0;
//   border-left: 0;
//   border-color: #fff;
//   content: '';
//   z-index: 1;
// }
</style>
