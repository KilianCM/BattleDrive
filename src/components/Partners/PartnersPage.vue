<template>
    <div class="partners page">
        <banner title="Nos partenaires"></banner>
        <div class="content">
            <h3>MERCI</h3>
            <p>Sans nos partenaires, notre projet ne peut avoir lieu. Ils nous permettent de réduire le coût de notre
                passion et de la réalisation de notre rêve. Leur soutien nous est indispensable et nous espérons leur faire
            honneur avec un bon résultat.</p>
            <p>Les rallyes régionaux sont des très bonnes vitrines pour des entreprises de la région. Des milliers de spectateurs
            de toute la région se rassemble pour un week-end de spectacle et découvre par la même occasion des entreprises qu'ils
            n'auraient peut-être pas connu autrement que par l'autocollant sur une voiture de rallye.</p>
            <div class="partners-list">
                <partner-link v-for="partner in partners" :partner="partner" :key="partner.id"></partner-link>
            </div>
            <h3>Vous voulez rejoindre cette liste en nous aidant ?</h3>
            <p>En plus d'une visibilité publicitaire via des autocollants sur notre voiture, vous bénéficierez d'une
                réduction d'impôts selon l’article 39-7 du code général des impôts. Cet article prévoit que les dons aux
                associations sportives sont <span class="bold">déductibles des impôts</span> à auteur de 60% de la somme engagée.</p>
            <p>Il n'y a pas de petits dons, tous les gestes sont appréciés et remerciés chaleureusement. Vous pouvez nous contacter
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
                    },
                    {
                        id: 2,
                        name: "Yannick TP",
                        image: "YannickTP-logo.png",
                        link: "https://www.pagesjaunes.fr/pros/56152266"
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