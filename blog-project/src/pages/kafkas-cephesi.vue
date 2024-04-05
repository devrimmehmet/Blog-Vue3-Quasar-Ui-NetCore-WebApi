<template>

  <q-page class="row justify-center">
      <div class="container">
        <div class="row content-wrapper" style="margin: 5%">
          <div class="column column-left">
            <h3>{{ $t('kafkascephesi.title') }}</h3>

            <div class="image-container text-center">
              <img

                src="../assets/images/kafkas-cephesi/kafkas-cephesi.png"
                alt="Kafkas Cephesi"

                class="img-fluid"
              />
            </div>
            <p>{{ $t('kafkascephesi.p1') }}</p>

            <div class="image-container text-center">
              <img
              src="../assets/images/kafkas-cephesi/enverpasa.png"
                alt="Enver Paşa"
                style="height: 250px;width: 350px;"
                class="img-fluid"
              />
            </div>
            <p>{{ $t('kafkascephesi.p2') }}</p>
            <p >{{ $t('kafkascephesi.p3') }}</p>
            <div class="image-container text-center">
              <img
                src="../assets/images/kafkas-cephesi/Kanli-tabya.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="image-container text-center">
              <img
                src="../assets/images/kafkas-cephesi/kazim-devrim-KazimK.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <p>{{ $t('kafkascephesi.p4') }}</p>



          </div>

          <div class="column column-right">
            <div class="image-container text-center">
              <img
                src="../assets/images/kafkas-cephesi/Sarikamis-genclik-suhedanin-izinde.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <p>{{ $t('kafkascephesi.p5') }}</p>
            <p>{{ $t('kafkascephesi.p6') }}</p>
            <div class="image-container text-center">
              <img
                src="../assets/images/kafkas-cephesi/savas-saglik-mudahelesi1.png"
                alt=""
                class="img-fluid"
              />
            </div>

            <p>{{ $t('kafkascephesi.p7') }}</p>
            <p>{{ $t('kafkascephesi.p8') }}</p>

            <div class="image-container text-center">
              <img
                src="../assets/images/kafkas-cephesi/savas-saglik-mudahelesi2.png"
                alt=""
                class="img-fluid"
              />
            </div>

            <div class="image-container text-center">
              <img
                src="../assets/images/kafkas-cephesi/savas-saglik-mudahelesi3.png"
                alt=""
                class="img-fluid"
              />
            </div>

            <p>{{ $t('kafkascephesi.p9') }}</p>
            <p>{{ $t('kafkascephesi.p10') }}</p>
            <p>{{ $t('kafkascephesi.p11') }}</p>

            <p>
              <strong>{{ $t('kafkascephesi.resources') }}:</strong>
              <a href=" https://ataturkansiklopedisi.gov.tr/bilgi/enver-pasa-1882-1922/">
                Atatürk Ansiklopedisi
              </a>
              ,
              <a href="https://tr.wikipedia.org/wiki/Kafkasya_Cephesi">
                Wikipedia
              </a>
              ,
              <a href="https://www.ttk.gov.tr/belgelerle-tarih/i-dunya-savasinda-canakkale-savaslari/">
                TTK - Belgelerle Tarih
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
