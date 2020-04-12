<template>
    <div class="recommend">
        <banner :banners="banners"></banner>
    </div>
</template>

<script>
import banner from '../components/Banner';

import {getBanner} from '../http/API';

export default {
    name: 'recommend',
    components: {
        banner
    },
    data: function () {
        return {
            banners: []
        }
    },
    mounted: function () {
        getBanner.then((response) => {
            this.banners = response.banners;
        }).catch(function (error) {
            console.log(error);
        });
    }
};
</script>

<style lang="stylus">

</style>