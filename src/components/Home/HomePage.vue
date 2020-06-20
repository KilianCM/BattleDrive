<template>
    <div class="home-page">
        <img src="../../assets/main-background.jpg" alt="Clio Ragnotti N3">
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
            top: 0;
            right: 0;
        }
    }

</style>
