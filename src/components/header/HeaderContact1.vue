<template>
    <div class="fon">
        <div class="container1 container">
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
        max-width: 780px;
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
        height: 200px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 1020px) {

    }
    @media (max-width: 660px) {

        .fon {
            background-size: auto;
        }
        .container1{

        }

        .t1{
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
            text-align: center;
            letter-spacing: 0.04em;
            color: #FFFFFF;
        }
        .t2{
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            padding: 10px 5rem;
        }


    }


</style>