<template>
  <div class="banner">
        <swiper ref="mySwiper" :options="swiperOptions" class="swiper" v-if="banners.length > 0">
        <swiper-slide v-for="banner in banners" :key="banner.targetId">
        <a :href="banner.url" :key="banner.targetId">
            <img :src="banner.imageUrl">
        </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>


<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
    name: 'banner',
    components: {
         Swiper,
         SwiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    data: function () {
        return {
            swiperOptions: {
                loop: true, // 循环模式选项
                autoplay: {
                delay: 1000, // 自动切换的时间间隔，单位ms
                stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
                disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                observer: true,
                observeParents: true,
                observeSlideChildren: true
          // Some Swiper option/callback...
            }
            
        };
    },
    props: {
        banners: {
            type: Array,
            default: () => [],
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>

.swiper {
    a {
        img {
            width: 100%;
            height: 150px;
        }
    }
}

.banner {
    width: 100%;
    height: 150px;
    background-color: gray;
    swiper {
        width: 100px;
        height: 100px;
    }
}

</style>

<style lang="scss">
.banner{
  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    background: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
          background: gray;

    // @include bg_color();
    /*background: #f00;*/
  }
}

</style>