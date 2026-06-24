<script setup lang="ts">
import { ref } from "vue";

const copiedKey = ref("");

async function copyToClipboard(text: string, key: string) {
  await navigator.clipboard.writeText(text);
  copiedKey.value = key;
  setTimeout(() => (copiedKey.value = ""), 2000);
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container contact-inner">
      <p class="section-label">Contact</p>
      <h2 class="contact-title">Get In Touch</h2>
      <p class="contact-desc">
        새로운 기회에 열려있습니다.<br />
        프로젝트 제안이나 궁금한 점이 있으시면 편하게 연락해주세요.
      </p>
      <div class="contact-links">
        <button
          class="contact-btn"
          @click="copyToClipboard('didguswls9@naver.com', 'email')"
        >
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
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>{{
            copiedKey === "email" ? "복사됨!" : "didguswls9@naver.com"
          }}</span>
        </button>
        <button
          class="contact-btn"
          @click="copyToClipboard('010-6662-7890', 'phone')"
        >
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
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span>{{ copiedKey === "phone" ? "복사됨!" : "010-6662-7890" }}</span>
        </button>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 양현진. Built with Vue 3 + Vite.</p>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  padding: 100px 0;
}

.contact-inner {
  text-align: center;
  max-width: 600px;
}

.contact-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 36px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  cursor: pointer;
  font-family: inherit;
}

.contact-btn:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
  color: var(--accent);
}

.footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
}

.footer p {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
}
</style>
