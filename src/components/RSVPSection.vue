<template>
  <section class="rsvp">
    <h2>RSVP</h2>
    <p>Confirm your attendance. Maximum 2 guests per submission.</p>
    <form @submit.prevent="submitRSVP" class="rsvp-form">
      <div class="form-group">
        <label for="name">Your Full Name</label>
        <input type="text" id="name" v-model="rsvp.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="rsvp.email" required />
      </div>
      <div class="form-group">
        <label for="guests">Number of Guests (Max 2)</label>
        <input type="number" id="guests" v-model.number="rsvp.guests" min="1" max="2" required />
      </div>
      <button type="submit">Confirm RSVP</button>
      <p v-if="confirmationMessage" class="confirmation">{{ confirmationMessage }}</p>
    </form>
  </section>
</template>

<script>
export default {
  name: "RSVPSection",
  data() {
    return {
      rsvp: { name: '', email: '', guests: 1 },
      confirmationMessage: ''
    };
  },
  methods: {
    async submitRSVP() {
      if (this.rsvp.guests > 2) {
        this.confirmationMessage = "Maximum of 2 guests allowed per RSVP.";
        return;
      }
      // Example: send to Google Form
      const googleFormActionURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
      const formData = new FormData();
      formData.append("entry.1234567890", this.rsvp.name);
      formData.append("entry.2345678901", this.rsvp.email);
      formData.append("entry.3456789012", this.rsvp.guests);
      try {
        await fetch(googleFormActionURL, { method: "POST", body: formData, mode: "no-cors" });
        this.confirmationMessage = "Thank you! Your RSVP has been submitted.";
        this.rsvp = { name: '', email: '', guests: 1 };
      } catch {
        this.confirmationMessage = "An error occurred. Please try again.";
      }
    }
  }
};
</script>

<style scoped>
.rsvp { padding: 40px 30px; max-width: 500px; margin: 0 auto; text-align: center; }
.rsvp h2 { font-size: 28px; color: #2f4f6f; margin-bottom: 20px; letter-spacing: 1.5px; }
.rsvp-form { display: flex; flex-direction: column; gap: 15px; background: #f7f9fc; padding: 25px; border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
.form-group label { font-weight: 600; color: #3f506a; display: block; margin-bottom: 5px; }
.form-group input { width: 100%; padding: 10px 12px; border-radius: 12px; border: 1px solid #c8d4e8; font-size: 14px; }
button[type="submit"] { background: #3f506a; color: #fff; padding: 12px; border-radius: 12px; border: none; cursor: pointer; font-weight: 600; transition: background 0.3s; }
button[type="submit"]:hover { background: #2f3f58; }
.confirmation { font-size: 14px; color: #2f4f6f; font-weight: 500; margin-top: 10px; }
</style>
