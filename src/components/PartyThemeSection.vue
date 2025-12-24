<template>
  <section class="theme">
    <h2>Party Theme & Attire</h2>
    <p>We invite all guests to celebrate in elegance and style! Please follow these guidelines:</p>
    <div class="theme-cards">
      <div class="theme-card">
        <h3>Colors</h3>
        <p>Nude, Blue, White – soft, elegant shades for all guests.</p>
      </div>
      <div class="theme-card">
        <h3>Attire</h3>
        <p>Semi-formal to formal dresses and suits. Gentlemen: dress shoes. Ladies: heels or elegant flats.</p>
      </div>
      <div class="theme-card">
        <h3>Accessories</h3>
        <p>Subtle jewelry, classic hairstyles, and elegant makeup encouraged.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartyThemeSection"
};
</script>

<style scoped>
.theme { padding: 40px 30px; max-width: 900px; margin: 0 auto; text-align: center; }
.theme h2 { font-size: 28px; color: #2f4f6f; margin-bottom: 20px; letter-spacing: 1.5px; }
.theme-cards { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 20px; }
.theme-card {
  background: linear-gradient(145deg, #ffffff, #f1f5fb);
  border-radius: 16px;
  padding: 20px 25px;
  width: 250px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.theme-card:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(0,0,0,0.12); }
.theme-card h3 { margin-bottom: 10px; color: #3f506a; font-size: 18px; }
.theme-card p { font-size: 14px; color: #7a8799; }
</style>
