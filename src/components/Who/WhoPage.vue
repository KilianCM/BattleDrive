<template>
    <div class="who page">
        <banner title="Qui sommes-nous ?"></banner>
        <div class="content">
            <p><span class="bold">BattleDrive Competition</span> est une association créée en 2019 dans le but de pouvoir participer à des rallyes.<br>
            Composée de 4 personnes, l'association nous a permis de réaliser notre rêve. Nous avons participé à notre premier rallye en 2020, et on ne compte pas s'arrêter là !</p>
            <h3>L'équipe</h3>
            <div class="members-list">
                <member-card v-for="member in members" :key="member.id" :member="member"></member-card>
            </div>
            <div class="image-wrapper">
                <img src="../../assets/team.jpg">
                <img src="../../assets/bauges2020-1.jpeg">
                <img src="../../assets/bauges2021-1.jpg">
                <img src="../../assets/bauges2021-2.jpeg">
            </div>
            <h3>Historique</h3>
            <div class="rally-list">
                <rally-item v-for="rally in rallies.slice().reverse()" :key="rally.id" :rally="rally"></rally-item>
            </div>
            <h3>Nous contacter</h3>
            <p><span>@</span> <a href="mailto:contact@battledrive.fr">contact@battledrive.fr</a></p>
            <p><span><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></span> <a rel="noopener" href="https://www.facebook.com/battledrivecompetition" target="_blank">Page Facebook BattleDrive Compétition</a></p>
            <p :style="{ marginTop: '10px'}">607 route de la forêt 73270 Villard sur Doron</p>
            <h3>Infos légales</h3>
            <p>Association déclarée à la sous-préfécture d'Albertville le 10 décembre 2019
                (<a target="_blank" rel="noopener" href="https://www.journal-officiel.gouv.fr/document/associations_b/201900501440">voir la publication au journal officiel</a>).
                <br>Numéro R.N.A : <span class="bold">W731006202</span>.
            </p>
        </div>
    </div>
</template>

<script>
    import Banner from "../Banner";
    import MemberCard from "./MemberCard";
    import RallyItem from "./RallyItem";

    export default {
        name: "WhoPage",
        components: {MemberCard, Banner, RallyItem},
        data() {
            return {
                members: [
                    {
                        id: 1,
                        firstname: "Kilian",
                        lastname: "Chamiot-Maitral",
                        role: "Président & Pilote"
                    },{
                        id: 2,
                        firstname: "Benjamin",
                        lastname: "Morand",
                        role: "Vice-Président & Copilote"
                    },{
                        id: 3,
                        firstname: "Thiébault",
                        lastname: "Bébert",
                        role: "Trésorier"
                    },{
                        id: 4,
                        firstname: "Myriam",
                        lastname: "Marin-Lamellet",
                        role: "Secrétaire"
                    },
                ],
                rallies: [
                    {
                        id: 1,
                        name: "Rallye des Bauges 2020",
                        "ewrcLink": "https://www.ewrc-results.com/entryinfo/65030-rallye-regional-des-bauges-2020/2812499/",
                        "description":"Un seul mot pour résumer notre premier rallye : incroyable. On avait tout à découvrir et à apprendre "
                        + "mais on s'est régalé tout le week-end&nbsp;! Grâce aux nombreux conseils de la part de R2S Location, on a pu progresser "
                        + "sans brûler les étapes et en ramenant la voiture intacte.",
                        "car": {
                            "name": "Renault Clio Ragnotti",
                            "class": "N3"
                        },
                        "result": {
                            "scratch": 86,
                            "class": 10
                        }
                    },
                    {
                        id: 2,
                        name: "Rallye des Bauges 2021",
                        "ewrcLink": "https://www.ewrc-results.com/entryinfo/65028-rallye-regional-des-bauges-2021/3149207/",
                        "description": "Un très beau week-end avec Geoffrey Bidois dans le baquet de droite, les temps de 2020 sont largement améliorés avec"
                        + " en prime une belle bagarre le dimanche pour la 4ème place. La voiture a été parfaite et l'écart avec les premiers s'est réduit comme"
                        + " on en avait l'objectif avant le rallye.",
                        "car": {
                            "name": "Renault Clio Ragnotti",
                            "class": "N3"
                        },
                        "result": {
                            "scratch": 66,
                            "class": 6
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    .who {
        .content {
            p:first-child {
                margin-top: 20px !important;
            }
        }
        span:not(.bold) {
            font-weight: bold;
            color: $primary-color;
            font-size: 1.2em;

            img {
                width: 18px;
            }
        }

        .members-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .image-wrapper {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 40px 0 20px 0;
            img {
                box-shadow: $box-shadow;
                border-radius: $image-border-radius;
                width: 350px;
                margin: 10px;
                max-height: 280px;
                object-fit: cover;
            }
        }

        @media(max-width: 870px) {
            .image-wrapper img {
                width: 250px;
            }
        }

        @media(max-width: 670px) {
            .image-wrapper {
                flex-direction: column;
                align-items: center;
                img {
                    margin-bottom: 10px;
                }
            }
        }
    }

</style>
