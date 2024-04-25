<template>

  <!-- *#* card start -->
  <div class="q-pa-md row items-start q-gutter-md">


    <div class="blog-content">

      <q-card class="blog-card" flat bordered>
        <q-img
          :src="$props.imgUrl"
          style=" height: 250px; background-color:#ccc;"
          fit="scale-down"
        />

        <q-card-section>
          <div class="text-overline text-orange-9">{{ $props.date }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            <span v-if="$props.title.length<25">
              {{ $props.title }}
            </span>

            <span v-else>
              {{ $props.title.substring(0,25) }}
              <span>...</span>
            </span>

          </div>
          <div class="text-caption text-grey" style="height: 50px;">

            <span v-if="$props.description.length<100">
              {{ $props.description }}
            </span>

            <span v-else>
              {{ $props.description.substring(0,100) }}
              <span>...</span>
            </span>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="teal" label="Detail" :to="$props.detailUrl" />

          <q-space />


        </q-card-actions>


      </q-card>

    </div>





    </div>
  <!-- *#* card end -->


<!-- old card -->
<!--
  <div class="row">

<div class="col-lg-3 col-md-3 col-sm-3">
  <article class="post-grid mb-5" style="border: 5px yellowgreen solid;padding:5%; margin:2%">
    <a class="post-thumb mb-4 d-block position-relative" href="/#/canakkale-turkusu-yazari/">
     <center> <img src="../assets/images/canakkale-blog.jpeg" style="width: 100%;height: 300px;  max-width: max-content;" alt="" class="img-fluid"></center>
      <div class="overlay"></div>
    </a>

    <div class="post-content-grid">
      <div class="label-date">
        <span class="day">21</span><br>
        <span class="month text-uppercase">{{ $t('months.march')}}</span>
      </div><br>
      <div style="position: relative;">
      <span style=" position: absolute;   right: 0; " class="cat-name text-color font-extra font-sm text-uppercase letter-spacing">{{ $t('categories.research')}} - {{ $t('categories.attempt')}}</span></div>
      <center>      <h5 class="post-title mt-2"><a href="/#/canakkale-turkusu-yazari/" class="text-black">{{ $t('myblogmain.title')}}</a></h5></center>
      <p class="text-black">{{ $t('myblogmain.detail')}}</p>
    </div>
  </article>
</div>

<div class="col-lg-3 col-md-3 col-sm-3">
  <article class="post-grid mb-5" style="border: 5px yellowgreen solid;padding:5%; margin:2%">
    <a class="post-thumb mb-4 d-block position-relative" href="/#/kafkas-cephesi/">
     <center> <img src="../assets/images/kafkas-cephesi/kafkas-cephesi.png" style="width: 100%;height: 300px; max-width: max-content;" alt="" class="img-fluid"></center>
      <div class="overlay"></div>
    </a>

    <div class="post-content-grid">
      <div class="label-date">
        <span class="day">4</span><br>
        <span class="month text-uppercase">{{ $t('months.april')}}</span>
      </div><br>
      <div style="position: relative;">
      <span style=" position: absolute;   right: 0; " class="cat-name text-color font-extra font-sm text-uppercase letter-spacing">{{ $t('categories.research')}} - {{ $t('categories.attempt')}}</span></div>
      <center>      <h5 class="post-title mt-2"><a href="/#/kafkas-cephesi/" class="text-black">{{ $t('kafkascephesi.title')}}</a></h5></center>
      <p class="text-black">{{ $t('kafkascephesi.title_main')}}</p>
    </div>
  </article>
</div>


<div class="col-lg-3 col-md-3 col-sm-3">
  <article class="post-grid mb-5" style="border: 5px yellowgreen solid;padding:5%; margin:2%">
    <a class="post-thumb mb-4 d-block position-relative" href="/#/kars-gari/">
     <center> <img src="../assets/images/kars-gari/kars-gari2.png" style="width: 100%;height: 300px; max-width: max-content;" alt="" class="img-fluid"></center>
      <div class="overlay"></div>
    </a>

    <div class="post-content-grid">
      <div class="label-date">
        <span class="day">10</span><br>
        <span class="month text-uppercase">{{ $t('months.april')}}</span>
      </div><br>
      <div style="position: relative;">
      <span style=" position: absolute;   right: 0; " class="cat-name text-color font-extra font-sm text-uppercase letter-spacing">{{ $t('categories.research')}} - {{ $t('categories.attempt')}}</span></div>
      <center>      <h5 class="post-title mt-2"><a href="/#/kars-gari/" class="text-black">{{ $t('karsgari.title')}}</a></h5></center>
      <p class="text-black">{{ $t('karsgari.title_main')}}</p>
    </div>
  </article>
</div>

<div class="col-lg-3 col-md-3 col-sm-3">
  <article class="post-grid mb-5" style="border: 5px yellowgreen solid;padding:5%; margin:2%">
    <a class="post-thumb mb-4 d-block position-relative" href="/#/ozan-cobanoglu/">
     <center> <img src="../assets/images/ozan-cobanoglu/ozan-cobanoglu.png" style="width: 100%;height: 300px; max-width: max-content;" alt="" class="img-fluid"></center>
      <div class="overlay"></div>
    </a>

    <div class="post-content-grid">
      <div class="label-date">
        <span class="day">13</span><br>
        <span class="month text-uppercase">{{ $t('months.april')}}</span>
      </div><br>
      <div style="position: relative;">
      <span style=" position: absolute;   right: 0; " class="cat-name text-color font-extra font-sm text-uppercase letter-spacing">{{ $t('categories.research')}} - {{ $t('categories.attempt')}}</span></div>
      <center>      <h5 class="post-title mt-2"><a href="/#/ozan-cobanoglu/" class="text-black">{{ $t('karsli_aktor.title')}}</a></h5></center>
      <p class="text-black">{{ $t('karsli_aktor.title_main')}}</p>
    </div>
  </article>
</div>

</div> -->





  </template>

  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({

    imgUrl: {
      type: String,
      default: ""
    },
    detailUrl: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  })
  </script>


  <style scoped>
  .post-thumb {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }
  .post-thumb .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Yarı şeffaf bir siyah overlay */
    opacity: 0;
    transition: opacity 0.3s;
  }
  .post-thumb:hover .overlay {
    opacity: 1; /* Hover yapıldığında opacity 1 olacak şekilde */
  }
  .label-date {
    background-color: #f8f9fa; /* Tarih alanı arkaplan rengi */
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
  }
  .cat-name {
    background-color: #007bff; /* Kategori adı arkaplan rengi */
    color: #fff;
    padding: 2px 10px;
    border-radius: 5px;
    display: inline-block;
  }
  .post-title a {
    color: #333; /* Başlık metni rengi */
    transition: color 0.3s;
  }
  .post-title a:hover {
    color: #007bff; /* Hover yapıldığında başlık metni rengi */
  }


  .blog-card{
    width: 100%;
    max-width: 350px;

  }

  .blog-content{
    box-shadow: 2px 2px 10px 4px #ddd;

  }
  </style>




