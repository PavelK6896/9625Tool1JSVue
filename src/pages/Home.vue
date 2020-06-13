<template>
    <div class="body">
        <div class="wrapper">
            <Header1></Header1>
            <HeaderHome1></HeaderHome1>
                        <Body1></Body1>
                        <Body2></Body2>
                        <Body3></Body3>
        </div>
        <div class="footer">
            <Footer1></Footer1>
            <Footer2></Footer2>
            <Footer3></Footer3>
        </div>
    </div>
</template>

<script>
    import Header1 from "@/components/header/Header1";
    import HeaderHome1 from "@/components/header/HeaderHome1";
    import Body1 from "@/components/body/Body1";
    import Body2 from "@/components/body/Body2";
    import Body3 from "@/components/body/Body3";
    import Footer1 from "@/components/footer/Footer1";
    import Footer2 from "@/components/footer/Footer2";
    import Footer3 from "@/components/footer/Footer3";

    export default {
        name: "Home",
        components: {Footer3, Footer2, Footer1, Body1,Body2,Body3, HeaderHome1, Header1}
    }
</script>

<style scoped>

</style>