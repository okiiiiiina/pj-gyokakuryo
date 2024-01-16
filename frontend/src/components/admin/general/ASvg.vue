<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps<{
  name: string
}>()

const icon = ref('')

const loadSvg = () => {
  import(`../../../assets/icons/${props.name}.svg`)
    .then((svgPathModule) => {
      icon.value = svgPathModule.default
    })
    .catch((error) => {
      console.error(error)
    })
}

onMounted(() => {
  loadSvg()
})
</script>

<template>
  <div>
    <img v-if="icon" :src="icon" alt="icon" />
  </div>
</template>

<style scoped></style>
