<template>

    <div>
        <Header1></Header1>
        <HeaderHome1></HeaderHome1>
        <h1>Home</h1>
    </div>

</template>

<script>

    import Header1 from "@/components/header/Header1";
    import HeaderHome1 from "@/components/header/HeaderHome1";

    export default {
        name: "Home",
        components: {HeaderHome1, Header1}
    }
</script>

<style scoped>


</style>