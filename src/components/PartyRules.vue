<template>
  <section class="party-rules animate" v-observe>
    <h2>Party Rules</h2>
    <p class="subtitle">To make our celebration elegant and memorable, please follow these guidelines</p>

    <ul class="rules-list">
      <li v-for="(rule, idx) in rules" :key="idx">
        <span class="rule-number">{{ idx + 1 }}</span>
        {{ rule }}
        <div class="sparkle"></div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'PartyRules',
  props: {
    rules: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.party-rules {
  padding: 20px 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Playfair Display', serif;
  color: #4a2c4f;
  position: relative;
}

.party-rules h2 {
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

/* Rules list */
.rules-list {
  list-style: none;
  max-width: 700px;
  margin: 0 auto;
  padding: 0;
}

.rules-list li {
  position: relative;
  background: linear-gradient(145deg, #fff0f5, #ffeaf2);
  padding: 18px 22px 18px 50px;
  margin-bottom: 15px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(166,81,140,0.15);
  font-size: 16px;
  text-align: left;
  color: #4a2c4f;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.rules-list li:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(166,81,140,0.2);
}

/* Number circle */
.rule-number {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: #a6518c;
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(166,81,140,0.3);
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
  50% { transform: translate(8px, 12px); }
  100% { transform: translate(0,0); }
}

/* ================= MOBILE ================= */
@media (max-width: 768px) {
  .party-rules h2 { font-size: 28px; }
  .subtitle { font-size: 14px; margin-bottom: 30px; }
  .rules-list li { padding: 16px 20px 16px 45px; font-size: 15px; }
  .rule-number { width: 24px; height: 24px; font-size: 13px; }
}

@media (max-width: 480px) {
  .party-rules h2 { font-size: 24px; }
  .subtitle { font-size: 13px; margin-bottom: 25px; }
  .rules-list li { padding: 14px 18px 14px 40px; font-size: 14px; }
  .rule-number { width: 22px; height: 22px; font-size: 12px; }
}
</style>
