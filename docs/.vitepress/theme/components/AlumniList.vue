<script setup>
defineProps(['alumni'])
</script>

<template>
  <div class="alumni-grid">
    <div v-for="person in alumni" :key="person.id" class="alumni-card">
      <div class="card-header">
        <h3 class="name">{{ person.name }}</h3>
        <span class="branch-badge">{{ person.branch }}</span>
      </div>
      
      <div class="card-body">
        <p class="role">{{ person.current.role }}</p>
        <p class="company">{{ person.current.company }}</p>
        <p class="location">{{ person.current.location }}</p>
      </div>

      <div class="card-footer" v-if="person.links.linkedin">
        <a :href="person.links.linkedin" target="_blank" class="linkedin-link">
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.alumni-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s;
}

.alumni-card:hover {
  border-color: var(--vp-c-brand-1);
}

.name {
  margin: 0 !important;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
}

.branch-badge {
  display: inline-block;
  font-size: 0.75rem;
  padding: 2px 8px;
  background: var(--vp-c-bg-mute);
  border-radius: 12px;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}

.card-body {
  margin: 1rem 0;
  flex-grow: 1;
}

.role {
  font-weight: 600;
  margin: 0;
}

.company, .location {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.linkedin-link {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.linkedin-link:hover {
  text-decoration: underline;
}
</style>