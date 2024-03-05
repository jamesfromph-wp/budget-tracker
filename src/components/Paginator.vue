<template>
  <div class="flex items-center justify-center">
    <span v-for="(page) in totalPage" :key="page" class="pagination-dot" :class="{ active: props.current === page }"
      @click="emits('onChange', page)" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 3,
  }
})

const emits = defineEmits(['onChange'])

const totalPage = computed(() => Array.from({ length: props.total }).map((_, index) => index + 1))
</script>

<style scoped>
.pagination-dot {
  @apply bg-sky-400 min-w-[10px] w-[10px] min-h-[10px] h-[10px] mx-1.5 rounded-full cursor-pointer transition-[width];
}

.pagination-dot.active {
  @apply w-[30px];
}
</style>