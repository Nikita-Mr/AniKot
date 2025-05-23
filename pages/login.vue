<script setup>
definePageMeta({
  middleware: ['is-auth'],
});
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const email = useState('email', () => '');
const password = useState('password', () => '');
async function login() {
  const user = await $fetch('/api/users/login', {
    method: 'post',
    body: {
      email: email.value,
      password: password.value,
    },
  });
  if (user) {
    authStore.login(user);
    await navigateTo('/cabinet');
  }
}
</script>

<template>
  <div
    class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
    style="font-family: 'Work Sans', 'Noto Sans', sans-serif"
  >
    <AppAlert :alert="'В разработке. По сути просто скопировал пока что код. Много багов которые мне не поддаются, пока-что. И кстате почему то не могу взаимодействовать с темплейтом логина и пароля, а конкретно с классами, сразу крашит'" />

    <div class="layout-container flex h-full grow flex-col">
      <form
        class="px-40 flex flex-1 justify-center py-5"
        @submit.prevent="login"
      >
        <div
          class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1"
        >
          <h1
            class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5"
          >
            С возвращением
          </h1>
          <p
            class="text-[#a5a5a5] text-base font-normal leading-normal pb-3 pt-1 px-4"
          >
            Войдите в AniKot
          </p>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-base font-medium leading-normal pb-2">email</p>
              <input
                placeholder="Введите email..."
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131b] focus:outline-0 focus:ring-0 border border-[#cfd8e7] bg-[#f8f9fc] focus:border-[#cfd8e7] h-14 placeholder:text-[#4c6a9a] p-[15px] text-base font-normal leading-normal"
                v-model="email"
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-base font-medium leading-normal pb-2">Пароль</p>
              <input
                placeholder="Введите Пароль..."
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131b] focus:outline-0 focus:ring-0 border border-[#cfd8e7] bg-[#f8f9fc] focus:border-[#cfd8e7] h-14 placeholder:text-[#4c6a9a] p-[15px] text-base font-normal leading-normal"
                v-model="password"
              />
            </label>
          </div>
          <div class="flex px-4 py-3">
            <button type="submit" class="random block m-[auto]">
              Войти
            </button>
          </div>
          <p
            class="text-[#4c6a9a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
          >
            Забыли пароль или email?
          </p>
          <nuxt-link to="/register">
            <p
              class="text-[#4c6a9a] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
            >
              Нет аккаунта? Зарегестрируйся
            </p>
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-input::placeholder {
  color: #6b7280;
}
.form-input {
  color: #6b7280;
  background-color: #181818 !important;
  border: 1px solid #374151;
  border-radius: 0.375rem !important;
}
.dark\:focus\:ring-primary-400:focus:is(.dark *) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(#fff) / var(--tw-ring-opacity, 1) !important;
}

.random {
  width: 50% !important;
}
</style>
