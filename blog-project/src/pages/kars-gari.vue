<template>

<q-page class="row justify-center">
    <div class="container">
      <div class="row content-wrapper" style="margin: 5%">
        <div class="column column-left">
         <center><h3>{{ $t('karsgari.title') }}</h3></center>

          <div class="image-container text-center">
            <img
              src="../assets/images/kars-gari/kars-gari.png"
              alt="İhsan Ozanoğlu"
              class="img-fluid"
            />
          </div>
          <p>{{ $t('karsgari.p1') }}</p>

          <div class="image-container text-center">
            <img
              src="../assets/images/kars-gari/kars-gari2.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <p>{{ $t('karsgari.p2') }}</p>


          <p >{{ $t('karsgari.p3') }}</p>

        </div>

        <div class="column column-right">
    <center>  <p>{{ $t('karsgari.p4') }}</p></center>
          <div class="image-container text-center">
            <img
              src="../assets/images/kars-gari/kars-tren-1.png"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="image-container text-center">
            <img
              src="../assets/images/kars-gari/kars-tren-2.png"
              alt=""
              class="img-fluid"
            />
          </div>

          <p>{{ $t('karsgari.p5') }}</p>

          <div class="image-container text-center">
            <img
              src="../assets/images/kars-gari/kars-tren-3.png"
              alt=""
              class="img-fluid"
            />
          </div>

          <p>{{ $t('karsgari.p6') }}</p>



          <p>
            <strong>{{ $t('karsgari.resources') }}:</strong>
            <a href="https://tr.wikipedia.org/wiki/Kars_Garı">
              tr.wikipedia.org
            </a>
            ,
            <a href="https://www.tcddtasimacilik.gov.tr/seferler/akyaka-kars">
              tcddtasimacilik.gov.tr
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
