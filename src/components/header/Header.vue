<template>
    <header class="resume-header pt-4 pt-md-0">
        <div class="media flex-column flex-md-row">
            <img class="mr-3 img-fluid picture mx-auto" src="../../assets/images/profile.jpg" alt="">
            <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div class="primary-info">
                    <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Rosmar Blasquez</h1>
                    <div class="title mb-3">Full Stack Developer</div>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <a href="#"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>
                                reblasquez@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>
                                +56 9 7357 2671
                            </a>
                        </li>
                    </ul>
                </div><!--//primary-info-->
                <div class="secondary-info ml-md-auto mt-2">
                    <ul class="resume-social list-unstyled">
                        <li class="mb-3"><a href="#"><span class="fa-container text-center mr-2"><i class="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/stevedoe</a></li>
                        <li class="mb-3"><a href="#"><span class="fa-container text-center mr-2"><i class="fab fa-github-alt fa-fw"></i></span>github.com/username</a></li>
                        <li class="mb-3"><a href="#"><span class="fa-container text-center mr-2"><i class="fab fa-codepen fa-fw"></i></span>codepen.io/username/</a></li>
                        <li><a href="#"><span class="fa-container text-center mr-2"><i class="fas fa-globe"></i></span>yourwebsite.com</a></li>
                    </ul>
                </div><!--//secondary-info-->

            </div><!--//media-body-->
        </div><!--//media-->
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
        },
    };
</script>
