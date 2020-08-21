<template>
    <div class="who page">
        <banner title="Qui sommes-nous ?"></banner>
        <div class="content">
            <p><span class="bold">BattleDrive Competition</span> est une association créée en 2019 dans le but de pouvoir participer à des rallyes.<br>
            Composée de 4 personnes, l'association va nous permettre de réaliser notre rêve.</p>
            <h3>L'équipe</h3>
            <div class="members-list">
                <member-card v-for="member in members" :key="member.id" :member="member"></member-card>
            </div>
            <h3>Nous contacter</h3>
            <p><span>@</span> <a href="mailto:contact@battledrive.fr">contact@battledrive.fr</a></p>
            <p :style="{ marginTop: '10px'}">607 route de la forêt 73270 Villard sur Doron</p>
            <h3>Infos légales</h3>
            <p>Association déclarée à la sous-préfécture d'Albertville le 10 décembre 2019
                (<a target="_blank" href="https://www.journal-officiel.gouv.fr/document/associations_b/201900501440">voir la publication au journal officiel</a>).
                <br>Numéro R.N.A : <span class="bold">W731006202</span>.
            </p>
        </div>
    </div>
</template>

<script>
    import Banner from "../Banner";
    import MemberCard from "./MemberCard";
    export default {
        name: "WhoPage",
        components: {MemberCard, Banner},
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
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    .who {
        span:not(.bold) {
            font-weight: bold;
            color: $primary-color;
            font-size: 1.2em;

            &::after {
                content: '';
                border-right: solid 1px $primary-color;
                margin-left: 5px;
            }
        }

        .members-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }

</style>