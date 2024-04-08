<template>
    <div class="menu-item">
      <h3>{{ menuItem.name }}</h3>
      <p>Price: ${{ menuItem.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      menuItem: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .menu-item {
    background-color: #f4f4f4;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  