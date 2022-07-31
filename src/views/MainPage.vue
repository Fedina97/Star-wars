<template>
  <div class="home">
      <logo></logo>
      <hello-text>Познай путь джедая ...</hello-text>
      <span class="arrow"></span>
      <router-link to="/catalog" class="start-btn">
          <div class="ioda">
              <img src="../../public/images/ioda.png" alt="">
          </div>
      </router-link>
  </div>
</template>
<script>

import NewButton from "@/components/UI/ButtonItem";
import Logo from "@/components/UI/Logo";
import HelloText from "@/components/UI/HelloText";
export default {
  name: 'HomeView',
  components: {
      HelloText,
      Logo,
      NewButton
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.home {
    background-image: url('../../public/images/bg-1.jpg');
    background-size: cover;
    object-fit: scale-down;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
}

.start-btn {
    text-decoration: none;
    position: relative;
    z-index: 10;
    bottom: 100px;
    background: none !important;
}

.ioda{
    animation: 3s ease-in-out 1s normal none infinite running trambling-animation;
    position: fixed;
    cursor: pointer;
    z-index: 5;
    bottom: -300px;
}

@keyframes trambling-animation {
    0%, 50%, 100% {
        transform: rotate(0deg);
    }
    10%, 30% {
        transform: rotate(-3deg);
    }
    20%, 40% {
        transform: rotate(2deg);
    }
}

.arrow {
    display: block;
    background-image: url('../../public/images/arrow-right.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 80px;
    bottom: 100px;
    left: 40%;
    position: absolute;
}

</style>
