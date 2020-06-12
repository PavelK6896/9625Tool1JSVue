<template>
    <div class="fon">
        <div class="footer1 container">
            <div class="text1">
                <div class="p1">Intersted to woek with our team?</div>
                <div class="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam.</div>
            </div>
            <div>
                <button class="btn1">Let’s Talk</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer1"
    }
</script>

<style scoped>

    .fon {
        background-color: #316099;
        max-height: 390px;
        margin-top: 50px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }

    .footer1 {
        max-height: 390px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .p2{
        margin-top: 32px;
        max-width: 30rem;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 26px;
        opacity: 0.6;
    }



    .p1{
        color: #FFFFFF;
        font-size: 36px;
        line-height: 46px;
    }

    .text1{
        display: flex;
        flex-direction: column;
        justify-content: center;

    }


    .btn1 {
        background: #5A98D0;
        color: #ffffff;
        padding: 15px 80px;
        border: 0;
    }

    .btn1:hover{
        background: #072947;
    }

    @media (max-width: 1020px) {

    }
    @media (max-width: 660px) {

        .p1{
            margin-top: 2rem;
        }



        .footer1{
            flex-direction: column;
        }
        .text1{
            max-width: 100%;
            padding: 0 5rem;
            text-align: center;

        }
        .btn1{
            padding: 5px;
            margin: 3rem 0;
        }


    }


</style>