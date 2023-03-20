<template>
  <div>
     <NuxtPage />
  </div>
</template>

<style lang="scss">

  body {
  display: flex;
  flex-direction: column;
  background: #E5E5E5;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  }

.all {
    display: flex;
    flex-direction: column;
    background: #ffff;
    align-items: center;
}

// @font-face {
//     font-family: myFirstFont;
//     src: url(~/assets/font/sf-pro-text/regular.otf);
// }

// * p {
//   font-family: myFirstFont;
// }


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    overflow-x: hidden;
    }

.cards {
display: grid;
grid-template-columns: repeat(1, minmax(0, 1fr));
}

   .frame--3 {
            display: flex;
           
            small {
                color: #6E6E6E;
                margin-left: 15px;
                font-family: 'fontLight', sans-serif;
               
            }

            h5 {
                color: #4B4B4B;
                font-family: 'fontLight', sans-serif;
              
            }
 }

 .card_frame--4, .frame-9 {
            display: flex;
            flex-direction: column;
            width: 100%;
           
           
        
            h5 {
                font-size: 16px;
                margin:  5px 0;
                font-family: 'fontLight', sans-serif;
            }
          

            p { 
            font-size: 14px;
            font-weight: 400;
           color:  #6E6E6E;
            font-family: 'fontLight', sans-serif;
            }
           
        }


  .all {
    width: 100vw;
    padding: 10px 20px;
}


@media (min-width: 640px) {
    .all {
        max-width: 640px;
        padding: 10px 50px;
    }
    .cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 768px) {
    .all {
        max-width: 768px;
        
    }
}

@media (min-width: 1024px) {
    .all {
        max-width: 1024px;
    }
    .cards {
        grid-template-columns: repeat(3, minmax(0, 1fr));
       
    }
}

@media (min-width: 1280px) {
    .all {
        max-width: 1280px;
        padding: 10px 100px;
       
    }
}

@media (min-width: 1536px) {
    .all {
        max-width: 1536px;
       
    }
}

        // fonts
@font-face {
    font-family: 'fontLight';
    src: url('@/assets/fonts/SF-Pro-Text-Light.otf') format('truetype');
} 

@font-face {
    font-family: 'fontDisplayBold';
    src: url('@/assets/fonts/SFPRODISPLAYREGULAR.OTF') format('truetype');
} 

</style>