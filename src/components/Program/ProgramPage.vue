<template>
    <div class="program page">
        <banner title="Programme 2022"></banner>
        <div class="content">
            <h3>2 rallyes régionaux Coupe de France</h3>
            <div class="rally-list">
                <div class="">
                    <h4><a target="_blank" rel="noopener" href="http://www.asac-savoie.fr">Rallye du Beaufortain</a></h4>
                    <h5>7 mai 2022 | Beaufort (Savoie)</h5>
                    <p>Rallye à domicile pour Kilian qui procure donc un sentiment spécial de rouler sur des routes de son enfance.</p>
                </div>
                <div>
                    <h4><a target="_blank" rel="noopener" href="https://www.sportautobauges.com">Rallye des Bauges</a></h4>
                    <h5>8-9 octobre 2022 | Aillon-le-Jeune (Savoie)</h5>
                    <p>Un rallye où l'équipe était présente lors des 2 dernières éditions avec une belle progression. Ce qui laisse penser à une belle course en 2022 !</p>
                </div>
            </div>

            <h3>La voiture</h3>
            <p>Après 2 expériences parfaites, nous renouvelons notre confiance à <a target="_blank" href="https://www.r2slocation.fr/location/">
                R2S Location</a> pour louer une de leur magnifique Clio Ragnotti N3. Avec ses 193cv pour 1020kg, c'est une voiture parfaite pour apprendre et progresser. Facile à prendre en main, elle met en confiance rapidement
                tout en restant très loin des limites de la voiture. Après s'être rapproché des premiers de classe au rallye des Bauges 2021, notre but sera d'apprendre à exploiter encore plus
                l'auto et réduire encore ce gap qui nous sépare du podium !</p>
            <div class="images">
                <img src="../../assets/n3.jpg" alt="Clio Ragnotti N3">
                <img src="../../assets/n3_2.jpg" alt="Clio Ragnotti N3">
                <img src="../../assets/n3_3.jpg" alt="Clio Ragnotti N3">
            </div>
            <h3>Temps restant avant la reprise 🤞</h3>
            <Countdown deadline="May 7, 2022"></Countdown>
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
                &.cancelled {
                    &::before {
                        content: 'Annulé 😔';
                        width: 380px;
                        height: 30px;
                        background-color: rgba($color: #FF0101, $alpha: .9);
                        color: white;
                        position: absolute;
                        transform: rotate(-13deg);
                        text-align: center;
                        margin-top: 35px;
                        margin-left: -10px;
                    }
                }
            }
        }

        p.small {
            font-size: 10px;
        }
    }
</style>