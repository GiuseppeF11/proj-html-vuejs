<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    data(){
        return{
            slideUno:[
                {
                    image: '/public/anime-fashion.webp',
                    desc: 'Fashion Trend Now A Days',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/best-places.webp',
                    desc: 'Places For A Road Trip',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/healthy-foods.webp',
                    desc: 'The Best Healthy Foods',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/photographers-mistakes.webp',
                    desc: 'Beginner Photographer Mistakes',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/rice-ball.webp',
                    desc: 'Hygenic Receipe To Prepare Rice',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/success-story.webp',
                    desc: 'The Best Success Stories',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/travel-alone.webp',
                    desc: 'Traveling Alone is Awesome',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/visit-france.webp',
                    desc: 'Reason To Visit France',
                    date: 'December 25, 2022',
                },
                {
                    image: '/public/winter.webp',
                    desc: 'The Best Winter Outfits',
                    date: 'December 25, 2022',
                },
                
                ],
            videos: [
                    {
                        thumb:'https://i.ytimg.com/vi/ebHd_3QJNBA/hqdefault.jpg',
                        num: 1,
                        title: 'Sword Of The Stranger Fight Scene'
                    },
                    {
                        thumb:'https://i.ytimg.com/vi/zlwQERpksnw/hqdefault.jpg',
                        num: 2,
                        title: 'Sun Out, Guns Out' 
                    },
                    {
                        thumb:'https://i.ytimg.com/vi/itQnUDMMhaU/hqdefault.jpg',
                        num: 3,
                        title: 'Top 10 Vinland Saga Moments' 
                    },
                    {
                        thumb:'https://i.ytimg.com/vi/IrU2dklT11s/hqdefault.jpg',
                        num: 4,
                        title: 'Everytime Sukuna Appears' 
                    },
                    {
                        thumb:'https://i.ytimg.com/vi/H5qupR6YQpQ/hqdefault.jpg',
                        num: 5,
                        title: 'Wizard King (Julius) Vs Licht (Patri) Full Fight'
                    },
                    {
                        thumb:'https://i.ytimg.com/vi/ICt1jYfucec/hqdefault.jpg',
                        num: 6,
                        title: 'Vinland Saga | SHATTERED'
                    },
                    {
                        thumb:'https://i.ytimg.com/vi/CkC5CtabT1Y/hqdefault.jpg',
                        num: 7,
                        title: 'Konan Arranges'
                    }
                ],
            slideDue:[
                    {
                        image: '/public/anime-fashion.webp',
                        title: 'Fashion Trend Now A Days',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/best-places.webp',
                        title: 'Places For A Road Trip',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/healthy-foods.webp',
                        title: 'The Best Healthy Foods',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/photographers-mistakes.webp',
                        title: 'Beginner Photographer Mistakes',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/rice-ball.webp',
                        title: 'Hygenic Receipe To Prepare Rice',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/success-story.webp',
                        title: 'The Best Success Stories',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/travel-alone.webp',
                        title: 'Traveling Alone is Awesome',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/visit-france.webp',
                        title: 'Reason To Visit France',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    {
                        image: '/public/winter.webp',
                        title: 'The Best Winter Outfits',
                        date: 'December 25, 2022',
                        desc:'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum...'
                    },
                    
                ],
            carouselFoot:[
                    {
                        image: '/public/anime-fashion.webp',
                        title:'FASHION',
                        desc:'3 POSTS'
                    },
                    {
                        image: '/public/success-story.webp',
                        title:'CULTURE',
                        desc:'3 POSTS'
                    },
                    {
                        image: '/public/healthy-foods.webp',
                        title:'FOOD',
                        desc:'3 POSTS'
                    },
                    {
                        image: '/public/visit-france.webp',
                        title:'LIFESTYLE',
                        desc:'3 POSTS'
                    },
                    {
                        image: '/public/travel-alone.webp',
                        title:'STORIES',
                        desc:'3 POSTS'
                    },
                    {
                        image: '/public/best-places.webp',
                        title:'TRAVEL',
                        desc:'3 POSTS'
                    }
                ],
        }
    },
    components: {
            AppHeader,
            AppFooter
        },
    mounted() {
        $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed:2000,
        draggable:true,
        swipeToSlide: true,
        pauseOnHover: false,
        prevArrow:'',
        nextArrow:''
        });
        
        $('.slider2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            autoplaySpeed:2000,
            draggable:true,
            swipeToSlide: true,
            pauseOnHover: false,
            prevArrow:'',
            nextArrow:''
            });
    },
    methods: {
        next() {
        $('.slider').slick('slickNext');
        },

        next2(){
            $('.slider2').slick('slickNext');
            },

        prev() {
        $('.slider').slick('slickPrev');
        },

        prev2(){
            $('.slider2').slick('slickPrev');
            },

        handleMouseOver() {
        $('.slider').slick('slickPause');
        },

        handleMouseLeave() {
        $('.slider').slick('slickPlay');
        }
    },
};

</script>

<template>

    <AppHeader />

    <main>
        <section class="bg-section mb-4">
            <div class="slider" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
                <div class="card" style="width: 18rem;" v-for="(slide,i) in slideUno">
                    <img :src="slide.image" class="card-img-top" alt="...">
                    <span class="badge my-badge-pers1 text-bg-light">Travel</span>
                    <span class="badge text-bg-light my-badge-pers2">Lifestyle</span>
                    <div class="card-body text-center">
                        <p class="card-text fw-bold mb-0">{{ slide.desc }}</p>
                        <p class="fw-semibold">{{ slide.date }}</p>
                    </div>
                </div>
            </div>

            <button class="my-button next" @click="prev"><i class="fa-solid fa-angle-left"></i></button>
            <button class="my-button prev" @click="next"><i class="fa-solid fa-angle-right"></i></button>
        </section>

        <div class="container">
            <section class="mb-5">      <!-- SEZIONE 2 COMPLETA -->
                <div class="row">
                    <div class="col-3 ">
                        <div class="card-section1">
                            <div class="card-section-main text-bg-dark border-0">
                                <img src="../../public/anime-fashion.webp" class="card-img" alt="...">
                                <div class="card-img-overlay card-poster">
                                    <div class="text-center ">
                                        <span class="badge  text-bg-light -3 mx-2 py-2 fw-semibold">Fashion</span>
                                        <span class="badge  text-bg-light -3 py-2 fw-semibold ">Lifestyle</span>
                                    </div>
                                    
                                    <div class="text-overlay text-center">
                                        <span><i class="fa-solid fa-user"></i></span>
                                        <span class="mx-2 fw-bold">demo</span>

                                        <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                        <span>December 25, 2022</span>
                                        <p class="card-text fw-bold">Fashion Trend Now a Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>  
                            <div class="card-section-main text-bg-dark mt-3 border-0">
                                <img src="../../public/travel-alone-300x200.webp" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <div class="text-center ">
                                        <span class="badge  text-bg-light -3 mx-2 py-2 fw-semibold">Stories</span>
                                        <span class="badge  text-bg-light -3 py-2 fw-semibold ">Travel</span>
                                    </div>
                                    <div class="text-overlay text-center">
                                        <span><i class="fa-solid fa-user"></i></span>
                                        <span class="mx-2 fw-bold">demo</span>

                                        <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                        <span>December 25, 2022</span>
                                        <p class="card-text fw-bold">Fashion Trend Now a Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 ">
                        <div class="card-section-main text-bg-dark border-0">
                            <img src="../../public/best-places.webp" class="card-img" alt="...">
                            <div class="card-img-overlay">
                                <div class="text-center ">
                                        <span class="badge  text-bg-light -3 mx-2 py-2 fw-semibold">Lifestyle</span>
                                        <span class="badge  text-bg-light -3 py-2 fw-semibold ">Stories</span>
                                        <span class="badge  text-bg-light -3 py-2 mx-2 fw-semibold ">Travel</span>
                                </div>
                                <div class="text-overlay-center text-center">
                                    <span><i class="fa-solid fa-user"></i></span>
                                    <span class="mx-2 fw-bold">demo</span>

                                    <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                    <span>December 25, 2022</span>
                                    <p class="card-text fw-bold">Fashion Trend Now a Days</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div>
                            <div class="card-section-main text-bg-dark border-0">
                                <img src="../../public/music-love.webp" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <div class="text-center ">
                                        <span class="badge  text-bg-light -3 mx-2 py-2 fw-semibold">Culture</span>
                                        <span class="badge  text-bg-light -3 py-2 fw-semibold ">Lifestyle</span>
                                    </div>
                                    <div class="text-overlay text-center">
                                        <span><i class="fa-solid fa-user"></i></span>
                                        <span class="mx-2 fw-bold">demo</span>

                                        <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                        <span>December 25, 2022</span>
                                        <p class="card-text fw-bold">Fashion Trend Now a Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card-section-main text-bg-dark mt-3 border-0">
                                <img src="../../public/visit-france.webp" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <div class="text-center ">
                                        <span class="badge  text-bg-light -3 py-2 fw-semibold ">Lifestyle</span>
                                        <span class="badge  text-bg-light -3 mx-2 py-2 fw-semibold">Travel</span>
                                    </div>
                                    <div class="text-overlay text-center">
                                        <span><i class="fa-solid fa-user"></i></span>
                                        <span class="mx-2 fw-bold">demo</span>

                                        <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                        <span>December 25, 2022</span>
                                        <p class="card-text fw-bold">Fashion Trend Now a Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                


            </section>                  <!-- FINE SEZIONE 2 COMPLETA -->
        
            <section>                   <!-- SEZIONE 3 COMPLETA -->
                <div class="flex-section mb-2">
                    <div>
                        <h4>
                            LIFESTYLE & STORIES
                        </h4>
                    </div>

                    <div>
                        <span class="badge badge-pers">ALL</span>
                        <span class="badge badge-pers">LIFESTYLE</span>
                        <span class="badge badge-pers">STORIES</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-7">
                        <div class="card-section-main text-bg-dark mt-3 border-0">
                            <img src="../../public/music-love.webp" class="card-img" alt="...">
                            <div class="card-img-overlay padding-badge-pers">
                                <div class="">
                                    <span class="badge  text-bg-light -3 mx-2 py-2 fw-semibold">Culture</span>
                                </div>
                                <div class="text-overlay card-lifestyle-text">
                                    <span><i class="fa-solid fa-user"></i></span>
                                    <span class="mx-2 fw-bold">demo</span>

                                    <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                    <span>December 25, 2022</span>
                                    <p class="card-text fw-bold">Music The Love Of My life</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-5">
                        <div class="flex-lifestyle">
                            <div class="card-section-main mt-3 border-0 card-lifestyle">
                                <img src="../../public/visit-france.webp" alt="" class="card-img">
                                <div class="card-img-overlay">
                                    
                                    <span class="badge text-bg-light -3 py-1 fw-semibold">Lifestyle</span>
                                    
                                </div>
                            </div>

                            <div class="mx-2">
                                <span><i class="fa-solid fa-user"></i></span>
                                <span class="mx-2 fw-bold">demo</span>

                                <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                <span>December 26, 2022</span>
                                <p class="card-text fw-bold">Music The Love Of My life</p>
                            </div>
                        </div>
                        <hr>

                        <div class="flex-lifestyle">
                            <div class="card-section-main border-0 card-lifestyle">
                                <img src="../../public/ideas-anime.webp" alt="" class="card-img">
                                <div class="card-img-overlay">
                                    
                                    <span class="badge text-bg-light -3 py-1 fw-semibold">Culture</span>
                                    
                                </div>
                            </div>

                            <div class="mx-2">
                                <span><i class="fa-solid fa-user"></i></span>
                                <span class="mx-2 fw-bold">demo</span>

                                <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                <span>December 26, 2022</span>
                                <p class="card-text fw-bold">Live Ideas You Might Be Anime</p>
                            </div>
                        </div>
                        <hr>

                        <div class="flex-lifestyle">
                            <div class="card-section-main border-0 card-lifestyle">
                                <img src="../../public/anime-fashion.webp" alt="" class="card-img">
                                <div class="card-img-overlay">
                                    
                                    <span class="badge text-bg-light -3 py-1 fw-semibold">Fashion</span>
                                    
                                </div>
                            </div>

                            <div class="mx-2">
                                <span><i class="fa-solid fa-user"></i></span>
                                <span class="mx-2 fw-bold">demo</span>

                                <span><i class="fa-solid fa-calendar-days mx-2"></i></span>
                                <span>December 25, 2022</span>
                                <p class="card-text fw-bold">Live Ideas You Might Be Anime</p>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </section>                  <!-- FINE SEZIONE 3 COMPLETA -->
        </div>

        <section class="bg-section mt-5 p-4">   <!-- SEZIONE 4 COMPLETA -->
            <div class="container">
                <div class="">
                    <img src="../../public/page-banner-1.webp" alt="" class="rounded-2 w-100">
                </div>
            </div>
        </section>                              <!--FINE SEZIONE 4 COMPLETA -->

        
        <section>
            <div class="container">
                <div class="flex-section mb-2">
                    <div>
                        <h4>
                            FEATURED POSTS
                        </h4>
                    </div>

                    <div>
                        <button @click="prev2" class="my-button2"><i class="fa-solid fa-angle-left"></i></button>
                        <button @click="next2" class="my-button2"><i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                
                
                <div class="slider2" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
                    <div class="card" style="width: 18rem;" v-for="(slide,i) in slideDue">
                        <img :src="slide.image" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title mb-0">{{ slide.title }}</h5>
                            <p class="fw-semibold mb-1">{{ slide.date }}</p>
                            <p class="card-text">{{ slide.desc }}</p>
                            <a href="#" class="link-pers">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="mt-5 mb-5">
                <div class="container">
                    <div class="flex-yt">
                        <div class="player">
                            <iframe width="840" height="550" src="https://www.youtube.com/embed/ebHd_3QJNBA?si=D9eFh_-BI02K8u_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div class="playlist-yt">
                            <div class="head-playlist">
                                <div class="icon-play">
                                    <i class="fa-solid fa-play"></i>
                                </div>

                                <div class="text-header-playlist">
                                    <p>Video Playlist</p>
                                    <p>1/7 Videos</p>
                                </div>
                            </div>

                             <div class="body-playlist">
                                <ul>
                                    <li v-for="(video, i) in videos" :key="i">
                                        <div class="flex-video">
                                            <div class="number-video">
                                                {{ video.num }}
                                            </div>

                                            <div class="thumb-video">
                                                <img :src="video.thumb" alt="">
                                            </div>

                                            <div class="title-video">
                                                {{ video.title }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>



            <section class="my-5">                    <!-- INIZIO SEZIONE 7 COMPLETA -->
            <div class="flex-footer-top">
                <div v-for="(card,i) in carouselFoot">
                    <div class="card-pers">
                        <div class="flex-title-footer">
                            <div>
                                <h5 class="text-center">{{card.title}}</h5>
                            </div>

                            <div>
                                <h5 class="text-center">{{ card.desc }}</h5>
                            </div>
                        </div>
                        <img :src="card.image" class="img-card-pers" alt="">
                        <div class="white-square">
                        </div>
                        <div class="overlay-pers"></div>
                        
                    </div>
                </div>
            </div>        
        </section>                             <!-- FINE SEZIONE 7 COMPLETA -->

        

    </main>

    <AppFooter />

</template>

<style lang="scss" scoped>
.bg-section{
    background-color:#F3F3F3;
    padding: 30px;
    position: relative;
}
        
.slider{
    display: flex;
}

.card{
    margin: 0 10px;
}


.my-button{
    color: #bf1d2e;
    border: none;
    background-color: white;
    padding: 10px 16px;
    border-radius: 100px;

    i{
        font-size: 18px;
    }
}


.next{
    position: absolute;
    top:180px;
    left: 60px;
}

.prev{
    position: absolute;
    top: 180px;
    right: 60px;
}

.my-button:hover{
    background-color: #bf1d2e;
    color: white;
    transition: 0.2s ease-in-out;
}


.card-body p:nth-child(2){
    color: gray;
}



.my-badge-pers1{
    position: absolute;
    top: 0;
    left: 25%;
    margin:10px;
    padding: 5px 15px;
    margin-left: 30px;
}

.my-badge-pers2{
    position: absolute;
    top: 0;
    left: 50%;
    margin-top: 10px;
    padding: 5px 10px;
    margin-right: 70px;
}

.container{
    max-width: 1200px;
}

.card-positive{
    position: relative;
}

.text-overlay{
    position: absolute;
    top: 120px;
    left: 12px;
}

.text-overlay-center{
    position: absolute;
    top: 320px;
    left: 170px;
}

.card-section-main img{
    filter: brightness(0.5);
}

.card-section-main{
    cursor: pointer;
    transition: 0.5s;
    filter: contrast();
}
.card-section-main:hover{
    cursor: pointer;
    filter: contrast(0.6);
    transition: 0.5s;
}

.text-center span{
    margin-top: 10px;
}
/* FINE CSS SEZIONE 2 */

.flex-section{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4{
        font-weight: bold;
    }
}

.card-img-overlay span{
    margin-top: 10px;
}


.badge-pers{
    background:#555454;
    padding: 8px 16px;
    margin-right: 15px;
    font-weight: 500;
}

.badge-pers:hover{
    background-color: #bf1d2e;
    cursor: pointer;
}

.card-lifestyle-text{
    position: absolute;
    top: 370px;
}

.flex-lifestyle{
    display: flex;
    align-items: center;
}

.card-lifestyle{
    width: 35%;
}

hr{
    color: black;
}

.flex-lifestyle .card-img-overlay{
    padding: 2px 10px;
}

/* FINE CSS SEZIONE 3 */

.bg-section{
    background-color:#F3F3F3;
}

/* FINE CSS SEZIONE 4 */




/* fine sezione 5 */

.card-carousel-width{
    width: 200px;
}


/* fine sezione 6 */


.flex-video{
    display: flex;
    align-items: center;
    padding: 10px;


> .thumb-video{
        width: 100px;
        margin: 15px;
        cursor: pointer;
    }
    .thumb-video img{
        object-fit: cover;
        width: 110px;
        height:80px;
        
    }
}

.body-playlist li:not(:last-child){
    border-bottom: 1px solid black;
}

ul,ol{
    list-style: none;
    padding: 0;
}


.number-video{
    background-color: #252525;
    color: white;
    padding: 1px 7px;
    border-radius: 5px;
    font-size: 14px;
}

.number-video:hover{
    background-color:#bf1d2e ;
    cursor: pointer;
    transition: 0.2s ease;
}
     
.title-video{
    font-size: 13px;
    margin-left:10px;
    font-weight: 500;
}

.title-video:hover{
    color: #bf1d2e;
    transition: 0.2s ease;
    cursor: pointer;
}


    /* sezione yt */

.flex-yt{
    display: flex;
    height: 550px;

> div:nth-child(1){
        width: 70%;
    }

> div:nth-child(2){
        width: 30%;
    }
}

.head-playlist{
    display: flex;
    height: 90px;
    background-color: #252525;
    padding:10px;
    align-items: center;
    padding-left: 20px;

> div i, div p{
        color: white;
    }

    div p{
        margin: 0;
        margin-left: 15px;
        font-size: 14px;
    }

    div i{
        font-size: 35px;
    }
}



.body-playlist{
    height: calc(100% - 90px);
    background-color: #F3F3F3;
    overflow-y: auto;
}

.slider2{
    display: flex;

    .card{
        border: none;
    }
}


.link-pers{
    text-decoration: none;
    color: white;
    background-color: #bf1d2e;
    padding: 10px 35px;
    border-radius: 20px;
    font-weight: 600;
}

.link-pers:hover{
    background-color: #333333;
    transition: 0.3s ease;
}

.slider2 .card-body{
    background-color: #F3F3F3;
}

.slider2 .card-body p:nth-child(2){
    color: gray;
}

.flex-section{
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4{
        font-weight: bold;
    }
}

.my-button2{
    border: none;
    background-color:#333333;
    color: white;
    padding: 10px 16px;
    border-radius: 100px;
    margin: 0 10px;
}

.my-button2:hover{
    background-color: #bf1d2e;
    transition: 0.2s ease;
}


.flex-footer-top{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    overflow-x: hidden;
            
    > *{
        width: calc(100% / 6 - 20px) ;
        margin: 0px 10px;
        }
}   
    

.card-pers{
    width: 100%;
    height: 200px;
    margin:0 5px;
    overflow: hidden;
    border-radius: 5px;
    position: relative;

    .flex-title-footer div:nth-child(1) h5{
        position: absolute;
        z-index: 1;
        color: white;
        font-weight: bold;
        font-size: 22px;
        top: 30%;
        left: 33%;

    }


    .flex-title-footer div:nth-child(2) h5{
        position: absolute;
        z-index: 1;
        color: white;
        font-weight: bold;
        font-size: 18px;
        top: 60%;
        left: 25%;
        opacity: 0;
        z-index: 1;
        transition: 0.3s;

    }

        .img-card-pers{
        width:100%;
        height: 100%;
        transform: scale(1.4) translateX(-20px);
        transition: transform 0.3s ease;
        filter: contrast(0.5) brightness(0.9);      
    }

    
}

    
.card-pers:hover .flex-title-footer div:nth-child(2) h5{
    transform: translateX(50%);
    opacity: 1;
}

.overlay-pers{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(255, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.white-square{
    width: 80%;
    height: 70%;
    border: 1px solid white;
    top: 30px;
    left: 33px;
    position: absolute;
    transform:translateX(-40px);
    opacity: 0;
    z-index: 1;
    transition: 0.3s;
    

    h5{
        color: white;
        font-weight: bold;
        position: absolute;
        top: 90px;
        left: 90px;
        font-size: 16px;
    }
}
.card-pers:hover .img-card-pers,
.card-pers:hover .overlay-pers{
    transform: scale(1.4) translateX(20px);
    opacity: 1;
    cursor: pointer;
}

.card-pers:hover .white-square{
    transform: translateX(48px);
    transition: transform 0.3s ease;
    opacity: 2;
    left: -18px;
}


</style>
