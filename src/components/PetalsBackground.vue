<template>
  <div class="petals">
    <span v-for="n in 15" :key="n" class="petal"></span>
  </div>
</template>

<script>
export default {
  name: 'PetalsBackground'
}
</script>

<style scoped>
.petals {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.petal {
  position: absolute;
  width: 12px; height: 12px;
  background: #f8d3e0;
  border-radius: 50%;
  opacity: 0.7;
  animation: floatPetal linear infinite;
}
.petal:nth-child(odd) { animation-duration: 15s; }
.petal:nth-child(even) { animation-duration: 12s; }
@keyframes floatPetal {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(120vh) rotate(360deg); }
}
</style>
