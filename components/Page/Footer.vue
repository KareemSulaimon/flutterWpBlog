<template>
  <div class="footer">
    <h5>Join our Team of Writers</h5>
    <p>On dasdas, writers earn a living doing what they love. 
  Getting started is easy. Just pay a one time <b>$25 fee</b> and everything is ready to go.</p>
      </div>
</template>

<style lang="scss" scoped> 
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 20px;
  

   h5 {
    font-family: 'fontDisplayBold', sans-serif;
      font-size: 25px;
      font-weight: 500;
      text-align: center;
      color: #2C2C2C;
      margin-bottom: 10px;
   }

   p {
    font-family: 'fontDisplayBold', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: center;

   }
}

@media (min-width: 640px) {
    .footer {
      margin-top: 156px;

    h5 {
    font-size: 32px;


  }

  p {
font-size: 22px;
line-height: 32px;


  }
}
}

</style>
