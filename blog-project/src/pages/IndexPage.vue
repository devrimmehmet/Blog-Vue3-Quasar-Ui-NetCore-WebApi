<template>

  <q-page class="row items-start justify-evenly">

        <div class="container">
            <div class="row">

              <my-blogs title="Author of Çanakkale Folk Song" date="21/03/2024"
                imgUrl="/images/canakkale-blog.jpeg"
                detailUrl="/canakkale-turkusu-yazari/"
                description=" Click to go to the essay I prepared based on my research about Çanakkale Folk Song and its author.">
              </my-blogs>

              <my-blogs title="Kafkas Front" date="04/04/2024"
              imgUrl="/images/kafkas-cephesi/kafkas-cephesi.png"
              detailUrl="/kafkas-cephesi/"
                description="I would like to tell you a little about the Caucasian Front, which I researched and discovered by traveling.">
              </my-blogs>

              <my-blogs title="Kars Station" date="10/04/2024"
              imgUrl="/images/kars-gari/kars-gari2.png"
              detailUrl="/kars-gari/"
                description="Hello, today I would like to tell you about Kars Station.">
              </my-blogs>

              <my-blogs title="Who is Ozan Çobanoğlu?" date="13/04/2024"
              imgUrl="/images/ozan-cobanoglu/ozan-cobanoglu.png"
              detailUrl="/ozan-cobanoglu/"
                description="Hello, today I would like to talk to you about Ozan Çobanoğlu, an actor from KARS">
              </my-blogs>


            </div>
        </div>

  </q-page>
</template>

<script setup lang="ts">
import MyBlogs from 'components/myBlogs.vue'

</script>
