---
layout: page
title: Upcoming Events
---

<script setup lang="ts">
import { data as events } from './index.data'
import UpcomingEventCard from '../.vitepress/theme/components/UpcomingEventCard.vue'
</script>

<div class="vp-doc">
<div class="container">
<div class="content-container">

# Upcoming Events

Join us at our next gathering! Mark your calendars and register below.

<div class="events-list">
  <div v-for="event in events" :key="event.id" class="event-card upcoming">
    <img :src="event.image" :alt="event.title" class="event-img" />
    <UpcomingEventCard :event="event" />
  </div>
</div>

<div v-if="!events.length" class="no-events">
  <p>No upcoming events scheduled at the moment. Stay tuned!</p>
</div>

</div>
</div>
</div>

<style scoped>
.container { 
  margin: 0 auto; 
  max-width: 1152px; 
  padding: 12px 32px; 
}

@media (min-width: 960px) {
  .container { padding: 24px 64px; }
}

.events-list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.event-card {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.3s;
}

.event-card:hover {
  border-color: var(--vp-c-brand-1);
}

@media (min-width: 768px) {
  .event-card { grid-template-columns: 300px 1fr; }
}

.event-img { width: 100%; height: 100%; object-fit: cover; }
.event-details { padding: 1.5rem; }
.event-date { font-size: 0.85rem; color: var(--vp-c-brand-1); font-weight: bold; }
.event-title { margin: 0.5rem 0 !important; border: none !important; }
.event-loc { font-size: 0.9rem; color: var(--vp-c-text-2); margin-bottom: 1rem; }
.event-desc { margin-bottom: 1.5rem; line-height: 1.6; }

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

.no-events {
  padding: 3rem;
  text-align: center;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  margin-top: 2rem;
  color: var(--vp-c-text-2);
}
</style>