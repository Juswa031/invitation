<template>
  <div class="main-page">
    <!-- Hero Section -->
    <section class="hero animate" v-observe>
      <img
        src="https://placehold.co/800x800"
        alt="Debutant"
        class="debutant-image"
      />
      <h1 class="name">Jessica Aisha Denielle Adeva</h1>
      <p class="subtitle">A Debut Celebration</p>

      <!-- Countdown Timer -->
      <div class="countdown">
        <div class="count-item">
          <span>{{ countdown.days }}</span>
          <small>Days</small>
        </div>
        <div class="count-item">
          <span>{{ countdown.hours }}</span>
          <small>Hours</small>
        </div>
        <div class="count-item">
          <span>{{ countdown.minutes }}</span>
          <small>Minutes</small>
        </div>
        <div class="count-item">
          <span>{{ countdown.seconds }}</span>
          <small>Seconds</small>
        </div>
      </div>
    </section>

    <!-- Event Details -->
    <section class="details animate" v-observe>
      <div class="detail-card">
        <h3>When</h3>
        <p>January 07, 2025</p>
        <span>6:00 PM</span>
      </div>

      <div class="detail-card">
        <h3>Where</h3>
        <p>The Blue Garden Pavilion</p>
        <span>Quezon City</span>
      </div>
    </section>

    <!-- Program -->
    <!-- Program -->
  <section class="program animate" v-observe>
    <h2>Program</h2>
    <ul class="program-timeline">
      <li>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>Opening Prayer</h4>
          <p>Start the evening with blessings and gratitude.</p>
        </div>
      </li>
      <li>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>Family Entrance</h4>
          <p>The debutant’s family enters gracefully.</p>
        </div>
      </li>
      <li>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>18 Roses</h4>
          <p>A special moment with meaningful gestures from loved ones.</p>
        </div>
      </li>
      <li>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>18 Blue Bills</h4>
          <p>Well-wishes for prosperity and success.</p>
        </div>
      </li>
      <li>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>18 Gifts & Messages </h4>
          <p>Tokens of love, guidance, and memories.</p>
        </div>
      </li>
      <li>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>Cake Cutting</h4>
          <p>The debutant cuts her cake with joy and celebration.</p>
        </div>
      </li>
      <li>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h4>Debutant’s Dance</h4>
          <p>The grand dance marking this special milestone.</p>
        </div>
      </li>
    </ul>
  </section>


    <!-- Special Sections -->
    <section class="special">
      <!-- 18 Roses -->
      <div class="special-card animate" v-observe>
        <div class="special-header">
          <h3>18 Roses</h3>
          <p>A symbol of love, respect, and admiration from her beloved family and friends.</p>
        </div>
        <div class="givers-container">
          <div class="giver-card" v-for="rose in roses" :key="rose.name">
            <span class="giver-name">{{ rose.name }}</span>
            <span class="giver-relation">({{ rose.role }})</span>
          </div>
        </div>
      </div>

      <!-- 18 Blue Bills -->
      <div class="special-card animate" v-observe>
        <div class="special-header">
          <h3>18 Blue Bills</h3>
          <p>A fun and meaningful tradition wishing prosperity and success.</p>
        </div>
        <div class="givers-container">
          <div class="giver-card" v-for="bill in roses" :key="bill.name">
            <span class="giver-name">{{ bill.name }}</span>
            <span class="giver-relation">({{ bill.role }})</span>
          </div>
        </div>
      </div>

      <!-- 18 Gifts & Messages  -->
      <div class="special-card animate" v-observe>
        <div class="special-header">
          <h3>18 Gifts & Messages </h3>
          <p>Thoughtful gifts representing guidance, blessings, and memories.</p>
        </div>
        <div class="givers-container">
          <div class="giver-card" v-for="gift in roses" :key="gift.name">
            <span class="giver-name">{{ gift.name }}</span>
            <span class="giver-relation">({{ gift.role }})</span>
          </div>
        </div>
      </div>
    </section>


    <!-- Gallery Section -->
   <!-- Gallery Section -->
    <section class="gallery animate" v-observe>
      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div
          class="gallery-card"
          v-for="n in 10"
          :key="n"
          @click="openLightbox(n)"
        >
          <img :src="`https://placehold.co/400x400?text=Photo+${n}`" :alt="`Debut Image ${n}`" />
          <div class="overlay">
            <span>Photo {{ n }}</span>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxActive" class="lightbox" @click="closeLightbox">
        <img :src="`https://placehold.co/800x800?text=Photo+${lightboxIndex}`" />
      </div>
    </section>


    <!-- Party Theme Section -->
    <section class="theme animate" v-observe>
      <h2>Party Theme & Attire</h2>
      <p>We invite all guests to celebrate in elegance and style! Here are some guidelines:</p>
      <div class="theme-cards">
        <div class="theme-card">
          <h3>Colors</h3>
          <p>Nude, Blue, White – choose soft and elegant shades.</p>
        </div>
        <div class="theme-card">
          <h3>Attire</h3>
          <p>Semi-formal to Formal dresses and suits. Gentlemen, dress shoes. Ladies, heels or elegant flats.</p>
        </div>
        <div class="theme-card">
          <h3>Accessories</h3>
          <p>Elegant jewelry, subtle makeup, and classic hairstyles.</p>
        </div>
      </div>
    </section>

    <!-- Party Rules Section -->
    <section class="party-rules animate" v-observe>
      <h2>Party Rules</h2>
      <ul class="rules-list">
        <li>Arrive on time to enjoy the full celebration.</li>
        <li>Dress according to the party theme colors and attire.</li>
        <li>No outside food or drinks allowed in the venue.</li>
        <li>Be courteous and respectful to all guests and staff.</li>
        <li>Photography is allowed, but avoid using flash during performances.</li>
      </ul>
    </section>

  </div>
</template>

<script>
export default {
  name: "NextPage",
  data() {
    return {
      roses: [
        { name: "Nigel Adeva", role: "Cousin" },
        { name: "Ken Adeva", role: "Cousin" },
        { name: "Edmundo Marcelo", role: "Father" },
        { name: "Nigel Adeva", role: "Cousin" },
        { name: "Ken Adeva", role: "Cousin" },
        { name: "Edmundo Marcelo", role: "Father" },
        { name: "Nigel Adeva", role: "Cousin" },
        { name: "Ken Adeva", role: "Cousin" },
        { name: "Edmundo Marcelo", role: "Father" },
        { name: "Nigel Adeva", role: "Cousin" },
        { name: "Ken Adeva", role: "Cousin" },
        { name: "Edmundo Marcelo", role: "Father" },
        { name: "Nigel Adeva", role: "Cousin" },
        { name: "Ken Adeva", role: "Cousin" },
        { name: "Edmundo Marcelo", role: "Father" },
        { name: "Nigel Adeva", role: "Cousin" },
        { name: "Ken Adeva", role: "Cousin" },
        { name: "Edmundo Marcelo", role: "Father" },
      ],
      countdown: {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      debutDate: new Date("2026-01-07T18:00:00"), // January 7, 2026 at 6:00 PM
      timer: null,
      rsvp: {
        name: '',
        email: '',
        guests: 1
      },
      confirmationMessage: ''
    };
  },
  mounted() {
    this.updateCountdown(); // Initialize immediately
    this.timer = setInterval(this.updateCountdown, 1000); // Update every second
  },
  beforeUnmount() {
    clearInterval(this.timer); // Stop timer on unmount
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.debutDate - now;

      if (distance <= 0) {
        clearInterval(this.timer);
        this.countdown = { days: "00", hours: "00", minutes: "00", seconds: "00" };
        return;
      }

      this.countdown.days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      this.countdown.hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      this.countdown.minutes = String(Math.floor((distance / 1000 / 60) % 60)).padStart(2, "0");
      this.countdown.seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
    }
  },
  directives: {
    observe: {
      mounted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.add("in-view");
              observer.unobserve(el);
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(el);
      },
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Great+Vibes&display=swap');

.main-page {
  background: linear-gradient(to bottom, #f7f9fc, #e2ebf5);
  min-height: 100vh;
  padding-bottom: 60px;
  color: #2f4f6f;
  font-family: 'Playfair Display', serif;
}

/* Animate classes */
.animate {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Hero */
.hero {
  text-align: center;
  padding: 60px 20px 40px;
}

/* Countdown */
.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.count-item {
  background: #ffffffcc;
  padding: 12px 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  text-align: center;
}

.count-item span {
  font-size: 22px;
  font-weight: 600;
  display: block;
  color: #3f506a;
}

.count-item small {
  font-size: 12px;
  color: #7a8799;
}

/* Debutant Image */
.debutant-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #c8d4e8;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* Details */
.details {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}

.detail-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 30px;
  width: 220px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

/* Program */
.program {
  margin: 50px auto;
  max-width: 520px;
  background: #ffffff;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

/* Special Sections */
.special {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 30px 20px;
}

.special-card {
  background: linear-gradient(145deg, #ffffff, #e8f0f7);
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.special-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.12);
}

.special-header h3 {
  font-size: 22px;
  color: #3f506a;
  margin-bottom: 8px;
}

.special-header p {
  font-size: 14px;
  color: #7a8799;
  margin-bottom: 15px;
}

.givers-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding: 5px;
}

.giver-card {
  background: transparent;
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.giver-name {
  font-weight: 600;
  color: #3f506a;
}

.giver-relation {
  font-weight: 400;
  font-size: 13px;
  color: #7a8799;
}


/* Gallery */
.gallery {
  padding: 40px 30px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.gallery h2 {
  margin-bottom: 30px;
  font-size: 28px;
  color: #2f4f6f;
  letter-spacing: 1.5px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.gallery-card {
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(63,80,106,0.7);
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .overlay {
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
}


/* Party Theme Section */
.theme {
  padding: 40px 30px;
  text-align: center;
}

.theme-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #3f506a;
}

.theme-list li strong {
  color: #2f4f6f;
}

.program {
  margin: 50px auto;
  max-width: 600px;
  background: #ffffff;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.program h2 {
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-size: 28px;
  color: #2f4f6f;
}

.program-timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.program-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #c8d4e8;
}

.program-timeline li {
  position: relative;
  padding: 20px 20px 20px 60px;
}

.timeline-dot {
  position: absolute;
  left: 11px;
  top: 28px;
  width: 18px;
  height: 18px;
  background: #3f506a;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.timeline-content h4 {
  margin: 0;
  font-size: 18px;
  color: #2f4f6f;
}

.timeline-content p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #7a8799;
}

.theme, .party-rules {
  padding: 40px 30px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.theme h2, .party-rules h2 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #2f4f6f;
  letter-spacing: 1.5px;
}

.theme-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.theme-card {
  background: linear-gradient(145deg, #ffffff, #f1f5fb);
  border-radius: 16px;
  padding: 20px 25px;
  width: 250px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.theme-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.12);
}

.theme-card h3 {
  margin-bottom: 10px;
  color: #3f506a;
}

.theme-card p {
  font-size: 14px;
  color: #7a8799;
}

.form-group label {
  font-weight: 600;
  color: #3f506a;
  margin-bottom: 5px;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #c8d4e8;
  font-size: 14px;
}

button[type="submit"] {
  background: #3f506a;
  color: #fff;
  padding: 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

button[type="submit"]:hover {
  background: #2f3f58;
}

.confirmation {
  margin-top: 10px;
  font-size: 14px;
  color: #2f4f6f;
  font-weight: 500;
  text-align: center;
}

.rules-list {
  list-style: none; /* remove bullets */
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0;
  color: #3f506a;
  line-height: 1.8;
  font-size: 16px;
}

.rules-list li {
  background: #f7f9fc;       /* subtle background */
  padding: 15px 20px;
  margin-bottom: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect */
.rules-list li:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
}
</style>
