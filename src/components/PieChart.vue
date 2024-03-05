<template>
  <div class="pie-chart">
    <svg :width="diameterA" :height="diameterA">
      <g :transform="'translate(' + radiusA + ',' + radiusA + ')'">
        <path v-for="(slice, index) in slices" :key="index"
          :d="describeArc(0, 0, radius, slice.startAngle, slice.endAngle)" :fill="slice.color" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

interface PieSlice {
  label: string;
  color: string;
  total: number;
}

// Expose props
const props = defineProps({
  data: {
    type: Array as () => PieSlice[],
    required: true,
  },
  diameter: {
    type: Number,
    default: 200,
  },
});

const state = reactive({
  data: props.data,
  diameter: props.diameter,
});

const totalAmount = computed(() =>
  state.data.reduce((total, slice) => total + slice.total, 0)
);

const slices = computed(() => {
  let cumulativeAngle = 0;

  return state.data.map((slice) => {
    const sliceAngle = (slice.total / totalAmount.value) * 360;
    const startAngle = cumulativeAngle;

    cumulativeAngle += sliceAngle;

    const endAngle = cumulativeAngle;

    return {
      startAngle,
      endAngle,
      color: slice.color,
    };
  });
});

const diameterA = computed(() => state.diameter + 50);
const radiusA = computed(() => (state.diameter + 50) / 2);
const radius = computed(() => state.diameter / 2);

const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "L",
    x,
    y,
    "Z",
  ].join(" ");

  return d;
};
</script>

<style scoped>
.pie-chart {
  display: inline-block;
}

.pie-chart path {
  transform: scale(1);
  transition: transform 200ms ease;
}

.pie-chart path:hover {
  transform: scale(1.1);
}
</style>
