<script>
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import {store} from './store.js'

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppMain,
    },  
    methods: {

    },
    mounted() {
        axios
            .get('')
            .then((response) => {
                console.log(response)
            });
    }
}
</script>

<template>

    <AppMain />

    <router-view></router-view>

    <!-- Componente per avere ad URL diversi, contenuti diversi -->
    
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
