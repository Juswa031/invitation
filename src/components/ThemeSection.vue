<template>
  <section class="theme animate" v-observe>
    <h2>Party Theme & Attire</h2>
    <p class="subtitle">We invite all guests to celebrate in elegance and style!</p>

    <div class="theme-cards">
      <div class="theme-card" v-for="(item, i) in themes" :key="i">
        <div class="card-bg"></div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="sparkles"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThemeSection',
  props: {
    themes: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.theme {
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #4a2c4f;
  position: relative;
}

.theme h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 32px;
  margin-bottom: 10px;
  color: #a6518c;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 16px;
  color: #7a8799;
  margin-bottom: 40px;
}

/* Cards container */
.theme-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

/* Individual card */
.theme-card {
  position: relative;
  width: 250px;
  padding: 25px;
  border-radius: 20px;
  background: linear-gradient(145deg, #fff0f5, #ffeaf2);
  box-shadow: 0 15px 40px rgba(166,81,140,0.15);
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
}

.theme-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 50px rgba(166,81,140,0.2);
}

/* Card inner background glow */
.card-bg {
  position: absolute;
  top: -40%;
  left: -40%;
  width: 180%;
  height: 180%;
  background: radial-gradient(circle, rgba(255, 230, 240, 0.2), transparent 60%);
  z-index: 0;
  pointer-events: none;
  filter: blur(25px);
}

/* Sparkles */
.sparkles {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
  pointer-events: none;
  animation: sparkleMove 6s infinite linear;
  z-index: 1;
}

@keyframes sparkleMove {
  0% { transform: translate(0,0); }
  50% { transform: translate(10px, 15px); }
  100% { transform: translate(0,0); }
}

/* Card text */
.theme-card h3 {
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
  color: #a6518c;
  font-size: 20px;
}

.theme-card p {
  position: relative;
  z-index: 2;
  font-size: 14px;
  color: #7a8799;
  line-height: 1.5;
}

/* =================== MOBILE =================== */
@media (max-width: 768px) {
  .theme-card { width: 200px; padding: 20px; }
  .theme h2 { font-size: 28px; }
  .subtitle { font-size: 14px; margin-bottom: 30px; }
}

@media (max-width: 480px) {
  .theme-card { width: 180px; padding: 16px; }
  .theme h2 { font-size: 24px; }
  .subtitle { font-size: 13px; margin-bottom: 25px; }
}
</style>
