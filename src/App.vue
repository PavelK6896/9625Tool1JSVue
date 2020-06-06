<template>
    <div id="app">
        <Header1></Header1>
        <Header2></Header2>
        <Body1></Body1>
        <Body2></Body2>
        <Body3></Body3>
        <footer1></footer1>
        <footer2></footer2>
    </div>
</template>

<script>
    import Header1 from "@/components/Header1";
    import Header2 from "@/components/Header2";
    import Body1 from "@/components/Body1";
    import Body2 from "@/components/Body2";
    import Body3 from "@/components/Body3";
    import Footer1 from "@/components/Footer1";
    import Footer2 from "@/components/Footer2";

    export default {
        name: 'App',
        components: {
            Footer2,
            Footer1,
            Body3,
            Body2,
            Body1,
            Header2,
            Header1
        }
    }
</script>

<style>


    .container {
        width: 1200px;
        margin: 0 auto;
    }


</style>
