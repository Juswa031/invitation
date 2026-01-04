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
        <source src="/videos/debut.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Overlay Video -->
      <video
        ref="overlayVideo"
        class="hero-video overlay-video"
        autoplay
        muted
        playsinline
        loop
        preload="auto"
      ></video>

      <!-- Gradient Overlay -->
      <div class="video-gradient-overlay"></div>

      <!-- Invitation Text -->
      <div
        class="scroll-text"
        :style="{ opacity: scrollOpacity, transform: scrollTransform }"
      >
        <h2 class="invite-label">You Are Cordially Invited</h2>
        <h1 class="invite-name">{{ name }}</h1>
        <p class="invite-date">{{ subtitle }}</p>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="scroll-indicator" :style="{ opacity: scrollOpacity }">
        <span class="scroll-label">Scroll Down</span>
        <div class="mouse">
          <span class="wheel"></span>
        </div>
      </div>
    </section>

    <!-- Invitation Content -->
    <section class="hero-new-container animate" v-observe>
      <HeroSection
        :countdown="countdown"
        :name="name"
        :subtitle="subtitle"
      />
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
      name: "Jessica Aisha Denielle Adeva",
      subtitle: "A Debut Celebration",
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
    },
  },
  directives: {
    observe: {
      mounted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) el.classList.add("in-view");
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
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  },
  beforeUnmount() {
    clearInterval(this.timer);
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    updateCountdown() {
      const distance = this.debutDate - new Date();
      if (distance <= 0) {
        clearInterval(this.timer);
        return;
      }
      this.countdown.days = String(Math.floor(distance / 86400000)).padStart(2, "0");
      this.countdown.hours = String(Math.floor((distance / 3600000) % 24)).padStart(2, "0");
      this.countdown.minutes = String(Math.floor((distance / 60000) % 60)).padStart(2, "0");
      this.countdown.seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
    },
    handleScroll() {
      const top = this.$refs.videoSection.offsetTop;
      this.scrollY = Math.min(window.scrollY - top, 300);

      if (this.$refs.mainVideo)
        this.$refs.mainVideo.style.transform = `scale(${this.videoScale})`;

      if (this.$refs.overlayVideo)
        this.$refs.overlayVideo.style.opacity = this.overlayOpacity;
    },
  },
};
</script>

<style scoped>
/* ================= HERO VIDEO ================= */
.hero-video-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-video {
  filter: brightness(0.8) contrast(1.2) saturate(1.1);
  z-index: 1;
}

.overlay-video {
  opacity: 0.3;
  filter: blur(1px);
  z-index: 2;
}

.video-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255,230,240,0.25),
    rgba(166,81,140,0.25)
  );
  z-index: 3;
}

/* ================= TEXT ================= */
.scroll-text {
  position: absolute;
  bottom: 28%;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  color: #fff;
  z-index: 4;
}

.invite-label {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  letter-spacing: 2px;
}

.invite-name {
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: #ffd4e8;
}

.invite-date {
  font-size: 1.4rem;
}

/* ================= SCROLL INDICATOR ================= */
.scroll-indicator {
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 5;
  color: #ffe4f1;
}

.scroll-label {
  font-size: 0.75rem;
  letter-spacing: 2px;
  margin-bottom: 8px;
  display: block;
}

.mouse {
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255, 228, 241, 0.8);
  border-radius: 20px;
  margin: auto;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: #ffe4f1;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: wheelMove 2s infinite;
}

@keyframes wheelMove {
  0% { opacity: 0; top: 6px; }
  40% { opacity: 1; }
  80% { opacity: 0; top: 18px; }
}

/* ================= CONTENT ================= */
.hero-new-container {
  background: linear-gradient(to bottom, #fff0f5, #ffeef7);
  padding: 80px 20px;
  opacity: 0;
  transform: translateY(40px);
  transition: 1s;
}

.hero-new-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ================= MOBILE ================= */
@media (max-width: 480px) {
  .invite-name { font-size: 2.2rem; }
  .invite-label { font-size: 1.2rem; }
}
</style>
