<template>
    <footer>
        <img src="../../assets/helmet.svg" alt="">
        <p>&copy; 2020 - <a target="_blank" rel="noopener" href="https://www.kiliancm.fr">Kilian Chamiot-Maitral</a></p>
    </footer>
</template>

<script>
    export default {
        name: "FooterBar"
    }
</script>

<style scoped lang="scss">

    footer {
        text-align: center;
        font-size: 0.8em;
        padding: 5px;

        img {
            width: 25px;
            height: 25px;
            margin-bottom: 5px;
        }

        a {
            color: black;
        }
    }
</style>