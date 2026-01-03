<template>
  <div class="envelope-page">
    <PetalsBackground />
    
    <!-- <HeroSection
      :countdown="countdown"
      name="Jessica Aisha Denielle Adeva"
      subtitle="A Debut Celebration"
    /> -->

    <VideoSection />

    <!-- <EventDetails :details="eventDetails" /> -->

    <ProgramSection :program="program" />

    <SpecialSections :sections="specialSections" />

    <GallerySection :count="10" />

    <ThemeSection :themes="themes" />

    <PartyRules :rules="rules" />
  </div>
</template>

<script>
import PetalsBackground from '@/components/PetalsBackground.vue'
// import HeroSection from '@/components/HeroSection.vue'
// import EventDetails from '@/components/EventDetails.vue'
import ProgramSection from '@/components/ProgramSection.vue'
import SpecialSections from '@/components/SpecialSections.vue'
import GallerySection from '@/components/GallerySection.vue'
import ThemeSection from '@/components/ThemeSection.vue'
import PartyRules from '@/components/PartyRules.vue'
import VideoSection from '@/components/VideoSection.vue'

export default {
  name: "ElegantEnvelopePage",
  components: {
    PetalsBackground,
    // HeroSection,
    // EventDetails,
    ProgramSection,
    SpecialSections,
    GallerySection,
    ThemeSection,
    PartyRules,
    VideoSection
  },
  data() {
    return {
      countdown: { days: "00", hours: "00", minutes: "00", seconds: "00" },
      debutDate: new Date("2026-01-11T18:00:00"),
      timer: null,
      program: [
        { title: "Opening Prayer", description: "Start the evening with blessings and gratitude." },
        { title: "18 Blue Bills", description: "Well-wishes for prosperity and success." },
        { title: "18 Gifts & Messages", description: "Tokens of love, guidance, and memories." },
        { title: "18 Roses", description: "A special moment with meaningful gestures from loved ones." }
      ],
      specialSections: [
        {
          title: "Blue Bills",
          description: "A fun and meaningful tradition wishing prosperity and success.",
          givers: [
            { name: "Jhenifer Abata", role: null },
            { name: "Jean Rose Viesca", role: null },
            { name: "Kristine Mae Maranan", role: null },
            { name: "Melvie Joyce Tumambing", role: null },
            { name: "Jeffrey Salosa", role: null },
            { name: "Nicole Cena", role: null },
            { name: "Joanne Semeniano", role: null },
            { name: "Maricar Pabalan", role: null },
            { name: "Rose Marie Marquez", role: null },
            { name: "Ferdie Barrientos", role: null },
            { name: "Elsa Sulayao", role: null },
            { name: "Ptr. Jumar Bagon", role: null },
            { name: "Crisan Cardinoza", role: null },
            { name: "Sandy Santos", role: null },
            { name: "Daniella Maranan", role: null },
            { name: "Caren Tuazon", role: null },
            { name: "Patricia Danglio", role: null },
            { name: "Marilyn Galapin", role: null },
            { name: "Desiree Soriano", role: null },
            { name: "Joshua Sandoval", role: null },
            { name: "Mary Grace Pereda", role: null },
          ]
        },
        {
          title: "Gifts & Messages",
          description: "Thoughtful gifts representing guidance, blessings, and memories.",
          givers: [
            { name: "Phatima Bigar", role: null },
            { name: "Catheriine Bassig", role: null },
            { name: "Janine Salosa", role: null },
            { name: "Rovic Nava", role: null },
            { name: "Karl Ivan Mongas", role: null },
            { name: "Veronica Quimbo", role: null },
            { name: "Jocelyn Joy Burlado", role: null },
            { name: "Karyle Abelardo", role: null },
            { name: "Raezelle Aquino", role: null },
            { name: "Zyra Sulayao", role: null },
            { name: "Hermione Marcelo", role: null },
            { name: "Jhanylla Mariano", role: null },
            { name: "Jessa Salosa", role: null },
            { name: "Caitlyn Saron", role: null },
            { name: "Kate Mendoza", role: null },
            { name: "Ptra. Leoncia Garcia ", role: null },
            { name: "Jayzle Tejares", role: null },
            { name: "Jasline Gayas", role: null },
            { name: "Czarina Polido", role: null },
            { name: "Digna Lacno", role: null },
            { name: "Vivian Tumambing", role: null },
            { name: "Mhel Tindan Maranan", role: null }
          ]
        },
        {
          title: "Roses",
          description: "A symbol of love, respect, and admiration from her beloved family and friends.",
          givers: [
            { name: "Ken Adeva", role: null },
            { name: "Nigel Adeva", role: null },
            { name: "John Ezekiel Maranan", role: null },
            { name: "Labrinth Abalos", role: null },
            { name: "Boaz Bagon", role: null },
            { name: "Justine Maranan", role: null },
            { name: "Ember Tumambing", role: null },
            { name: "Shawn Cardinoza", role: null },
            { name: "Genesis Maranan", role: null },
            { name: "Matthew Maranan", role: null },
            { name: "John Paul Amansec", role: null },
            { name: "Kian Pajo", role: null },
            { name: "Joel Insauriga", role: null },
            { name: "Renato Lomboy", role: null },
            { name: "Miko Adeva", role: null },
            { name: "Jesus Cesar Santos", role: null },
            { name: "Edmon Marcelo", role: null },
            { name: "Noel Adeva", role: null },
          ]
        },
      ],
      themes: [
        { title: "Colors", description: "Lilac, blush pink, and white – soft and romantic shades." },
        { title: "Attire", description: "Semi-formal to Formal dresses and suits." },
      ],
      rules: [
        "Arrive on time to enjoy the full celebration.",
        "Dress according to the party theme colors and attire.",
        "Be courteous and respectful to all guests and staff.",
        "Photography is allowed, but avoid using flash during performances."
      ],
      eventDetails: [
        { title: "When", line1: "January 11, 2026", line2: "6:00 PM" },
        { title: "Where", line1: "Jollibee Dr. Sixto Antonio Ave.", line2: "Pasig City" }
      ]
    };
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    updateCountdown() {
      const distance = this.debutDate - new Date();
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
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Great+Vibes&display=swap');

.envelope-page {
  font-family: 'Playfair Display', serif;
  background: linear-gradient(to bottom, #fdf6f0, #f5eaf3);
  min-height: 100vh;
  color: #3f506a;
  position: relative;
  overflow: hidden;
}

/* Common Animations */
.animate { opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
.animate.in-view { opacity: 1; transform: translateY(0); }
</style>
