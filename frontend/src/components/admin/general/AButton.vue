<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    leftIcon: {
      type: String,
      required: false,
      default: '',
    },
    rightIcon: {
      type: String,
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    /* スタイル */
    width: {
      type: String,
      required: false,
      default: '',
    },
    height: {
      type: String,
      required: false,
      default: '30px',
    },
    fontClass: {
      type: String,
      required: false,
      default: 'font-sm',
    },
    colorScheme: {
      type: String,
      required: true,
      default: 'gray',
    },
    variant: {
      type: String,
      required: false,
      default: 'outline',
    },
  },
})
</script>

<template>
  <button
    type="button"
    class="btn-style"
    :disabled="disabled"
    :class="[`btn-${colorScheme}`, `${variant}`, `${fontClass}`]"
    :style="{ width: `${width}`, height: `${height}` }"
    @click="$emit('click-btn')"
  >
    <div v-if="leftIcon">leftIcon</div>
    <slot></slot>
    <div v-if="rightIcon">rightIcon</div>
  </button>
</template>

<style lang="scss" scoped>
.btn-style {
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out 0s;
  // &:disabled {
  //   color: $white;
  //   background-color: $gray;
  //   border: 2px solid $gray;
  //   &:hover {
  //     color: $white;
  //     background-color: $gray;
  //     border: 2px solid $gray;
  //   }
  // }
}
.btn-gray {
  &.fill {
    color: $white;
    border: 2px solid $gray;
    background-color: $gray;
    &:hover {
      color: $white;
      border: 1px solid $darkGray;
      background-color: $darkGray;
    }
  }
  &.outline {
    color: $darkGray;
    border: 1px solid $darkGray;
    background-color: $white;
    &:hover {
      color: $darkGray;
      border: 1px solid $darkGray;
      background-color: $paleGray;
    }
  }
}
</style>
