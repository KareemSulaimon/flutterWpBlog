<script lang="ts" setup>
//  import from useWpApi composables ';

  import useWpApi from '~~/composables/useWpApi';

  const {params} = useRoute();

//  using  useWpetApi to get each post
  const {data: posts} = await useWpApi().getPost<any>(params.slug as  string);

  //  using  useWpetApi to get all posts

  const {data: morePosts} = await useWpApi().getPosts<any>(); 

  const post = posts.value[0];

  const selectedParagraph = ref<string>('');
  
  const paragraphs = ref<string[]>([]);

//   using DOM to parse DOM and get to manipulate it value,get the excess of all 
// this code is to firstParagraph and display them only when needed

  const parser = new DOMParser(); 

  const parsedHtml = parser.parseFromString(post.content.rendered, 'text/html');

  const firstParagraph = parsedHtml.getElementById('speakable-summary');

  const allParagraph =  parsedHtml.querySelectorAll('p');

  const arrayParagraph = Array.from(allParagraph);
  
  const filteredParagraph = arrayParagraph.filter(p => p.id !== "speakable-summary");
   
  selectedParagraph.value = firstParagraph ? firstParagraph.innerText :"no paragraph"

  paragraphs.value = filteredParagraph.map(p => p.innerText)

//   const secondParagraph = arrayParagraph[1]

//   const firstParagraphLink = firstParagraph?.querySelectorAll('a');

//  const filteredLinks = ref<string[]>([])

//  firstParagraphLink?.forEach(link => {

//     if(link.href.includes('https://techcrunch.com/newsletters')) {

//         filteredLinks.value.push(link.href)
    
//     } 
// });

// if (filteredLinks.value.length >= 1) {

//     selectedParagraph.value = secondParagraph ? secondParagraph.innerText :"no paragraph"

//     const filteredParagraph = arrayParagraph.filter((_, index) => index !== 1);

//      paragraphs.value = filteredParagraph.map(p => p.innerText);
     
// }else {      
//          selectedParagraph.value = firstParagraph ? firstParagraph.innerText :"no paragraph"
//     }


 





</script>

<template>
<main class="all">
 
    <PageHeader />
        
    <div class="detail">  
        <span class="detail_frame_3 frame--3">
                <h5>{{post._embedded["author"][0].name}} </h5>
                <small>{{ post.date.slice(0,10) }}</small>
        </span>

        <div class="detail_frame-9 frame-9">
         <h5>{{ post.title.rendered }} </h5>
         <div class="detail_frame-9_paragraph paragraph ">
            <div>
                {{ selectedParagraph }}
            </div>
         </div>
        </div>

    <div class="detail_image">
      <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" >
   </div>
      
        
    <div class="detail_paragraph paragraph " v-for="(paragraph, index) in paragraphs" :key="index" > 
      {{ paragraph}}
        </div>

                
               
    </div>

    <h5 class="detail_article">More Articles</h5>

    <div class="cards">

     <card-media
        v-for="post in morePosts"
        :key="post.id"
        :image = "post._embedded['wp:featuredmedia'][0]?.source_url"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"
        :date-posted="post.date"
        :category="post.category"
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
    width: 85%;
    align-items: flex-start;

   
      
    .paragraph {
        display: flex;
        flex-flow: column;
        color: #6E6E6E;
        font-weight: 400;
        margin-bottom: 10px;
        font-size: 15px;
        width: 100%;
        font-family: 'fontLight', sans-serif;

       * img {
        width: 80%;
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
      
        h5 {
        font-family: 'fontDisplayBold', sans-serif;
        font-size: 30px;
        font-weight: 900;
        color:  #2C2C2C;
        font-style: normal;
       
        }

       
    }
    .detail_image  {
        align-self: center;
        padding: 20px 0;
        width: 70%;
      
        img {
            object-fit: contain;
            width: 100%;
          height: 100%;
    }
}
   

}
   
.detail_article {
    width: 100%;
    font-family: 'fontDisplayBold', sans-serif;
    font-size: 20px;
    font-weight: 900;
    margin-top: 5rem;
    margin-bottom: 2rem;
    color: #2C2C2C;

}

.cards {
    height: 550px * 3;
    overflow: hidden;
   
    .card_detail {
        height: 550px;
        
        
    }

}

@media (min-width: 640px) {
   
.detail {
    width: 60%;
  
    .paragraph {
        font-size: 18px;

       * img {
        width: 60%;
       }
     }
       
    .frame-9 {
        h5 {
        font-size: 40px;
        } 
    }
    .detail_image  {
        width: 60%;
       
     }
   

}

.detail_article {
        font-size: 24px;
    }

    .cards {
    height: 550px * 2;
   
    .card_detail {
        height: 550px;
        
        
    }
}
}

@media (min-width: 1024px) {
 .cards {
    height: 550px;
   
    .card_detail {
        height: 550px;
    
    } }
}
</style>