<template>
    <div class="partners">
        <div class="list">
            <a href="https://www.domusgi.fr/" target="_blank"><img src="../../assets/Domus-logo.png" alt="Domus"></a>
            <a href="https://www.pagesjaunes.fr/pros/56152266" target="_blank"><img src="../../assets/YannickTP-logo.png" alt="YannickTP"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PartnersList"
    }
</script>

<style scoped lang="scss">

    .partners {
        margin: 20px;

        .list {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a img {
                width: 180px;
                height: auto;
                filter: drop-shadow($box-shadow);
            }
        }
    }

    @media(max-width: 450px) {
        .partners {
            .list {
                a img {
                    width: 140px;
                }
            }
        }
    }

    @media(max-width: 450px) {
        .partners {
            .list {
                a img {
                    width: 110px;
                }
            }
        }
    }


</style>