<template>
  <section class="party-rules">
    <h2>Party Rules</h2>
    <ul class="rules-list">
      <li>Arrive on time to enjoy the full celebration.</li>
      <li>Dress according to the party theme colors and attire.</li>
      <li>No outside food or drinks allowed in the venue.</li>
      <li>Be courteous and respectful to all guests and staff.</li>
      <li>Photography is allowed, but avoid using flash during performances.</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PartyRulesSection"
};
</script>

<style scoped>
.party-rules { padding: 40px 30px; max-width: 700px; margin: 0 auto; text-align: center; }
.party-rules h2 { font-size: 28px; color: #2f4f6f; margin-bottom: 20px; letter-spacing: 1.5px; }
.rules-list { list-style-type: disc; text-align: left; padding-left: 20px; color: #3f506a; line-height: 1.6; }
.rules-list li { margin-bottom: 10px; }
</style>
