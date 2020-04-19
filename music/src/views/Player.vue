<template>
<div class="player">
    <div class="headerabar">
        <div class="left-button" @click="backAction()">left</div>
        <div class="right-button">right</div>
        <div class="middle">
            middle
        </div>
    </div>
    <div class="swiper">

    </div>
    <PlayerBottom></PlayerBottom>

</div>
</template>


<script>
import PlayerBottom from '../components/PlayerBottom';
import { getSongDetail } from '../http/API';

export default {
    name: 'Player',
    components: {
        PlayerBottom
    },
    props: ['id'],
    methods: {
        backAction: function() {
            // console.log(this)
            this.$router.back(-1);
        }
    },
    mounted() {
        getSongDetail(347230).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error)
        });
    }
};
</script>

<style lang="scss" scoped>
.player {
    background: orange;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

.headerabar {
    background-color: red;
    width: 100%;
    height: 64px;
    .middle {
        // width: 100%;
        height: 100%;
        line-height: 64px;
        color: white;
        background-color: orange;
        text-align: center;
        margin-left: 65px;
        margin-right: 65px;
        box-sizing: border-box;
    }
    .left-button {
        width: 65px;
        height: 100%;
        color: white;
        text-align: center;
        background-color: gray;
        position: relative;
        float: left;
    }
    .right-button {
        width: 65px;
        height: 100%;
        color: white;
        text-align: center;
        background-color: gray;
        float: right;
    }
}

</style>