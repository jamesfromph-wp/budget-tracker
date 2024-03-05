<template>
  <div class="flex items-center">
    <span class="bg-gray-300 min-w-[40px] w-[40px] h-[40px] rounded-full" />

    <input type="text" :value="props.value" :placeholder="props.placeholder" class="input"
      @change="($event: any) => emits('onChange', $event?.target?.value)" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Search anything',
  },
})

const emits = defineEmits(['onChange']) 
</script>

<style scoped>
.input {
  @apply bg-sky-300/30 w-full px-4 py-2 ms-3 rounded-2xl outline-none placeholder:text-sky-400;
}
</style>