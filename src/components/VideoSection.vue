<template>
  <div class="hero-page">
    <!-- Fullscreen Multi-Video Hero -->
    <section class="hero-video-section" ref="videoSection">
      <!-- Main Video -->
      <video
        ref="mainVideo"
        class="hero-video main-video"
        autoplay
        muted
        playsinline
        loop
        preload="auto"
      >
        <source src="/videos/debut_intros.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Overlay Video for texture / romantic ambiance -->
      <video
        ref="overlayVideo"
        class="hero-video overlay-video"
        autoplay
        muted
        playsinline
        loop
        preload="auto"
      >
      </video>

      <!-- Cinematic Gradient Overlay -->
      <div class="video-gradient-overlay"></div>

      <!-- Elegant Invitation Text -->
      <div class="scroll-text" :style="{ opacity: scrollOpacity, transform: scrollTransform }">
        <h2 class="invite-label">You Are Cordially Invited</h2>
        <h1 class="invite-name">{{ name }}</h1>
        <p class="invite-date">{{ subtitle }}</p>
      </div>
    </section>

    <!-- Invitation Content Below Video -->
    <section class="hero-new-container animate" v-observe>
      <HeroSection :countdown="countdown" :name="name" :subtitle="subtitle" />
    </section>
  </div>
</template>

<script>
import HeroSection from './HeroSection.vue';

export default {
  components: { HeroSection },
  data() {
    return {
      countdown: { days: "00", hours: "00", minutes: "00", seconds: "00" },
      debutDate: new Date("2026-01-11T18:00:00"),
      timer: null,
      name: 'Jessica Aisha Denielle Adeva',
      subtitle: 'A Debut Celebration',
      scrollY: 0,
    };
  },
  computed: {
    scrollOpacity() {
      return Math.max(0, 1 - this.scrollY / 300);
    },
    scrollTransform() {
      return `translate(-50%, ${this.scrollY / 2}px)`;
    },
    videoScale() {
      return 1 + this.scrollY / 2000;
    },
    overlayOpacity() {
      return 0.3 - this.scrollY / 1000;
    }
  },
  directives: {
    observe: {
      mounted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) el.classList.add('in-view');
          },
          { threshold: 0.2 }
        );
        observer.observe(el);
      },
    },
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  beforeUnmount() {
    clearInterval(this.timer);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    updateCountdown() {
      const distance = this.debutDate - new Date();
      if (distance <= 0) {
        clearInterval(this.timer);
        this.countdown = { days: "00", hours: "00", minutes: "00", seconds: "00" };
        return;
      }
      this.countdown.days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      this.countdown.hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      this.countdown.minutes = String(Math.floor((distance / 1000 / 60) % 60)).padStart(2, "0");
      this.countdown.seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
    },
    handleScroll() {
      const sectionTop = this.$refs.videoSection.offsetTop;
      this.scrollY = Math.min(window.scrollY - sectionTop, 300);
      
      if (this.$refs.mainVideo) this.$refs.mainVideo.style.transform = `scale(${this.videoScale})`;
      if (this.$refs.overlayVideo) this.$refs.overlayVideo.style.opacity = this.overlayOpacity;
    }
  }
};
</script>

<style scoped>
/* ================= Multi-Video Hero ================= */
.hero-video-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Main Video */
.hero-video.main-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8) contrast(1.2) saturate(1.1);
  z-index: 1;
  transition: transform 0.3s ease;
}

/* Overlay Video */
.hero-video.overlay-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  filter: blur(1px) brightness(1.1);
  z-index: 2;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

/* Gradient Overlay */
.video-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,230,240,0.2), rgba(166,81,140,0.2));
  z-index: 3;
  pointer-events: none;
}

/* ================= Elegant Invitation Text ================= */
.scroll-text {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  color: #fff;
  z-index: 4;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Label */
.invite-label {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #ffe4f1;
  text-shadow: 2px 2px 12px rgba(0,0,0,0.5);
  margin-bottom: 10px;
  letter-spacing: 2px;
  animation: fadeUp 1.5s ease;
}

/* Name */
.invite-name {
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: #ffcee8;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.6);
  margin-bottom: 8px;
  animation: fadeUp 2s ease;
}

/* Subtitle / Date */
.invite-date {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #ffd4e3;
  text-shadow: 1px 1px 15px rgba(0,0,0,0.5);
  animation: fadeUp 2.5s ease;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================= Invitation Content ================= */
.hero-new-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #fff0f5, #ffeef7);
  display: flex;
  justify-content: center;
  padding: 80px 20px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
  z-index: 5;
}

.hero-new-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ================= Responsive ================= */
@media (max-width: 768px) {
  .invite-label { font-size: 1.4rem; }
  .invite-name { font-size: 2.5rem; }
  .invite-date { font-size: 1.2rem; }
  .hero-new-container { padding: 50px 15px; }
}

@media (max-width: 480px) {
  .invite-label { font-size: 1.2rem; }
  .invite-name { font-size: 2rem; }
  .invite-date { font-size: 1rem; }
  .hero-new-container { padding: 40px 10px; }
}
</style>
