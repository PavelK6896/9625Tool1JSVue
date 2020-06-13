<template>

    <div class="container g1">
        <div class="g2">
            <div class="g3">Sparklite App</div>
            <div class="i1 img1"></div>
        </div>
        <div class="g2">
            <div class="g3">Car-Rapetition App</div>
            <div class="i2 img1"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Body3"
    }
</script>

<style scoped>

    .g1 {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

    }

    .g2 {
        position: relative;
        width: 100%;
        height: 500px;
    }

    .g3 {
        position: absolute;
        color: #fff;
        margin: 20px 40px;
    }

    .i1 {
        display: block;
        background: linear-gradient(314.49deg, rgba(66, 165, 245, 0.4) 0%, rgba(21, 101, 192, 0.6) 97.81%),
        url("../../assets/body3/b31.jpg");
        border-radius: 25px;
        background-size: cover;
        margin-right: 10px;


    }

    .i2 {
        display: block;
        background: linear-gradient(314.49deg, rgba(66, 165, 245, 0.4) 0%, rgba(21, 101, 192, 0.6) 97.81%),
        url("../../assets/body3/b32.jpg");
        border-radius: 25px;
        background-size: cover;
        margin-left: 10px;
    }

    .img1{

        min-width: 90%;
        min-height: 90%;


    }

    @media (max-width: 1020px) {

        .i1 {
            margin-left: 5px;
        }

        .i2 {
            margin-right: 5px;
        }

    }

    @media (max-width: 660px) {

        .g1 {
            flex-direction: column;
        }

        .i1 {
            margin: 0 10px ;
        }

        .i2 {
            margin: 0 10px ;
        }

        .g2 {
            height: 90vw;
        }


    }


</style>