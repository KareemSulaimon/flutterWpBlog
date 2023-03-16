<script lang="ts" setup>
defineProps<{
    image: string
    title: string
    excerpt: string
    datePosted: string
    slug: string
}>()
</script>

<template>
<main class="card">
    <section class="card_media">
       <img :src="image">
    </section>
    
    <section class="card_frame">
        <span class="card_frame--3 frame--3">
            <h5>Front-end </h5>
            <small>. {{ datePosted.slice(0,10)}}</small>
        </span>

     <div class="card_frame--4"> 
        <h5>{{title}}</h5> 
        <p>{{ excerpt }}</p>
     </div>
    </section>

    <section class="card_readBtnContent">
        <small>12 Min Read</small>
        
            <NuxtLink :to="`/${slug}`" class="card_readBtnContent buttonRead">Read Full 
              <img src="@/assets/images/arrow.svg" alt="arrow indicating showMore">
            </NuxtLink>
       
    </section>
</main>
</template>

<style lang="scss" scoped>
 
.card {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #F5F5F5;
    align-items: flex-start;
    border-radius: 5px;
    gap: 1rem;
    


    .card_media {
        width: 100%;
        height: 200px;
        position: relative;
        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
          height: 100%;
        }

    }

    .card_frame {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;
       

        .card_frame--3 {
            width: 60%;
        }

        .card_frame--4 {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 16px;
           
        
            h5 {
                font-size: 16px;
            }
          

            p { 
            font-family: myFont;
            font-size: 14px;
            font-weight: 400;
           color:  #6E6E6E;
            }
           
        }

    }

    .card_readBtnContent {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        small {
            color: #6E6E6E;
            font-family: SF Pro Text;
            font-size: 10px;
            font-weight: 500;
            width: max-content;
        }

        .buttonRead {
            width: 70px;
            color: #1473E6;
            font-family: SF Pro Text;
            font-size: 10px;
            font-weight: 700;

    
        }
    }
}



@media (min-width: 640px) {
    .card {
     
    .card_frame {
        .card_frame--3 {
            width: 45%;
        }

    .card_frame--4 {
         
            h5 {
                font-size: 19px;
            }

            p { 
            font-size: 14px;
            }
        } 
        }

        .card_readBtnContent {

        small {
            font-size: 12px;
        }

        .buttonRead {
            width: 90px;
            font-size: 12px;
        }
    }
    }
}

@media (min-width: 440px) {
    .card {
     
     .card_frame {
         .card_frame--3 {
             width: 50%;
         }
        }
    }
}
</style>