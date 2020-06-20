<template>
    <div class="menu">
        <ul>
            <li>
                <router-link :to="{ name: 'us'}">
                    Qui sommes-nous ?
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'goal'}">
                    Notre objectif
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'partners'}">
                    Nos partenaires
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped lang="scss">

    .menu {
        ul li {
            margin-top: 40px;
            font-size: 1.2em;
        }
    }

</style>