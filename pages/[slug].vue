<script lang="ts" setup>
 import useWpApi from '~~/composables/useWpApi';

  const {params} = useRoute();

  const {data: posts} = await useWpApi().getPost<any>(params.slug as  string);

  const {data: morePosts} = await useWpApi().getPosts<any>(); 

  const post = posts.value[0];

  const selectedParagraph = ref<string>('');

  const paragraphs = ref<string[]>([]);

  const parser = new DOMParser(); 

  const parsedHtml = parser.parseFromString(post.content.rendered, 'text/html');

  const firstParagraph = parsedHtml.getElementById('speakable-summary');

  console.log(firstParagraph);
  
  
  const allParagraph =  parsedHtml.querySelectorAll('p');

  const arrayParagraph = Array.from(allParagraph);


  const filteredParagraph = arrayParagraph.filter(p => p.id !== "speakable-summary");


  paragraphs.value = filteredParagraph.map(p => p.innerText)
  
  let secondParagraph : string | null = null;

    if(allParagraph.length > 1) {
      secondParagraph = allParagraph[1].textContent
    }

     let advert = "To get a roundup of TechCrunch's biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here."
    if(firstParagraph?.innerText == advert)  {
        selectedParagraph.value = secondParagraph ? secondParagraph : 'No paragraph found';
    }
    else {
        selectedParagraph.value = firstParagraph ? firstParagraph.innerText : 'No paragraph found';
    }
  

    // const paragraphLinks = parsedHtml.querySelectorAll('p > a:first-child')
    //   if (paragraphLinks.length >= 2) {
    //     const secondParagraphLink = paragraphLinks[1].parentNode
    //     const childElement = secondParagraphLink.querySelector('a')
    //     if (childElement && childElement.href === 'https://xyz.com') {
    //       const childValue = childElement.textContent.trim()
    //       console.log('Child value of second paragraph with a link to "https://xyz.com":', childValue)
    //     } else {
    //       console.log('No child link element in the second paragraph with a link to "https://xyz.com".')
    //     }
    //   }
 
   

</script>

<template>
<main class="all">
 
    <PageHeader />
        
    <div class="detail">  
        <span class="detail_frame_3 frame--3">
                <h5>{{post._embedded["author"][0].name}} </h5>
                <small>{{ post.date.slice(0,10) }}</small>
        </span>

        <div class="frame-9">
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
      
        
    <div class="paragraph" v-for="(paragraph, index) in paragraphs" :key="index" > 
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

    .detail_frame_3 {
       gap: 10px;
    }
      
    .paragraph {
        display: flex;
        flex-flow: column;
        color: #6E6E6E;
        font-weight: 400;
        gap: 10px;
        font-size: 15px;
        width: 100%;

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
        display: flex;
          gap: 10px;
          flex-flow: column;


        h5 {
        font-family: SF Pro Display;
        font-size: 30px;
        font-weight: 900;
        color:  #2C2C2C;
        margin-top: 5px;

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
    font-family: SF Pro Display;
    font-size: 20px;
    font-weight: 900;
    margin-top: 5rem;
    margin-bottom: 2rem;
    color: #2C2C2C;

}

.cards {
    height: 550px;
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
}

// @media (min-width: 1024px) {
//     .detail {
//     width: 70%;
  
//     .paragraph {
//         font-size: 16px;

//        * img {
//         width: 70%;
//        }
//      }
       
//     .frame-9 {
//         h5 {
//         font-size: 35px;
//         } 
//     }
//     .detail_image  {
//         width: 80%;
       
//      }
   

// }
// }

</style>