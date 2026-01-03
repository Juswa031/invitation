<template>
  <section class="details animate" v-observe>
    <div class="detail-card" v-for="(d, i) in details" :key="i">
      <h3>{{ d.title }}</h3>
      <p>{{ d.line1 }}</p>
      <span>{{ d.line2 }}</span>
      <div class="sparkle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventDetails',
  props: {
    details: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.details {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  padding: 40px 20px;
}

.detail-card {
  position: relative;
  background: linear-gradient(145deg, #fff7fb, #fdeaf6);
  border-radius: 20px;
  padding: 25px 30px;
  width: 220px;
  text-align: center;
  box-shadow: 0 12px 28px rgba(166,81,140,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  font-family: 'Playfair Display', serif;
}

.detail-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(166,81,140,0.25);
}

.detail-card h3 {
  font-size: 20px;
  color: #a6518c;
  margin-bottom: 10px;
  font-family: 'Great Vibes', cursive;
}

.detail-card p {
  font-size: 14px;
  color: #7a8799;
  margin-bottom: 8px;
}

.detail-card span {
  font-size: 13px;
  color: #a6518c;
  font-weight: 500;
}

/* Sparkle effect */
.sparkle {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
  pointer-events: none;
  animation: sparkleMove 6s infinite linear;
  z-index: 0;
}

@keyframes sparkleMove {
  0% { transform: translate(0,0); }
  50% { transform: translate(8px, 10px); }
  100% { transform: translate(0,0); }
}

/* ================= MOBILE ================= */
@media (max-width: 768px) {
  .details { gap: 20px; padding: 30px 15px; }
  .detail-card { width: 180px; padding: 20px; }
  .detail-card h3 { font-size: 18px; }
  .detail-card p { font-size: 13px; }
  .detail-card span { font-size: 12px; }
}

@media (max-width: 480px) {
  .details { gap: 15px; padding: 25px 12px; }
  .detail-card { width: 150px; padding: 16px; }
  .detail-card h3 { font-size: 16px; }
  .detail-card p { font-size: 12px; }
  .detail-card span { font-size: 11px; }
}
</style>
