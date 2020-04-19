<template>
<div class="player-bottom">
    <div class="player-slider">
        <span>3:00</span>
        <!-- <view> -->
            <!-- <slider value="60" @change="sliderChange" step="5" /slider> -->
        <!-- </view> -->
        <span>4:00</span>
    </div>
    <div class="player-play">
        <div class="play-mode"></div>
        <div class="last-play"></div>
        <div class="current-play"></div>
        <div class="next-play"></div>
        <div class="play-list"></div>
    </div>

</div>
</template>

<script>
export default {
   name: "PlayerBottom",
   data() {
        return {}
    },
    methods: {
        sliderChange(e) {
            console.log('value 发生变化：' + e.detail.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.player-bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 300px;
    background-color: red;
    .player-slider {
        margin-left: 15px;
        margin-right: 15px;
        top: 20px;
    }
    .player-play {
        background-color: orange;
        height: 100px;
    }
}

</style>