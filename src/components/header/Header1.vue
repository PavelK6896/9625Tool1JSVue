<template>
    <div class="container">
        <div class="header">
            <router-link to="/home">
                <img src="../../assets/h1/h12.svg">
            </router-link>
            <router-link to="/contact">
                <img src="../../assets/h1/h11.svg">
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
    }

</style>