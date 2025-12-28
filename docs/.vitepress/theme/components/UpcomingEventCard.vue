<script setup>
defineProps(['event'])
</script>

<template>
  <div class="event-details">
    <span class="event-date">📅 {{ event.formattedDate }}</span>
    <h2 class="event-title">{{ event.title }}</h2>
    <p class="event-loc">📍 {{ event.location }}</p>
    <p class="event-desc">{{ event.description }}</p>

    <a
      v-if="event.reg_link"
      :href="event.reg_link"
      target="_blank"
      class="action-btn"
    >
      Register on Whatsapp
    </a>
  </div>
</template>

<style scoped>
.event-details { padding: 1.5rem; }
.event-date { font-size: 0.85rem; color: var(--vp-c-brand-1); font-weight: bold; }
.event-title { 
  margin: 0.5rem 0 !important; 
  border: none !important; 
  font-size: 1.5rem; 
  line-height: 1.2;
}
.event-loc { font-size: 0.9rem; color: var(--vp-c-text-2); margin-bottom: 1rem; }
.event-desc { margin-bottom: 1.5rem; line-height: 1.6; color: var(--vp-c-text-1); }

.action-btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: var(--vp-c-brand-1);
  color: white !important;
  border-radius: 8px;
  text-decoration: none !important;
  font-size: 0.9rem;
  font-weight: 600;
}
.action-btn:hover {
  opacity: 0.9;
}
</style>