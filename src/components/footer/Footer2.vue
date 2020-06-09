<template>
    <div class="f2">
        <div class="container c1">

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
        width: 300px;
        margin-left: 30px;
    }

    .c1 {

        height: 150px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }


    .f2 {
        background: #316099;
        height: 150px;
    }

</style>