<template>
    <div class="menu">
        <ul>
            <li>
                <router-link @click.native="emitClick" :to="{ name: 'us'}">
                    Qui sommes-nous ?
                </router-link>
            </li>
            <li>
                <router-link @click.native="emitClick" :to="{ name: 'program'}">
                    Notre programme
                </router-link>
            </li>
            <li>
                <router-link @click.native="emitClick" :to="{ name: 'partners'}">
                    Nos partenaires
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            emitClick() {
                //TODO: find a way to load sass variable for window width
                if(window.innerWidth <= 1310) {
                    this.$emit('click');
                }
            }
        }
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