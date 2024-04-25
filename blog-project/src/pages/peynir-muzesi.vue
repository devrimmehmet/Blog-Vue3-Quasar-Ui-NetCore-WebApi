<template>

<q-page class="row justify-center">
    <div class="container">
      <div class="row content-wrapper" style="margin: 5%">
        <div class="column column-left">
          <h3>{{ $t('canakkale.title') }}</h3>

          <div class="image-container text-center">
            <img
              src="../assets/images/ihsan-OZANOglu.jpeg"
              alt="İhsan Ozanoğlu"
              class="img-fluid"
            />
          </div>
          <p>{{ $t('canakkale.p1') }}</p>

          <div class="image-container text-center">
            <img
              src="../assets/images/ihsan-OZANOglu2.jpeg"
              alt=""
              class="img-fluid"
            />
          </div>
          <p>{{ $t('canakkale.p3') }}</p>
          <div class="image-container text-center">
            <img
              src="../assets/images/ihsan-OZANOglu4.jpeg"
              alt=""
              class="img-fluid"
            />
          </div>

          <p >{{ $t('canakkale.p5') }}</p>

        </div>

        <div class="column column-right">
          <div class="image-container text-center">
            <img
              src="../assets/images/Kemani-KEVSER.jpeg"
              alt=""
              class="img-fluid"
            />
          </div>
          <p>{{ $t('canakkale.p2') }}</p>


          <div class="image-container text-center">
            <img
              src="../assets/images/ihsan-OZANOglu3.jpeg"
              alt=""
              class="img-fluid"
            />
          </div>
          <p>{{ $t('canakkale.p4') }}</p>


          <p>
            <strong>{{ $t('canakkale.kaynakca') }}:</strong>
            <a href="https://teis.yesevi.edu.tr/madde-detay/ozanoglu-ihsan-ozanoglu">
              teis.yesevi.edu.tr
            </a>
            ,
            <a href="https://kastamonu.ktb.gov.tr/TR-94799/asik-ihsan-ozanoglu.html">
              kastamonu.ktb.gov.tr
            </a>
            ,
            <a href="https://www.kastamonuistiklal.com/canakkale-turkusunun-yazarinin-kastamonulu-oldugunu-biliyor-musunuz">
              kastamonuistiklal.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </q-page>

</template>

<script setup lang="ts">

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
