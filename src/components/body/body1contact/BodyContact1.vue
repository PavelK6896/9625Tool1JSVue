<template>
    <div class="container c1">
        <div class="d1">
            <img src="./b1c.png">
            <div>ADDRESS</div>
            <div>Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</div>
            <div>PHONE</div>
            <div><img src="./b1c4.svg"> +62-812-7313-4321</div>
            <div><img src="./b1c4.svg"> +62-817-000-1234</div>
            <div>ONLINE SERVICE</div>
            <div><img src="./b1c2.svg">www.afrianska.com</div>
            <div><img src="./b1c3.svg">hello.afrian@gmail.com</div>

        </div>
        <div class="d2">
            <form action="contact1">
                <div>SEND US MESSAGE</div>
                <div>Full Name</div>
                <input type="text"/>
                <div>Email</div>
                <input type="text"/>
                <div>Email</div>
                <textarea class="t1"></textarea>
                <button class="bt1" type="submit">submit</button>
            </form>

        </div>
    </div>

</template>

<script>
    export default {
        name: "BodyContact1"
    }
</script>

<style scoped>

    .c1{
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
    }

    .d1{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .d2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .t1{
        display: flex;
        flex: auto auto initial;
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