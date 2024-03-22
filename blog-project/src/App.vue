<!-- App.vue -->


<template>
  <q-layout view="lHr LpR lFr">
    <MainLayout :changeLocale="changeLocale">
  <router-view />
</MainLayout>
  </q-layout>
</template>

<script setup lang="ts">
import { createI18n } from 'vue-i18n';
import messages from './i18n/index'; // Import your messages file

const i18n = createI18n({
  locale: 'tr', // Set your desired default locale here
  messages,
});

const changeLocale = (locale: 'en' | 'tr') => {
  i18n.global.locale = locale;
  console.log(`Language changed to: ${locale}`); // Log for verification
};

// Örnek bir dil değişikliği işlevi
const toggleLocale = () => {
  const newLocale = i18n.global.locale === 'tr' ? 'en' : 'tr';
  changeLocale(newLocale);
};

</script>
