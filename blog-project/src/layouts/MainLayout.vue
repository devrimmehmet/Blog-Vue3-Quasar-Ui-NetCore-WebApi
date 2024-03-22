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


      <q-btn color="accent" label="Anasayfa" style="width: 100px;" class="q-mt-xs q-mr-xs">

        <q-menu fit>
          <q-list style="min-width: 100px">
            <!-- <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item> -->
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="brown" label="Blogs"  style="width: 100px;" class="q-mt-xs q-mr-xs">
        <q-menu fit class="toolbar-menu">
          <q-list style="min-width: 100px">
            <!-- <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item> -->
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="indigo" label="Contact"  style="width: 100px;" class="q-mt-xs q-mr-xs">
        <q-menu fit class="toolbar-menu">
          <q-list style="min-width: 100px">
            <!-- <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">New tab</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">New incognito tab</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Recent tabs</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">History</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Downloads</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Settings</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>
                <q-item-label lines="1">Help & Feedback</q-item-label>
              </q-item-section>
            </q-item>-->
          </q-list>
        </q-menu>
      </q-btn>

  <q-btn
          class="q-mt-xs q-mr-xs"
          :style="{ 'background-image': 'url(' + selectedLanguageFlag + ')', 'background-size': 'cover' }"
          icon="fas fa-globe"

        >
          <q-menu fit auto-close class="toolbar-menu">
            <q-list>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('tr')">
                <q-item-section>
                  <q-img src="../assets/images/flags/turkish-flag.png" style="width: 30px; margin: 0px;" />
                </q-item-section>
              </q-item>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('en')">
                <q-item-section>
                  <q-img src="../assets/images/flags/english-flag.png" style="width: 30px; margin: 0px;" />
                </q-item-section>
              </q-item>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('fr')">
                <q-item-section>
                  <q-img src="../assets/images/flags/french-flag.png" style="width: 30px; margin: 0px;" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar> <!-- Bu kısmı ekledim -->
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated style="margin-top: 10%;">
      <!-- Left drawer content -->
      <center>
        <q-avatar square size="250px" font-size="252px" color="teal" text-color="white" style="border-radius: 20px;">
  <q-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOf69pf7eggUiE1BS0pg99QVReNj5oI4-qEQ&usqp=CAU" style="width: 100%; height: 100%; object-fit: cover;" />
</q-avatar>

      </center>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated style="margin-top: 10%;">
          <!-- right  drawer content -->
      <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-badge color="teal">
        Model: {{ model }}
      </q-badge>
      <q-badge color="purple" text-color="white" class="q-ma-md">
        Mask: YYYY-MM-DD HH:mm
      </q-badge>
    </div>

    <div class="q-gutter-md row items-start">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
    </div>
  </div>
    </q-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>

  </q-layout>
  <center>  <q-footer elevated>
    <q-toolbar>
          <q-toolbar-title>© Copyright 2024 - Polyglot Thinker. All Rights Reserved. Polyglot Thinker</q-toolbar-title>
        </q-toolbar>
      </q-footer></center>
</template>

<script setup lang="ts">
import { ref,computed} from 'vue';
import { useI18n } from 'vue-i18n';

const { locale: i18n, t } = useI18n({ useScope: 'global' })
const selectedLanguage = ref('en');


const changeLanguage = (locale: any) => {
  console.log(locale);
  selectedLanguage.value = locale;
  console.log(selectedLanguage.value);
  i18n.value = locale;
};
const selectedLanguageFlag = computed(() => {
  switch (selectedLanguage.value) {
    case 'tr':
      return './src/assets/images/flags/turkish-flag.png';
      case 'en':
      return './src/assets/images/flags/english-flag.png';
      case 'fr':
      return './src/assets/images/flags/french-flag.png';
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
}
</style>
