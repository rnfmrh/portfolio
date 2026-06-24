<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMobile() {
  mobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['header', { scrolled }]">
    <div class="header-inner container">
      <a href="#" class="logo">YHJ<span class="dot">.</span></a>
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :aria-label="mobileOpen ? '메뉴 닫기' : '메뉴 열기'">
        <span :class="['bar', { open: mobileOpen }]"></span>
      </button>
      <nav :class="['nav', { open: mobileOpen }]">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="closeMobile"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: all var(--transition);
}

.header.scrolled {
  padding: 12px 0;
  background: rgba(11, 13, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}

.logo:hover {
  color: var(--text-primary);
}

.dot {
  color: var(--accent);
}

.nav {
  display: flex;
  gap: 32px;
}

.nav a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition);
  letter-spacing: 0.5px;
}

.nav a:hover {
  color: var(--text-primary);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 20px;
  position: relative;
}

.bar,
.bar::before,
.bar::after {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s;
  position: absolute;
}

.bar { top: 9px; }
.bar::before { content: ''; top: -8px; }
.bar::after { content: ''; top: 8px; }

.bar.open { background: transparent; }
.bar.open::before { top: 0; transform: rotate(45deg); }
.bar.open::after { top: 0; transform: rotate(-45deg); }

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 260px;
    height: 100vh;
    background: var(--bg-surface);
    flex-direction: column;
    padding: 80px 32px;
    gap: 24px;
    transition: right 0.3s ease;
    border-left: 1px solid var(--border);
  }

  .nav.open {
    right: 0;
  }

  .nav a {
    font-size: 18px;
  }
}
</style>
