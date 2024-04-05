<template>
 <q-page class="row items-center justify-evenly q-gutter-md">
    <div class="container centered-content">
        <h2> <a href="mailto:admin@polyglotthinker.com">
              <b><span style="color: red;">E-Mail</span></b>
            </a></h2>
        <br>
        <br>
        <h2>{{ $t('maintance.maintancenotice1')}}</h2>
        <p>      {{ $t('maintance.maintancenotice2')}}</p>
    </div>
</q-page>

</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
const { locale: i18n, t } = useI18n({ useScope: 'global' });
</script>
<style scoped>
h1 {
    color: #333;
}
p {
    color: #666;
}

.centered-content {
    text-align: center;
}
a {
    color: #000; /* Bağlantıların genel rengi */
    text-decoration: none; /* Bağlantılardaki altı çizili metni kaldır */
}

    a:hover {
        opacity: 0.7; /* Fare ile üzerine gelindiğinde opaklık değişikliği */
    }
</style>
