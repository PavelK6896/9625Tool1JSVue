<template>
    <div class="fon">
        <div class="header container">
            <div class="top__content">
                <h1 class="top__heading">New Automation
                    Tool for Your </h1>
                <p class="text text_margin-bottom">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices
                    ut
                    mauris
                    tellus at. Posuere sollicitudin odio tellus elit.
                </p>
                <a href="#" class="button">See Our Project</a>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "HeaderHome1"
    }
</script>

<style scoped>

    .fon {
        background: linear-gradient(0deg, #EBF3FB 8.84%, rgba(152, 195, 232, 0) 31.12%);
        max-height: 730px;
    }

    .header {
        padding-top: 34px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: row;
        background-image:  url("../../assets/h2/h21.png");
        background-repeat: no-repeat;
        background-position: right bottom;
        height: 50%;
        background-size: 40%;
    }

    .top__content {
        max-width: 35rem;
        margin-top: 10px;
        text-align: start;
    }

    .top__heading {
        font-weight: 300;
        font-size: 64px;
        line-height: 74px;
        color: #1F3F68;
        margin-bottom: 32px;
    }

    .text {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #1F3F68;
        opacity: 0.6;
        max-width: 25rem;
    }

    .text_margin-bottom {
        margin-bottom: 70px;
    }

    .button {
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        background: #5A98D0;
        box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);
        border-radius: 10px;
        padding: 15px 50px;
        display: inline-block;
        text-decoration: none;
    }

    .button:hover{
        background: #072947;
    }

    @media (max-width: 1020px) {

    }
    @media (max-width: 660px) {

        .header{
            background-image: none;
        }

        .top__content{
            max-width: 100%;
            text-align: center;
        }
        .text{
            max-width: 100%;
            padding: 0 5rem;
        }

        .text_margin-bottom {
            margin-bottom: 30px;
        }

        .button{
            margin-bottom: 40px;
            padding: 5px;
        }

    }


</style>