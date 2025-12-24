<template>
  <div class="detail-card">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <span v-if="extra">{{ extra }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailCard",
  props: {
    title: String,
    text: String,
    extra: String
  }
};
</script>

<style scoped>
.detail-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 30px;
  width: 220px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-3px);
}

.detail-card h3 {
  margin-bottom: 10px;
  letter-spacing: 2px;
  color: #3f506a;
}
.detail-card p, .detail-card span {
  color: #7a8799;
}
</style>
