<template>
  <div>
    <div class="container mt-sm-5 mt-4 position-relative">
      
<span id="sec-6"></span>
      <div class="row" id="sec-6">
        <div class="col-lg-6 col-sm-12 p-0 boxes">
          <div class=" text-light p-sm-5 ">
          <div data-aos="fade-up" data-aos-duration = '300'>
            <h1>Biz bilan bog'laning</h1>
            </div>
              <div data-aos="fade-up" data-aos-duration = '500'>
            <p>Manzil:</p>
              </div>
              <div data-aos="fade-up" data-aos-duration = '700'>
            <p>Beruniy metro, Korzinka</p>
              </div>
              <div data-aos="fade-up" data-aos-duration = '900'>
            <p>
              tel:
              <a oncopy="alert('Telefon Raqamdan Nusxa Olindi ')"
                >+998 99 074 64 64</a
              >
            </p>
              </div>
              <div data-aos="fade-up" data-aos-duration = '1100'>
            <p>Donat (Bizni qo'llab quvvatlash): 8600 5704 5837 5721</p>
              </div>
            <div class="socialIcons">
              <a href="https://t.me/LeapEnglish"
                ><span class="icon1 fab fa-telegram"></span
              ></a>
              <a href="#"><span class="icon2 fab fa-facebook"></span></a>
              <a href="Https://instagram.com/leapenglish"
                ><span class="icon3 fab fa-instagram"></span
              ></a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12 p-0  forms">
          <div class="inp">
            
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdLpEzrJMn9NZJQCjpfNJ0YFQ-l3TR0KCJKxaPac3kZ03ETJg/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0" class="iframeHeight">Загрузка…</iframe>

            
          </div>

        



        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.boxes {
  height: 500px;
  clip-path: circle(62.2% at 38% 50%);
  background: url(https://avatars.mds.yandex.net/get-altay/2044663/2a0000016f9f8ec0b017119bd53531709be9/XXL);
  background-size: cover;
  background-position: 100%;
  display: flex;
  align-items: center;
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 10px;

  &:before {
    content: "";
    width: 100%;
    height: inherit;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
  }

  h1,
  p {
    position: relative;
    z-index: 3;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-weight: bold;
    a {
      text-decoration: none;
      color: rgb(255, 230, 0);
      font-size: 1.2em;
    }
  }

  .socialIcons {
    width: 100%;
    height: 50px;

    position: relative;
    z-index: 3;
    display: flex;

    a{
      display: block;
      position: relative;
      height: 50px;
      width: 50px;
      background: #ffffff;
      line-height: 60px;
      text-align: center;
      margin: 0 50px;
      font-size: 40px;
      transform: rotate(-30deg) skewX(25deg);
      transition: 0.4s ease;
      box-shadow: -20px 20px 10px rgba(256, 256, 256, 0.5);
    }

    a:nth-child(2) {
      margin-top: 30px;
    }
    a:hover {
      transform: rotate(-30deg) skewX(25deg) translate(20px, -25px);
      box-shadow: -50px 50px 30px rgba(256, 256, 256, 0.5);
    }
    a:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 20px;
      background: #ffffff;
      top: 10px;
      left: -20px;
      transform: rotate(0deg) skewY(-45deg);
    }
    a:after {
      content: "";
      position: absolute;
      height: 20px;
      width: 100%;
      background: #ffffff;
      bottom: -20px;
      left: -10px;
      transform: rotate(0deg) skewX(-45deg);
    }
    .icon1 {
      color: #00aeff;
    }
    .icon2 {
      color: #165ee6;
    }
    .icon3 {
      color: #f80aa9;
    }
  }
}

.forms {
  position: relative;
color: gray;
 
 
  .inp {
  
    width: 100%;
   
  }
}


$breakpoint:992px;

@media (max-width:$breakpoint){
.boxes{
margin-left: 35px !important;
text-align: center !important;
}

.forms{
.iframeHeight{
height: 950px !important;
}
}
}


@media (max-width:769px){
.boxes{
text-align: center !important;
clip-path: none !important;
margin-left: 0 !important;
width: 95%;
margin: auto !important;

&:before{
width:95%;
}
h1{
font-size: 1.8em;
}

.socialIcons{

display: flex;
justify-content: center;
a{
display: flex;
text-decoration: none;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
 margin: 0 25px;
      font-size: 25px;

      &:after{
       
      content: "";
      position: absolute;
      height: 20px;
      width: 100%;
      background: #ffffff;
      bottom: -20px;
      left: -10px;
      transform: rotate(0deg) skewX(-45deg);
    
      }

      
}


}
}



.forms{
.iframeHeight{
height:1050px !important;
}
}
}

</style>
