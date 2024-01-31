<script>
export default {
    data() {
        return {
            activeAccordion: 0,
            accordions: []
        };
    },

    methods: {
        dynamicAcc () {
            
        }
    }
}
</script>

<template>
    <main>
        <section class="jumbotron">
            <div id="jumbo-overlay">
                <div class="d-flex justify-content-center align-items-center">
                    <h1 class="fs-3 text-light ">
                        ABOUT US
                    </h1>
                </div>
            </div>
        </section>
        <section class="first-section">
            <div class="container">
                <div class="row">
                    <h4 class="text-grey mb-3 ">
                            ABOUT ANIME TECH
                        </h4>
                    <div class="col">
                        
                        <h1 class="text-grey">
                            START IMPROVING
                        </h1>
                        <h1 class="text-red">
                            YOUR BUSINESS TODAY!
                        </h1>
                    </div>
                    <div class="col-7">
                        <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officiis omnis tempora ad? Dolores nemo libero magni, adipisci, soluta consequuntur explicabo incidunt illo, atque facere voluptas autem distinctio dicta. Itaque quam cumque explicabo quisquam enim, aperiam ratione, sunt, hic nam magni error. Officiis eius delectus dolores a harum, distinctio pariatur!</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officiis omnis tempora ad? Dolores nemo libero magni, adipisci, soluta consequuntur explicabo incidunt illo, atque facere voluptas autem distinctio dicta. Itaque quam cumque explicabo quisquam enim, aperiam ratione, sunt, hic nam magni error. Officiis eius delectus dolores a harum, distinctio pariatur!</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="second-section">
            <div class="container">
                <div class="row">
                    <div class="col-6 d-flex flex-column justify-content-center">
                        <h1 class="text-grey">
                            OUR MISSION
                        </h1>
                        <h1 class="text-red mb-3">
                            VISION
                        </h1>
                        <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officiis omnis tempora ad? Dolores nemo libero magni, adipisci, soluta consequuntur explicabo incidunt illo, atque facere voluptas autem distinctio dicta. Itaque quam cumque explicabo quisquam enim, aperiam ratione, sunt, hic nam magni error. Officiis eius delectus dolores a harum, distinctio pariatur!</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta officiis omnis tempora ad? Dolores nemo libero magni, adipisci, soluta consequuntur explicabo incidunt illo.</p>
                    </div>
                    <div class="col">
                        <img src="../../public/anime-contact.webp" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="third-section">
            <div class="container">
                <div class="text-center mb-4">
                    <h1 class="text-grey mb-3 ">
                        OUR TEAM
                    </h1>
                    <p class="w-75 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae accusantium numquam ut quos incidunt itaque, possimus quis a ad.</p>
                </div>  
                <div class="row row-cols-4 ">
                    <div class="col single-card" v-for="(elem, i) in 4">
                        <div class="img-box">
                            <img src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/team-member.webp" alt="">
                            <div class="brands-group">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="author text-grey">DAVID ANDERSON</div>
                            <div class="role text-red">Founder & CEO</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="fourth-section p-4">
            <div class="container">
                <div class="text-center mb-4">
                    <h1 class="text-grey mb-3 ">
                        FAQ
                    </h1>
                </div> 
                <div class="row">
                    <div class="col">
                        <div class="card-body">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div v-for="(accordion, i) in 6">
                                    <div class="accordion-item" @click="activeAccordion = i">
                                        <h2 class="accordion-header">
                                                <button class="accordion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne" >
                                                    <span>
                                                        A Frequently Asked Question Surrounding Your Service
                                                    </span>
                                                    <span>
                                                        <i class="fa-solid" :class="activeAccordion == i ?  'fa-minus' : 'fa-plus' "></i>
                                                    </span>
                                                </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                                                <div class="accordion-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item" v-for="(accordion, i) in 6" @click="activeAccordion = i" >
                                        <h2 class="accordion-header">
                                                <button class="accordion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne" >
                                                    <span>
                                                        A Frequently Asked Question Surrounding Your Service
                                                    </span>
                                                    <span>
                                                        <i class="fa-solid" :class="activeAccordion == i ?  'fa-minus' : 'fa-plus' "></i>
                                                    </span>
                                                </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                                                <div class="accordion-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
h1 , h4 {
    font-weight: 700;
    margin: 0;
}

.text-grey {
    color: #333333;
}

.text-red {
    color: #BF1D2E;
}
.container {
    width: 1200px;
}
.jumbotron {
        background-image: url('/public/page-head-banner.webp');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 230px;

        #jumbo-overlay {
            background-color: rgba(0,0,0,0.6);
            z-index: 2;
            height: 100%;
            cursor: pointer;

            div {
                height: 100%;
            }
        }
}

.first-section {
    min-height: 380px;
    padding: 30px 0;
}

.second-section {
    min-height: 300px;
    padding: 30px 0;
    background-color: #F3F3F3;
}

.third-section {
    min-height: 400px;
    padding: 30px 0;

    .single-card {
        .img-box:hover {
                    transition: 0.5s;
                    img {
                        filter:brightness(0.2);
                    }
                    .brands-group {
                        opacity: 1;
                        transition: 0.5s;
                    }
                }
        .img-box {
            margin-bottom: 20px;
            position: relative;
            border-radius: 50%;
            
            

            img {
                border-radius: 50%;
                transition: 0.5s;
                opacity: 1;              
            }

            .brands-group {
                display: flex;
                opacity: 0;
                position: absolute; 
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .fa-brands {
                    width: 30px;
                    height: 30px;
                    padding: 5px;
                    margin: 0 5px;
                    cursor: pointer;
                    color: #F9E9EA;
                    font-size: 20px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        color: #BF1C2D;
                        transition: 0.3s;
                    }
                }
            }
        }
        .author {
            font-size: 15px;
            font-weight: 700;
        }

        .role {
            font-size: 13px;
            font-weight: 700;
        }
    }

}

.fourth-section {
    margin: 30px;
    .accordion {
        
        .accordion-item {
            border-radius: 0;

            .accordion {
                border: none;
                background-color: white;
                font-size: 16px;
                display: flex;
                justify-content: space-between;
                padding: 10px 18px;
                width: 100%;
                font-weight: 700;
                
                &:focus {
                    box-shadow: none;
                    color: red;
                }

                i {
                    font-size: 18px;
                }
            }
        }
    }
}
</style>
