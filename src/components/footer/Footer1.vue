<template>
    <div class="f1">
        <div class="c1 container">
            <div class="e1">
                <div class="p1">Intersted to woek with our team?</div>
                <div class="p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam.</div>
            </div>
            <div class="e2">
                <button class="bt1">Let’s Talk</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer1"
    }
</script>

<style scoped>

    .f1 {
        background-color: #316099;
        height: 391px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }

    .p2{
        margin-top: 32px;
        width: 495px;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 26px;
        opacity: 0.6;
    }



    .p1{
        color: #FFFFFF;
        width: 340px;
        font-size: 36px;
        line-height: 46px;
    }

    .e1{
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    .e2{

    }

    .c1 {
        height: 391px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }



    .bt1 {
        background: #5A98D0;
        color: #ffffff;
        padding: 15px 80px;
        border: 0;
    }

    .bt1:hover{
        background: #072947;
    }


</style>