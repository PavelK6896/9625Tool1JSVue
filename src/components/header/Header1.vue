<template>
    <div class="container">
        <div class="header">
            <router-link to="/home">
                <img class="svg1" src="../../assets/h1/h12.svg">
            </router-link>
            <router-link to="/contact">
                <img class="svg1" src="../../assets/h1/h11.svg">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header1"
    }
</script>

<style scoped>

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 34px;
        padding-bottom: 34px;
    }

    .svg1:hover{

        background: #5A98D0;
        border-radius: 50px;

    }

    @media (max-width: 1020px) {
        .svg1{
            padding: 0 30px;
        }
    }
    @media (max-width: 660px) {
        .svg1{
            padding: 0 20px;
        }
    }
</style>