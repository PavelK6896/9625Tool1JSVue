<template>
    <div class="c1">
        <div class="w1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur cumque, dignissimos dolor
            dolores ex expedita illum incidunt, magnam magni molestiae nam nisi optio quasi, recusandae tempora tempore
            tenetur ut.
        </div>
        <div class="c2">
            <div class="d1">
                <img class="i1" src="../../assets/body2/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg">
                <div class="i2">Smart Home Installation</div>
                <img class="i3" src="../../assets/body2/Group.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Body2"
    }
</script>

<style scoped>
    .w1{
        margin: 25px auto;
        text-align: center;
        max-width: 750px;
        width: 35vw;
    }

    .c1 {
        width: 1200px;
        margin: 25px auto;
    }

    .c2{
        height: 500px;
    }


    .d1 {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .i1 {
        border-radius: 25px;
    }

    .i2 {
        position: absolute;
        right: 250px;
        padding-top: 100px;
        font-size: 32px;
        line-height: 46px;
        color: #FFFFFF;
    }

    .i3 {
        position: absolute;
        left: 0;
    }

</style>