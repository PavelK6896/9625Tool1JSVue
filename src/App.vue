<template>
    <div id="app">
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>

    *{
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        letter-spacing: 0.05em;
    }

    .body {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .wrapper {
        flex-grow: 1;
    }
    

    

</style>
