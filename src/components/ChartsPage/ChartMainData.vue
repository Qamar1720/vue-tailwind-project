<template>
  <div class="chart-container h-[400px] bg-[#1A0B2E] relative">
    <!-- Chart Canvas -->
    <canvas ref="chart" class="relative z-10"></canvas>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

const chart = ref(null);
let chartInstance = null;

// Function to format Y-axis labels dynamically
const formatYAxisLabels = (value) => {
  if (value === 0) return ''; // Hide 0
  if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
  if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
  return value;
};

// Function to render or update the chart
const renderChart = () => {
  if (!chart.value) return;
  const ctx = chart.value.getContext('2d');

  if (chartInstance) {
    chartInstance.destroy(); // Ensure the chart resets before re-creating
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: props.chartData.labels,
      datasets: props.chartData.datasets.map((dataset) => ({
        ...dataset,
        tension: 0.4, // Smooth curves
        borderWidth: 14, // Adjust line thickness
        fill: true,
        pointRadius: 0, // Hide points
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }, // Hide legend
        tooltip: {
          callbacks: {
            label: (context) => {
              let value = context.parsed.y;
              return value >= 1000000
                ? (value / 1000000).toFixed(1) + 'M'
                : value.toLocaleString();
            },
          },
        },
        // Custom plugin to display y-axis values inside the chart
        annotation: {
          annotations: {
            yAxisLabels: {
              type: 'label',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: '#fff',
              font: { size: 12 },
              padding: 8,
              borderRadius: 4,
              content: (ctx) => {
                const value = ctx.scales.y.ticks[ctx.tickIndex];
                return formatYAxisLabels(value);
              },
              position: 'left',
              xAdjust: -28, // Adjust position to the left
              yAdjust: 0,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false, // Start y-axis from 0
          grid: {
            display: false,
            drawOnChartArea: false, // Show grid lines on the chart area
            color: 'rgba(255, 255, 255, 0.1)', // Grid line color
            drawTicks: false, // Hide tick marks
          },
          ticks: {
            callback: (value) => {
              // Format y-axis labels dynamically
              if (value === 0) return ''; // Hide 0
              if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
              if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
              return value;
            },
            stepSize: 500000, // Set step size to 500k
            min: 0, // Minimum value (set this to your desired minimum)
            max: 2000000, // Maximum value (set this to your desired maximum)
            precision: 0, // Avoid decimal places
          },
        },
        x: {
          grid: {
            display: true, // Hide vertical grid lines
            drawOnChartArea: true, // Show grid lines on the chart area
            drawTicks: true, // Hide tick marks
          },
        },
      },
    },
  });
};

// Watch for chart data changes and update the chart
watch(() => props.chartData, renderChart, { deep: true });

// Render the chart when the component mounts
onMounted(renderChart);

// Cleanup chart instance on unmount
onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  position: relative;
}

/* Background Div */
.chart-container div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>