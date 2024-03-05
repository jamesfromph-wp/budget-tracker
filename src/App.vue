<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container mx-auto">
      <div class="flex items-center py-8">
        <div class="wrapper flex items-center justify-between w-3/4">
          <nav class="flex items-center">
            <RouterLink class="link" to="/">Dashboard</RouterLink>
            <RouterLink class="link" to="/transactions">Transactions</RouterLink>
            <RouterLink class="link" to="/budgets">Budgets</RouterLink>
            <RouterLink class="link" to="/goals">Goals</RouterLink>
          </nav>

          <span class="bg-gray-200 w-[50px] h-[50px] rounded-full" />
        </div>

        <div class="flex items-center justify-end w-1/4">
          <span class="text-lg font-semibold me-6">James Green</span>
          <span class="bg-gray-200 w-[50px] h-[50px] rounded-full" />
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.link {
  @apply text-base font-semibold mx-8
}
</style>
