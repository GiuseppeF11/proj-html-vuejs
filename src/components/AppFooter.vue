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
            ]
        };
    },
    methods: {

    }
}
</script>

<template>
    <footer>
        <div id="footer-arrow" class="d-flex justify-content-center py-0 my-0">
            <i class="fa-solid fa-caret-down fa-2xl"></i>
        </div>
        <section id="footer-top">

            <div class="my-container">
                <div class="row d-flex">
                    <div class="footer-list col-2 text-white">
                        <h4>GET STARTED</h4>
                        <ul>
                            <li v-for="(singleElem, i) in getStarted"> {{ singleElem.title }}</li>
                        </ul>
                    </div>
                    <div class="footer-list col-2">
                        <h4>ABOUT</h4>
                        <ul>
                            <li v-for="(singleElem, j) in about"> {{ singleElem.title }}</li>
                        </ul>
                    </div>
                    <div class="footer-list col-2">
                        <h4>FEATURES</h4>
                        <ul>
                            <li v-for="(singleElem, x) in features"> {{ singleElem.title }}</li>
                        </ul>
                    </div>
                    <div class="footer-list col-2">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li v-for="(singleElem, y) in quickLinks"> {{ singleElem.title }}</li>
                        </ul>
                    </div>
                    <div class="nl-subscribe col-4">
                        <form>
                            <h4>SUBSCRIBE TO NEWSLETTER</h4>
                            <input type="email" class="form-control" id="InputEmail" placeholder="Email">
                            <button type="submit" class="btn btn-primary">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

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

    #footer-arrow {
        border-top: 5px solid #333333;

        > * {
            color: #333333;
        }
    }

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
                    color: white;
                }

                li:hover {
                    color: #333333;
                    transition: 0.3s;
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
                }

                button:hover {
                    background-color: white;
                    color: $my-main-color;
                    transition: 0.3s;
                }
            }
        }
    }

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