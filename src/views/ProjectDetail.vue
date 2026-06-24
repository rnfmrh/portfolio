<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "../data/projects";

const route = useRoute();
const router = useRouter();

const project = computed(() => projects.find((p) => p.id === route.params.id));

const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

const screenshots = computed(() => project.value?.detail.screenshots ?? []);

const lightboxSrc = computed(() => screenshots.value[lightboxIndex.value] ?? "");

function openLightbox(index: number) {
  lightboxIndex.value = index;
  lightboxOpen.value = true;
}

function closeLightbox() {
  lightboxOpen.value = false;
}

function prevImage() {
  lightboxIndex.value =
    (lightboxIndex.value - 1 + screenshots.value.length) % screenshots.value.length;
}

function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % screenshots.value.length;
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));

const categoryStyle: Record<string, { bg: string; color: string }> = {
  업무: { bg: "rgba(79, 143, 255, 0.15)", color: "#4f8fff" },
  개인: { bg: "rgba(124, 92, 252, 0.15)", color: "#7c5cfc" },
  인턴: { bg: "rgba(40, 200, 64, 0.15)", color: "#28c840" },
};
</script>

<template>
  <div v-if="project" class="detail">
    <div class="container">
      <button class="back-btn" @click="router.push('/')">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        목록으로
      </button>

      <header class="detail-header">
        <div class="detail-meta">
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
        <h1 class="detail-title">{{ project.title }}</h1>
        <p class="detail-subtitle">{{ project.subtitle }}</p>
        <div class="detail-info">
          <div class="info-item">
            <span class="info-label">Role</span>
            <span class="info-value">{{ project.role }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Team</span>
            <span class="info-value">{{ project.detail.teamSize }}</span>
          </div>
        </div>
        <div class="tech-tags">
          <span v-for="tech in project.techStack" :key="tech" class="tag">{{
            tech
          }}</span>
        </div>
      </header>

      <section class="detail-section">
        <h2 class="detail-section-title">Overview</h2>
        <p class="overview-text">{{ project.detail.overview }}</p>
      </section>

      <section class="detail-section">
        <h2 class="detail-section-title">주요 기능</h2>
        <div class="features-grid">
          <div
            v-for="(feature, i) in project.detail.features"
            :key="i"
            class="feature-card"
          >
            <span class="feature-number">{{
              String(i + 1).padStart(2, "0")
            }}</span>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section v-if="project.detail.challenges?.length" class="detail-section">
        <h2 class="detail-section-title">기술적 챌린지</h2>
        <div class="challenges">
          <div
            v-for="(challenge, i) in project.detail.challenges"
            :key="i"
            class="challenge-item"
          >
            <div class="challenge-problem">
              <span class="challenge-label">Problem</span>
              <p>{{ challenge.problem }}</p>
            </div>
            <div class="challenge-solution">
              <span class="challenge-label">Solution</span>
              <p>{{ challenge.solution }}</p>
            </div>
          </div>
        </div>
      </section>

      <section v-if="project.detail.screenshots?.length" class="detail-section">
        <h2 class="detail-section-title">Screenshots</h2>
        <div class="screenshots-grid">
          <img
            v-for="(src, i) in project.detail.screenshots"
            :key="i"
            :src="src"
            :alt="`${project.title} screenshot ${i + 1}`"
            class="screenshot"
            @click="openLightbox(i)"
          />
        </div>
      </section>
    </div>
  </div>

  <div v-else class="detail">
    <div class="container not-found">
      <h2>프로젝트를 찾을 수 없습니다</h2>
      <button class="back-btn" @click="router.push('/')">
        목록으로 돌아가기
      </button>
    </div>
  </div>

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click.stop="closeLightbox">&times;</button>
        <button v-if="screenshots.length > 1" class="lightbox-arrow lightbox-prev" @click.stop="prevImage">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <img :src="lightboxSrc" class="lightbox-img" @click.stop />
        <button v-if="screenshots.length > 1" class="lightbox-arrow lightbox-next" @click.stop="nextImage">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
        <span v-if="screenshots.length > 1" class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ screenshots.length }}</span>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.detail {
  padding-top: 100px;
  padding-bottom: 80px;
  min-height: 100vh;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition);
  font-family: inherit;
  margin-bottom: 40px;
}

.back-btn:hover {
  color: var(--accent);
  border-color: var(--border-hover);
}

.detail-header {
  margin-bottom: 60px;
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.category {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
}

.period {
  font-family: "Fira Code", monospace;
  font-size: 13px;
  color: var(--text-muted);
}

.detail-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 8px;
}

.detail-subtitle {
  font-size: 20px;
  color: var(--accent);
  margin-bottom: 24px;
}

.detail-info {
  display: flex;
  gap: 32px;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
}

.info-value {
  font-size: 15px;
  color: var(--text-secondary);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.detail-section {
  margin-bottom: 60px;
}

.detail-section-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  position: relative;
  padding-left: 16px;
}

.detail-section-title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 3px;
  background: var(--gradient);
  border-radius: 2px;
}

.overview-text {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.feature-card {
  padding: 28px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all var(--transition);
}

.feature-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
}

.feature-number {
  font-family: "Fira Code", monospace;
  font-size: 13px;
  color: var(--accent);
  display: block;
  margin-bottom: 12px;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.challenges {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.challenge-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 28px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.challenge-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: block;
}

.challenge-problem .challenge-label {
  color: #ff6b6b;
}
.challenge-solution .challenge-label {
  color: #28c840;
}

.challenge-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.screenshot {
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all var(--transition);
}

.screenshot:hover {
  border-color: var(--border-hover);
  transform: scale(1.02);
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: var(--radius);
  object-fit: contain;
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: 24px;
  right: 32px;
  font-size: 36px;
  color: var(--text-primary);
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  transition: color var(--transition);
}

.lightbox-close:hover {
  color: var(--accent);
}

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  transition: all var(--transition);
}

.lightbox-arrow:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--accent);
  color: var(--accent);
}

.lightbox-prev { left: 24px; }
.lightbox-next { right: 24px; }

.lightbox-counter {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Fira Code", monospace;
  font-size: 14px;
  color: var(--text-secondary);
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 16px;
  border-radius: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.not-found {
  text-align: center;
  padding-top: 120px;
}

@media (max-width: 768px) {
  .detail-title {
    font-size: 32px;
  }

  .features-grid,
  .screenshots-grid {
    grid-template-columns: 1fr;
  }

  .challenge-item {
    grid-template-columns: 1fr;
  }
}
</style>
