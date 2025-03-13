<template>
  <div class="chart-container h-[400px]">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'ChartMainData',
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const chart = ref(null);
    let chartInstance = null;

    // Function to render or update the chart
    const renderChart = () => {
      const ctx = chart.value.getContext('2d');

      if (chartInstance) {
        chartInstance.destroy(); // Destroy existing chart instance
      }

      chartInstance = new Chart(ctx, {
        type: 'line',
        data: props.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 0.5,
              },
            },
          },
        },
      });
    };

    // Watch for changes in chartData and update the chart
    watch(() => props.chartData, renderChart, { deep: true });

    // Render the chart on mount
    onMounted(renderChart);

    return {
      chart,
    };
  },
};</script>

<style scoped>
.chart-container {
  width: 100%;
}
</style>