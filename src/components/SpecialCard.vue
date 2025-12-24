<template>
  <div class="special-card">
    <div class="special-header">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div v-if="items && items.length" class="givers-container">
      <div class="giver-card" v-for="item in items" :key="item.name">
        <span class="giver-name">{{ item.name }}</span>
        <span class="giver-relation">({{ item.role }})</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialCard",
  props: {
    title: String,
    description: String,
    items: Array
  }
};
</script>

<style scoped>
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
  max-height: 250px;
  overflow-y: auto;
  padding: 5px;
}

.giver-card {
  background: #ffffffcc;
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.giver-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
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
</style>
