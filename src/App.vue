<template>
    <div id="app">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>

    .container {
        width: 1200px;
        margin: 0 auto;
    }

</style>
