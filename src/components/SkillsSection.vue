<template>
  <section id="skills" class="skills">
    <div class="container">
      <p class="section-label">Skills</p>
      <h2 class="section-title">Tech Stack</h2>
      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.title" class="skill-group">
          <h3 class="group-title">{{ group.title }}</h3>
          <p class="group-level">{{ group.level }}</p>
          <ul class="skill-list">
            <li v-for="skill in group.items" :key="skill" class="skill-item">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillGroups = [
  {
    title: 'Frontend',
    level: '중상',
    items: ['Vue 3', 'Pinia', 'TypeScript', 'OpenLayers', 'SVG / Canvas', 'Vite'],
  },
  {
    title: 'Backend',
    level: '중',
    items: ['Spring Framework', '전자정부프레임워크', 'REST API', 'SQL'],
  },
  {
    title: 'Game Dev',
    level: '중',
    items: ['Unity', 'C#', 'Asset Bundle', 'Photon'],
  },
  {
    title: 'Tools',
    level: '',
    items: ['Git', 'Figma', 'Playwright', 'BackstopJS'],
  },
]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.skill-group {
  padding: 28px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all var(--transition);
}

.skill-group:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
}

.group-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.group-level {
  font-size: 13px;
  color: var(--accent);
  font-family: 'Fira Code', monospace;
  margin-bottom: 20px;
  min-height: 20px;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-item {
  padding: 6px 14px;
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--bg-card);
  border-radius: 20px;
  border: 1px solid var(--border);
  transition: all var(--transition);
}

.skill-item:hover {
  color: var(--accent);
  border-color: var(--border-hover);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
