<template>
<div>

  <q-layout view="lHr LpR lFr">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>

          </q-avatar>


        </q-toolbar-title>


  <q-btn color="teal"  label="Polyglot Thinker" style="width: 250px;margin-right: 5%; " class="q-mr-xs">
    <q-menu fit class="toolbar-menu">
      <q-list style="min-width: 100px;background-color: tan;">
        <q-separator />
        <q-item clickable to="/">
              <q-item-section> {{ $t('menu.Homepage') }}</q-item-section>
            </q-item>
            <q-separator />
        <q-item clickable to="/">
          <q-item-section> {{ $t('menu.Contact') }}</q-item-section>
        </q-item>
        <q-separator />
        <!-- Diğer menü öğeleri buraya eklenebilir -->
      </q-list>
    </q-menu>
  </q-btn>

<!-- <center>  <q-btn color="black" label="::::::"  style="width: 20px; margin-right: 500%;" class="q-mt-xs q-mr-xs">
        <q-menu fit class="toolbar-menu">
          <q-list style="min-width: 100px">

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
            </q-item>
          </q-list>
        </q-menu>
      </q-btn></center> -->


  <q-btn
          class="q-mt-xs q-mr-xs"
          :style="{ 'background-image': 'url(' + selectedLanguageFlag + ')', 'background-size': 'cover' }"
          icon="fas fa-globe"

        >
          <q-menu fit auto-close class="toolbar-menu">
            <q-list>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('tr')">
                <q-item-section>
                  <q-img src="../assets/images/turkish-flag.png" style="width: 30px; margin: 0px;" />
                </q-item-section>
              </q-item>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('en')">
                <q-item-section>
                  <q-img src="../assets/images/english-flag.png" style="width: 30px; margin: 0px;" />
                </q-item-section>
              </q-item>
              <q-item class="text-primary" clickable v-ripple @click="changeLanguage('fr')">
                <q-item-section>
                  <q-img src="../assets/images/french-flag.png" style="width: 30px; margin: 0px;" />
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

  <q-avatar square size="250px" font-size="252px" color="teal" text-color="white" style="border-radius: 20px; margin-top: 20px;">
  <q-img src="https://i.idefix.com/pimages/Content/Uploads/ArtistImages/artist__246461.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
</q-avatar>


<q-avatar square size="250px" font-size="252px" color="teal" text-color="white" style="border-radius: 20px; margin-top: 20px;">
  <q-img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Mustafa_Kemal_Atat%C3%BCrk_%28renklendirilmi%C5%9F%29_7.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
</q-avatar>

      </center>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated style="margin-top: 10%;">
      <!-- right  drawer content -->
      <center>   <div class="q-pa-md flex-center">
        <q-badge color="teal" class="text-h6">
    {{ currentDateTime }}
        </q-badge>
      </div></center>

      <div class="q-gutter-md row items-start flex-center">
        <q-date v-model="currentDate" mask="YYYY-MM-DD" color="blue" />
        <!-- <q-time v-model="currentTime" mask="HH*mm**ss" with-seconds color="blue"/> -->
     <br>{{ $t('rightSidebar.PublishDate')}}
        <q-date v-model="publishDate" mask="YYYY-MM-DD" color="blue" />
      </div>
    </q-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>

  </q-layout>
  <center>
    <q-footer elevated>
  <q-toolbar>
    <q-toolbar-title class="text-caption">@ {{ $t('footer.copyright')}}</q-toolbar-title>
  </q-toolbar>
</q-footer>

      </center>


    </div>
</template>

<script setup lang="ts">
import { ref,computed,onMounted} from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const router = useRouter();
const publishDate='2024-03-21';
const { locale: i18n, t } = useI18n({ useScope: 'global' })
const selectedLanguage = ref('en');

const currentDateTime = ref<string>(new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }).slice(0, 19));
const currentDate = ref<string>(new Date().toISOString().slice(0, 10));
  const currentTime = ref<string>('');

const updateCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  currentTime.value = `${hours}*${minutes}**${seconds}`;
};
onMounted(() => {
  setInterval(() => {
    currentDateTime.value = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }).slice(0, 19);
    currentDate.value = new Date().toISOString().slice(0, 10);
    currentTime.value = new Date().toLocaleTimeString('tr-TR', { timeZone: 'Europe/Istanbul' }).slice(0, 5);
  }, 1000); // Her saniye güncelle
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000); // Her saniye güncelle
});



const goToHomePage = () => {
  router.push('/');
};
const changeLanguage = (locale: any) => {
  console.log(locale);
  selectedLanguage.value = locale;
  console.log(selectedLanguage.value);
  i18n.value = locale;
};
const selectedLanguageFlag = computed(() => {
  switch (selectedLanguage.value) {
    case 'tr':
      return 'https://polyglotthinker.com/images/turkish-flag.png';
      case 'en':
      return 'https://polyglotthinker.com/images/english-flag.png';
      case 'fr':
      return 'https://polyglotthinker.com/images/french-flag.png';
    default:
      return '';
  }
});
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
const menu = t('menu.Homepage') ;


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
