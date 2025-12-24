<template>
  <li>
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProgramItem",
  props: {
    title: String,
    description: String
  }
};
</script>

<style scoped>
.timeline-dot {
  position: absolute;
  left: 11px;
  top: 28px;
  width: 18px;
  height: 18px;
  background: #3f506a;
  border-radius: 50%;
  border: 3px solid #fff;
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
</style>
