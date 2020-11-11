<template>
    <div class="home-page">
        <img src="../../assets/main-background.jpeg" alt="Clio Ragnotti N3 - Bauges 2020">
        <div class="partners-list">
            <partners-list></partners-list>
        </div>
    </div>
</template>

<script>
    import PartnersList from "./PartnersList";
    export default {
        name: 'HomePage',
        components: { PartnersList }
    }
</script>

<style scoped lang="scss">

    .home-page {
        height: 100vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .partners-list {
            position: absolute;
            height: fit-content;
            bottom: 0;
            right: 0;
        }
    }

    @media(max-width: 850px) {
        .home-page img {
            width: 140%;
            margin-left: -40%;
        }
    }

        @media(max-width: 550px) {
        .home-page img {
            width: 160%;
            margin-left: -60%;
        }
    }

</style>
