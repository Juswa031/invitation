<template>
  <section class="special">
    <div class="special-card animate" v-for="(section, idx) in sections" :key="idx" v-observe>
      <!-- Header -->
      <div class="special-header">
        <h3>{{ section.title }}</h3>
        <p>{{ section.description }}</p>
      </div>

      <!-- Givers List -->
      <div class="givers-container">
        <div class="giver-card" v-for="giver in section.givers" :key="giver.name">
          <span class="giver-name">{{ giver.name }}</span>
          <span class="giver-relation">{{ giver.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpecialSections',
  props: {
    sections: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.special {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 40px 20px;
  background: #fff0f5; /* soft romantic background */
}

/* Card */
.special-card {
  background: linear-gradient(145deg, #fff7fb, #fdeaf6);
  border-radius: 25px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(166, 81, 140, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}

/* Floating animation on hover */
.special-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 45px rgba(166, 81, 140, 0.2);
}

/* Decorative sparkle overlay */
.special-card::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
  pointer-events: none;
  animation: sparkleMove 8s infinite linear;
}

@keyframes sparkleMove {
  0% { transform: translate(0,0) rotate(0deg); }
  50% { transform: translate(15px, 20px) rotate(15deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}

/* Header */
.special-header h3 {
  font-size: 22px;
  color: #a6518c;
  margin-bottom: 8px;
  font-family: 'Great Vibes', cursive;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.1);
}

.special-header p {
  font-size: 14px;
  color: #7a8799;
  margin-bottom: 20px;
  font-style: italic;
}

/* Givers list */
.givers-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 5px;
}

/* Individual giver card */
.giver-card {
  background: rgba(255, 240, 245, 0.7);
  padding: 12px 16px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 15px rgba(166,81,140,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.giver-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(166,81,140,0.15);
}

/* Giver name and relation */
.giver-name {
  font-weight: 600;
  color: #a6518c;
}

.giver-relation {
  font-weight: 400;
  font-size: 13px;
  color: #7a8799;
  font-style: italic;
}

/* Scrollbar styling for givers list */
.givers-container::-webkit-scrollbar {
  width: 6px;
}

.givers-container::-webkit-scrollbar-thumb {
  background: rgba(166,81,140,0.3);
  border-radius: 3px;
}

.givers-container::-webkit-scrollbar-track {
  background: transparent;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .special-card {
    padding: 25px 15px;
  }

  .special-header h3 {
    font-size: 20px;
  }

  .giver-card {
    padding: 10px 14px;
  }
}

@media (max-width: 480px) {
  .special {
    gap: 20px;
    padding: 30px 15px;
  }

  .special-card {
    padding: 20px 12px;
  }

  .special-header h3 {
    font-size: 18px;
  }

  .giver-card {
    padding: 8px 12px;
    font-size: 13px;
  }
}
</style>
