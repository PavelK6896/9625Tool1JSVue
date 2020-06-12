<template>
    <div class="f1">
        <div class="c1 container">
            <div>
                <div class="d1">
                    <img src="./f2c1.svg">
                    <div class="t2"> Afrianska</div>
                </div>



                <div class="w1">
                    A.
                    <div class="w2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div class="w1">
                    T.
                    <div class="w2">+62-812-7313-4321</div>
                </div>
                <div class="w1">
                    E.
                    <div class="w2">hello.afrian@gmail.com</div>
                </div>


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

    .w2{
        max-width: 300px;
        margin-left: 15px;
    }

    .w1{
        display: flex;
        align-items: flex-start;
        margin-top: 15px;
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
        max-height: 480px;
    }

    .c1 {
        max-height: 480px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: #FFFFFF;
    }


    @media (max-width: 1020px) {

    }
    @media (max-width: 660px) {

        .d1{
            display: none;
        }

        .u1{
            display: none;
        }

    }

</style>