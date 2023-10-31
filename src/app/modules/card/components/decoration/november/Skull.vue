<template>
  <div class="craneo">
    <div class="skull">
      <div class="front">
        <span class="cruz"></span>
      </div>
      <div class="cempasuchil">
        <div class="eye">
        </div>
      </div>

      <div class="cempasuchil">
        <div class="eye">
        </div>
      </div>
      <div class="nose"></div>
      <div class="dientes">
        <div class="dientes-2">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.craneo {
  padding: 30px;
  cursor: pointer;
}

.skull {
  width: 120px;
  height: 100px;
  border-radius: 60px 60px 15px 15px;
  background: #ededed;
  top: 10px;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/**/

.cempasuchil {
  margin-top: 22px;
  background: #ffce00;
  width: 45px;
  height: 45px;
  position: relative;
  text-align: center;
  transform: rotate(20deg);
  border-radius: 10px;
}

.cempasuchil:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 45px;
  width: 45px;
  background: #ffce00;
  transform: rotate(135deg);
  border-radius: 9px;
}

/**/

.dientes {
  width: 80px;
  height: 50px;
  background: #ededed;
  position: absolute;
  top: 75%;
  border-radius: 15px;
border: 3px solid #ffce00;
  z-index: -1;
}

.eye {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #282828;
  border: 3px solid #ff00c4;
  z-index: 9;
  margin-top: 4px;
  margin-right: 4px;
  margin-left: 4px;
  position: absolute;
}

.nose {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #ff00c4;

  position: absolute;
  top: 80px;
  z-index: 2;
}

.dientes-2 {
  width: 6px;
  height: 14px;
  background: #282828;
  position: absolute;
  top: 40px;
  right: 25px;
}

.dientes-2::after {
  content: "";
  width: 6px;
  height: 15px;
  background: #282828;
  position: absolute;
  top: 0;
  right: 12px;
}

.dientes-2::before {
  content: "";
  width: 6px;
  height: 15px;
  background: #282828;
  position: absolute;
  top: 0;
  right: 24px;
}

.front span {
  display: block;
  margin-top: -40px;
  margin-left: 42px;
  position: absolute;
}

.cruz {
  height: 20px;
  width: 6px;
  position: relative;
  background: #00b1ff;
  border: 1px solid #ffce00
}

.cruz:after {
  background: #00b1ff;
  content: "";
  height: 6px;
  left: -7px;
  position: absolute;
  top: 5px;
  width: 20px;
}
</style>
