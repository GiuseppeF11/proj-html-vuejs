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
    <section class="jumbotron">
        <div id="jumbo-overlay">
            <div class="container">
                <h1 class="m-0">
                    404
                </h1>
                <h4>
                    OOPS! PAGE NOT FOUND
                </h4>
                <a href="/"> GO BACK TO HOMEPAGE</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    
.jumbotron {
    background-image: url('/public/page-head-banner.webp');
    background-size: cover;
    height: 100vh;

    #jumbo-overlay {
        background-color: rgba(0, 0, 0, 0.515);
        z-index: 2;
        height: 100%;
        cursor: pointer;

        div {
            height: 100%;
        }
    }
}

.container {
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

}

h1 {
    text-align: start;
    font-size: 200px;
    line-height: 0.8;
}

h4 {
    margin-bottom: 100px;
    font-size: 30px;
}

a {
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #BF1D2E;
    color: white;
    text-decoration: none;
    font-weight: 700;
    transition: ease-in-out 0.3s;
    text-align: center;
    width: 300px;

    &:hover {
        background-color: grey;
    }
}
    

</style>
