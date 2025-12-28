---
layout: page
---

<div class="vp-doc">
  <div class="container">
      <div class="content-container">

# Batch of {{ $params.year }}

[← Back to Directory](/alumni-list/)

<script setup>
import { useData } from 'vitepress'
import AlumniList from '../.vitepress/theme/components/AlumniList.vue'

const { params } = useData()
const alumniData = params.value.alumni 
</script>

<AlumniList :alumni="alumniData" />

</div>
  </div>
</div>

<style scoped>
/* This ensures the container behaves like the rest of VitePress */
.container {
  margin: 0 auto;
  max-width: 1152px;
  padding: 12px 32px;
}

@media (min-width: 960px) {
  .container {
    padding: 24px 64px;
  }
}
</style>