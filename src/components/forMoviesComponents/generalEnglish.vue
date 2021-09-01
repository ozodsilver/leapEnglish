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
        name="circular"
        class="loaderOff"
      ></loader>
    </div>
    <div class="row mt-sm-3 off">
      <div class="col-sm-4 col-12">
        <iframe
          width="95%"
          src="https://www.youtube.com/embed/rn1qUMGAOII"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          autoplay
        class="mobframe"></iframe>

        <iframe
          width="95%"
          src="https://www.youtube.com/embed/O1O9ezbJ88U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mt-sm-2 mobframe"
       ></iframe>
      </div>

      <div class="col-sm-4 p-sm-0 col-12 if-2">
        <iframe
          width="100%"
          height="87%"
          src="https://www.youtube.com/embed/Iz3BEudqmgk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
       class="mobframe"></iframe>
        <a
          href="https://www.youtube.com/playlist?list=PLoJKIHSiiOFLTtqLB14BiTg1DyZ9r0Aws"
          target="_blank"
         class="d-md-block d-none" >To'liq Videolar Playlisti
        </a>
      </div>

      <div class="col-sm-4 col-12">
        <iframe
          width="95%"
          src="https://www.youtube.com/embed/9h7rftpXeyg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
       class="mobframe"></iframe>

        <iframe
          width="95%"
          src="https://www.youtube.com/embed/kbbjbWiAmu0"
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
  components: {},

  data() {
    return {};
  },

  mounted() {
    setTimeout(() => {
      document.querySelector(".off").style.display = "flex";
      document.querySelector(".load").style.display = "none";
    }, 2500);

    
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
iframe {
  -webkit-border-radius: 5px;
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

@media (max-width:1192px){
.if-2 {
  a {
   
    position: relative;
    left: 15%;
  
   
  }
}
}

@media (max-width:992px){
.if-2 {
  a {
   
    position: relative;
    left: 5%;
  
   
  }
}
}



@media (max-width:769px){
.mobframe{
width:100% !important;
height: 300px !important;
position: relative !important;
}
}
</style>
