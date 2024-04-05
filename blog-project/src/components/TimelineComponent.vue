<template>
  <div class="row">


    <div class="q-pa-md">
    <q-timeline :layout="layout" :side="side" color="secondary">

      <q-timeline-entry
        :title="b"
        subtitle="March 21, 2024"
        side="left"
      >
        <div>
          {{ $t('myblogmain.detail')}}
        </div>
      </q-timeline-entry>

      <q-timeline-entry
      :title="a"
        subtitle="April 4, 2024"
        side="right"
        color="orange"
        icon="done_all"
      >
        <div>
          {{ $t('kafkascephesi.title_main')}}

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
watch(() => i18n.value, () => {
  a.value = t('kafkascephesi.title');
  b.value = t('myblogmain.title');
});

</script>

