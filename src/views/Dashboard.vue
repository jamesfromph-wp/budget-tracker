<template>
  <section>
    <div class="secondary container mx-auto">
      <div class="flex items-center">
        <div
          class="flex flex-col bg-white w-3/4 min-h-[750px] p-16 rounded-3xl shadow box-border"
        >
          <div class="flex">
            <div class="flex flex-col w-1/2 min-h-[282px]">
              <span class="text-2xl font-semibold">Balance</span>

              <div class="primary flex text-6xl mt-6">
                <span class="me-4">P</span>

                <span>
                  {{
                    Number(35414.36).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }}
                </span>
              </div>

              <div class="flex items-center justify-between mt-14">
                <div class="flex flex-col items-start w-1/2">
                  <span class="text-sm">Monthly Limit Goal</span>

                  <div class="primary flex items-center text-xl mt-1">
                    <span class="me-2">P</span>

                    <span>
                      {{
                        Number(35414.36).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}
                    </span>
                  </div>
                </div>

                <div class="flex flex-col items-start w-1/2">
                  <span class="text-sm">Monthly Income</span>

                  <div class="primary flex items-center text-xl mt-1">
                    <span class="me-2">P</span>

                    <span>
                      {{
                        Number(35414.36).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center w-1/2">
              <!--  -->
            </div>
          </div>

          <div class="primary flex items-center mt-6 pt-8 border-t">
            <div
              class="flex items-center justify-end w-1/2 h-full"
            >
              <div class="flex flex-col pe-10">
                <div
                  v-for="category in categories"
                  class="flex items-center justify-end py-3"
                >
                  <span class="secondary text-sm me-6">
                    {{ category.label }}
                  </span>

                  <span
                    class="bg-gray-100 w-[15px] h-[15px] rounded-full"
                    :style="`background-color: ${category.color};`"
                  />
                </div>
              </div>
            </div>

            <div class="primary flex items-center justify-center w-1/2 border-l">
              <div class="relative">
                <PieChart :data="categories" :diameter="220" />

                <div
                  class="pie-label flex items-center justify-center border-white border-[20px] box-border"
                >
                  <div class="flex items-baseline">
                    <span class="secondary text-4xl me-1">30</span>
                    <span class="secondary text-xl font-semibold">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col bg-sky-100 w-1/4 min-h-[750px] py-8 rounded-3xl shadow box-border"
        >
          <InputSearch class="px-5" placeholder="Search transactions" />

          <div class="flex flex-col px-10 mt-10">
            <span
              class="primary w-full font-semibold text-center border-b py-4 mb-5"
            >
              Last Transactions
            </span>

            <div
              v-for="transaction in transactions"
              class="flex items-center mb-5"
            >
              <span class="w-2/3 text-sm">{{ transaction.label }}</span>

              <div
                class="primary flex items-center w-1/3 text-sm font-semibold"
              >
                <span class="me-2">P</span>

                <span>
                  {{
                    Number(transaction.total).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }}
                </span>
              </div>
            </div>

            <Paginator
              class="mt-4"
              :total="state.pagination.total"
              :current="state.pagination.current"
              @on-change="($event) => (state.pagination.current = $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getRandomColor } from "@/utils/helpers";
import type { ICategory, ITransactionSummary } from "@/utils/interfaces";

import Paginator from "@/components/Paginator.vue";
import InputSearch from "@/components/InputSearch.vue";
import PieChart from "@/components/PieChart.vue";

const state = reactive({
  search: "",
  pagination: {
    current: 1,
    total: 3,
  },
});

const categories: ICategory[] = reactive(
  Array.from({ length: 5 }).map((_, index) => ({
    label: "Travel / Transportation",
    color: getRandomColor(index),
    total: 2300,
  }))
);

const transactions: ITransactionSummary[] = reactive(
  Array.from({ length: 8 }).map(() => ({
    label: "Nintendo E-Shop",
    total: 35414.36,
  }))
);
</script>

<style scoped></style>
