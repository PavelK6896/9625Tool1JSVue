<template>
    <div class="container ">
        <div class="img-d">
            <div class="t1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam. </div>

            <img class="img1" src="../../assets/body2/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg">

            <div class="t2">Smart Home Installation</div>
            <img class="img2" src="../../assets/body2/Group.png">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Body2"
    }
</script>

<style scoped>

    .img1{
        position: absolute;
        z-index: 1;
    }

    .img2{
        position: absolute;
        z-index: 2;
    }
    .img-d{
        position: relative;
        overflow: hidden;
        height: 500px;
        display: flex;
        justify-content: center;
        text-align: center;


    }

    .t2{
        position: absolute;
        z-index: 3;
    }





    .t1{
        max-width: 500px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;

        letter-spacing: 0.05em;
        color: #222222;
    }
</style>