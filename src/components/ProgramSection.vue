<template>
  <section class="program animate" v-observe>
    <h2>Program</h2>
    <ul class="program-timeline">
      <li v-for="(event, i) in program" :key="i">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>{{ event.title }}</h4>
          <p>{{ event.description }}</p>
          <div class="sparkle"></div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ProgramSection',
  props: {
    program: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.program {
  margin: 60px auto;
  max-width: 700px;
  padding: 40px 25px;
  border-radius: 24px;
  background: linear-gradient(145deg, #fff0f5, #ffeaf2);
  box-shadow: 0 15px 35px rgba(166,81,140,0.15);
  position: relative;
  font-family: 'Playfair Display', serif;
  color: #4a2c4f;
}

.program h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
  color: #a6518c;
  font-family: 'Great Vibes', cursive;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}

/* Timeline */
.program-timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.program-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #ffeaf2, #fdd7e6);
  border-radius: 2px;
}

.program-timeline li {
  position: relative;
  padding: 20px 20px 20px 70px;
  margin-bottom: 25px;
  border-radius: 16px;
  background: rgba(255, 240, 245, 0.6);
  box-shadow: 0 8px 20px rgba(166,81,140,0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.program-timeline li:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(166,81,140,0.2);
}

/* Timeline Dot */
.timeline-dot {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: #a6518c;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

/* Content */
.timeline-content h4 {
  margin: 0;
  font-size: 18px;
  color: #a6518c;
  font-weight: 600;
}

.timeline-content p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #7a8799;
  line-height: 1.6;
}

/* Sparkle animation */
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
  .program { padding: 30px 15px; }
  .program h2 { font-size: 28px; margin-bottom: 30px; }
  .program-timeline li { padding: 16px 16px 16px 60px; }
}

@media (max-width: 480px) {
  .program { padding: 25px 12px; }
  .program h2 { font-size: 24px; margin-bottom: 25px; }
  .program-timeline li { padding: 14px 14px 14px 55px; }
  .timeline-content h4 { font-size: 16px; }
  .timeline-content p { font-size: 13px; }
}
</style>
