<template>
  <div class="candle">
    <div class="shadow"></div>
    <div class="wick"></div>
    <div class="flame"></div>
  </div>
</template>

<style lang="scss">
.candle {
  position: absolute;
  width: 60px;
  height: 100px;
  bottom: 0;
  right: 0;
  background: #fff;
  border-radius: 3px;
  box-shadow: inset -10px 0 0 0 #E0E5FF;

  .shadow {
    position: absolute;
    width: 120px;
    height: 8px;
    background: #1B233E;
    bottom: -8px;
    left: -30px;
    border-radius: 3px;
  }

  .wick {
    position: absolute;
    width: 4px;
    height: 15px;
    top: -15px;
    left: 28px;
    background: #AD88A9;
    border-radius: 2px 2px 0 0;
  }

  .flame {
    position: absolute;
    width: 16px;
    height: 26px;
    top: -32px;
    left: 22px;
    background: #FFAD00;
    border-radius: 8px 8px 8px 8px / 20px 20px 8px 8px;
    animation:
      wind 15s ease-in-out infinite,
      size 20s ease-in-out infinite,
      flickr 5s ease-in-out infinite;
    transform-origin: 50% 100%;
  }

}

@keyframes wind {

  0%,
  22%,
  49%,
  62%,
  81%,
  100% {
    border-radius: 2px 14px 8px 8px / 20px 20px 8px 8px;
  }

  14%,
  32%,
  56%,
  70%,
  89% {
    border-radius: 14px 2px 8px 8px / 20px 20px 8px 8px;
  }
}

@keyframes size {

  0%,
  22%,
  49%,
  62%,
  81%,
  100% {
    transform: scale(1, 1);
  }

  14%,
  32%,
  56%,
  70%,
  89% {
    transform: scale(0.9, 1.2);
  }
}

@keyframes flickr {

  0%,
  22%,
  49%,
  62%,
  81%,
  100% {
    box-shadow: 0 0 20px 0 rgba(255, 202, 0, 0.7);
  }

  14%,
  32%,
  56%,
  70%,
  89% {
    box-shadow: 0 0 20px 0 rgba(255, 202, 0, .8);
  }
}
</style>
