<script setup lang="ts">
import { ref } from "vue";
import MailIcon from "../assets/icons/mail.svg";
import PhoneIcon from "../assets/icons/phone.svg";

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
          <MailIcon width="20" height="20" />
          <span>{{
            copiedKey === "email" ? "복사됨!" : "didguswls9@naver.com"
          }}</span>
        </button>
        <button
          class="contact-btn"
          @click="copyToClipboard('010-6662-7890', 'phone')"
        >
          <PhoneIcon width="20" height="20" />
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
