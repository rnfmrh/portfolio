<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  setTimeout(() => (visible.value = true), 100)
})
</script>

<template>
  <section class="hero" id="hero">
    <div class="container hero-inner">
      <div :class="['hero-content', { visible }]">
        <p class="greeting">안녕하세요, 저는</p>
        <h1 class="name">양현진<span class="dot">.</span></h1>
        <p class="role">Frontend Developer</p>
        <p class="intro">
          4년간 Vue.js 기반 웹 서비스와 Unity 게임 프로젝트를 통해<br />
          사용자 경험을 설계하고 구현해온 개발자입니다.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" class="btn btn-outline">연락하기</a>
        </div>
      </div>
      <div :class="['hero-decoration', { visible }]">
        <div class="code-block">
          <div class="code-header">
            <span class="code-dot red"></span>
            <span class="code-dot yellow"></span>
            <span class="code-dot green"></span>
          </div>
          <pre><code><span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="key">name</span>: <span class="string">'양현진'</span>,
  <span class="key">role</span>: <span class="string">'Frontend Developer'</span>,
  <span class="key">skills</span>: [<span class="string">'Vue'</span>, <span class="string">'TypeScript'</span>, <span class="string">'Unity'</span>],
  <span class="key">passion</span>: <span class="string">'Building great UX'</span>,
}</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.greeting {
  font-family: 'Fira Code', monospace;
  font-size: 16px;
  color: var(--accent);
  margin-bottom: 8px;
}

.name {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 8px;
}

.dot {
  color: var(--accent);
}

.role {
  font-size: 24px;
  font-weight: 300;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.intro {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  font-size: 15px;
  font-weight: 500;
  transition: all var(--transition);
  cursor: pointer;
}

.btn-primary {
  background: var(--gradient);
  color: #fff;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(79, 143, 255, 0.3);
  color: #fff;
}

.btn-outline {
  border: 1px solid var(--border-hover);
  color: var(--accent);
}

.btn-outline:hover {
  background: rgba(79, 143, 255, 0.1);
  transform: translateY(-2px);
}

.hero-decoration {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.hero-decoration.visible {
  opacity: 1;
  transform: translateY(0);
}

.code-block {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.code-header {
  display: flex;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--border);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-dot.red { background: #ff5f57; }
.code-dot.yellow { background: #febc2e; }
.code-dot.green { background: #28c840; }

pre {
  padding: 24px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
  overflow-x: auto;
}

.keyword { color: #c792ea; }
.variable { color: #82aaff; }
.key { color: #c3e88d; }
.string { color: #c3e88d; }

@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .name {
    font-size: 44px;
  }

  .role {
    font-size: 20px;
  }

  .intro br {
    display: none;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-decoration {
    display: none;
  }
}
</style>
