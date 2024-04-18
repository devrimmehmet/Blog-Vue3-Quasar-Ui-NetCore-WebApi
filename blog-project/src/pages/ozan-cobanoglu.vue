<template>

  <q-page class="row justify-center">
      <div class="container">
        <div class="row content-wrapper" style="margin: 5%">
          <div class="column column-left">
           <center><h3>{{ $t('karsli_aktor.title') }}</h3></center>

            <div class="image-container text-center">
              <img
                src="../assets/images/ozan-cobanoglu/ozan-cobanoglu.png"
                alt="İhsan Ozanoğlu"
                class="img-fluid"
              />
            </div>
            <p>{{ $t('karsli_aktor.p1') }}</p>

            <div class="image-container text-center">
              <img
                src="../assets/images/ozan-cobanoglu/ozan-cobanoglu2.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <p>{{ $t('karsli_aktor.p2') }}</p>


            <p >{{ $t('karsli_aktor.p3') }}</p>

          </div>

          <div class="column column-right">
      <center>  <p>{{ $t('karsli_aktor.p4') }}</p></center>
            <div class="image-container text-center">
              <img
                src="../assets/images/ozan-cobanoglu/ozan-cobanoglu3.png"
                alt=""
                class="img-fluid"
              />
            </div>


            <p v-for="(item, index) in items" :key="index">{{ item }}</p>





            <p>
              <strong>{{ $t('karsli_aktor.resources') }}:</strong>
              <a href="https://tr.wikipedia.org/">
                tr.wikipedia.org
              </a>
              ,
              <a href="https://www.haber61.net/biyografi/ozan-cobanoglu-kimdir-h442612.html">
                Haber 61
              </a>
              ,
              <a href="https://www.beyazperde.com/sanatcilar/sanatci-534154/filmografi/">
                Beyaz Perde
              </a>

            </p>
          </div>
        </div>
      </div>
    </q-page>

  </template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      items: this.$t('karsli_aktor.p5').split('  ')
    };
  }
});
</script>
  <style scoped>
  .content-wrapper {
    display: flex; /* Make columns side-by-side */
    justify-content: space-between; /* Distribute columns evenly */
    /* Adjust gap for desired spacing between columns */
    gap: 2rem;
  }

  .column {
    flex: 1; /* Make columns equal width */
    /* Adjust padding for desired spacing within columns */
    padding: 1rem;
  }

  .image-container {
    margin-bottom: 1rem; /* Add some space below images */
  }

  /* Add any additional image styling as needed */
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  </style>
