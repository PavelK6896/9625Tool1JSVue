<template>
    <div class="fon">
        <div class="c1 container">
           <div class="t1">2020 © All rights reserved.</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer3"
    }
</script>

<style scoped>
    .fon {
        background-color: #316099;
        max-height: 100px;
    }

    .c1 {
        max-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .t1{
        padding: 1rem;
        font-size: 16px;
        line-height: 26px;
        color:  rgba(255, 255, 255, 0.4);
    }

    @media (max-width: 1020px) {
        .c1{
            padding: 0 3rem;
        }



    }
    @media (max-width: 660px) {
        .c1{
            text-align: center;
        }

    }
</style>