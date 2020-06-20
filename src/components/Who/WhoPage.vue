<template>
    <div class="who page">
        <banner title="Qui sommes-nous ?"></banner>
        <div class="content">
            <p><bold>BattleDrive Competition</bold> est une association créée en 2019 dans le but de pouvoir participer à des rallyes.<br>
            Composée de 4 personnes, l'association va nous permettre de réaliser notre rêve.</p>
            <h3>L'équipe</h3>
            <div class="members-list">
                <member-card v-for="member in members" v-bind:key="member.id" :member="member"></member-card>
            </div>
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
        h3 {
            color: $primary-color;
            margin: 40px 0 20px 0;
        }

        .members-list {
            display: flex;
            justify-content: space-between;
        }
    }

</style>