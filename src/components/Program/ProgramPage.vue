<template>
    <div class="program page">
        <banner title="Programme 2021"></banner>
        <div class="content">
            <h3>2 rallyes régionaux Coupe de France</h3>
            <div class="rally-list">
                <div>
                    <h4><a target="_blank" href="http://www.asac-savoie.fr">Rallye du Beaufortain</a></h4>
                    <h5>1er mai 2021 | Beaufort (Savoie)</h5>
                    <p>Rallye à domicile pour Kilian qui procure donc un sentiment spécial de rouler sur des routes de son enfance.</p>
                </div>
                <div>
                    <h4><a target="_blank" href="https://www.sportautobauges.com">Rallye des Bauges</a></h4>
                    <h5>9-10 octobre 2021 | Aillon-le-Jeune (Savoie)</h5>
                    <p>Cette fois, c'est le rallye à domicile pour Benjamin, pas de jaloux !</p>
                </div>
            </div>
            <p>L'objectif de ces rallyes sera de continuer d'<span class="bold">apprendre</span>, de <span class="bold">se faire plaisir</span>
                et bien sûr de <span class="bold">viser le meilleur classement</span> possible.</p>
            <p class="small">Et il se peut même qu'on inverse de baquets pour les Bauges 🤫</p>

            <h3>La voiture</h3>
            <p>Après une première expérience parfaite, nous renouvelons notre confiance à <a target="_blank" href="https://www.r2slocation.fr/location/">
                R2S Location</a> pour louer une de leur magnifique Clio Ragnotti N3. Avec ses 193cv pour 1020kg, c'est une voiture parfaite pour apprendre et progresser. Facile à prendre en main, elle met en confiance rapidement
                tout en restant très loin des limites de la voiture.</p>
            <div class="images">
                <img src="../../assets/n3.jpg" alt="Clio Ragnotti N3">
                <img src="../../assets/n3_2.jpg" alt="Clio Ragnotti N3">
                <img src="../../assets/n3_3.jpg" alt="Clio Ragnotti N3">
            </div>
            <h3>Temps restant avant la reprise 🤞</h3>
            <Countdown deadline="May 1, 2021"></Countdown>
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
    .program {
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

        .rally-list {
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            width: fit-content;

            div { 
                margin: 10px 0;
                border-left: solid 5px $secondary-color;
                padding: 10px;
                max-width: 400px;
            }
        }

        p.small {
            font-size: 10px;
        }
    }
</style>