<script lang="ts" setup>
import useWpApi from '~~/composables/useWpApi';

const {params} = useRoute();

  const {data: posts} = await useWpApi().getPost<any>(params.slug as  string);
  const {data: morePosts} = await useWpApi().getPosts<any>();

  const post = posts.value[0]

</script>

<template>
<main class="all">
 

    <PageHeader />
        
    <div class="detail">  
        <span class=" frame--3">
                <h5>{{post._embedded["author"][0].name}} </h5>
                <small>{{ post.date.slice(0,10) }}</small>
        </span>

        <div class="frame-9">
         <h5>{{ post.title.rendered }} </h5>
         <div class="detail_frame-9 paragraph" >
            <div v-html="post.excerpt.rendered">
            </div>
         </div>
        </div>

    <div class="detail_image">
      <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" >
   </div>
      
        
            <div v-html="post.content.rendered" class="paragraph"> 
                </div>

                
               
    </div>

    <h5 class="detail_article">More Articles</h5>

    <div class="cardWrapper">
     <card-media
        v-for="post in morePosts"
        :key="post.id"
        :image = "post._embedded['wp:featuredmedia'][0]?.source_url"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"
        :date-posted="post.date"
        class="card_detail"
        />
               
    
    </div>

</main>
</template>

<style lang="scss" scoped>
.detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
    align-items: center;
      

       .paragraph {
        display: flex;
        flex-flow: column;
        color: #6E6E6E;
        font-weight: 400;
        gap: 1rem;
        font-size: 18px;
        width: 100%;

       * img {
        width: 60%;
        object-fit: contain;
       }

      * iframe {
        width: 60%;
        object-fit: contain;
      }

        p {
            display: flex;
           flex-direction: column;
            width: 100%;

        }
        }

       

    .frame-9 {
        display: flex;
          gap: 1rem;
          flex-flow: column;

        h5 {
        font-family: SF Pro Display;
        font-size: 40px;
        font-weight: 900;
        color:  #2C2C2C;
        margin-top: .2rem;

        }

       
    }
    .detail_image  {
        align-self: center;
        padding: 2rem 0;
        width: 60%;
      
        img {
            object-fit: contain;
            width: 100%;
          height: 100%;
    }
}
   

}
   
.detail_article {
        width: 100%;
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 900;
        margin-top: 5rem;
        margin-bottom: 2rem;
        color: #2C2C2C;

    }

    .cardWrapper {
   display: flex;
    height: 550px;
    flex-wrap: wrap;
    overflow: hidden;
   
    .card_detail{
        height: 100%;
        width: 32%;
        gap: 1.25rem;
        
    }
}

</style>