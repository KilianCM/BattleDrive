<template>
    <div class="goal page">
        <banner title="Notre objectif"></banner>
        <div class="content">
            <h3>Rallye des Bauges</h3>
            <p>Le rallye, c’est avant tout une passion qui nous anime depuis notre plus jeune âge. À chaque rallye en
                tant que spectateur, on se disait <span class="bold">“Je veux être à leur place”</span>. Notre projet est
                la réalisation d’un rêve d’enfant. </p>
            <p>On souhaite participer à des rallyes de la région Rhône-Alpes. Nous devions débuter au rallye du Beaufortain,
                malheureusement annulé à cause de la crise du coronavirus. Nous allons donc réaliser notre rêve au rallye des
                Bauges, en octobre 2020, sur les routes de mon copilote.
            </p>
            <p>Nous aurons la chance de participer avec une <a target="_blank" rel="noopener" href="https://www.r2slocation.fr/location/">Renault Clio Ragnotti N3
                de R2S Location</a> grâce à <router-link :to="{ name: 'partners'}">nos partenaires</router-link>.</p>
            <div class="images">
                <img src="../../assets/n3.jpg" alt="Clio Ragnotti N3">
                <img src="../../assets/n3_2.jpg" alt="Clio Ragnotti N3">
                <img src="../../assets/n3_3.jpg" alt="Clio Ragnotti N3">
            </div>
            <p>L'objectif de ce rallye sera d'<span class="bold">apprendre</span>, de <span class="bold">se faire plaisir</span>
                et bien sûr de <span class="bold">viser le meilleur classement</span> possible
                (ça reste une course quand même !)</p>
            <h3>Temps restant avant le rêve</h3>
            <Countdown deadline="October 10, 2020"></Countdown>
            <h3>Et après ?</h3>
            <p>Pourquoi pas continuer sur cette lancée pour participer au rallye du Beaufortain l'année prochaine pour continuer
            à progresser sur des routes techniques, en espérant toujours avoir le soutien de
                <router-link :to="{name: 'partners'} ">nos partenaires</router-link>.
            </p>
        </div>
    </div>
</template>

<script>
    import Banner from "../Banner";
    import Countdown from 'vuejs-countdown';

    export default {
        name: "GoalPage",
        components: {Banner, Countdown}
    }
</script>

<style scoped lang="scss">
    .goal {
        .images {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;

            img {
                width: 350px;
                height: 250px;
                object-fit: cover;
                box-shadow: $box-shadow;
                border-radius: $image-border-radius;
                margin: 20px 2px;
            }
        }
    }
</style>