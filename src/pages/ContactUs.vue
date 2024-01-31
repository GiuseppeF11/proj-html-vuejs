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
    <main>
        <section class="jumbotron">
            <div id="jumbo-overlay">
                <div class="d-flex justify-content-center align-items-center">
                    <h1 class="fs-3 text-light ">
                        CONTACT US
                    </h1>
                </div>
            </div>
        </section>

        <section id="contact-cards">
            <div class="my-container">
                <div class="row cols-3">
                    <div class="single-card col mx-2 d-flex justify-content-start align-items-center">
                        <div class="contact-card-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-phone-volume fa-2xl"></i>
                        </div>
                        <div class="px-3">
                            <h3 class="fs-5">CALL US</h3>
                            <p class="my-0">02 90 222 333</p>
                        </div>
                    </div>
                    <div class="single-card col mx-2 d-flex justify-content-start align-items-center">
                        <div class="contact-card-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-envelope fa-2xl"></i>
                        </div>
                        <div class="px-3">
                            <h3 class="fs-5">EMAIL US</h3>
                            <p class="my-0">info@domain.com</p>
                        </div>
                    </div>
                    <div class="single-card col mx-2 d-flex justify-content-start align-items-center">
                        <div class="contact-card-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-location-dot fa-2xl"></i>
                        </div>
                        <div class="px-3">
                            <h3 class="fs-5">VISIT US</h3>
                            <p class="my-0">3308 Fleming Street</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact-form">
            <div class="my-container">
                <div class="row">
                    <div class="col-7 px-2">
                        <form>
                            <div>
                                <h3 class="fs-4 my-3">
                                    GET IN TOUCH
                                </h3>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </div>
                            </div>
                            
                            <div class="row cols-2 my-4">
                                <div class="col mx-2 px-1">
                                    <input type="text" class="form-control" id="first-name" name="first-name" placeholder="First Name">
                                </div>
                                <div class="col mx-2 px-1">
                                    <input type="text" class="form-control" id="last-name" name="last-name" placeholder="Last Name">
                                </div>
                            </div>

                            <div class="row cols-2 my-4">
                                <div class="col mx-2 px-1">
                                    <input type="text" class="form-control" id="email" name="email" placeholder="Email">
                                </div>
                                <div class="col mx-2 px-1">
                                    <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone">
                                </div>
                            </div>

                            <div class="form-floating px-0 my-3">
                                <textarea class="form-control" placeholder="Message" id="floatingTextarea" style="height: 100px"></textarea>
                            </div>

                            <div class="d-flex justify-content-end">
                                <button type="submit" class="my-button">SEND MESSAGE</button>
                            </div>
                            
                        </form>
                    </div>
                    <div class="col-5 px-2">
                        <div >
                            <img class="form-image" src="/public/anime-contact.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="maps-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.121240905795!2d-123.0731134225272!3d49.255147872702274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867152bef9ea6b%3A0x766514453a1a0374!2s3308%20Fleming%20St%2C%20Vancouver%2C%20BC%20V5N%203V5%2C%20Canada!5e0!3m2!1sen!2sit!4v1706594089241!5m2!1sen!2sit" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </main>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

main {

    h1 , h3 {
    font-weight: 700;
    margin: 0;
    }

    p {
    font-weight: 500;
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

    #contact-cards {
        .my-container {
            max-width: 1200px;
            margin: 0 auto;
            .single-card {
                border: 1px transparent white;
                border-radius: 8px;
                background-color: #F3F3F3;
                margin: 50px 0px;
                padding: 20px;  
                color: #333333;
                .contact-card-icon {
                    background-color: $my-main-color;
                    height: 60px;
                    width: 60px; 
                    border: 1px transparent white;
                    border-radius: 30px;
                    > * {
                        color: white;
                        text-align: center;
                    }
                }

            }
        }
    }

    
    #contact-form {
        .my-container {
            max-width: 1200px;
            margin: 0 auto;
            margin-bottom: 50px;

        
            div > form {
                font-weight: 700;
                color: #333333;

                input, textarea {
                    font-weight: 700;
                    color: #333333;
                    border-top-color: transparent;
                    border-left-color: transparent;
                    border-right-color: transparent;
                }
                .form-control:focus {
                    box-shadow: none;
                    border-color: var(--bs-border-color);
                }
                .my-button {
                    background-color: $my-main-color;
                    color: white;
                    padding: 8px 40px;
                    border: 1px solid transparent;
                    border-radius: 24px;
                    
                }

                .my-button:hover {
                    background-color: #333333;
                    transition: 0.3s;
                }
            }
            
            .form-image {
                border-radius: 8px;
            }
            
        }
    }

    #maps-embed {
        line-height: 0;
    }
}
</style>