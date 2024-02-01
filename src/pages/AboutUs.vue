<script>
import {store} from '../store.js'
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    data() {
        return {
            store,
            activeAccordion1: null,
            activeAccordion2: null, 
            team: [
                {
                    author: 'DAVID ANDERSON',
                    role: 'Founder & CEO',
                }
            ],
            accordions1: [
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 1
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 2
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 3
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 4
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 5
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 6
                },
                
            ],
            accordions2: [
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 1
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 2
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 3
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 4
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 5
                },
                {
                    title: 'A Frequently Asked Question Surrounding Your Service',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                    id: 6
                },
                
            ],
        };
    },
    components: {
        AppHeader,
        AppFooter
    },
    methods: {
    toggleAccordion(list, index) {          //Diamo come argomenti la lista in cui ciclare ed il rispettivo indice
      if (list === 1) {                                                 //Per la lista 1 (accordions1)
        if (this.activeAccordion1 === index) {                          //Se l'accordion attivo è uguale all'indice
          this.activeAccordion1 = null;                                 //Chiudilo
        } else {    
          this.activeAccordion1 = index;                                //Altrimenti attivalo
        }
      } else if (list === 2) {                                          //Per la lista 2 (accordions2)
        if (this.activeAccordion2 === index) {
          this.activeAccordion2 = null;
        } else {
          this.activeAccordion2 = index;
        }
      }
    }
  }
}
</script>

<template>
    <AppHeader />

    <main>

        <!-- Jumbotron -->

        <section class="jumbotron">
            <div id="jumbo-overlay">
                <div class="d-flex justify-content-center align-items-center">
                    <h1 class="fs-3 text-light ">
                        ABOUT US
                    </h1>
                </div>
            </div>
        </section>

        <!-- First-Section (Start Improving) -->

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

        <!-- Second-Section (Our Mission Vision) -->

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

        <!-- Third-Section (Our Team) -->

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
                            <div class="author text-grey">{{this.team[0].author}}</div>
                            <div class="role text-red">{{this.team[0].role}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fourth-Section (FAQ)  -->

        <section class="fourth-section p-4">
            <div class="container">
                <div class="text-center mb-4">
                    <h1 class="text-grey mb-3 ">
                        FAQ
                    </h1>
                </div> 
                <div class="row">

                    <!--  Accordion 1 -->
                    <div class="col m-1">
                        <div class="card-body">
                            <div class="accordion" id="accordionExample1">
                                <div v-for="(item, index) in accordions1" :key="index" class="accordion-item">  <!-- Ciclo per la lunghezza della prima lista -->
                                    <p class="accordion-header" :id="'heading1-' + index">                              <!-- Ogni elemento dell'accordion deve avere un identificativo -->
                                    <button class="accordion-elem" :class="{ 'text-red': activeAccordion1 === index }" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse1-' + index" aria-expanded="false" :aria-controls="'collapse1-' + index" @click="toggleAccordion(1, index)"> <!-- Al click attivo la funzione -->
                                        {{ item.title }}
                                        <i class="fa-solid" :class=" activeAccordion1 === index ? 'fa-minus' : 'fa-plus'"></i>
                                    </button>
                                    </p>
                                    <div :id="'collapse1-' + index" class="accordion-collapse collapse" :class="{ 'show': activeAccordion1 === index }" :aria-labelledby="'heading1-' + index">
                                        <div class="accordion-body">
                                            {{ item.text }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Accordion 2 -->
                    <div class="col accordion m-1">
                        <div class="card-body">
                            <div class="accordion" id="accordionExample2">
                                <div v-for="(item, index) in accordions2" :key="index" class="accordion-item">
                                    <p class="accordion-header" :id="'heading2-' + index">
                                    <button class="accordion-elem" :class="{ 'text-red': activeAccordion2 === index }" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse2-' + index" aria-expanded="false" :aria-controls="'collapse2-' + index" @click="toggleAccordion(2, index)">
                                        {{ item.title }}
                                        <i class="fa-solid" :class=" activeAccordion2 === index ? 'fa-minus' : 'fa-plus'"></i>
                                    </button>
                                    </p>
                                    <div :id="'collapse2-' + index" class="accordion-collapse collapse" :class="{ 'show': activeAccordion2 === index }" :aria-labelledby="'heading2-' + index">
                                        <div class="accordion-body">
                                            {{ item.text }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <AppFooter />
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

/*     Jumbotron    */
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

/*     First-Section (Start Improving)   */
.first-section {
    min-height: 380px;
    padding: 30px 0;
}

/*     Second-Section (Our Mission Vision)   */
.second-section {
    min-height: 300px;
    padding: 30px 0;
    background-color: #F3F3F3;
}

/*     Third-Section (Our Team)   */
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

/*     Fourth-Section (FAQ)   */
.fourth-section {
    margin: 10px;
    min-height: 600px;
     
    .accordion {

        button {

                width: 100%;
                border: none;
                font-weight: 700;
                font-size: 17px;
                padding: 13px 15px;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        .accordion-item {
            border-radius: 0; 
            padding: 0; 
        }

        .accordion-collapse {
            border-top: 1px solid rgb(209, 209, 209);
            transition: 0.5s;
        
        }
    }    
}
</style>
