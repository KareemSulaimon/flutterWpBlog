<template>
  <main id="header" >
   <section class="header_logo">
      <NuxtLink to="/" >
        <img src="@/assets/images/dasdas.svg" alt="" class="logo">
      </NuxtLink>
   </section>

   <section class="header_frame-14">
      <NuxtLink to="https://twitter.com/Sulaimon_KO" >
        <img src="@/assets/images/twitter.svg" alt="twitter icon">
      </NuxtLink>

            <span>.</span>

            <NuxtLink to="/" >
        <img src="@/assets/images/dribble.svg" alt="dribble icon">
      </NuxtLink>

        <span>.</span>

      <NuxtLink to="/">
        <img src="@/assets/images/figma.svg" alt="figma icon">
      </NuxtLink>

        <span>.</span>

      <NuxtLink to="https://github.com/KareemSulaimon">
        <img src="@/assets/images/git.svg" alt="git icon">
      </NuxtLink>

   </section>
</main>
</template>


<style lang="scss">
#header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100px;
 align-items: center;

  .header_logo {
    height: 40px;
    width: 40px;
  position: relative;

    img  {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .header_frame-14{
  display: flex;
  justify-content: space-between;
  width: 90px;
 
  img {
    width: 12px;
  }
  }
}




@media (min-width: 640px) {
#header  {
      
  .header_logo { 
    height: 80px;
    width: 80px;
  }
  .header_frame-14{
  width: 150px;

   img {
    width: 20px;
  }
  }  
      }
}

@media (min-width: 768px) {
    .header_logo  {
        max-width: 70px;
    }
   
}

@media (min-width: 1024px) {
    .header_logo  {
        max-width: 80px;
    }
   
}






</style>