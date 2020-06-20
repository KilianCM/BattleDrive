<template>
    <div class="side-bar">
        <div class="logo">
            <img src="../../assets/logo.png" alt="Logo BattleDrive Competition">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <router-link to="/">
                        Qui sommes-nous ?
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        Notre objectif
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        Nos partenaires
                    </router-link>
                </li>
            </ul>
        </div>
        <footer>
            <img src="../../assets/helmet.svg" alt="">
            <p>&copy; 2020 - Kilian Chamiot-Maitral</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped lang="scss">

    .side-bar {
        position: relative;
        background-color: $background-color;
        box-shadow: 10px -1px 25px -18px rgba(0,0,0,0.86);
        width: 300px;
        min-width: 250px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .logo {
            display: flex;
            margin: 30px 0 0 200px;

            div {
                background-color: $background-color;
                width: 6px;
                margin: 0 5px;
                box-shadow: 10px -1px 25px -18px rgba(0,0,0,0.86);
            }

            img {
                width: 300px;
                background-color: $background-color;
                padding: 10px;
                margin-right: 5px;
                height: auto;
            }
        }

        .menu {
            ul li {
                margin-top: 40px;
                font-size: 1.2em;
            }
        }

        footer {
            text-align: center;
            font-size: 0.8em;
            padding: 5px;

            img {
                width: 25px;
                height: 25px;
                margin-bottom: 5px;
            }
        }

    }

</style>