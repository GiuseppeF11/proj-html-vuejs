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
        <!-- HEADER TOP -->
            <div class="header-top">
                <div class="container h-100">
                <div class="row h-100 text-center text-light">
                    <div class="col-auto updates fw-bold fs-6 d-flex align-items-center">
                        NEWS UPDATES
                    </div>

                    <!-- CAROSELLO IMG/ORA/TITOLO -->
                    <div class="col-auto d-flex align-items-center p-0">
                        <div class="img-box">
                            <img src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/healthy-foods-150x150.webp" alt="">
                        </div>
                    </div>
                    <div class="col-auto d-flex align-items-center ">
                        <span class="fw-medium"> 5:30 </span>
                    </div>
                    <div class="col d-flex align-items-center">
                        <a class="fs-5 fw-medium current-title">"The Best Winter Outfits"</a>
                    </div>
                    <!-- FRECCIE SCORRIMENTO CAROSELLO -->
                    <div class="col-auto d-flex align-items-center">
                        <i class="fa-solid fa-angle-left angle"></i>
                        <i class="fa-solid fa-angle-right angle"></i>
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
            </div>

        <!-- HEADER MIDDLE -->
            <div class="container">
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
            </div>           
            
            <hr>
            
        <!-- HEADER BOTTOM -->
            <div class="container header-bottom p-0">
                <div class="row">

                    <!-- BUTTON OFFCANVAS -->
                    <div class="col-auto">
                        <button class="btn fs-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
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
                                            <img class="rounded-2" src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/music-love.webp" alt="">
                                        </div>
                                        <div class="col">
                                            <img class="rounded-2" src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/best-places.webp" alt="">
                                        </div>
                                        <div class="col">
                                            <img class="rounded-2" src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/anime-fashion.webp" alt="">
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
                    <div class="col">
                        <ul>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </div>
                    <div class="col-auto">

                    </div>
                </div>
            </div>
    </header>
</template>

<style lang="scss" scoped>
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

    
.header-top {
height: 40px;
background-color:#BF1C2D;

    .img-box {
        width: 40px;
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

.header-middle {
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
    .img-box {
        width: 20%;
    }
}

.header-bottom {
    color: rgb(35, 35, 35);

    .btn {
        color: rgb(35, 35, 35);
        padding: 0 5px;

        &:hover {
            color: #BF1C2D;
        }
    }

    .offcanvas-start {
            transition: 1.8s;

        }

    .offcanvas {
        width: 40%;
        text-align: center;
        padding: 10px 20px;

        .offcanvas-header {

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
                    background-color: #545454;
                    border: none;
                    transition: 0.5s;

                    &:hover {
                        background-color: #BC1C2F;
                        transition: 0.5s;
                    }
                    
                    i {
                        color: rgb(255, 255, 255);
                        font-size: 30px;
                    }
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
}


</style>
