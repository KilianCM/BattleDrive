<template>
    <div class="banner">
        <h1>{{ title }}</h1>
        <div class="custom-shape-divider-top-1592657532">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
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
    }

    h1 {
        font-weight: bold;
        color: white;
        font-size: 3.5em;
        text-align: right;
        line-height: 180px;
        margin-right: 40px;
        z-index: 100;
        position: relative;
    }

    .custom-shape-divider-top-1592657532 {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-top-1592657532 svg {
        position: relative;
        display: block;
        width: calc(300% + 1.3px);
        height: 366px;
    }

    .custom-shape-divider-top-1592657532 .shape-fill {
        fill: $primary-color;
    }

    @media(max-width: 1005px) {
        h1 {
            font-size: 3em;
            margin-right: 20px;
        }
    }
</style>