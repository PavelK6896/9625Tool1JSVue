<template>
    <div class="container">
    <div class="g1">
        <div class="g2">
            <div class="g3">Sparklite App</div>
            <div class="img1"></div>
        </div>
        <div class="g2">
            <div class="g3">Car-Rapetition App</div>
            <div class="img2"></div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Body3"
    }
</script>

<style scoped>

    .g1{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .g2{
        position: relative;
    }

    .g3{
        position: absolute;
        margin: 35px;
        color: #fff;
    }

    .img1 {
        display: block;
        width: 500px;
        height: 500px;
        background: linear-gradient(314.49deg, rgba(66, 165, 245, 0.4) 0%, rgba(21, 101, 192, 0.6) 97.81%), url("../assets/body3/b31.jpg");
        border-radius: 10px;
        background-size: cover;
    }
    .img2 {
        display: block;
        width: 500px;
        height: 500px;
        background: linear-gradient(314.49deg, rgba(66, 165, 245, 0.4) 0%, rgba(21, 101, 192, 0.6) 97.81%), url("../assets/body3/b32.jpg");
        border-radius: 10px;
        background-size: cover;
    }
</style>