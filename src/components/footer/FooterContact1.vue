<template>
    <div class="f1">
        <div class="c1 container">
            <div>
                <div class="d1">
                    <img src="./f2c1.svg">
                    <div class="t2"> Afrianska</div>
                </div>
                <div class="a1">A. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </div>
                <div class="a1">T. 22222222222</div>
                <div class="a1">E @@@@@@@222</div>
            </div>
            <div>
                <ul class="u1">
                    <li class="l1 t1">About US</li>
                    <li class="l1">1class</li>
                    <li class="l1">2class</li>
                    <li class="l1">3class</li>
                    <li class="l1">4class</li>
                </ul>
            </div>
            <div>
                <ul class="u1">
                    <li class="l1 t1">About US</li>
                    <li class="l1">1 class</li>
                    <li class="l1">2 class</li>
                    <li class="l1">3 class</li>
                    <li class="l1">4 class</li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "FooterContact1"
    }
</script>

<style scoped>
    
    .a1{
        padding: 15px;
    }

    .l1 {
        list-style-type: none;
        padding: 10px;
    }

    .l1:hover {
        color: #a169d0;
        cursor: pointer;
    }

    .d1 {
        display: flex;
    }

    .t2 {
        font-weight: 500;
        font-size: 28px;
        line-height: 46px;
        color: #FFFFFF;
        letter-spacing: 0.02em;
    }

    .t1 {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;

    }

    .f1 {
        background-color: #316099;
        height: 480px;
    }

    .c1 {
        height: 480px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: #FFFFFF;
    }

</style>