---
layout: page
title: Alumni Batches
---

<div class="vp-doc">

# Alumni Directory

Select a graduation year to view the batch members:

<script setup>
import { data as years } from './index.data.ts'
</script>

<div class="year-grid">
  <a v-for="year in years" :key="year" :href="`/alumni-list/${year}`" class="year-card">
    <span class="batch-label">Batch of</span>
    <span class="year-number">{{ year }}</span>
  </a>
</div>

</div>

<style scoped>
.vp-doc {
  margin: 2rem;
}

.year-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.year-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
}

.year-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-4px);
}

.batch-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.year-number {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>