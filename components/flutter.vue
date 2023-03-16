<template>
    <div class="flutter">
      <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
    <!-- Your order is ₦3,400 -->
  <input type="hidden" name="public_key" value="FLWPUBK_TEST-16811564e660157b1ddeedf887e812ae-X" />
  <input type="hidden" name="customer[email]" value="jessepinkman@walterwhite.org" />
  <input type="hidden" name="customer[name]" value="kareem Sulaimon" />
  <input type="hidden" name="tx_ref" value="bitethtx-019203" />
  <input type="hidden" name="amount" value="3400" />
  <input type="hidden" name="currency" value="NGN" />
  <input type="hidden" name="meta[token]" value="54" />
   <!-- <input type="hidden" name="redirect_url" value="https://localhost:3000/detail.com" />  -->
  <button type="submit" id="start-payment-button">
    <h3>JOIN US</h3>
  </button>
</form>
    </div>
</template>

<style lang="scss">

.flutter {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
 margin-bottom: 10rem;


  button {
    padding: 6px 35px 6px 35px;
  background: #000000;

  h3 {
  font-family: SF Pro Display;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF; 
  }
 }
}

@media (min-width: 640px) {
  .flutter {
 
  button {
  padding: 12px 55px 12px 55px;

  background: #000000;

  h3 {
  font-size: 18px;

  }
}
}
}
</style>