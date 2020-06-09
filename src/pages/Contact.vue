<template>

    <div class="body">
        <div class="wrapper">
        <Header1></Header1>
        <HeaderContact1></HeaderContact1>

        </div>
        <div class="footer">
            <Footer1></Footer1>
            <FooterContact1></FooterContact1>
            <Footer3></Footer3>
        </div>

    </div>



</template>

<script>
    import Header1 from "@/components/header/Header1";
    import HeaderContact1 from "@/components/header/HeaderContact1";
    import Footer1 from "@/components/footer/Footer1";
    import Footer3 from "@/components/footer/Footer3";
    import FooterContact1 from "@/components/footer/FooterContact1";

    export default {
        name: "Contact",
        components: {FooterContact1, Footer3, Footer1, HeaderContact1, Header1}
    }
</script>

<style scoped>


    .body{
        display: flex;
        flex-direction: column;
        height: 100vh;

    }
    .wrapper{
        flex-grow: 1;
    }


</style>