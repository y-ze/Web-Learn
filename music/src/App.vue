<template>
  <div id="app">
  <headerbar></headerbar>
  <homesegment></homesegment>
  <router-view></router-view>
  </div>
</template>

<script>
import headerbar from './components/HeaderBar';
import homesegment from './components/HomeSegment';


export default {
    name: 'App',
    components: {
        headerbar,
        homesegment
    }
};
</script>

<style lang="scss">

</style>
