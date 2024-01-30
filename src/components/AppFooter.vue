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
                            <li>
                                <a href="">
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Examples
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Docs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list col-2">
                        <h4>ABOUT</h4>
                        <ul>
                            <li>
                                <a href="">
                                    Stories
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Brand Assets
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list col-2">
                        <h4>FEATURES</h4>
                        <ul>
                            <li>
                                <a href="">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Design
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Code
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Collaborate
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list col-2">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li>
                                <a href="">
                                    Stories
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Brand
                                </a>
                            </li>
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
                        <p>&copy; Anime Tech, Theme by HasnainDEV</p>
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
                }

                li > a {
                    text-decoration: none;
                    color: white;

                }

                li > a:hover {
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

                button {
                    width: 100%;
                    border: none;
                    font-weight: 600;
                    padding-top: 0.8rem;
                    padding-bottom: 0.8rem;
                    background-color: #333333;
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
