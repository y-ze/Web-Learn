<template>
    <div class="singler">
        <div class="box">
            <div class="content">文字内容容文字内
                <div class="subcontent"></div>
            </div>
            <div class="icon-menu">

            </div>
            <div class="icon-dot"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'singler'
};
</script>

<style lang="scss">
.box {
    text-align: center;
}

.content {
    display: inline-block;
    text-align: left;
}

.icon-menu {
    display: inline-block;
    width:  140px;
    height: 10px;
    padding: 35px 0;
    border-top: 10px solid;
    border-bottom: 10px solid;
    background-color: currentColor;
    background-clip: content-box;
}

.icon-dot {
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 10px solid;
    border-radius: 50%;
    background-color: currentColor;
    background-clip: content-box;
    box-sizing: border-box;
}

</style>