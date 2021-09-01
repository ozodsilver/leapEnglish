<template>
  <div>
    <div class="load">
      <loader
        object="#ff9633"
        color1="#ffffff"
        color2="#17fd3d"
        size="5"
        speed="2"
        bg="#343a40"
        objectbg="#999793"
        opacity="80"
      
        name="loading"
        class="loaderOff"
      ></loader>
    </div>
    <div class="row mt-sm-3 off">
      <div class="col-sm-4 col-12">
        <iframe
          width="95%"
          src="https://www.youtube.com/embed/nE6gUj8bl6M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
       class="mobframe"></iframe>

        <iframe
          width="95%"
         
          src="https://www.youtube.com/embed/RgfYf3tE7E8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mt-sm-2 mobframe"
        ></iframe>
      </div>

      <div class="col-sm-4 col-12 p-sm-0 if-2">
        <iframe
          width="100%"
          height="87%"
          src="https://www.youtube.com/embed/ULM6ifDOA8M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        class="mobframe"></iframe>
        <a
          href="https://www.youtube.com/playlist?list=PLoJKIHSiiOFLcG2bL8WFZMqlUJfnq3PD3"
          target="_blank"
          class="d-md-block d-none">To'liq Videolar Playlisti
        </a>
      </div>

      <div class="col-sm-4 col-12 ">
        <iframe
          width="95%"
          src="https://www.youtube.com/embed/9MBizZIpoR0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        class="mobframe"></iframe>

        <iframe
          width="95%"
          src="https://www.youtube.com/embed/BzAVs2BWZKw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mt-sm-2 mobframe"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    setTimeout(() => {
      document.querySelector(".off").style.display = "flex";
      document.querySelector(".loaderOff").style.display = "none";
    }, 2500);
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
iframe {
  border-radius: 5px;
  box-shadow: 0 0 45px rgb(192, 192, 192);
}

.if-2 {
  a {
    text-decoration: none;
    color: rgb(0, 106, 124);
    font-size: 1.3rem;
    position: relative;
    left: 25%;
  }
}

.off {
  display: none;
 
}



@media (max-width:769px){
.mobframe{
width:100% !important;
height: 300px !important;
position: relative !important;

}

}
</style>
