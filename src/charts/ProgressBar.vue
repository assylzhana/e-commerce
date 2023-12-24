<template>
    <div class="progress-bar">
      <div class="progress" :style="{ width: `${percentage}%` }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      percentage: {
        type: Number,
        required: true,
        default: 0,
        validator: (value) => value >= 0 && value <= 100,
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background-color: #242786; 
    transition: width 0.3s ease;
  }
  </style>
  