<template>
  <div class="landing-container">
    <div
      class="envelope-wrapper"
      :class="{ open: isOpen }"
      @click="openEnvelope"
    >
      <div class="envelope">
        <!-- Letter -->
        <div class="letter">
          <h3>You are Invited</h3>
          <p class="name">Debut • 18</p>
          <span>Tap to open</span>
        </div>

        <!-- Back -->
        <div class="back"></div>

        <!-- Flap -->
        <div class="flap"></div>

        <!-- Front -->
        <div class="front"></div>

        <!-- Seal -->
        <div class="seal">18</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openEnvelope() {
      if (this.isOpen) return;
      this.isOpen = true;

      setTimeout(() => {
        this.$router.push('/content');
      }, 1600);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Great+Vibes&display=swap');

.landing-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #f7f9fc, #e3ebf5);
}

/* Perspective */
.envelope-wrapper {
  perspective: 1400px;
  cursor: pointer;
}

/* Envelope */
.envelope {
  position: relative;
  width: 300px;
  height: 190px;
  transform-style: preserve-3d;
}

/* Letter */
.letter {
  position: absolute;
  inset: 14px;
  background: #ffffff;
  border-radius: 8px;
  text-align: center;
  padding-top: 28px;
  color: #2f4f6f;
  z-index: 1;
  transform: translateY(0);
  transition: transform 1.1s cubic-bezier(0.4, 0, 0.2, 1);
}

.letter h3 {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  letter-spacing: 2px;
  margin: 0;
}

.letter .name {
  font-family: 'Great Vibes', cursive;
  font-size: 32px;
  margin: 10px 0;
  color: #8aa2c8;
}

.letter span {
  font-size: 12px;
  opacity: 0.7;
}

/* Back */
.back {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #e6ecf5, #cfd9ea);
  border-radius: 14px;
  z-index: 0;
}

/* Front */
.front {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #c8d4e8, #b4c3dc);
  clip-path: polygon(0 0, 100% 0, 50% 62%);
  z-index: 3;
}

/* Flap */
.flap {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #f2e8df, #e6d6c8);
  clip-path: polygon(0 0, 100% 0, 50% 55%);
  transform-origin: top;
  transition: transform 1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: 4;
}

/* Gold Seal */
.seal {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 46px;
  height: 46px;
  background: radial-gradient(circle at top, #f9e29c, #d4af37);
  border-radius: 50%;
  color: #6b4b16;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

/* Open State */
.envelope-wrapper.open .flap {
  transform: rotateX(180deg);
}

.envelope-wrapper.open .letter {
  transform: translateY(-130%);
}

.envelope-wrapper.open .seal {
  opacity: 0;
  transition: opacity 0.5s ease;
}

/* Hover Elegance */
.envelope-wrapper:not(.open):hover .envelope {
  transform: translateY(-6px);
  transition: transform 0.4s ease;
}
</style>
