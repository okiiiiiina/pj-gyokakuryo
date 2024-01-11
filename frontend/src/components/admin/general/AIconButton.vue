<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    /*-------------------------------------------*/
    /* 共通
    /*-------------------------------------------*/
    // name: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
    colorScheme: {
      type: String,
      required: true,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    height: {
      type: String,
      required: false,
      default: '40px',
    },
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
    variant: {
      type: String,
      required: false,
      default: '',
    },
    width: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<template>
  <button
    type="button"
    class="btn-style"
    :disabled="disabled"
    :class="[`btn-${colorScheme}`]"
    :style="{ width: `${width}`, height: `${height}` }"
    @click="$emit('click-btn')"
  >
    <div v-if="leftIcon">leftIcon</div>
    <slot name="button-name"></slot>
    <div v-if="rightIcon">rightIcon</div>
  </button>
</template>

<style lang="scss" scoped>
.btn-style {
  border-radius: 5px;
  &:disabled {
    color: $white;
    background-color: $gray !important;
    border: 2px solid $gray !important;
    &:hover {
      color: $white !important;
      background-color: $gray !important;
      border: 2px solid $gray !important;
    }
  }
}
.btn-blue {
  color: $white;
  background-color: $Blue !important;
  transition: background-color 0.3s ease-in-out 0s;
  border: 2px solid $Blue;
  &:hover {
    color: $Blue;
    background-color: $white !important;
  }
}
.btn-green {
  color: $white;
  border: 2px solid $Green !important;
  background-color: $Green !important;
  transition: background-color 0.3s ease-in-out 0s;
  &:hover {
    color: $Green !important;
    background-color: $white !important;
  }
}
.btn-yellow {
  color: $white;
  border: 2px solid $Yellow !important;
  background-color: $Yellow !important;
  transition: background-color 0.3s ease-in-out 0s;
  &:hover {
    color: $Yellow !important;
    background-color: $white !important;
  }
}
.btn-yellow-orange {
  color: $white;
  border: 2px solid $YellowOrange !important;
  background-color: $YellowOrange !important;
  transition: background-color 0.3s ease-in-out 0s;
  &:hover {
    color: $YellowOrange !important;
    background-color: $white !important;
  }
}
.btn-red {
  color: $white;
  border: 2px solid $Red !important;
  background-color: $Red !important;
  transition: background-color 0.3s ease-in-out 0s;
  &:hover {
    color: $Red !important;
    background-color: $white !important;
  }
}
.btn-gray {
  color: $white;
  border: 2px solid $gray !important;
  background-color: $gray !important;
  transition: background-color 0.3s ease-in-out 0s;
  &:hover {
    color: $gray !important;
    background-color: $white !important;
  }
}
</style>
