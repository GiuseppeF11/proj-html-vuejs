<script>
export default {
    data() {
        return {
            getStarted: [
                {
                    title:'Resources'
                },
                {
                    title:'Tutorials'
                },
                {
                    title:'Examples'
                },
                {
                    title:'Docs'
                },
            ],
            about: [
                {
                    title:'Stories'
                },
                {
                    title:'Community'
                },
                {
                    title:'Blog'
                },
                {
                    title:'Brand Assets'
                },
            ],
            features: [
                {
                    title:'Overview'
                },
                {
                    title:'Design'
                },
                {
                    title:'Code'
                },
                {
                    title:'Collaborate'
                },
            ],
            quickLinks: [
                {
                    title:'Stories'
                },
                {
                    title:'Community'
                },
                {
                    title:'Blog'
                },
                {
                    title:'Brand Assets'
                },
            ],
            userEmail: '',
            isModalOpen: false,
            isSubscribed: true,
        };
    },
    methods: {
        submitForm() {
        // Aggiungo le informazioni inserite dall'utente in una 
        this.userEmail =  this.email;

        console.log(this.userEmail);

        // Nascondo il modulo di iscrizione alla newsletter
        this.isSubscribed = false;

        // Mostro il modale
        this.isModalOpen = true;
        },
        // Chiudo il modale
        closeModal() {
            this.isModalOpen = false;
        }
    }
}
</script>

<template>
    <footer>
        <!-- bordo superiore del footer con icona nel mezzo -->
        <div id="footer-arrow" class="d-flex justify-content-center py-0 my-0">
            <i class="fa-solid fa-caret-down fa-2xl"></i>
        </div>

        <!-- TOP SECTION DEL FOOTER COMPLETA -->
        <section id="footer-top">
            <div class="my-container">
                <div class="row d-flex">

                    <!-- importo le liste relative ai menu del footer con la direttiva v-for -->
                    <div class="footer-list col text-white">
                        <h4>GET STARTED</h4>
                        <ul>
                            <li v-for="(singleElem, i) in getStarted">
                                <a href="#nogo">{{ singleElem.title }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list col">
                        <h4>ABOUT</h4>
                        <ul>
                            <li v-for="(singleElem, j) in about">
                                <a href="#nogo">{{ singleElem.title }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list col">
                        <h4>FEATURES</h4>
                        <ul>
                            <li v-for="(singleElem, x) in features">
                                <a href="#nogo">{{ singleElem.title }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list col">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li v-for="(singleElem, y) in quickLinks">
                                <a href="#nogo">{{ singleElem.title }}</a>
                            </li>
                        </ul>
                    </div>

                    <!-- utilizzo la direttiva v-if associata alla variabile isSubscribed per nascondere la sezione newsletter on submit del form -->
                    <div v-if="isSubscribed" class="nl-subscribe col-4">

                        <form @submit.prevent="submitForm">
                            <h4>SUBSCRIBE TO NEWSLETTER</h4>
                            <input type="email" class="form-control" id="InputEmail" v-model="email" placeholder="Email">
                            <button type="submit" class="btn btn-primary">SUBSCRIBE</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>

        <!-- MODALE MOSTRATO ON SUBMIT DEL FORM NEWSLETTER -->
        <section id="contact-form-modal">
            <div v-if="isModalOpen" class="my-modal">
                <div class="my-modal-content">
                    
                    <!-- Icona che ci permette di chiudere il modale attraverso la funzione closeModal -->
                    <span class="close" @click="closeModal">
                        <i class="fa-solid fa-xmark"></i>
                    </span>

                    <h4 >
                        Ti sei iscritto con successo alla <br>nostra Newsletter con la seguente Email:
                    </h4>
                    <h3>
                        {{ this.userEmail }}
                    </h3>
                    <p>
                        Ti invieremo presto aggiornamenti sui nostri servizi
                    </p>
                </div>
            </div>
        </section>

        <!-- BOTTOM SECTION DEL FOOTER COMPLETA -->
        <section id="footer-bottom">
            <div class="my-container">
                <div class="d-flex justify-content-between align-items-center">
                    <div id="footer-logo">
                        <img src="/public/anime-whitelogo-300x89.png" alt="Footer Logo">
                    </div>

                    <div id="copyright">
                        <div>&copy; Anime Tech, Theme by HasnainDEV</div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/mixins.scss' as *;
@use '../assets/scss/partials/variables.scss' as *;

footer {

    background-color: $my-main-color;

    /* Inizio stile per il modale */
    .my-modal { 
        position: fixed;
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
    }

    .my-modal-content {
        background-color: $my-main-color;
        margin: 15% auto; 
        padding: 20px 30px;
        border: 2px solid #333333;
        border-radius: 12px;
        width: 50%;
        color: white;
        text-align: center;

        > * {
            padding-bottom: 10px;
        }
        i {
            color: #333333;
        }
        i:hover {
            color: white;
        }
        #user-data {
            text-align: start;
        }
    }

    .close {
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    /* Fine stile per il modale */

    
    /* CSS FOOTER ARROW COMPLETO */
    #footer-arrow {
        border-top: 5px solid #333333;

        > * {
            color: #333333;
        }
    }

    /* CSS FOOTER TOP COMPLETO */
    #footer-top {

        .my-container {
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 50px;

            .footer-list {

                h4 {
                    color: white;
                    margin-bottom: 16px;
                }

                li {
                    margin-bottom: 10px;
                }

                li > a {
                    text-decoration: none;
                    color: white;
                    transition: ease-in-out 0.3s;
                }

                li >a:hover {
                    color: #333333;
                    
                }
            }

            .nl-subscribe {

                h4 {
                    color: white;
                    margin-bottom: 16px;
                }

                input {
                    padding-top: 0.8rem;
                    padding-bottom: 0.8rem;
                    margin-bottom: 0.8rem;
                }

                .form-control:focus {
                    box-shadow: none;
                }
                button {
                    width: 100%;
                    border: none;
                    font-weight: 600;
                    padding-top: 0.8rem;
                    padding-bottom: 0.8rem;
                    background-color: #545454;
                    color: white;
                    transition: ease-in-out 0.3s;
                }

                button:hover {
                    background-color: white;
                    color: $my-main-color;
                    
                }
            }
        }
    }

    /* CSS FOOTER ARROW COMPLETO */
    #footer-bottom {

        .my-container {
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 50px;
            border-top: 1px solid white;
            padding: 20px 0px;

            #footer-logo {
                width: 300px;
            }

            #copyright {
                font-weight: 600;
                color: white;
            }
        }
    }
}

</style>