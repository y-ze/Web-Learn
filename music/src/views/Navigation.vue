<template>
    <div class="navigation">
                <div class="leftButton">left</div>
        <div class="rightButton">right</div>

        <div class="middle">
            middle
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data: function () {
        return {

        };
    }
}
</script>

<style lang="scss" scoped>
.navigation {
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
    .leftButton {
        width: 65px;
        height: 100%;
        color: white;
        text-align: center;
        background-color: gray;
        position: relative;
        float: left;
    }
    .rightButton {
        width: 65px;
        height: 100%;
        color: white;
        text-align: center;
        background-color: gray;
        float: right;
    }
}
</style>