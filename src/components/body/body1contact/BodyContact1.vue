<template>
    <div class="container c1">
        <div class="d1">
            <img src="./b1c.png">
            <div class="l1">ADDRESS</div>
            <div class="l2 m1">Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</div>
            <div class="l1">PHONE</div>
            <div class="l3 m1"><img class="mr1" src="./b1c4.svg">+62-812-7313-4321</div>
            <div class="l3 m2"><img class="mr1" src="./b1c4.svg">+62-817-000-1234</div>
            <div class="l1">ONLINE SERVICE</div>
            <div class="l4 m1"><img class="mr1" src="./b1c2.svg">www.afrianska.com</div>
            <div class="l4 m2"><img class="mr1" src="./b1c3.svg">hello.afrian@gmail.com</div>
        </div>
        <div class="d2">
            <form class="form1" action="contact1">
                <div class="l1">SEND US MESSAGE</div>
                <div class="l2 m50">Full Name</div>
                <input class="i1 t2" type="text" placeholder="Your Name"/>
                <div class="l2 m30">Email</div>
                <input class="i1 t2" type="text" placeholder="Your Email"/>
                <div class="l2 m30">Email</div>
                <textarea class="i1 textarea1" type="text" placeholder="Your Message"></textarea>
                <button class="bt1 m70" type="submit">submit</button>
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

    .m70 {
        margin-top: 70px;
    }

    .m50 {
        margin-top: 50px;
        margin-bottom: 10px;

    }

    .m30 {
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .textarea1 {
        display: flex;
        flex: auto auto initial;
        width: 100%;
        max-width: 430px;
        max-height: 144px;
        padding: 40px;
    }

    .t2 {
        width: 100%;
        max-width: 430px;
        height: 70px;
    }

    .i1 {

        font-size: 20px;
        opacity: 0.6;
        border: 1px solid #356EAD;
        box-sizing: border-box;
        border-radius: 10px;
        outline: none;
        padding-left: 40px;
        padding-right: 40px;
    }


    .mr1 {
        margin-right: 20px;
    }

    .m2 {
        margin-top: 15px;
    }

    .m1 {
        margin-top: 25px;
        max-width: 300px;
    }

    .l4 {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #1F3F68;
        opacity: 0.6;
    }

    .l3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #1F3F68;
        opacity: 0.6;
    }

    .l2 {
        font-weight: 300;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #1F3F68;
        opacity: 0.6;
    }

    .l1 {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.04em;
        color: #1F3F68;
        margin-top: 40px;
    }

    .c1 {
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
    }

    .d1 {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .d2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 540px;
        height: 800px;
        background: #FFFFFF;
        box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2);
        border-radius: 10px;
    }

    .bt1 {
        padding: 20px 185px;
        border: 0;
        background: #5A98D0;
        box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
        border-radius: 10px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }

    .bt1:hover {
        background: #072947;
    }

    @media (max-width: 1020px) {
        .c1 {
            flex-direction: column;
            align-items: center;
        }

        .d2 {
            margin-top: 2rem;
            max-width: 95%;
        }

    }

    @media (max-width: 660px) {

        .c1 {
            flex-direction: column;
            align-items: center;
        }

        .d2 {
            margin-top: 2rem;
            max-width: 95%;
        }

        .form1 {
            max-width: 80%;
        }

        .bt1 {
            padding: 5px 45px;
            margin-left: 15vw;
        }

        .t2 {
            padding: 20px;
        }


        .textarea1 {
            width: 100%;
            max-height: 144px;
            padding: 20px;
        }


    }


</style>