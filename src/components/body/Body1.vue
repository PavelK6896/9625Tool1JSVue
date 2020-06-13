<template>

    <div class="container">
        <div class="what-we-do">
            <h2 class="heading">What we do to help our client grow in digital era</h2>
            <div class="product-box">
                <div class="product">
                    <img class="product__img" src="../../assets/body1/product-1.svg" alt="product photo">
                    <h3 class="heading-mini">Make Your business To Be
                        Better Famous In Internet</h3>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                    <a class="product__link" href="">Learn more <img class="product__arrow"
                                                                     src="../../assets/body1/b14.svg" alt="arrow"></a>
                </div>
                <div class="product">
                    <img class="product__img product__img_big" src="../../assets/body1/product-2.svg" alt="product photo">
                    <h3 class="heading-mini">Make Your business To Be
                        Better Famous In Internet</h3>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                    <a class="product__link" href="">Learn more <img class="product__arrow"
                                                                     src="../../assets/body1/b14.svg" alt="arrow"></a>
                </div>
                <div class="product">
                    <img class="product__img" src="../../assets/body1/product-3.svg" alt="product photo">
                    <h3 class="heading-mini">Make Your business To Be
                        Better Famous In Internet</h3>
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                    <a class="product__link" href="">Learn more <img class="product__arrow"
                                                                     src="../../assets/body1/b14.svg" alt="arrow"></a>
                </div>
            </div>
        </div>
        <div class="proj">
            <h2 class="heading">Our Finished Project</h2>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Body1"
    }
</script>

<style scoped>




    .text {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #1F3F68;
        opacity: 0.6;
    }

    .heading {
        font-weight: 300;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #000000;
        margin-top: 64px;
        margin-bottom: 32px;
    }

    .heading-mini {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #1F3F68;
        margin-bottom: 14px;
    }

    .product-box {
        margin-top: 64px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .product {
        max-width: 330px;
        background: #FFFFFF;
        box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
        border-radius: 10px;
        padding: 35px 30px;
        margin: 5px 5px;
        display: flex;
        flex-direction: column;
    }

    .product__link {
        font-size: 14px;
        line-height: 30px;
        letter-spacing: 0.05em;
        color: #5A98D0;
        margin-top: 30px;
        display: flex;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }

    .product__img {
        align-self: center;
        margin-bottom: 51px;
    }

    .product__img_big {
        margin-top: -30px;
    }

    .product__arrow {
        margin-left: 20px;
    }




    @media (max-width: 1020px) {

        .product-box{
            flex-direction: column;
            align-items: center;

        }
        .product{
            margin-bottom: 30px;
        }

        .heading{
            padding: 0 7rem;
        }

    }

    @media (max-width: 660px) {

        .heading{
            padding: 0 10px;
        }

    }


</style>