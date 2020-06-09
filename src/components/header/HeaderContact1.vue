<template>

    <div class="fon">
        <div class="container1">
            <div class="t1">Contact Us</div>
            <div class="t1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "HeaderContact1"
    }
</script>

<style scoped>

    .t1{
        padding: 10px;
    }

    .fon {
        background-image: url("./h2c1.jpg");
        background-size: 100%;
        height: 150px;
    }

    .container1 {
        width: 1200px;
        height: 150px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }


</style>