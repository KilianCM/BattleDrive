<template>
    <div class="banner">
        <h1>{{ title }}<span class="subline"></span></h1>
    </div>

</template>

<script>
    export default {
        name: "Banner",
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">

    .banner {
        width: 100%;
        background-color: $primary-color;
        height: 200px;
    }

    h1 {
        font-weight: bold;
        color: white;
        font-size: 3.5em;
        text-align: right;
        line-height: 200px;
        margin-right: 40px;
        z-index: 100;
        position: relative;
        &:after {
            content:'';
            background-color: $secondary-color;
            height: 10px;
            width: 90vw;
            position: absolute;
            top: 140px;
            right: 0px;
        } 
    }

    @media(max-width: 1005px) {
        h1 {
            font-size: 3em;
            margin-right: 20px;
        }
    }

    @media(max-width: 920px) {
        h1 {
            font-size: 2.5em;
            margin-right: 20px;
        }
    }

    @media(max-width: 840px) {
        .banner {
            height: auto;
        }

        h1 {
            text-align: center;
            padding-top: 210px;
            padding-bottom: 20px;
            margin-left: 30px;
            margin-bottom: -40px;
            line-height: 50px;

            &:after {
                display: none;
            } 
        }
    }
</style>