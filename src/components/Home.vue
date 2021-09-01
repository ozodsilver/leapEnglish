<template>
  <div>
    <div class="position-relative">
      <div class="mob-header">
        <div class="inside">
          <a href="#"
            ><img
              src="../assets/Leap line white.png"
              alt=""
              :class="{ mobNone: none }"
          /></a>
          <lord-icon
            src="https://cdn.lordicon.com/tvyxmjyo.json"
            trigger="hover"
            colors="primary:#66eece,secondary:#08a88a"
            style="width:50px;height:50px;"
            @click="toggle"
            :class="{ deleteIcon: del }"
            class="animate"
          >
          </lord-icon>

          <lord-icon
            src="https://cdn.lordicon.com/wnkegycl.json"
            trigger="click"
            colors="primary:#30e8bd,secondary:#08a88a"
            style="width:50px;height:50px"
            class="back"
            :class="{ yesIcon: del2 }"
            @click="toggle"
          >
          </lord-icon>
        </div>

        <div class="pastga" :class="{ isActive: active }">
          <ul>
            <img
              src="../assets/Leap line white.png"
              alt=""
              style="width:180px;border-bottom:1px dashed orange"
            />

            <li>
              <a href="#sec-3" v-smooth-scroll="{ offset: -50, duration: 800 }"
                @click="toggle" >Biz haqimizda</a
              >
            </li>
            <li>
              <a href="#sec-4" v-smooth-scroll="{ offset: -50, duration: 2800 }"
                @click="toggle" >You tube Darslar</a
              >
            </li>
            
            <li><a href="#sec-5" v-smooth-scroll  @click="toggle">Hamkorlik</a></li>
            <li><a href="#sec-6" v-smooth-scroll  @click="toggle">Aloqa</a></li>
            <li>
              <a href="tel:+998 99 074 64 64" style="font-family: jokerman">+998 99 074 64 64</a>
            </li>

            <li><a href="https://t.me/Leapenglishcom" class="neon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        KUTUBXONA<lord-icon
                  src="https://cdn.lordicon.com/wxnxiano.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#121331,secondary:#08a88a"
                  style="width:32px;height:32px"
                >
                </lord-icon
              >
    </a></li>
          </ul>
        </div>
      </div>

      <div class="box">
        <div class="shakl" @mousemove="actionPosition" ref="actions" id="sec-9">
          <a href=""
            ><img src="../assets/Leap line white.png" alt="" class="logo"
          /></a>
        </div>
        <div class="header bg-light" ref="header">
          <div class="tel" ref="tel">
            <span
              ><strong
                ><a
                  href="https://yandex.uz/maps/-/CCUm4Cd-wD"
                  class="text-warning"
                  >Manzil</a
                >:</strong
              >
              Beruniy metro, Korzinka</span
            >
            <i class="fa fa-phone text-success"> +998 99 074 64 64 </i>
          </div>
          <div class="header-left" ref="icons">
            <a
              href="https://www.youtube.com/channel/UCIDINUgl3-mAsLHeRxnPHlg"
              class="btn icon btn--2"
            >
              <div class="content">
                <div class="front">
                  <div class="border"></div>
                  <i class="fab fa-youtube"></i>
                </div>
                <div class="back">
                  <div class="border"></div>
                  <p>Youtube Yo!</p>
                </div>
              </div>
            </a>
            <div class="btn icon btn--3">
              <div class="content">
                <div class="front">
                  <div class="border"></div>
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="back">
                  <div class="border"></div>
                  <p>Who Doesn't know it?</p>
                </div>
              </div>
            </div>
          </div>

          <ul>
            <div class="pos">
              <li>
                <a
                  href="#sec-3"
                  v-smooth-scroll="{ offset: -50, duration: 800 }"
                  >Biz haqimizda</a
                >
              </li>
              <li>
                <a
                  href="#sec-4"
                  v-smooth-scroll="{ offset: -50, duration: 800 }"
                  >You tube Darslar</a
                >
              </li>
              <li>
                <a href="https://t.me/Leapenglishcom"
                  >Kutubxona
                  <lord-icon
                    src="https://cdn.lordicon.com/wxnxiano.json"
                    trigger="loop"
                    delay="2000"
                    colors="primary:#121331,secondary:#08a88a"
                    style="width:32px;height:32px"
                  >
                  </lord-icon
                ></a>
              </li>
              <li><a href="#sec-5"  v-smooth-scroll="{ offset: -50, duration: 1200 }">Hamkorlik</a></li>
              <li><a href="#sec-6"  v-smooth-scroll="{ offset: -50, duration: 900 }">Aloqa</a></li>
            </div>
          </ul>
        </div>

        <div class="left ">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="300">

          <h1 class="text-light">Leap english</h1>
          </div>

           <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="900">
          <h4 class="text-light">Ingliz tilini "og'riqsiz" o'rgatamiz</h4>
           </div>

            <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1200">
          <a href="https://t.me/Leapenglishcom" class="btnn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Leapning oilasi a'ziga aylaning
          </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      active: false,
      none: false,
      del: false,
      del2: false,
    };
  },

  methods: {
    actionPosition(event) {
      this.x = event.clientX;

      this.y = event.clientY;

      if (this.x > 850 && this.y < 768) {
        this.$refs.actions.style.cssText = "background-position:250px";
      } else if (this.x < 849 && this.y < 768) {
        this.$refs.actions.style.cssText = "background-position:0px";
      }
    },
    handleScroll() {
      if (window.scrollY > 700) {
        this.$refs.header.style.cssText =
          "position:fixed; z-index:888; background:#404659 !important; transition:1s";
        this.$refs.icons.style.display = "none";
        this.$refs.tel.style.cssText = "display:flex; color:white";
        this.$refs.pos.style.cssText = "color:orange !important";
      } else {
        this.$refs.header.style.cssText = "position:relative;  transition:1s";
        this.$refs.icons.style.display = "block";
        this.$refs.tel.style.display = "none";
      }
    },

    toggle() {
      this.active = !this.active;
      this.none = !this.none;

      setTimeout(() => {
        this.del = !this.del;
        this.del2 = !this.del2;
      }, 800);
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.header-left {
  position: absolute;
}
.icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 50px;
  margin-top: 20px;
  position: relative;
  left: -10px;
  box-shadow: 0 0 35px rgb(209, 205, 205);
}

.icon .content {
  width: 50px;
  height: 50px;

  border-radius: 50%;
  cursor: pointer;
  display: grid;
  justify-items: center;
  align-items: center;
  position: relative;
  transition: transform 600ms;
  transform-style: preserve-3d;
  left: -12px;
  top: -8px;
  perspective: 1000px;
}

.icon .content .front {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  display: flex;
  margin: 4px;
  align-items: center;
  justify-content: center;
  transform: translateZ(2rem);
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.icon .content .front .border {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateZ(2rem);

  backface-visibility: hidden;
  padding: 10px;
  border-radius: 50%;
  border: none !important;
}

.icon .content .back {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(-2rem) rotateY(0.5turn);
  text-align: center;
  font-family: sans-serif;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.icon .content .back p {
  font-size: 0.8rem;
  /* text-shadow: 2px 1px 2px rgba(0, 0, 0, .5); */
  font-weight: 600;
  margin-top: 20px;
  color: #00627a;
}
.icon .content .back .border {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateZ(-1rem);
  height: 80%;
  width: 80%;
  border-radius: 50%;

  backface-visibility: hidden;
}
.icon .front i {
  font-size: 1.6rem;
  position: relative;
  top: -3px;
  left: -4px;
}
.icon:hover .content {
  transform: rotateY(0.5turn) rotateX(-0.03turn);
}
.btn--1 i {
  color: #00acee;
}
.btn--2 i {
  color: #c4302b;
}

.tel {
  position: absolute;
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  justify-content: space-around;
}

.tel {
  display: none;

  a {
    text-decoration: wavy underline;
  }

  i {
    color: #35e3cf !important;
  }
}

.mob-header {
  display: none;
}

@media (max-width: 769px) {

  .mob-header {
    width: 100%;
    height: 70px;
    background: url(https://kartinkin.com/uploads/posts/2021-04/1617597680_21-p-glubokii-chernii-fon-21.jpg);
    display: block;
    transition: 0.4s;
position: fixed;
top: 0;
z-index: 999999999;
    .inside {
      float: right;
      width: 80%;
      height: inherit;

      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 100px;
        height: 60px;
      }
      i {
        color: #fff !important;
        position: relative;
      }

      .back {
        display: none;
      }

      .animate {
        animation: anim2 1s 1;
      }
      @keyframes anim2 {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    .pastga {
      width: 100%;
      transition: 0.4s;
      height: 0;
      background: url(https://kartinkin.com/uploads/posts/2021-04/1617597680_21-p-glubokii-chernii-fon-21.jpg);
      background-size: cover;
      overflow: auto;
      transition: height 0.5s ease-in;
      position: relative;
      z-index:8999999;
      ul {
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
       

        li {
          list-style: none;

          a {
            text-decoration: none;
            position: relative;
            display: block;
            text-transform: uppercase;
            margin: 15px 0;
       
letter-spacing: 2px;
            text-decoration: none;
            color: #d4e2e1;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 14px;
            font-weight: 600;
            transition: 0.5s;
            z-index: 1;

            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-top: 2px solid #039980;
              border-bottom: 2px solid #039980;
              transform: scaleY(2);
              opacity: 0;
              transition: 0.3s;
            }

            &:after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #262626;
              transform: scale(0);
              opacity: 0;
              transition: 0.3s;
              z-index: -1;
            }

            &:hover {
              color: #fff;
              &:before {
                transform: scaleY(1);
                opacity: 1;
              }
              &:after {
                transform: scaleY(1);
                opacity: 1;
              }
            }
          }


.neon{
position: relative;
    display: inline-block;
    padding: 15px 15px;
    margin: 20px 0 ;
    color: #03e9f4;
    font-size: 18px;
    text-decoration:none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    -webkit-box-reflect: below 1px linear-gradient(transparent,#0005);


&hover{
background-color: #03e9f4 !important;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
}

span{
 position: absolute;
    display: block;
}
}

.neon span:nth-child(1){
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03e9f4);
    animation: animate1 1s linear infinite;
}

.neon:nth-child(1){
    filter:hue-rotate(290deg);
}

.neon span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03e9f4) !important;
    animation: animate2 1s linear infinite;
    animation-delay:0.25s;
}


.neon  span:nth-child(3){
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay:0.5s;
}

.neon span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay:0.75s;
}

@keyframes animate1{
    0%{
        left: -100%;
    }
    50%,100%{
        left: 100%;
    }
}

@keyframes animate2{
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
}

@keyframes animate3{
    0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
}

@keyframes animate4{
    0%{
        bottom: -100%;
    }
    50%,100%{
        bottom: 100%;
    }
}


        }
      }
    }
  }

  .box {
    display: none;
  }

  .isActive {
  
    height:  100vh !important ;
  }

  .mobNone {
    visibility: hidden;
   
  }

 

  .deleteIcon {
    display: none;
  }

  .yesIcon {
    display: block !important;
    animation: anim 1s 1;
  }

  @keyframes anim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
