<template>
  <section id="about" class="about">
    <div class="container">
      <p class="section-label">About</p>
      <h2 class="section-title">About Me</h2>
      <div class="about-grid">
        <div class="about-text">
          <p>
            2022년 인턴으로 시작하여 4년간 다양한 웹 서비스와 게임 프로젝트를 경험했습니다.
            Vue.js를 중심으로 대시보드, 모니터링 시스템, 지도 기반 서비스 등
            데이터 시각화가 핵심인 프로젝트를 다수 수행했습니다.
          </p>
          <p>
            개인 시간에는 Unity로 보드게임을 디지털화하는 프로젝트를 진행하며
            개발에 대한 폭넓은 관심과 열정을 이어가고 있습니다.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-number">4+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">2</span>
            <span class="stat-label">Platforms</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-text p {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 32px;
  background: var(--bg-surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 14px;
  color: var(--text-muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .about-stats {
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
  }

  .stat-number {
    font-size: 28px;
  }
}
</style>
