<template>
  <section>
    <div class="secondary container mx-auto">
      <div class="flex items-center">
        <div
          class="flex flex-col bg-white w-3/4 min-h-[750px] p-16 rounded-3xl shadow box-border"
        >
          <div class="flex">
            <div class="flex flex-col w-1/2 min-h-[282px]">
              <span class="text-2xl font-semibold">Current Income</span>

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
                  <span class="text-sm">Previous Income</span>

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
                  <span class="text-sm">Previous Budget</span>

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

            <div class="flex flex-col w-1/2">
              <span class="text-2xl font-semibold">Categories</span>

              <div class="flex flex-wrap min-h-[200px] mt-6">
                <div
                  v-for="category in categories"
                  class="flex w-1/2 pe-4 mb-4"
                >
                  <div class="flex items-center w-full">
                    <span
                      class="bg-gray-200/70 w-[50px] h-[50px] me-4 rounded"
                      :style="`background-color: ${category.color};`"
                    />

                    <div class="flex flex-col justify-center">
                      <span class="text-sm font-semibold">
                        {{ category.label }}
                      </span>

                      <div
                        class="primary flex items-center text-sm font-semibold mt-0.5"
                      >
                        <span class="me-1.5">P</span>

                        <span>
                          {{
                            Number(category.total).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex w-1/2 pe-4 mb-4 cursor-pointer">
                  <div class="flex items-center w-full">
                    <div
                      class="flex items-center justify-center w-[50px] h-[50px] text-2xl me-4 border-2 border-dashed rounded"
                    >
                      <span class="text-gray-300 -mt-1">+</span>
                    </div>

                    <span class="text-black/60 text-sm font-semibold">
                      Add New
                    </span>
                  </div>
                </div>
              </div>

              <Paginator class="mt-4" />
            </div>
          </div>

          <div class="primary flex mt-6 pt-8 border-t">
            <!--  -->
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
              Income History
            </span>

            <div v-for="item in history" class="flex items-start mb-5">
              <span class="w-2/3 text-sm">{{ item.date }}</span>

              <div
                class="primary flex items-center w-1/3 text-sm font-semibold"
              >
                <span class="me-2">P</span>

                <span>
                  {{
                    Number(item.total).toLocaleString("en-US", {
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
import type { ICategory, IIncomeHistory } from "@/utils/interfaces";

import Paginator from "@/components/Paginator.vue";
import InputSearch from "@/components/InputSearch.vue";

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
    total: 35414.36,
  }))
);

const history: IIncomeHistory[] = reactive(
  Array.from({ length: 8 }).map(() => ({
    date: "Jan 24, 2024",
    total: 35414.36,
  }))
);
</script>

<style scoped></style>
