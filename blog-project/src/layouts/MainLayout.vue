<template>
  <q-layout view="lHr LpR lFr">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>

          </q-avatar>
          Polyglot Thinker
        </q-toolbar-title>
        <q-btn
          round
          class="q-mt-xs q-mr-xs"
          style="background-color: red; width: 30px; "
          icon="fas fa-globe"
        >
          <q-menu auto-close class="toolbar-menu">
            <q-list>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('tr')">
                <q-item-section>
                  <q-img src="src/path/to/turkish-flag.png" style="width: 30px; margin: 0px;" />
                </q-item-section>
              </q-item>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('en')">
                <q-item-section>
                  <q-img src="src/path/to/english-flag.png" style="width: 30px; margin: 0px;" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar> <!-- Bu kısmı ekledim -->
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <!-- Left drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
      <!-- Right drawer content -->
    </q-drawer>

    <q-page-container>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref,computed} from 'vue';
import { useI18n } from 'vue-i18n';

const { locale: i18n, t } = useI18n({ useScope: 'global' })
const selectedLanguage = ref();


const changeLanguage = (locale: any) => {
  console.log(locale);
  selectedLanguage.value = locale;
  console.log(selectedLanguage.value);
  i18n.value = locale;
};
const selectedLanguageFlag = computed(() => {
  switch (selectedLanguage.value) {
    case 'tr':
      return 'src/path/to/turkish-flag.png';
    case 'en':
      return 'src/path/to/english-flag.png';
    default:
      return '';
  }
});
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);


const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};



</script>

<style scoped>
.language-selector {
  display: flex;
}

.language-selector img {
  width: 30px;
  height: 20px;
  margin-right: 10px;
}
</style>
