import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Global directive for scroll-based reveal animations
const observeDirective = {
  mounted(el) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el); }
    }, { threshold: 0.2 });
    observer.observe(el);
  }
}

app.directive('observe', observeDirective)

app.use(router)

app.mount('#app')
