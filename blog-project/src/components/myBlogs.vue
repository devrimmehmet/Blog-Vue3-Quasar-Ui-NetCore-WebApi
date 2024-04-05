<template>
  <div class="row">

  <div class="col-lg-6 col-md-6 col-sm-6">
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

  <div class="col-lg-6 col-md-6 col-sm-6">
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
   <!--<div class="col-lg-4 col-md-4 col-sm-4">
    <article class="post-grid mb-5" style="border: 5px yellowgreen solid;padding:5%; margin:2%">
      <a class="post-thumb mb-4 d-block position-relative" href="/#/canakkale-turkusu-yazari/">
       <center> <img src="../assets/images/canakkale-blog.jpeg" style="width: 100%; max-width: max-content;" alt="" class="img-fluid"></center>
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
  </div> -->
</div>
</template>

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
</style>


<script setup lang="ts">

</script>


<!-- Bu bileşeni dışa aktar -->
<script>
export default {}
</script>
