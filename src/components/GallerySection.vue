<template>
  <section class="gallery-section">
    <h2>Gallery</h2>

    <!-- Gallery grid -->
    <div class="gallery-grid">
      <div
        class="gallery-card"
        v-for="n in count"
        :key="n"
        @click="openViewer(n - 1)"
      >
        <img :src="`/images/img-${n}.webp`" :alt="`Image ${n}`" />
        <div class="overlay">
          <span>Photo {{ n }}</span>
        </div>
      </div>
    </div>

    <!-- Image viewer modal -->
    <transition name="fade">
      <div v-if="viewerActive" class="viewer" @click.self="closeViewer">
        <button class="nav prev" @click.stop="prevImage">&#10094;</button>
        <img :src="images[viewerIndex]" :alt="`Image ${viewerIndex + 1}`" />
        <button class="nav next" @click.stop="nextImage">&#10095;</button>
        <span class="close" @click="closeViewer">&times;</span>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "ElegantGallery",
  props: {
    count: { type: Number, default: 10 },
  },
  data() {
    return {
      viewerActive: false,
      viewerIndex: 0,
      images: Array.from({ length: this.count }, (_, i) => `/images/img-${i + 1}.webp`),
    };
  },
  methods: {
    openViewer(idx) {
      this.viewerIndex = idx;
      this.viewerActive = true;
      document.body.style.overflow = "hidden"; // prevent scroll
    },
    closeViewer() {
      this.viewerActive = false;
      document.body.style.overflow = "";
    },
    nextImage() {
      this.viewerIndex = (this.viewerIndex + 1) % this.images.length;
    },
    prevImage() {
      this.viewerIndex = (this.viewerIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.gallery-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Playfair Display', serif;
  text-align: center;
  background: #fff0f5;
}

.gallery-section h2 {
  font-size: 36px;
  color: #a6518c;
  font-family: 'Great Vibes', cursive;
  margin-bottom: 40px;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}

/* Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

/* Cards */
.gallery-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(145deg, #fff7fb, #fdeaf6);
  aspect-ratio: 1 / 1;
  box-shadow: 0 8px 20px rgba(166,81,140,0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.gallery-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 18px 50px rgba(166,81,140,0.15);
}

.gallery-card:hover img {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* Overlay text */
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(166,81,140,0.7);
  color: #fff;
  padding: 12px;
  font-size: 14px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .overlay {
  opacity: 1;
}

/* Viewer modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  cursor: default;
}

/* Viewer image */
.viewer img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.6);
  transition: transform 0.3s ease;
}

/* Navigation buttons */
.viewer .nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
  user-select: none;
}
.viewer .prev { left: 20px; }
.viewer .next { right: 20px; }

/* Close button */
.viewer .close {
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 36px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  z-index: 1001;
}

/* Responsive */
@media (max-width: 768px) {
  .gallery-section h2 { font-size: 30px; }
  .viewer .nav { font-size: 30px; padding: 8px 12px; }
}
@media (max-width: 480px) {
  .gallery-section h2 { font-size: 26px; }
  .viewer .nav { font-size: 28px; padding: 6px 10px; }
}
</style>
