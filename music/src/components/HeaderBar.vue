<template>
    <div class="headerabar">
        <div class="left-button">left</div>
        <div class="right-button">right</div>
        <div class="middle">
            middle
        </div>
    </div>
</template>

<script>
export default {
    name: 'headerabar'
};
</script>

<style lang="scss" scoped>
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