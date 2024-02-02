<script>
import {store} from '../store.js'

export default {
    data() {
        return {
            activeImg : 0,
            autoplay : null,
            store,
            lifeStyle: [
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/visit-france.webp',
                    title: 'Reasons To Visit France'
                },
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/best-places.webp',
                    title: 'Places For A Road Trip'
                },
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/music-love.webp',
                    title: 'Music The Love Of My Life'
                },
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/anime-fashion.webp',
                    title: 'Fashion Trend Now A Days'
                },
            ],
            stories: [
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/ideas-anime.webp',
                    title: 'Live Ideas You Might Be Anime'
                },
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/travel-alone.webp',
                    title: 'Traveling Alone Is Awesome'
                },
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/success-story.webp',
                    title: 'The Best Success Stories'
                },
                {
                    imgUrl: 'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/best-places.webp',
                    title: 'Places For A Road Trip'
                },
            ],
        };
    },
    methods: {
        print () {
            console.log(this.store.items[0].imgUrl)
        },

        nextSlide() {
            if(this.activeImg < this.store.items.length - 1){
                this.activeImg++;
            }
            else{
                this.activeImg = 0;
            }
        },

        prevSlide() {
            if(this.activeImg > 0){
                this.activeImg--;
            }
            else{
                this.activeImg = this.store.items.length - 1;
            }
        },

        startAutoplay() {
            this.autoplay = setInterval(this.nextSlide, 3000);
        },

        handleEnterOnSlider() {
            clearInterval(this.autoplay);
            this.autoplay = null;
        },

        handleLeaveSlider() {
            this.startAutoplay();
        },
    },
}
</script>

<template>
    <header>
        <!-- HEADER TOP -->
            <section class="header-top" @mouseenter="handleEnterOnSlider()" @mouseleave="handleLeaveSlider()">
                <div class="container h-100">
                    <div class="row h-100 text-center text-light">
                        <div class="col-auto updates fw-bold fs-6 d-flex align-items-center">
                            NEWS UPDATES
                        </div>

                        <!-- CAROSELLO IMG/ORA/TITOLO -->
                        <div class="col-auto p-0">
                            <div class="img-box">
                                <div class="triangle-right"></div>
                                <img class="smooth-transition" :src="this.store.items[activeImg].imgUrl" :alt="this.store.items[activeImg].imgUrl">
                            </div>
                        </div>
                        <div class="col-auto d-flex align-items-center">
                            <span class="fw-medium smooth-transition"> {{this.store.items[activeImg].hour}}</span>
                        </div>
                        <div class="col d-flex align-items-center">
                            <a class="fs-5 fw-medium current-title m-0 typewriter" >{{this.store.items[activeImg].title}}</a> 
                        </div>
                        <!-- FRECCIE SCORRIMENTO CAROSELLO -->
                        <div class="col-auto d-flex align-items-center">
                            <i class="fa-solid fa-angle-left angle" @click="prevSlide()"></i>
                            <i class="fa-solid fa-angle-right angle" @click="nextSlide()"></i>
                        </div>
                        <!-- BRANDS -->
                        <div class="col-auto d-flex align-items-center p-0">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </section>

        <!-- HEADER MIDDLE -->
            <section class="container">
                <div class="row header-middle">
                    <div class="col-auto p-0 img-box">
                        <a href="/">
                            <img src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/anime-logo.webp" alt="">
                        </a>
                    </div>
                    <div class="col-auto p-0">
                        <img src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/header-banner.webp" class="rounded-1" alt="">
                    </div>
                </div>   
            </section>           
            
            <hr>
            
        <!-- HEADER BOTTOM -->
            <section class="container">
                <div class="row header-bottom">

                    <!-- BUTTON OFFCANVAS HAMBURGER -->
                    <div class="col-auto p-0" id="hamburger">
                        <button class="btn fs-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHamburger" aria-controls="offcanvasHamburger">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasHamburger" aria-labelledby="offcanvasHamburgerLabel">
                            <!-- OFFCANVAS HEADER -->
                            <div class="offcanvas-header">
                                <div class="btn-box">
                                    <button type="button" class="button-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <i class="fa-solid fa-square-xmark"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- OFFCANVAS BODY -->
                            <div class="offcanvas-body">
                                <div class="img-box">
                                    <a href="/">
                                        <img  src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/anime-logo.webp" alt="">
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, enim consequatur voluptates sunt minus facilis.</p>

                                <div class="mb-4">
                                    <div class="row row-cols-3 mb-3 ">
                                        <div class="col">
                                            <img class="rounded-2" :src="this.lifeStyle[2].imgUrl" :alt="this.lifeStyle[2].title">
                                        </div>
                                        <div class="col">
                                            <img class="rounded-2" :src="this.lifeStyle[1].imgUrl" :alt="this.lifeStyle[1].title">
                                        </div>
                                        <div class="col">
                                            <img class="rounded-2" :src="this.lifeStyle[3].imgUrl" :alt="this.lifeStyle[3].title">
                                        </div>
                                    </div>

                                    <div class="row justify-content-center info">
                                        <div class="col-auto">
                                            <i class="fa-solid fa-clock"></i>
                                        </div>
                                        <div class="col-auto">
                                            <span>Sun - Sat : 9:00 AM - 18:00 PM</span>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center info">
                                        <div class="col-auto">
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>
                                        <div class="col-auto">
                                            <span>contact@domain.com</span>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center info">
                                        <div class="col-auto">
                                            <i class="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div class="col-auto">
                                            <span>(+82) 8123 456 789</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center ">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- LINK HEADER BOTTOM -->
                    
                    <ul class="col m-0 d-flex align-items-center justify-content-center">

                        <!-- HOME -->
                        <li class="active-link">
                            <i class="fa-solid fa-house-chimney"></i>
                            <a href="/">HOME</a>
                        </li>
                        <!-- ABOUT US -->
                        <li>
                            <i class="fa-solid fa-user"></i>
                            <a href="/aboutus">ABOUT US</a>
                        </li>
                        <!-- LIFE STYLE -->
                        <li id="life-style">
                            <i class="fa-solid fa-suitcase"></i>
                            <div class="dropdown">
                                <a>LIFESTYLES
                                    <div class="dropdown-content smooth-transition">
                                        <div class="container">
                                            <div class="row row-cols-4 p-3">
                                                <div class="col text-center" v-for="(elem, i) in lifeStyle">
                                                    <div class="bg-light rounded-3">
                                                        <img class="rounded-3" :src="elem.imgUrl" :alt="elem.title">
                                                        <a class="bg-light p-2 m-0 rounded-3">{{ elem.title }}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <!-- STORIES -->
                        <li id="stories">
                            <i class="fa-solid fa-book-open-reader"></i>
                            <div class="dropdown">
                                <a>STORIES
                                    <div class="dropdown-content smooth-transition">
                                        <div class="container">
                                            <div class="row row-cols-4 p-3">
                                                <div class="col text-center" v-for="(elem, i) in stories">
                                                    <div class="bg-light rounded-3">
                                                        <img class="rounded-3" :src="elem.imgUrl" :alt="elem.title">
                                                        <a class="bg-light p-2 m-0 rounded-3">{{ elem.title }}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <!-- PAGES -->
                        <li id="pages">
                            <i class="fa-solid fa-book"></i>
                            
                            <div class="dropdown">
                                <a>PAGES
                                    <div class="dropdown-content smooth-transition bg-light ">
                                        <a href="#">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <span>SEARCH RESULT</span>
                                        </a>
                                        <a href="#">
                                            <i class="fa-solid fa-box-archive"></i>
                                            <span>CATEGORY ARCHIVE</span>
                                        </a>
                                        <a href="#">
                                            <i class="fa-solid fa-circle-user"></i>
                                            <span>AUTHOR ARCHIVE</span>
                                        </a>
                                        <a href="#">
                                            <i class="fa-solid fa-calendar-days"></i>
                                            <span>DATE ARCHIVE</span>
                                        </a>
                                        <a href="/error404">
                                            <i class="fa-solid fa-bug"></i>
                                            <span>ERROR 404</span>
                                        </a>
                                    </div>
                                </a>
                            </div>
                        
                        </li>
                        <!-- CONTACT US -->
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            <a href="/contactus">CONTACT US</a>
                        </li>
                    </ul>
                    
                    <!-- BUTTON OFFCANVAS GLASS -->
                    <div class="col-auto" id="glass">
                        <button class="btn fs-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasSearch" aria-labelledby="offcanvasSearchLabel">
        
                            <!-- OFFCANVAS BODY -->
                            <div class="offcanvas-body" >
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="css-input" placeholder="Search..."/>
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <button type="button" class="button-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                        <i class="fa-solid fa-x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </header>
</template>

<style lang="scss" scoped>

/*   GENERAL */
.container {
    width: 1200px;
}

a {
    text-decoration: none;
    color: white;
    cursor: pointer;
}

hr {
    margin: 0;
    border-color: #c0c0c0;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    
    li {
        padding: 5px 10px;
        margin: 10px;
    }
}

.smooth-transition {
    animation: mytransition 0.5s ; 
}

@keyframes mytransition {
    0%   { opacity: 0.1; }
  100% { opacity: 1; }
}

.fa-brands {
        width: 30px;
        height: 30px;
        padding: 5px;
        margin: 0 5px;
        cursor: pointer;
        background-color: white;
        color: #BF1C2D;
        font-size: 15px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: #5E4F50;
            color: #F9E9EA;
            transition: 0.3s;
        }
    }


/*           HEADER TOP          */
.header-top {
height: 40px;
background-color:#BF1C2D;


.typewriter {
  overflow: hidden;
  border-right: .15em solid white;
  white-space: nowrap; 
  margin: 0 auto;
  
  animation: 
    typing 1s steps(80, end),
    blink-caret .75s step-end infinite;
}


@keyframes typing {
  from { width: 0 }
  to { width: 40% }
}


@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}

    .img-box {
        height: 100%;
        width: 40px;
        position: relative;
        
        .triangle-right {
            position: absolute;
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-left: 8px solid #BC1C2F;
            border-bottom: 20px solid transparent;
        }

        img {
            height: 100%;
            object-fit: cover;
        }
    }
    .row {

        .updates {
            background-color: #545454 ;
        }
    }

    .angle {
        padding: 0 5px;
        margin: 0 5px;
        cursor: pointer;
    }
    .angle:hover, .current-title:hover {
        color: #5E4F50;
    }
}

/*           HEADER MIDDLE          */
.header-middle {
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
    .img-box {
        width: 20%;
    }
}


/*           HEADER BOTTOM          */
.header-bottom {
    color: rgb(35, 35, 35);
    display: flex;
    align-items: center;

    a {
        color: #3e3e3e;
    }

    .btn {
        color: rgb(35, 35, 35);
        padding: 0 5px;

        &:hover {
            color: #BF1C2D;
        }
    }

    #hamburger button, #glass button{
        border: none;
    }

    #hamburger .offcanvas-start {
        transition: 1.5s;
    }

    #hamburger .offcanvas {
        width: 40%;
        text-align: center;
        padding: 10px 20px;

        .btn-box {
            position: absolute; left: 100%; top: 0;
            width: 60px;
            height: 50px;
            display: flex;

            .button-close {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #BC1C2F;
                border: none;
                transition: 0.5s;

                &:hover {
                    background-color: #545454;
                    transition: 0.5s;
                }
                
                i {
                    color: rgb(255, 255, 255);
                    font-size: 30px;
                }
            }
        }
        .offcanvas-body {
            display: flex;
            flex-direction: column;
            .img-box {
                width: 60%;
                margin: 40px auto;
                
            }

            p {
                padding: 10px 40px;
            }

            .info {
                margin: 10px auto;
                width: 60%;
                font-weight: 500;

                &:hover {
                    i {
                        color: #3e3e3e;
                        transition: 0.5s;
                    }

                    span:hover {
                        color: #BC1C2F;
                        transition: 0.5s;
                    }

                }

                i {
                    color: #BC1C2F;
                }            
            }

            .fa-brands {
                width: 40px;
                height: 40px;
                background-color: #BF1C2D;
                color: white;
                font-size: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    background-color: #504e4e;
                    transition: 0.3s;
                }
            }

        }

    }

    #glass .offcanvas-end {
        transition: 1s;
    }

    #glass .offcanvas {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.76);
        text-align: center;
        padding: 10px 20px;
        color: rgb(208, 208, 208);
        .offcanvas-body {
            display: flex;
            justify-content: center;
            align-items: center;
            
            .btn-box {
                width: 30px;
            }

            .button-close {
                width: 100%;
                background-color: rgba(0, 0, 0, 0);
            }                
                i {
                    color: white;
                }

            .row {
                width: 70%;
                height: 60px;
                .css-input {
                    text-align: center;
                    width: 100%;
                    padding: 5px 15px;
                    font-size: 30px;
                    border: none;
                    border-bottom: 1px solid white;
                    background-color: rgba(0, 0, 0, 0);
                    color: white;
                }
                .css-input:focus {
                    outline:none;
                }
            }
        }

    }

    ul {
            height: 50px;
        li {
            margin: 0 10px;
            height: 90%;
            display: flex;
            align-items: center;
            padding: 0 10px;
            font-weight: 500;
            cursor: pointer;

            &.active-link {
                color: #BF1D2E;
                a {
                    color: #BF1D2E;
                }
            }

            &:hover {
                    color: #BF1D2E;

                    a {
                        color: #BF1D2E;
                        
                    }

                }

            a {
                padding: 10px;
                height: 100%;
                display: flex;
                align-items: center;
            }
            .dropdown-content {
                display: none;
                position: absolute; top: 43px; left: 0;
                background-color: #f1f1f1;
                min-width: 200px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
            }
            .dropdown-content a {
                display: flex;
                color: black;
                padding: 5px 16px;
                text-decoration: none;
                display: block;
                font-size: small;

                i {
                    width: 15%;
                }
            }

            .dropdown-content a:hover {
                background-color: #ddd;
            }

            .dropdown:hover .dropdown-content {
                display: block;
            }
        }
    }
}

#life-style {

    .dropdown {
        position: static;
    }
    
    .dropdown-content {
                display: none;
                top: 220px;
                background-color: #f1f1f1;
                width: 100%;
                min-height: 200px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
            }

            .dropdown-content a {
                display: flex;
                color: black;
                text-decoration: none;
                display: block;
                i {
                    width: 15%;
                }
            }

            .dropdown-content a:hover {
                color: #BC1C2F;
            }

            .dropdown:hover .dropdown-content {
                display: block;
            }
}

#stories {
    .dropdown {
        position: static;
    }
    .dropdown-content {
                display: none;
                top: 220px;
                background-color: #f1f1f1;
                width: 100%;
                min-height: 200px;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
                
                &:hover {
                    transition: 3s;
                }
            }

            .dropdown-content a {
                display: flex;
                color: black;
                text-decoration: none;
                display: block;

                i {
                    width: 15%;
                }
            }

            .dropdown-content a:hover {
                color: #BC1C2F;
            }

            .dropdown:hover .dropdown-content {
                display: block;
            }
}




</style>