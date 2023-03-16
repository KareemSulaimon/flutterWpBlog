<script lang="ts" setup>
import useWpApi from '~~/composables/useWpApi';

const {data: posts} = await useWpApi().getPosts<any>()
      
</script>

<template>
<main class="all" >

      <page-header />

        <div class="cards">
        <card-media
        v-for="post in posts"
        :key="post.id"
        :image = "post._embedded['wp:featuredmedia'][0].source_url"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"
        :date-posted="post.date"
         class="card_detail" 
        />
 
<!-- page footer from component --> 

</div>
<page-footer />

<!--  payment link -->

<flutter />

</main>
</template>

<style lang="scss" scoped >
.cards {
       display: grid;
       grid-template-columns: repeat(1, minmax(0, 1fr));
       gap: 1rem;   
}


@media (min-width: 640px) {
    .cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}


@media (min-width: 1280px) {
    .cards {
        grid-template-columns: repeat(3, minmax(0, 1fr));
       
    }
}


</style>