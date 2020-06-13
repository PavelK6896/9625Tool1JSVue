<template>
    <div class="c1 container">
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
    }

    .c1 {
        margin: 25px auto;
    }

    .c2{
        max-height: 50vw;
    }


    .d1 {
        display: flex;
        justify-content: center;
        position: relative;
    }

    .i1 {
        border-radius: 25px;
        width: 100%;
    }

    .i2 {
        position: absolute;
        right: 200px;
        padding-top: 60px;
        font-size: 32px;
        line-height: 46px;
        color: #FFFFFF;

    }

    .i3 {
        position: absolute;
        left: 0;
        bottom: 0;
        max-height: 40vw;
    }

    @media (max-width: 1020px) {

        .w1{
            padding: 0 10rem;
        }

        .i2 {
            right: 40px;
            padding: 20px;
            font-size: 32px;
            line-height: 46px;
            text-align: right;
        }

        .d1 {
            padding: 0 5px;
        }


    }
    @media (max-width: 660px) {

        .w1{
            padding: 15px;
        }

        .i2 {
            right: 20px;
            padding: 10px;
            font-size: 16px;
            line-height: 19px;
            text-align: right;
        }

        .d1 {
            padding: 0 10px;
        }



    }


</style>