<template>
    <div class="fon">
        <div class="container footer2">
            <div class="d1">
                A.
                <div class="a1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            </div>
            <div class="d1">
                T.
                <div class="a1">+62-812-7313-4321</div>
            </div>
            <div class="d1">
                E.
                <div class="a1">hello.afrian@gmail.com</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer2"
    }
</script>

<style scoped>

    .d1 {
        display: flex;
        align-items: flex-start;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 26px;
    }

    .a1 {
        max-width: 300px;
        margin-left: 30px;
    }

    .footer2 {
        max-height: 150px;
        display: flex;
        justify-content: flex-start;
        padding-top: 50px;
    }

    .fon {
        background: #316099;
        max-height: 150px;
    }

    @media (max-width: 1020px) {
        .footer2 {
            flex-direction: column;
            padding: 2rem 3rem;
        }
        .a1 {
            max-width: 90%;
        }
    }
    @media (max-width: 660px) {
        .d1{
            padding-bottom: 5px;
        }
        .footer2 {
            flex-direction: column;
            padding: 2rem 3rem;
        }
    }

</style>