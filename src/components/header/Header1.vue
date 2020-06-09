<template>
    <div class="container">
        <div class="header">
            <router-link to="/home">
                <img class="s1" src="../../assets/h1/h12.svg">
            </router-link>
            <router-link to="/contact">
                <img class="s1" src="../../assets/h1/h11.svg">
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

    .s1{

    }
    .s1:hover{

        background: #5A98D0;
        border-radius: 15px;

    }
</style>