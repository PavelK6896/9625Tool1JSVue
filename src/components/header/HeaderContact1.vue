<template>
    <div class="fon">
        <div class="container1">
            <div class="t1">Contact Us</div>
            <div class="t2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderContact1"
    }
</script>

<style scoped>

    .t1{
        padding: 10px;
        font-weight: 500;
        font-size: 44px;
        line-height: 74px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }

    .t2{
        padding: 10px;
        width: 780px;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.04em;
        color: rgba(255, 255, 255, 0.6);
    }

    .fon {
        background-image: url("./h2c1.jpg");
        background-size: 100%;
        height: 200px;
    }

    .container1 {
        width: 1200px;
        height: 200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
</style>