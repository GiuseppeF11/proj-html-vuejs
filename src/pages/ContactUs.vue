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
                    <h1 class="">
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
                            <h3>CALL US</h3>
                            <p>02 90 222 333</p>
                        </div>
                    </div>
                    <div class="single-card col mx-2 d-flex justify-content-start align-items-center">
                        <div class="contact-card-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-envelope fa-2xl"></i>
                        </div>
                        <div class="px-3">
                            <h3>EMAIL US</h3>
                            <p>info@domain.com</p>
                        </div>
                    </div>
                    <div class="single-card col mx-2 d-flex justify-content-start align-items-center">
                        <div class="contact-card-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-location-dot fa-2xl"></i>
                        </div>
                        <div class="px-3">
                            <h3>VISIT US</h3>
                            <p>3308 Fleming Street</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact-form">
            <div class="my-container">
                <div class="row">
                    <div class="col-7">
                        <form>
                            <fieldset disabled>
                            <legend>Disabled fieldset example</legend>
                            <div class="mb-3">
                                <label for="disabledTextInput" class="form-label">Disabled input</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                            </div>
                            <div class="mb-3">
                                <label for="disabledSelect" class="form-label">Disabled select menu</label>
                                <select id="disabledSelect" class="form-select">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
                                <label class="form-check-label" for="disabledFieldsetCheck">
                                    Can't check this
                            </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </fieldset>
                    </form>
                    </div>
                    <div class="col-5">
                        <div class="form-image">
                            <img src="/public/anime-contact.webp" alt="">
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
                //gutter??
                
                .contact-card-icon {
                    background-color: $my-main-color;
                    height: 80px;
                    width: 80px; 
                    border: 1px transparent white;
                    border-radius: 40px;
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

                }
            
            .form-image {
                
            }
            
        }
    }

    #maps-embed {
        margin-bottom: 0px;
    }
}
</style>
