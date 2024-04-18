<template>
  <div class="row">


    <div class="q-pa-md">
    <q-timeline :layout="layout" :side="side" color="secondary">

      <q-timeline-entry
        :title="b"
        subtitle="March 21, 2024"
        side="left"
        icon="done_all"
      >
        <div>
          {{ $t('myblogmain.detail')}}
        </div>
      </q-timeline-entry>

      <q-timeline-entry
      :title="a"
        subtitle="April 4, 2024"
        side="right"
        icon="done_all"
      >
        <div>
          {{ $t('kafkascephesi.title_main')}}

        </div>
      </q-timeline-entry>

      <q-timeline-entry
      :title="c"
        subtitle="April 10, 2024"
        side="right"
        icon="done_all"
      >
        <div>
          {{ $t('karsgari.title_main')}}

        </div>
      </q-timeline-entry>

      <q-timeline-entry
      :title="d"
        subtitle="April 13, 2024"
        side="right"
        color="orange"
        icon="done_all"
      >
        <div>
          {{ $t('karsli_aktor.title_main')}}

        </div>
      </q-timeline-entry>


    </q-timeline>
  </div>


</div>
</template>

<style scoped>

</style>


<script setup lang="ts">
const layout = ref<'dense' | 'comfortable' | 'loose' | undefined>('dense');
const side = ref<'left' | 'right'>('left');






import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
const { locale: i18n, t } = useI18n({ useScope: 'global' });
const a = ref(t('kafkascephesi.title'));
const b = ref(t('myblogmain.title'));
const c = ref(t('karsgari.title'));
const d = ref(t('karsli_aktor.title'));
watch(() => i18n.value, () => {
  a.value = t('kafkascephesi.title');
  b.value = t('myblogmain.title');
  c.value = t('karsgari.title');
  d.value = t('karsli_aktor.title');
});

</script>

