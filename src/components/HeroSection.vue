<template>
  <section class="hero-new animate" v-observe>
    <!-- Soft romantic gradient + sparkle background -->
    <div class="hero-bg"></div>
    
    <div class="hero-content">
      <!-- Big debutant image -->
      <div class="image-container">
        <img src="/images/hero.webp" :alt="name" class="debutant-image" />
        <div class="sparkles"></div>
      </div>
      
      <!-- Name -->
      <h1 class="name">{{ name }}</h1>
      <p class="subtitle">{{ subtitle }}</p>

      <!-- Countdown -->
      <div class="countdown">
        <div class="count-item" v-for="(value, key) in countdown" :key="key">
          <span>{{ value }}</span>
          <small>{{ key.charAt(0).toUpperCase() + key.slice(1) }}</small>
        </div>
      </div>    
    </div>
    <EventDetails :details="eventDetails" />
  </section>

</template>

<script>
import EventDetails from '@/components/EventDetails.vue'

export default {
  name: "HeroNewSection",
  components: { EventDetails },
  props: {
    countdown: { type: Object, required: true },
    name: { type: String, required: true },
    subtitle: { type: String, default: '' }
  },
  data() {
    return {
        eventDetails: [
            { title: "When", line1: "January 11, 2026", line2: "6:00 PM" },
            { title: "Where", line1: "Jollibee Dr. Sixto Antonio Ave.", line2: "Pasig City" }
        ]
    }
  },
};
</script>

<style scoped>
.hero-new {
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;  /* horizontal centering */
  align-items: center;      /* vertical centering */
  flex-direction: column;
  overflow: hidden;
  padding: 50px 20px;
  font-family: 'Playfair Display', serif;
  color: #4a2c4f;
  text-align: center;
  box-sizing: border-box;   /* prevent extra margin/padding issues */
  margin: 0 auto;           /* ensure full centering */
}

/* Background gradient + blur + sparkles */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #ffeaf2, #fff0f5);
  filter: blur(60px);
  z-index: 0;
}

/* Hero content container */
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;      /* ensure everything is centered */
  justify-content: center;
  width: 100%;              /* full width for centering */
  max-width: 400px;         /* optional: control max width */
  margin: 0 auto;
}

/* Image container */
.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(166,81,140,0.3);
  transition: transform 0.5s ease;
}

.image-container:hover {
  transform: scale(1.04);
}

.sparkles {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
  pointer-events: none;
  animation: sparkleMove 6s infinite linear;
}

@keyframes sparkleMove {
  0% { transform: translate(0,0); }
  50% { transform: translate(15px, 20px); }
  100% { transform: translate(0,0); }
}

.debutant-image {
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid rgba(255, 200, 215, 0.6);
  box-shadow: 0 10px 35px rgba(166,81,140,0.25);
}

/* Name and Subtitle */
.name {
  font-family: 'Great Vibes', cursive;
  font-size: 3.8rem;
  margin: 15px 0 5px;
  color: #a6518c;
  text-shadow: 1px 1px 10px rgba(0,0,0,0.15);
}

.subtitle {
  font-size: 20px;
  color: #7a8799;
  margin-bottom: 40px;
}

/* Countdown */
.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
}

/* Countdown item */
.count-item {
  background: rgba(255, 240, 245, 0.6);
  padding: 16px 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(166,81,140,0.15);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.count-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(166,81,140,0.2);
}

.count-item span {
  font-size: 26px;
  font-weight: 700;
  color: #a6518c;
  display: block;
}

.count-item small {
  font-size: 13px;
  color: #7a8799;
}

/* =================== MOBILE RESPONSIVE =================== */
@media (max-width: 768px) {
  .hero-new {
    padding: 40px 15px;
    min-height: 80vh;
  }
  
  .debutant-image {
    width: 280px;
    height: 280px;
  }

  .name { font-size: 3rem; }
  .subtitle { font-size: 18px; margin-bottom: 30px; }
  .count-item { padding: 14px 20px; }
  .count-item span { font-size: 22px; }
  .count-item small { font-size: 12px; }
}

@media (max-width: 480px) {
  .hero-new {
    padding: 30px 10px;
    min-height: 75vh;
  }

  .hero-content {
    max-width: 90%;  /* reduce max width on small screens */
  }

  .debutant-image { width: 200px; height: 200px; }
  .name { font-size: 2.2rem; }
  .subtitle { font-size: 16px; margin-bottom: 20px; }
  .countdown { gap: 12px; }
  .count-item { padding: 12px 16px; border-radius: 12px; }
  .count-item span { font-size: 18px; }
  .count-item small { font-size: 11px; }
}
</style>
