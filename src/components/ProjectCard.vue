<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Project } from '../data/projects'
import ArrowRightIcon from '../assets/icons/arrow-right.svg'

defineProps<{ project: Project }>()

const categoryStyle: Record<string, { bg: string; color: string }> = {
  '업무': { bg: 'rgba(79, 143, 255, 0.15)', color: '#4f8fff' },
  '개인': { bg: 'rgba(124, 92, 252, 0.15)', color: '#7c5cfc' },
  '인턴': { bg: 'rgba(40, 200, 64, 0.15)', color: '#28c840' },
}
</script>

<template>
  <article class="card">
    <div class="card-header">
      <span
        class="category"
        :style="{
          background: categoryStyle[project.category]?.bg,
          color: categoryStyle[project.category]?.color,
        }"
      >
        {{ project.category }}
      </span>
      <span class="period">{{ project.period }}</span>
    </div>
    <h3 class="card-title">{{ project.title }}</h3>
    <p class="card-subtitle">{{ project.subtitle }}</p>
    <p class="card-desc">{{ project.description }}</p>
    <div class="card-role">
      <span class="role-label">Role</span>
      <span class="role-value">{{ project.role }}</span>
    </div>
    <ul class="highlights">
      <li v-for="h in project.highlights" :key="h">{{ h }}</li>
    </ul>
    <div class="tech-tags">
      <span v-for="tech in project.techStack" :key="tech" class="tag">{{ tech }}</span>
    </div>
    <RouterLink :to="`/project/${project.id}`" class="detail-link">
      자세히 보기
      <ArrowRightIcon width="16" height="16" />
    </RouterLink>
  </article>
</template>

<style scoped>
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.card:hover {
  border-color: var(--border-hover);
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

.period {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: var(--text-muted);
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.card-subtitle {
  font-size: 15px;
  color: var(--accent);
  margin-bottom: 16px;
}

.card-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.card-role {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.role-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
}

.role-value {
  font-size: 13px;
  color: var(--text-secondary);
}

.highlights {
  list-style: none;
  margin-bottom: 24px;
  flex: 1;
}

.highlights li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.highlights li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.detail-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  transition: all var(--transition);
}

.detail-link:hover {
  gap: 10px;
  color: var(--accent-secondary);
}
</style>
