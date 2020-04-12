<template>
    <div class="home-segemnt">
        <router-link to="/recommend" tag="div" class="item">
            <span>推荐</span>
        </router-link>
        <router-link to="/single" tag="div" class="item">
            <span>歌单</span>
        </router-link>
        <router-link to="/ranking" tag="div" class="item">
            <span>排行榜</span>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'segment'
};
</script>

<style lang="scss" scoped>

.home-segemnt {
    width: 100%;
    height: 65px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: red;
    .item {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        span {
            // display: inline-block;
            position: relative;
            // width: 100%;
            color: black;
            line-height: 65px;
            text-align: center;
            left: 50%;
            transform: translate(-50%, 0);
            margin: 0 auto;
            border-bottom-color: transparent;
            border-bottom-style: solid;
            border-bottom-width: 3px;
            // border-bottom: white solid 5px;
            box-sizing: border-box;
            padding-bottom: 5px;


        }
         &.router-link-active {
            span {
            color: white;
            border-bottom: white solid 5px;
            }
        }
    }
}

.item {
    height: 100%;

}

</style>