<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
        HEADER

        <ul>
            <li>
                <router-link :to="{ name: 'home'}"> Home </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'aboutus'}"> About Us </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contactus'}"> Contact Us </router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
</style>
