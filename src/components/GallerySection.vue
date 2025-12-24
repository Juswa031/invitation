<template>
  <section class="gallery">
    <h2>Gallery</h2>
    <div class="gallery-grid">
      <div
        class="gallery-card"
        v-for="n in 10"
        :key="n"
        @click="openLightbox(n)"
      >
        <img :src="`https://placehold.co/400x400?text=Photo+${n}`" />
        <div class="overlay">Photo {{ n }}</div>
      </div>
    </div>
    <div v-if="lightboxActive" class="lightbox" @click="closeLightbox">
      <img :src="`https://placehold.co/800x800?text=Photo+${lightboxIndex}`" />
    </div>
  </section>
</template>

<script>
export default {
  name: "GallerySection",
  data() {
    return { lightboxActive: false, lightboxIndex: 1 };
  },
  methods: {
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxActive = true;
    },
    closeLightbox() {
      this.lightboxActive = false;
    }
  }
};
</script>

<style scoped>
.gallery { padding: 40px 30px; text-align: center; max-width: 1000px; margin: 0 auto; }
.gallery h2 { font-size: 28px; color: #2f4f6f; margin-bottom: 30px; }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap: 20px; }
.gallery-card { position: relative; cursor: pointer; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.08); transition: transform 0.3s ease; }
.gallery-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.gallery-card:hover img { transform: scale(1.05); }
.overlay { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(63,80,106,0.7); color: #fff; padding: 10px; opacity: 0; transition: opacity 0.3s ease; }
.gallery-card:hover .overlay { opacity: 1; }
.lightbox { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:1000; }
.lightbox img { max-width:90%; max-height:90%; border-radius:12px; box-shadow:0 12px 30px rgba(0,0,0,0.5); }
</style>
