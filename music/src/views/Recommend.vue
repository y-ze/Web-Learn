<template>
<div id="wrapper">

        <div class="recommend" ref="r_recomment">
        <banner :banners="banners" ref="banner"></banner>
        <div class="day-recommend">
            <span class="title">
                推荐歌单
            </span>
            <div class="tableview">
                <div class="cell" v-for="(item, index) in items" :key="index">
                        <img :src="item.picUrl" alt="">
                        <p>{{item.name}}</p>
                </div>
            </div>
            <div class="tableview">
                <div class="cell" v-for="(item, index) in items" :key="index">
                        <img :src="item.picUrl" alt="">
                        <p>{{item.name}}</p>
                </div>
            </div>
        </div>
        <div class="new-music">
            <span class="title">最新音乐</span>
            <ul class="n-tableview">
                <li class="n-cell" v-for="(item, index) in newSongs" :key="index" @click="toPlayerAction(item)">
                    <div class="n-div">
                        <div class="lefcontainer">
                        <h3>{{ item.name }}</h3>
                        <span>SQ</span>
                        <p class="n-author">{{ getAuthor(item) }}</p>
                    </div>
                    <div class="rightimage"></div>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import banner from '../components/Banner';
import IScroll from 'iscroll';

import {getBanner, getDayRecommend, getNewSong} from '../http/API';

export default {
    name: 'recommend',
    components: {
        banner
    },
    data() {
        return {
            banners: [],
            items: [],
            scoll: {},
            newSongs: []
        };
    },
    methods: {
        getAuthor(item) {
            let artists = item.song.artists;
            let results = artists.map(artist => artist.name);
            let author = results.join('/');
            return author + ' - ' + item.song.album.name;
        },
        toPlayerAction(item) {
            this.$router.push({ name: 'player', params: { id: item.id }})
        }
    },
    mounted() {
            this.scroll = new IScroll('#wrapper', {
                mouseWheel: true,
                scrollbars: true
            });
            let observer = new MutationObserver(() => {
                this.scroll.refresh();
            });
            observer.observe(this.$refs.r_recomment, {
                    childList: true,
                    attributeFilter: ['height', 'offsetHeight'], // 观察特定属性
                    subtree: true});
            getBanner().then(response => {
                    this.banners = response.banners;
                })
            .catch(function (error) {
                    console.log(error);
                });

            getDayRecommend().then(response => {
                    this.items = response.result;
                }).catch(function (error) {
                    console.log(error);
                });

            getNewSong().then(response => {
                this.newSongs = response.result;
            }).catch(function (error) {
                console.log(error);
            });
        }
};
</script>

<style lang="scss">

.title {
    height: 35px;
    line-height: 35px;
    color: black;
    font-size: 18px;
    padding: 0 10px 0 10px;
    border-left: red solid 3px;
}

#wrapper {
    position: fixed;
    top: 129px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.tableview {
    display: flex;
    padding: 0 15px;
    justify-content: space-around;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
        background-color: white;
        .cell {
            width: 33%;
            background-color: white;
            // margin-left: 10px;
            // margin-right: 10px;
            padding: 5px;
            box-sizing: border-box;;
            overflow: hidden;
            border-radius: 5px;
            img {
                width: 100%;
                height: 100px;
                border-radius: 5px;

            }
            p {
                width: 100%;
                text-align: center;
                font-size: 13px;
            }
        }
    }

.new-music {
    .n-tableview {
        .n-cell {
            &:after {
                // margin-left: 10px;
                content: "";
                display: block;
                margin-left: 10px;
                // background-color: black;
                height: 1px;
                width: 100%;
                // left:0;
                // bottom: 0;
                border: 0 rgba($color: #000000, $alpha: 0.1) solid;
                // z-index: 2;
                // transform-origin: top left;
                border-bottom-width: 1px;
                box-sizing:border-box
            }
            .n-div {
           position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 10px;
            
            // border-bottom: rgb(240, 240, 240) solid 1px;
            .lefcontainer {
                h3 {
                font-size: 15px;
                color: #333;
               }
               span {
                   margin-right: 5px;
                    // height: 5px;
                    content: "SQ";
                    font-size: 3px;
                    color:red;
                    border: red 1px solid;
               }
            .n-author {
                font-size: 12px;
                color: #888;
                margin-top: 5px;
                display: inline-block;
            }
 
            }
            }
            .rightimage {
                background: "../assets/images/play_163@2x.png";
                width: 40px;
                // flex-basis: 40px;
                height: 40px;
                flex-shrink: 0;
                margin-left: 10px;
                background-color: gray;
            }
        }
    }
}

.line {
    background-color: gray;
    
    
    height: 10px;
}

</style>