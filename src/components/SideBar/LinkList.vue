<template>
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
</template>

<script>
    export default {
        name: "LinkList"
    }
</script>

<style scoped lang="scss">

    .menu {
        margin-top: 150px;

        ul li {
            margin-top: 40px;
            font-size: 1.2em;
        }
    }

</style>