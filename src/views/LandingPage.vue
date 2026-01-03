<template>
  <div class="landing-container">
    <!-- Petals -->
    <div class="petals">
      <span v-for="n in 20" :key="n" class="petal"></span>
    </div>

    <!-- Floral decor -->
    <div class="floral floral-top-left"></div>
    <div class="floral floral-bottom-right"></div>

    <!-- Glow ripple on open -->
    <div class="transition-glow" v-if="isOpen"></div>

    <!-- Envelope -->
    <div
      class="envelope-wrapper"
      :class="{ open: isOpen }"
      @click="openEnvelope"
    >
      <div class="envelope">
        <div class="letter">
          <h3>YOU ARE INVITED</h3>
          <p class="name">Jessica’s Debut</p>
          <p class="age">Eighteen</p>
          <span class="hint">Tap to open invitation</span>
        </div>

        <div class="back"></div>
        <div class="flap"></div>
        <div class="front"></div>
        <div class="seal">18</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return { isOpen: false };
  },
  methods: {
    openEnvelope() {
      if (this.isOpen) return;

      // Play soft chime
      const audio = new Audio("/sounds/chime.mp3"); // add your chime file in /public/sounds/
      audio.volume = 0.5;
      audio.play();

      // Open envelope
      this.isOpen = true;

      // Redirect after animation
      setTimeout(() => {
        this.$router.push("/content");
      }, 1600);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,600&family=Great+Vibes&family=Cormorant+Garamond:wght@500;600&display=swap");

/* ===== Background ===== */
.landing-container {
  height: 100vh;
  background: radial-gradient(circle at top, #fbf1f4, #efd6dc);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* ===== Floral decorations ===== */
.floral {
  position: absolute;
  width: 220px;
  height: 220px;
  background:
    radial-gradient(circle at 30% 30%, #f3c6cf 18%, transparent 19%),
    radial-gradient(circle at 60% 40%, #e7aeb8 20%, transparent 21%),
    radial-gradient(circle at 40% 70%, #f6d7df 16%, transparent 17%);
  opacity: 0.45;
  filter: blur(1px);
  animation: floralFloat 8s ease-in-out infinite;
}
.floral-top-left { top: -80px; left: -80px; }
.floral-bottom-right { bottom: -90px; right: -90px; animation-delay: 3s; }

/* ===== Envelope ===== */
.envelope-wrapper {
  perspective: 1600px;
  cursor: pointer;
  z-index: 5;
}

.envelope {
  position: relative;
  width: 320px;
  height: 200px;
  transform-style: preserve-3d;
  animation: float 4s ease-in-out infinite;
}

/* Letter */
.letter {
  position: absolute;
  inset: 16px;
  background: linear-gradient(180deg, #fffafb, #fff2f5);
  border-radius: 10px;
  text-align: center;
  padding-top: 26px;
  z-index: 3;
  box-shadow: inset 0 0 0 1px rgba(200,150,160,0.25);
  transition: transform 1.8s cubic-bezier(0.4,0,0.2,1), opacity 1.2s ease;
}
.letter h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: 14px;
  letter-spacing: 5px;
  color: #8b5a66;
  margin-bottom: 6px;
}
.letter .name {
  font-family: "Great Vibes", cursive;
  font-size: 36px;
  margin: 0;
  background: linear-gradient(135deg, #c9a16e, #f1d8a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.letter .age {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 16px;
  letter-spacing: 2px;
  color: #9a6b76;
  margin-top: 4px;
}
.hint {
  display: block;
  margin-top: 14px;
  font-size: 11px;
  letter-spacing: 2px;
  color: #b08b95;
}

/* Envelope parts */
.back {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(145deg, #f5dbe1, #e8bcc7),
    repeating-linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 6px, transparent 6px, transparent 12px);
  border-radius: 16px;
}
.front {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #f0cbd3, #ddb0bb);
  clip-path: polygon(0 0, 100% 0, 50% 65%);
  z-index: 4;
}
.flap {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, #fae8ec, #e9c2cc);
  clip-path: polygon(0 0, 100% 0, 50% 58%);
  transform-origin: top;
  transition: transform 1.6s cubic-bezier(0.55,0,0.1,1);
  z-index: 6;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Wax seal */
.seal {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background:
    radial-gradient(circle at top, #f6ddb3, #c99b59),
    radial-gradient(circle at bottom, rgba(255,255,255,0.4), transparent);
  color: #6d441b;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 7;
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.4), 0 6px 14px rgba(0,0,0,0.2);
  transition: transform 0.8s ease, opacity 0.6s ease;
}

/* Open state */
.envelope-wrapper.open .flap { transform: rotateX(180deg) translateZ(10px); }
.envelope-wrapper.open .letter { transform: translateY(-170%); opacity: 0; }
.envelope-wrapper.open .seal { transform: scale(2); opacity:0; }

/* Glow ripple */
.transition-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%);
  animation: glowFade 1.8s ease forwards;
  z-index: 10;
}

/* ===== Petals ===== */
.petals {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

.petal {
  position: absolute;
  top: -10%;
  border-radius: 50% 50% 50% 50%;
  opacity: 0.7;
  background: radial-gradient(circle at top left, #f7bccb, #d27c96);
  animation: fall linear infinite, sway ease-in-out infinite;
}

/* Random petals positions, sizes, rotations, and speeds */
.petal:nth-child(1){left:3%; width:14px; height:20px; transform:rotate(10deg); animation-duration:10s,3s;}
.petal:nth-child(2){left:10%; width:18px; height:24px; transform:rotate(-15deg); animation-duration:12s,4s;}
.petal:nth-child(3){left:20%; width:16px; height:22px; transform:rotate(5deg); animation-duration:11s,5s;}
.petal:nth-child(4){left:30%; width:15px; height:21px; transform:rotate(-10deg); animation-duration:9s,4s;}
.petal:nth-child(5){left:40%; width:17px; height:23px; transform:rotate(8deg); animation-duration:10s,3s;}
.petal:nth-child(6){left:50%; width:16px; height:20px; transform:rotate(-5deg); animation-duration:12s,5s;}
.petal:nth-child(7){left:60%; width:18px; height:25px; transform:rotate(12deg); animation-duration:11s,4s;}
.petal:nth-child(8){left:70%; width:15px; height:22px; transform:rotate(-8deg); animation-duration:13s,5s;}
.petal:nth-child(9){left:80%; width:16px; height:24px; transform:rotate(5deg); animation-duration:10s,4s;}
.petal:nth-child(10){left:90%; width:17px; height:23px; transform:rotate(-12deg); animation-duration:12s,6s;}
.petal:nth-child(11){left:5%; width:13px; height:19px; transform:rotate(-7deg); animation-duration:11s,3s;}
.petal:nth-child(12){left:15%; width:16px; height:22px; transform:rotate(6deg); animation-duration:12s,4s;}
.petal:nth-child(13){left:25%; width:14px; height:21px; transform:rotate(-5deg); animation-duration:10s,3s;}
.petal:nth-child(14){left:35%; width:17px; height:23px; transform:rotate(8deg); animation-duration:11s,5s;}
.petal:nth-child(15){left:45%; width:15px; height:22px; transform:rotate(-10deg); animation-duration:12s,4s;}
.petal:nth-child(16){left:55%; width:16px; height:24px; transform:rotate(5deg); animation-duration:13s,5s;}
.petal:nth-child(17){left:65%; width:14px; height:21px; transform:rotate(-8deg); animation-duration:10s,4s;}
.petal:nth-child(18){left:75%; width:18px; height:25px; transform:rotate(12deg); animation-duration:12s,5s;}
.petal:nth-child(19){left:85%; width:15px; height:22px; transform:rotate(-6deg); animation-duration:11s,4s;}
.petal:nth-child(20){left:95%; width:16px; height:23px; transform:rotate(7deg); animation-duration:13s,6s;}

/* Animations */
@keyframes fall {
  0% { transform: translateY(-10%) rotate(0deg); opacity:0; }
  10% { opacity:0.8; }
  100% { transform: translateY(120vh) rotate(360deg); opacity:0; }
}

@keyframes sway {
  0%,100% { margin-left:0; }
  50% { margin-left:15px; }
}


/* Animations */
@keyframes float {0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
@keyframes floralFloat {0%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-12px) rotate(3deg);}100%{transform:translateY(0) rotate(0deg);}}
@keyframes glowFade {0%{opacity:0;}40%{opacity:1;}100%{opacity:0;}}
</style>
