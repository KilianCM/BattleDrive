<template>
    <div class="partners page">
        <banner title="Nos partenaires"></banner>
        <div class="content">
            <h3>MERCI</h3>
            <p>Sans nos partenaires, notre projet ne peut avoir lieu. Ils nous permettent de réduire le coût de notre
                passion et de la réalisation de notre rêve. Leur soutien nous est indispensable et nous espérons leur faire
            honneur avec des bons résultats.</p>
            <p>Les rallyes régionaux sont des très bonnes vitrines pour des entreprises de la région. Des milliers de spectateurs
            de toute la région se rassemble pour un week-end de spectacle et découvre par la même occasion des entreprises qu'ils
            n'auraient peut-être pas connu autrement que par l'autocollant sur une voiture de rallye.</p>
            <div class="partners-list">
                <partner-link v-for="partner in partners" :partner="partner" :key="partner.id"></partner-link>
            </div>
            <h3>Vous voulez rejoindre cette liste en nous aidant ?</h3>
            <p>En plus d'une visibilité publicitaire via des autocollants sur notre voiture, vous bénéficierez d'un
                avantage fiscal par application de l’article 238 bis du code général des impôts. En effet, les sociétés sont autorisées à
                <span class="bold">déduire des versements au titre de sponsoring du montant de leur bénéfice imposable</span>.</p>
            <p>Il n'y a pas de petits gestes, ils sont tous appréciés et remerciés chaleureusement. Vous pouvez nous contacter
            pour en discuter <a href="mailto:contact@battledrive.fr">par mail</a>.</p>
        </div>
    </div>
</template>

<script>
    import Banner from "../Banner";
    import PartnerLink from "./PartnerLink";

    export default {
        name: "PartnersPage",
        components: {PartnerLink, Banner},
        data() {
            return {
                partners: [
                    {
                        id: 1,
                        name: "Domus GI",
                        image: "Domus-logo.png",
                        link: "https://www.domusgi.fr/"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .partners {
        .partners-list {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }
    }
</style>