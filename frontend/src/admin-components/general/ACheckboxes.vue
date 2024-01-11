<script setup lang="ts">
import { defineProps, defineEmits, defineModel } from 'vue'

const emits = defineEmits([])
const props = defineProps<{
  options: Array<{
    value: string | number
    label: string
    disabled: boolean
  }>
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

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.checkbox {
  position: relative;

  label {
    margin-left: 25px;
  }
}

input[type='checkbox'] {
  display: none;
  + .box {
    &:before,
    &:after {
      transition: all 0.2s;
    }
  }

  + .box:after {
    content: ' ';
    position: absolute;
    left: 0px;
    top: 4px;
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid $blue;
    border-radius: 2px;
    background-color: $white;
  }

  &:checked {
    + .box:after {
      background-color: $blue;
      border-color: $blue;
    }

    + .box:before {
      transform: rotate(45deg);
      position: absolute;
      left: 7px;
      top: 7px;
      width: 5px;
      height: 10px;
      border-width: 2px;
      border-style: solid;
      border-top: 0;
      border-left: 0;
      border-color: #fff;
      content: '';
      z-index: 1;
    }
  }
}
</style>
