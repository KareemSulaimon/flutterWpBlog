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
        />
</div>

<page-footer />



<flutter />

</main>
</template>

<style lang="scss">



</style>