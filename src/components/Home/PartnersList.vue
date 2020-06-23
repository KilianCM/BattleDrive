<template>
    <div class="partners">
        <h3>Soutenu par</h3>
        <div class="list">
            <a href="https://www.domusgi.fr/"><img src="../../assets/Domus-logo.png" alt="Domus"></a>
            <a href="https://www.pagesjaunes.fr/pros/56152266"><img src="../../assets/YannickTP-logo.png" alt="YannickTP"></a>
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
        h3 {
            text-align: center;
            margin-bottom: 5px;
            color: $grey;
        }

        .list {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a img {
                width: 180px;
                height: auto;
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